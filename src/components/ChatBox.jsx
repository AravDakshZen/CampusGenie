import React, { useState, useEffect, useRef } from "react";
import {
  Send,
  Mic,
  MicOff,
  Sparkles,
  Bot,
  RotateCcw,
  Compass,
} from "lucide-react";
import ChatMessage from "./ChatMessage";
import { processUserQuery } from "../data/aiAssistantEngine";
import { useApp } from "../context/AppContext";

export default function ChatBox() {
  const {
    lostFoundItems,
    demoTime,
    demoDay,
    activeChatPrompt,
    setActiveChatPrompt,
  } = useApp();

  const [messages, setMessages] = useState(() => [
    {
      id: "msg-welcome",
      sender: "ai",
      text: "Hi! 👋 I'm Campus Genie. How can I help you today?",
      time: "Just now",
      suggestions: [
        "Where is Bus 11 going?",
        "Is Revathi Ma'am available now?",
        "What's my next class?",
        "Show Lost & Found",
      ],
    },
  ]);

  const [inputValue, setInputValue] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Quick Action Buttons
  const quickActions = [
    {
      label: "Where is Bus 11 going?",
      icon: "🚌",
      prompt: "Where is Bus 11 going?",
    },
    {
      label: "Is Revathi Ma'am available now?",
      icon: "⏰",
      prompt: "Is Revathi Ma'am available now?",
    },
    {
      label: "What's my next class?",
      icon: "📚",
      prompt: "What's my next class?",
    },
    {
      label: "Show Lost & Found",
      icon: "🔎",
      prompt: "Show lost items",
    },
  ];

  // Auto-scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isThinking]);

  // Handle incoming prompt from navigation ("Ask AI" button on transport/faculty cards)
  useEffect(() => {
    if (activeChatPrompt) {
      handleSend(activeChatPrompt);
      setActiveChatPrompt("");
    }
  }, [activeChatPrompt]);

  const handleSend = (textToSend) => {
    const query = (textToSend || inputValue).trim();
    if (!query || isThinking) return;

    const userMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: query,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsThinking(true);

    // Simulate realistic AI thinking delay (600ms)
    setTimeout(() => {
      const response = processUserQuery(query, lostFoundItems, demoTime, demoDay);
      const aiMessage = {
        id: `ai-${Date.now()}`,
        sender: "ai",
        text: response.text,
        type: response.type,
        cardData: response.cardData,
        items: response.items,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsThinking(false);
    }, 600);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Mock / Web Speech Voice Recognition
  const toggleVoice = () => {
    if (
      typeof window !== "undefined" &&
      ("webkitSpeechRecognition" in window || "SpeechRecognition" in window)
    ) {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.lang = "en-IN";

      if (!isListening) {
        setIsListening(true);
        recognition.start();

        recognition.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          setInputValue(transcript);
          setIsListening(false);
          handleSend(transcript);
        };

        recognition.onerror = () => {
          setIsListening(false);
        };

        recognition.onend = () => {
          setIsListening(false);
        };
      } else {
        setIsListening(false);
        recognition.stop();
      }
    } else {
      // Fallback voice toggle simulation
      setIsListening(!isListening);
      if (!isListening) {
        setInputValue("Where is Bus 11 going?");
        setTimeout(() => {
          setIsListening(false);
        }, 1500);
      }
    }
  };

  const resetChat = () => {
    setMessages([
      {
        id: "msg-welcome-reset",
        sender: "ai",
        text: "Hi! 👋 I'm Campus Genie. How can I help you today?",
        time: "Just now",
      },
    ]);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] max-w-4xl mx-auto bg-white rounded-3xl border border-purple-100 shadow-xl shadow-purple-600/5 overflow-hidden">
      {/* Chat Area Top Status */}
      <div className="px-6 py-3 border-b border-purple-100/80 bg-[#FAF9FF] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-semibold text-slate-700">
            Campus Genie AI • Ready
          </span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-100 text-[#6D28D9] font-medium hidden sm:inline-block">
            Rajalakshmi Campus Model
          </span>
        </div>

        <button
          onClick={resetChat}
          className="flex items-center gap-1 text-xs text-slate-500 hover:text-[#6D28D9] hover:bg-purple-50 px-2.5 py-1 rounded-lg transition-colors"
          title="Reset Conversation"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>New Chat</span>
        </button>
      </div>

      {/* Message Stream */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 space-y-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}

        {/* AI Thinking Animation */}
        {isThinking && (
          <div className="flex items-center gap-3 my-4 animate-in fade-in duration-200">
            <img
              src="/logo.png"
              alt="Campus Genie"
              className="w-9 h-9 rounded-xl object-contain ring-2 ring-purple-100 shrink-0 shadow-md shadow-purple-500/20 animate-pulse bg-white"
            />
            <div className="bg-white border border-purple-100 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm flex items-center gap-2 text-xs font-medium text-purple-900">
              <Sparkles className="w-4 h-4 text-[#6D28D9] animate-pulse" />
              <span>🤖 Campus Genie is thinking...</span>
              <span className="inline-flex gap-1 ml-1">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-bounce"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-bounce [animation-delay:0.4s]"></span>
              </span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Action Suggestion Buttons */}
      <div className="px-4 sm:px-6 py-2 bg-gradient-to-b from-transparent to-[#FAF9FF] border-t border-purple-50">
        <p className="text-[11px] font-semibold text-slate-400 mb-2 flex items-center gap-1">
          <Compass className="w-3.5 h-3.5 text-[#6D28D9]" /> Quick Questions:
        </p>
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          {quickActions.map((qa, index) => (
            <button
              key={index}
              onClick={() => handleSend(qa.prompt)}
              className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-purple-200 text-slate-700 hover:text-[#6D28D9] hover:border-purple-400 hover:bg-purple-50/60 text-xs font-medium shadow-2xs transition-all hover:scale-[1.02]"
            >
              <span>{qa.icon}</span>
              <span>{qa.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Input Box Area */}
      <div className="p-3 sm:p-4 bg-white border-t border-purple-100">
        <div className="relative flex items-center rounded-2xl border-2 border-purple-200 focus-within:border-[#6D28D9] focus-within:ring-4 focus-within:ring-purple-100 transition-all bg-white shadow-sm">
          {/* Voice input button */}
          <button
            type="button"
            onClick={toggleVoice}
            className={`p-2.5 ml-1 rounded-xl transition-all ${
              isListening
                ? "bg-rose-100 text-rose-600 animate-pulse"
                : "text-slate-400 hover:text-[#6D28D9] hover:bg-purple-50"
            }`}
            title={isListening ? "Listening... Click to stop" : "Voice input"}
          >
            {isListening ? (
              <MicOff className="w-5 h-5 text-rose-600" />
            ) : (
              <Mic className="w-5 h-5" />
            )}
          </button>

          {/* Text input */}
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask anything about your campus..."
            className="flex-1 px-3 py-3 text-sm text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
            disabled={isThinking}
          />

          {/* Send Button */}
          <button
            type="button"
            onClick={() => handleSend()}
            disabled={!inputValue.trim() || isThinking}
            className="m-1.5 p-2.5 rounded-xl bg-[#6D28D9] hover:bg-[#4C1D95] text-white disabled:opacity-40 disabled:hover:bg-[#6D28D9] shadow-md shadow-purple-600/25 transition-all hover:scale-105 active:scale-95 cursor-pointer disabled:cursor-not-allowed"
            title="Send query"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2 px-1">
          <span>Campus Genie strictly verifies against Rajalakshmi local dataset.</span>
          <span className="hidden sm:inline">Press Enter to send</span>
        </div>
      </div>
    </div>
  );
}
