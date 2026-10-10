import React from "react";
import { Link } from "react-router-dom";
import {
  Bot,
  User,
  Sparkles,
  MapPin,
  Clock,
  Navigation,
  ArrowRight,
  GraduationCap,
  Calendar,
  Search,
  Check,
  Copy,
} from "lucide-react";
import StatusBadge from "./StatusBadge";

export default function ChatMessage({ message }) {
  const isAI = message.sender === "ai";
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(message.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Helper to format text with linebreaks and bolding
  const renderFormattedText = (text) => {
    if (!text) return null;
    return text.split("\n").map((line, i) => {
      // Parse markdown bold **text**
      const parts = line.split(/(\*\*.*?\*\*)/g);
      return (
        <p key={i} className={line.trim() === "" ? "h-2" : "leading-relaxed"}>
          {parts.map((part, j) => {
            if (part.startsWith("**") && part.endsWith("**")) {
              return (
                <strong key={j} className="font-bold text-slate-900">
                  {part.slice(2, -2)}
                </strong>
              );
            }
            return part;
          })}
        </p>
      );
    });
  };

  return (
    <div
      className={`flex gap-3 sm:gap-4 my-4 animate-in fade-in slide-in-from-bottom-2 duration-300 ${
        isAI ? "justify-start" : "justify-end"
      }`}
    >
      {/* AI Avatar */}
      {isAI && (
        <img
          src="/logo.png"
          alt="Campus Genie"
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl object-contain ring-2 ring-purple-100 shrink-0 shadow-md shadow-purple-500/20 mt-0.5 bg-white"
        />
      )}

      {/* Message Bubble Container */}
      <div
        className={`max-w-[88%] sm:max-w-[78%] flex flex-col ${
          isAI ? "items-start" : "items-end"
        }`}
      >
        <div className="flex items-center gap-2 mb-1 px-1 text-[11px] text-slate-400">
          <span>{isAI ? "Campus Genie" : "You"}</span>
          <span>•</span>
          <span>{message.time || "Just now"}</span>
        </div>

        <div
          className={`rounded-2xl p-4 text-sm shadow-sm transition-all ${
            isAI
              ? "bg-white border border-purple-100 text-slate-800 rounded-tl-sm"
              : "bg-[#6D28D9] text-white rounded-tr-sm shadow-purple-600/20"
          }`}
        >
          {/* Main message text */}
          <div className="space-y-1">{renderFormattedText(message.text)}</div>

          {/* Embedded Card (if AI returned structured data) */}
          {isAI && message.cardData && (
            <div className="mt-3 pt-3 border-t border-purple-100">
              {/* Transport Mini Card */}
              {message.type === "transport" && (
                <div className="bg-[#FAF9FF] p-3 rounded-xl border border-purple-100 text-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-sm">
                      Bus {message.cardData.busNumber} • {message.cardData.destination}
                    </span>
                    <StatusBadge status={message.cardData.status} size="sm" />
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-slate-600">
                    <div>
                      <span className="text-slate-400 block text-[10px]">Departs</span>
                      <span className="font-semibold text-slate-800">
                        {message.cardData.startingTime} ({message.cardData.startingPoint})
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Campus Bay</span>
                      <span className="font-semibold text-slate-800">
                        {message.cardData.campusBay}
                      </span>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-purple-100/60 flex items-center justify-between">
                    <span className="text-[10px] text-slate-400">Source: REC Transport Dept</span>
                    <Link
                      to="/transport"
                      className="text-xs font-semibold text-[#6D28D9] hover:underline flex items-center gap-1"
                    >
                      All stops in Transport <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )}

              {/* Faculty Mini Card */}
              {message.type === "faculty" && (
                <div className="bg-[#FAF9FF] p-3 rounded-xl border border-purple-100 text-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-slate-900">
                        {message.cardData.name}
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        {message.cardData.department}
                      </p>
                    </div>
                    <StatusBadge status={message.cardData.availability?.status} size="sm" />
                  </div>
                  <div className="p-2 bg-white rounded-lg border border-purple-100 flex items-center justify-between">
                    <span className="text-slate-600">
                      Cabin: <strong className="text-slate-900">{message.cardData.cabin}</strong>
                    </span>
                    <Link
                      to="/faculty"
                      className="text-[#6D28D9] font-semibold text-xs hover:underline flex items-center gap-0.5"
                    >
                      Schedule <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )}

              {/* Timetable Mini Card */}
              {message.type === "timetable" && (
                <div className="bg-[#FAF9FF] p-3 rounded-xl border border-purple-100 text-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900">
                      {message.cardData.subject}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-purple-100 text-[#6D28D9] font-bold text-[10px]">
                      {message.cardData.time}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600">
                    <span>Venue: {message.cardData.room} ({message.cardData.block})</span>
                    <span>Faculty: {message.cardData.faculty}</span>
                  </div>
                  <div className="pt-2 border-t border-purple-100/60 text-right">
                    <Link
                      to="/timetable"
                      className="text-[#6D28D9] font-semibold text-xs hover:underline inline-flex items-center gap-1"
                    >
                      Full timetable <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Copy action footer for AI messages */}
          {isAI && (
            <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
              <span>Rajalakshmi Smart Assistant</span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 text-slate-400 hover:text-slate-600 transition-colors"
                title="Copy response"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-600" />
                    <span className="text-emerald-600">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* User Avatar */}
      {!isAI && (
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center text-[#6D28D9] shrink-0 font-bold text-xs mt-0.5">
          <User className="w-5 h-5" />
        </div>
      )}
    </div>
  );
}
