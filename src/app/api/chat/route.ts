import Anthropic from '@anthropic-ai/sdk'
import { getPersonaById } from '@/lib/personas'

export const runtime = 'nodejs'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

export async function POST(request: Request) {
  try {
    const { messages, personaId, isPremium } = await request.json()

    const persona = getPersonaById(personaId)
    if (!persona) {
      return Response.json({ error: 'Invalid persona' }, { status: 400 })
    }

    if (persona.premium && !isPremium) {
      return Response.json(
        { error: 'Premium subscription required for this companion' },
        { status: 403 }
      )
    }

    const stream = client.messages.stream({
      model: 'claude-opus-4-7',
      max_tokens: 4096,
      thinking: { type: 'adaptive' },
      system: [
        {
          type: 'text',
          text: persona.systemPrompt,
          cache_control: { type: 'ephemeral' },
        },
      ],
      messages: messages.map((m: { role: string; content: string }) => ({
        role: m.role as 'user' | 'assistant',
        content: m.content,
      })),
    })

    const encoder = new TextEncoder()
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (
              event.type === 'content_block_delta' &&
              event.delta.type === 'text_delta'
            ) {
              controller.enqueue(encoder.encode(event.delta.text))
            }
          }
        } finally {
          controller.close()
        }
      },
    })

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
        'X-Content-Type-Options': 'nosniff',
      },
    })
  } catch (error) {
    console.error('Chat API error:', error)
    return Response.json({ error: 'Unable to reach spiritual companion. Please try again.' }, { status: 500 })
  }
}
