import { useEffect, useRef, useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { getBotReply } from '../../lib/chatbotData';

interface Message {
  sender: 'bot' | 'user';
  text: string;
}

const INITIAL_MESSAGE: Message = {
  sender: 'bot',
  text: "Hi! I'm the Nexply assistant. Ask me about our services, pricing, or how to get started - or call us on +91 78422 03319 / +91 89790 41280 anytime.",
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { sender: 'user', text: trimmed }]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const reply = getBotReply(trimmed);
      setMessages((prev) => [...prev, { sender: 'bot', text: reply }]);
      setIsTyping(false);
    }, 550);
  };

  return (
    <>
      {/* Floating toggle button - true frosted glass: heavy blur + color
          saturation boost (the "vibrancy" look), not just a translucent fill */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-105"
        style={{
          border: '1px solid rgba(255,255,255,0.3)',
          background: 'linear-gradient(135deg, rgba(124,108,255,0.22) 0%, rgba(255,255,255,0.08) 100%)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.35), inset 0 -1px 8px rgba(124,108,255,0.15), 0 8px 28px rgba(0,0,0,0.4)',
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X size={22} color="rgba(255,255,255,0.9)" />
            </motion.span>
          ) : (
            <motion.span key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <MessageCircle size={22} color="rgba(255,255,255,0.9)" />
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed bottom-24 right-6 z-50 flex flex-col overflow-hidden"
            style={{
              width: 'min(360px, calc(100vw - 48px))',
              height: 'min(520px, calc(100vh - 140px))',
              borderRadius: 28,
              border: '1px solid rgba(255,255,255,0.22)',
              background: 'rgba(13,14,31,0.5)',
              backdropFilter: 'blur(28px) saturate(180%)',
              WebkitBackdropFilter: 'blur(28px) saturate(180%)',
              boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.15), 0 20px 60px rgba(0,0,0,0.55)',
            }}
          >
            {/* Soft colored glow, sitting under the blur - the thing that
                sells "frosted glass" rather than just "translucent panel" */}
            <div
              className="pointer-events-none absolute -top-16 -right-10 rounded-full"
              style={{ width: 220, height: 220, background: 'rgba(124,108,255,0.35)', filter: 'blur(60px)' }}
            />
            <div
              className="pointer-events-none absolute -bottom-20 -left-10 rounded-full"
              style={{ width: 200, height: 200, background: 'rgba(254,136,27,0.16)', filter: 'blur(60px)' }}
            />

            {/* Sheen - sells the glass read */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 45%)' }}
            />

            {/* Header */}
            <div
              className="relative flex items-center gap-3 px-5 py-4 shrink-0"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.12)' }}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                style={{
                  border: '1px solid rgba(255,255,255,0.25)',
                  background: 'linear-gradient(135deg, rgba(124,108,255,0.25) 0%, rgba(255,255,255,0.08) 100%)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                }}
              >
                <MessageCircle size={16} color="rgba(255,255,255,0.9)" />
              </div>
              <div>
                <p className="text-white text-sm font-medium">Nexply Assistant</p>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  Usually replies instantly
                </p>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="relative flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.sender === 'user' ? 'self-end' : 'self-start'
                  }`}
                  style={
                    msg.sender === 'user'
                      ? {
                          border: '1px solid rgba(124,108,255,0.4)',
                          background: 'rgba(124,108,255,0.22)',
                          backdropFilter: 'blur(12px) saturate(160%)',
                          WebkitBackdropFilter: 'blur(12px) saturate(160%)',
                          color: 'rgba(255,255,255,0.97)',
                        }
                      : {
                          border: '1px solid rgba(255,255,255,0.16)',
                          background: 'rgba(255,255,255,0.08)',
                          backdropFilter: 'blur(12px) saturate(160%)',
                          WebkitBackdropFilter: 'blur(12px) saturate(160%)',
                          color: 'rgba(255,255,255,0.9)',
                        }
                  }
                >
                  {msg.text}
                </div>
              ))}
              {isTyping && (
                <div
                  className="self-start rounded-2xl px-4 py-2.5 text-sm"
                  style={{
                    border: '1px solid rgba(255,255,255,0.16)',
                    background: 'rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(12px) saturate(160%)',
                    WebkitBackdropFilter: 'blur(12px) saturate(160%)',
                    color: 'rgba(255,255,255,0.55)',
                  }}
                >
                  Typing...
                </div>
              )}
            </div>

            {/* Input */}
            <div className="relative flex items-center gap-2 px-4 py-3 shrink-0" style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSend();
                }}
                placeholder="Ask a question..."
                className="flex-1 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-white/30"
                style={{
                  border: '1px solid rgba(255,255,255,0.18)',
                  background: 'rgba(255,255,255,0.06)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                }}
              />
              <button
                onClick={handleSend}
                aria-label="Send"
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors hover:bg-white/[0.14]"
                style={{
                  border: '1px solid rgba(255,255,255,0.22)',
                  background: 'linear-gradient(135deg, rgba(124,108,255,0.25) 0%, rgba(255,255,255,0.08) 100%)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                }}
              >
                <Send size={16} color="rgba(255,255,255,0.9)" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
