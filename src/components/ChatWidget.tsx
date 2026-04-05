import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Loader2, ChevronDown } from 'lucide-react'

type Message = {
  id: string
  role: 'user' | 'assistant'
  content: string
}

const SYSTEM_PROMPT = `Bạn là trợ lý AI thông minh, am hiểu sâu sắc về Văn Miếu – Quốc Tử Giám tại Hà Nội, Việt Nam. Bạn hỗ trợ du khách và người dùng tìm hiểu về lịch sử, kiến trúc, di tích, nhân vật lịch sử, ý nghĩa văn hóa và giá trị giáo dục của di tích này. Trả lời bằng tiếng Việt, ngắn gọn, chính xác và thân thiện. Nếu được hỏi ngoài chủ đề, hãy lịch sự hướng người dùng về chủ đề Văn Miếu – Quốc Tử Giám.`

const SUGGESTIONS = [
  'Văn Miếu được xây dựng năm nào?',
  'Bia Tiến sĩ có ý nghĩa gì?',
  'Quốc Tử Giám là gì?',
  'Các khu vực trong Văn Miếu?',
]

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const abortRef = useRef<AbortController | null>(null)

  useEffect(() => {
    if (open && messages.length === 0) {
      setShowSuggestions(true)
    }
  }, [open, messages.length])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [open])

  const sendMessage = async (text: string) => {
    const trimmed = text.trim()
    if (!trimmed || loading) return

    setShowSuggestions(false)
    setInput('')

    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: 'user',
      content: trimmed,
    }

    const updatedMessages = [...messages, userMsg]
    setMessages(updatedMessages)
    setLoading(true)

    const assistantId = crypto.randomUUID()
    setMessages((prev) => [
      ...prev,
      { id: assistantId, role: 'assistant', content: '' },
    ])

    abortRef.current = new AbortController()

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          stream: true,
          include_thoughts: false,
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...updatedMessages.map((m) => ({
              role: m.role,
              content: m.content,
            })),
          ],
        }),
        signal: abortRef.current.signal,
      })

      if (!res.ok || !res.body) {
        throw new Error(`HTTP ${res.status}`)
      }

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let buffer = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        buffer += decoder.decode(value, { stream: true })
        const lines = buffer.split('\n')
        buffer = lines.pop() ?? ''

        for (const line of lines) {
          if (!line.startsWith('data: ')) continue
          const data = line.slice(6).trim()
          if (data === '[DONE]') continue

          try {
            const json = JSON.parse(data)
            const delta = json.choices?.[0]?.delta?.content
            if (delta) {
              setMessages((prev) =>
                prev.map((m) =>
                  m.id === assistantId
                    ? { ...m, content: m.content + delta }
                    : m,
                ),
              )
            }
          } catch {
            // skip malformed chunks
          }
        }
      }
    } catch (err: unknown) {
      if (err instanceof Error && err.name === 'AbortError') return
      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantId
            ? {
                ...m,
                content:
                  'Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại sau.',
              }
            : m,
        ),
      )
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage(input)
    }
  }

  const handleClose = () => {
    abortRef.current?.abort()
    setOpen(false)
  }

  return (
    <>
      {/* Chat Panel */}
      <div
        className={`fixed bottom-20 right-4 z-50 flex w-[calc(100vw-2rem)] max-w-[400px] flex-col overflow-hidden rounded-2xl border border-[#e4d2b3] bg-[#fdfaf3] shadow-2xl transition-all duration-300 sm:right-6 ${
          open
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-4 opacity-0'
        }`}
        style={{ height: open ? '520px' : '0' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#e4d2b3] bg-[#6d4b1f] px-4 py-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
              <MessageCircle className="h-4 w-4 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Hỏi đáp di tích</p>
              <p className="text-xs text-white/70">Văn Miếu – Quốc Tử Giám</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="flex h-7 w-7 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/15 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full gap-2 pb-4 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6d4b1f]/10">
                <MessageCircle className="h-5 w-5 text-[#6d4b1f]" />
              </div>
              <p className="text-sm font-medium text-[#3d2b0f]">
                Xin chào! Tôi có thể giúp gì cho bạn?
              </p>
              <p className="text-xs text-[#9c7a52]">
                Hỏi tôi về lịch sử, kiến trúc và văn hóa Văn Miếu – Quốc Tử Giám.
              </p>
            </div>
          )}

          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'rounded-br-sm bg-[#6d4b1f] text-white'
                    : 'rounded-bl-sm border border-[#e4d2b3] bg-white text-[#3d2b0f]'
                }`}
              >
                {msg.content || (
                  <span className="inline-flex items-center gap-1 text-[#9c7a52]">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#9c7a52] [animation-delay:0ms]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#9c7a52] [animation-delay:150ms]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#9c7a52] [animation-delay:300ms]" />
                  </span>
                )}
              </div>
            </div>
          ))}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggestions */}
        {showSuggestions && messages.length === 0 && (
          <div className="border-t border-[#e4d2b3] bg-[#faf6ee] px-3 py-2">
            <div className="flex flex-wrap gap-1.5">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => sendMessage(s)}
                  className="rounded-full border border-[#d4b896] bg-white px-3 py-1 text-xs text-[#6d4b1f] transition-colors hover:bg-[#6d4b1f] hover:text-white hover:border-[#6d4b1f]"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="border-t border-[#e4d2b3] bg-white px-3 py-2.5">
          <div className="flex items-end gap-2">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Nhập câu hỏi của bạn..."
              rows={1}
              disabled={loading}
              className="flex-1 resize-none rounded-xl border border-[#dfdacc] bg-[#fdfaf3] px-3 py-2 text-sm text-[#3d2b0f] placeholder-[#b8a88a] outline-none transition-colors focus:border-[#6d4b1f] focus:ring-1 focus:ring-[#6d4b1f]/20 disabled:opacity-60"
              style={{ maxHeight: '80px' }}
              onInput={(e) => {
                const el = e.currentTarget
                el.style.height = 'auto'
                el.style.height = Math.min(el.scrollHeight, 80) + 'px'
              }}
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={!input.trim() || loading}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#6d4b1f] text-white transition-all hover:bg-[#5a3c18] disabled:cursor-not-allowed disabled:opacity-40"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </button>
          </div>
          <p className="mt-1.5 text-center text-[10px] text-[#c4a882]">
            Nhấn Enter để gửi · Shift+Enter xuống dòng
          </p>
        </div>
      </div>

      {/* Scroll-down hint when chat is open on mobile */}
      <div
        className={`fixed bottom-20 left-1/2 z-40 -translate-x-1/2 transition-opacity duration-300 sm:hidden ${open ? 'opacity-0 pointer-events-none' : 'opacity-0 pointer-events-none'}`}
      >
        <ChevronDown className="h-4 w-4 text-[#6d4b1f]" />
      </div>

      {/* Floating Toggle Button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Đóng hỏi đáp' : 'Mở hỏi đáp'}
        className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#6d4b1f] text-white shadow-lg transition-all duration-300 hover:bg-[#5a3c18] hover:shadow-xl active:scale-95 sm:right-6 sm:bottom-6"
      >
        <div
          className={`absolute transition-all duration-300 ${open ? 'rotate-90 opacity-100 scale-100' : 'rotate-0 opacity-0 scale-75'}`}
        >
          <X className="h-5 w-5" />
        </div>
        <div
          className={`absolute transition-all duration-300 ${open ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`}
        >
          <MessageCircle className="h-5 w-5" />
        </div>
      </button>
    </>
  )
}
