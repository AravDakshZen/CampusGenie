import React from "react";
import ChatBox from "../components/ChatBox";
import { Sparkles, Bot } from "lucide-react";

export default function AIAssistant() {
  return (
    <div className="p-4 sm:p-6 max-w-5xl mx-auto space-y-4">
      {/* Header Required by Specification */}
      <div className="text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-purple-100">
        <div>
          <div className="flex items-center gap-2.5 justify-center sm:justify-start">
            <img
              src="/logo.png"
              alt="Campus Genie"
              className="w-8 h-8 rounded-lg object-contain ring-1 ring-purple-200 bg-white"
            />
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Campus Genie
            </h1>
            <span className="px-2 py-0.5 rounded-full bg-purple-100 text-[#6D28D9] text-xs font-bold">
              AI Assistant
            </span>
          </div>
          <p className="text-xs sm:text-sm text-purple-700 font-medium mt-0.5">
            Your AI-powered Rajalakshmi campus assistant
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs bg-purple-50 px-3 py-1.5 rounded-xl border border-purple-200/60 text-purple-900">
          <Sparkles className="w-3.5 h-3.5 text-[#6D28D9]" />
          <span>Powered by Rajalakshmi Local Campus Data</span>
        </div>
      </div>

      {/* Main Chat Interface */}
      <ChatBox />
    </div>
  );
}
