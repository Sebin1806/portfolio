import React, { useState, useRef, useEffect } from 'react';
import { Bot, Minimize2, Send, Sparkles, User } from 'lucide-react';
import { SUGGESTED_PROMPTS, generateAIResponse } from '../../data/aiKnowledgeBase';
import type { ChatMessage } from '../../data/aiKnowledgeBase';

export const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: "👋 Hi! I'm **Sebin AI**, virtual assistant for Sebin S. Ask me anything about Sebin's RAG projects, Multi-Agent CrewAI systems, skills, or hiring status!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    // Simulate AI thinking & streaming response
    setTimeout(() => {
      const aiReplyText = generateAIResponse(text);
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: aiReplyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* Floating Launcher Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="relative group flex items-center gap-3 px-4 py-3 rounded-full bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#22D3EE] text-white shadow-2xl shadow-blue-500/40 hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <div className="flex items-center gap-2">
            <Bot className="w-5 h-5" />
            <span className="text-xs font-bold font-mono tracking-wide">Ask Sebin AI</span>
          </div>
        </button>
      )}

      {/* Expanded Chat Box */}
      {isOpen && (
        <div className="w-[90vw] sm:w-[380px] h-[520px] bg-[#0F172A] border border-white/10 rounded-3xl shadow-2xl glass-panel flex flex-col overflow-hidden animate-fadeIn">
          
          {/* Header */}
          <div className="p-4 border-b border-white/10 bg-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] text-white">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span>Sebin AI Assistant</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#22D3EE]" />
                </h4>
                <span className="text-[10px] font-mono text-emerald-400">● Online & Trained</span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <Minimize2 className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Window */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-7 h-7 rounded-xl bg-[#3B82F6]/20 border border-[#3B82F6]/40 text-[#60A5FA] flex items-center justify-center shrink-0 mt-1">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[82%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white rounded-br-none shadow-md'
                      : 'bg-white/5 border border-white/10 text-slate-200 rounded-bl-none'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                  <span className="text-[9px] font-mono text-slate-400 block text-right mt-1 opacity-70">
                    {msg.timestamp}
                  </span>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-xl bg-white/10 text-slate-200 flex items-center justify-center shrink-0 mt-1">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                <Bot className="w-4 h-4 text-[#22D3EE] animate-spin" />
                <span>Sebin AI is processing...</span>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Suggested Prompt Chips */}
          <div className="p-2 border-t border-white/5 bg-black/20 flex flex-wrap gap-1.5 overflow-x-auto">
            {SUGGESTED_PROMPTS.slice(0, 3).map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleSend(prompt)}
                className="px-2.5 py-1 rounded-lg text-[10px] bg-white/5 hover:bg-[#3B82F6]/20 text-slate-300 border border-white/5 hover:border-[#3B82F6]/30 transition-all text-left truncate max-w-[200px] cursor-pointer"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 border-t border-white/10 bg-white/5 flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask Sebin AI..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent text-xs text-white placeholder-slate-400 focus:outline-none"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white disabled:opacity-40 transition-all cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>
      )}

    </div>
  );
};
