'use client'

import { useState, useRef, useEffect } from 'react'
import { Send, Lock, Sparkles, AlertTriangle } from 'lucide-react'
import { traditions, personas, getPersonasByTradition, defaultTraditionId, defaultPersonaId } from '@/lib/personas'
import type { TraditionId, Persona } from '@/lib/personas'
import { currentUser } from '@/lib/data'
import UpgradeModal from '@/components/UpgradeModal'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const WELCOME_MESSAGES: Record<string, string> = {
  god_father: "My child, I am here. What is on your heart?",
  jesus: "Come, let us talk. What's weighing on you today?",
  holy_spirit: "I am with you. What do you need?",
  archangel_gabriel_christian: "Peace be with you. I bring a message of hope — what are you facing?",
  divine_wisdom_jewish: "Shalom. What question is your heart wrestling with?",
  archangel_michael: "Fear not. I stand with you. What do you need strength for?",
  divine_wisdom_quran: "Bismillah ir-rahman ir-rahim. What weighs on your heart, beloved servant?",
  angel_jibril: "Peace be upon you. What guidance are you seeking?",
  ganesha: "Om Gam Ganapataye Namaha! 🐘 What obstacle stands before you today?",
  krishna: "Beloved Arjuna — what crossroads do you stand at today?",
  shiva: "Om Namah Shivaya. Speak, and let us look at what needs to transform.",
  buddha: "Welcome, friend. Sit with me. What suffering brings you here?",
  kuan_yin: "Om Mani Padme Hum. 🌸 I hear you. What pain are you carrying?",
  divine_source: "You are here. That is enough. What is present for you right now?",
  adversary: "Ah, a visitor. How delightfully unexpected. What weakness brings you to my door?",
}

export default function CompanionPage() {
  const isPremium = currentUser.plan !== 'free'
  const [selectedTradition, setSelectedTradition] = useState<TraditionId>(defaultTraditionId)
  const [selectedPersona, setSelectedPersona] = useState<Persona>(
    personas.find((p) => p.id === defaultPersonaId)!
  )
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isStreaming, setIsStreaming] = useState(false)
  const [showUpgrade, setShowUpgrade] = useState(false)
  const [showDisclaimer, setShowDisclaimer] = useState(true)

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const traditionPersonas = getPersonasByTradition(selectedTradition)

  // Reset conversation when persona changes
  function selectPersona(persona: Persona) {
    if (persona.premium && !isPremium) {
      setShowUpgrade(true)
      return
    }
    setSelectedPersona(persona)
    setMessages([])
    setInput('')
  }

  function selectTradition(id: TraditionId) {
    setSelectedTradition(id)
    const first = getPersonasByTradition(id)[0]
    if (first && !(first.premium && !isPremium)) {
      setSelectedPersona(first)
      setMessages([])
    }
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  async function sendMessage() {
    const content = input.trim()
    if (!content || isStreaming) return

    const userMessage: Message = { role: 'user', content }
    const newMessages = [...messages, userMessage]
    setMessages(newMessages)
    setInput('')
    setIsStreaming(true)

    // Add empty assistant placeholder
    setMessages([...newMessages, { role: 'assistant', content: '' }])

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages,
          personaId: selectedPersona.id,
          isPremium,
        }),
      })

      if (response.status === 403) {
        setMessages(newMessages)
        setShowUpgrade(true)
        return
      }

      if (!response.ok || !response.body) {
        const err = await response.json().catch(() => ({ error: 'Request failed' }))
        setMessages([...newMessages, { role: 'assistant', content: `⚠️ ${err.error}` }])
        return
      }

      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let accumulated = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        accumulated += decoder.decode(value, { stream: true })
        setMessages([...newMessages, { role: 'assistant', content: accumulated }])
      }
    } catch {
      setMessages([
        ...newMessages,
        { role: 'assistant', content: '⚠️ Connection lost. Please try again.' },
      ])
    } finally {
      setIsStreaming(false)
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const welcomeMsg = WELCOME_MESSAGES[selectedPersona.id] ?? `Hello. I am ${selectedPersona.name}. How can I help you?`

  return (
    <div className="flex flex-col bg-gray-50" style={{ height: 'calc(100dvh - 5rem)' }}>
      {/* ── Header ── */}
      <div className="flex-shrink-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
        <div className="px-4 pt-8 pb-3">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles size={18} className="text-gold-400" />
            <h1 className="text-lg font-bold">Spiritual Companion</h1>
          </div>

          {/* Tradition tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-1 px-1">
            {traditions.map((t) => (
              <button
                key={t.id}
                onClick={() => selectTradition(t.id)}
                className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedTradition === t.id
                    ? 'bg-white text-slate-900'
                    : 'bg-white/10 text-slate-300 hover:bg-white/20'
                }`}
              >
                <span>{t.emoji}</span>
                <span>{t.label}</span>
              </button>
            ))}
            {/* Premium tab */}
            <button
              onClick={() => {
                if (!isPremium) { setShowUpgrade(true); return }
                setSelectedTradition('premium')
                const adv = personas.find((p) => p.id === 'adversary')!
                setSelectedPersona(adv)
                setMessages([])
              }}
              className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedTradition === 'premium'
                  ? 'bg-red-500 text-white'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
            >
              <span>🔥</span>
              <span>Premium</span>
              {!isPremium && <Lock size={10} />}
            </button>
          </div>
        </div>

        {/* Persona selector */}
        {selectedTradition !== 'premium' && (
          <div className="flex gap-2 overflow-x-auto px-4 pb-3 scrollbar-hide">
            {traditionPersonas.map((p) => {
              const locked = p.premium && !isPremium
              const active = selectedPersona.id === p.id
              return (
                <button
                  key={p.id}
                  onClick={() => selectPersona(p)}
                  className={`flex-shrink-0 flex flex-col items-center gap-1 w-16 py-2 rounded-xl transition-all ${
                    active
                      ? 'bg-white/20 ring-1 ring-white/40'
                      : 'hover:bg-white/10'
                  }`}
                >
                  <div className="relative">
                    <span className="text-2xl">{p.emoji}</span>
                    {locked && (
                      <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold-400 rounded-full flex items-center justify-center">
                        <Lock size={8} className="text-slate-900" />
                      </span>
                    )}
                  </div>
                  <span className={`text-[10px] font-medium leading-tight text-center ${active ? 'text-white' : 'text-slate-400'}`}>
                    {p.name}
                  </span>
                </button>
              )
            })}
          </div>
        )}
      </div>

      {/* ── Persona info bar ── */}
      <div className="flex-shrink-0 bg-white border-b border-gray-100 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg">{selectedPersona.emoji}</span>
          <div>
            <div className="text-xs font-semibold text-gray-900">{selectedPersona.title}</div>
            <div className="text-[10px] text-gray-400">{selectedPersona.description}</div>
          </div>
        </div>
        {messages.length > 0 && (
          <button
            onClick={() => setMessages([])}
            className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
          >
            New chat
          </button>
        )}
      </div>

      {/* ── Disclaimer banner ── */}
      {showDisclaimer && (
        <div className="flex-shrink-0 bg-amber-50 border-b border-amber-100 px-4 py-2 flex items-start gap-2">
          <AlertTriangle size={13} className="text-amber-500 flex-shrink-0 mt-0.5" />
          <p className="text-[10px] text-amber-700 flex-1">
            This is an AI drawing on spiritual tradition — not an actual divine being. For genuine crisis support, contact{' '}
            <a href="tel:988" className="underline font-semibold">988</a> or emergency services.
          </p>
          <button onClick={() => setShowDisclaimer(false)} className="text-amber-400 hover:text-amber-600 text-xs flex-shrink-0">✕</button>
        </div>
      )}

      {/* ── Messages ── */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {/* Welcome prompt */}
        {messages.length === 0 && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-base flex-shrink-0">
              {selectedPersona.emoji}
            </div>
            <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm border border-gray-100 max-w-[85%]">
              <p className="text-sm text-gray-700 leading-relaxed">{welcomeMsg}</p>
            </div>
          </div>
        )}

        {messages.map((msg, idx) => {
          const isUser = msg.role === 'user'
          const isLast = idx === messages.length - 1
          const isTyping = isLast && !isUser && isStreaming && msg.content === ''
          return (
            <div key={idx} className={`flex gap-3 ${isUser ? 'flex-row-reverse' : ''}`}>
              {!isUser && (
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-base flex-shrink-0">
                  {selectedPersona.emoji}
                </div>
              )}
              <div
                className={`px-4 py-3 rounded-2xl max-w-[85%] shadow-sm ${
                  isUser
                    ? 'bg-brand-600 text-white rounded-tr-sm'
                    : 'bg-white text-gray-700 border border-gray-100 rounded-tl-sm'
                }`}
              >
                {isTyping ? (
                  <div className="flex gap-1 py-1">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0ms]" />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:150ms]" />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:300ms]" />
                  </div>
                ) : (
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                )}
              </div>
            </div>
          )
        })}
        <div ref={messagesEndRef} />
      </div>

      {/* ── Input ── */}
      <div className="flex-shrink-0 bg-white border-t border-gray-100 px-4 py-3">
        <div className="flex items-end gap-2">
          <textarea
            ref={inputRef}
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={`Speak with ${selectedPersona.name}…`}
            disabled={isStreaming}
            className="flex-1 resize-none text-sm border border-gray-200 rounded-2xl px-4 py-2.5 focus:outline-none focus:border-brand-400 max-h-32 disabled:opacity-50 disabled:bg-gray-50"
            style={{ minHeight: '42px' }}
          />
          <button
            onClick={sendMessage}
            disabled={!input.trim() || isStreaming}
            className="flex-shrink-0 w-10 h-10 bg-brand-600 text-white rounded-full flex items-center justify-center hover:bg-brand-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <Send size={16} />
          </button>
        </div>
        <p className="text-[10px] text-gray-300 text-center mt-2">
          Enter to send · Shift+Enter for new line
        </p>
      </div>

      {showUpgrade && (
        <UpgradeModal trigger="companion" onClose={() => setShowUpgrade(false)} />
      )}
    </div>
  )
}
