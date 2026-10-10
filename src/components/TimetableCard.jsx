import React from "react";
import { Clock, MapPin, User, BookOpen, Sparkles, AlertTriangle, PlayCircle, PauseCircle } from "lucide-react";

export function NextClassHighlightCard({ nextClass, isHeld = false, holdReason = "" }) {
  if (!nextClass) return null;

  return (
    <div className={`relative overflow-hidden rounded-2xl p-6 text-white shadow-lg mb-6 transition-all ${
      isHeld
        ? "bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 shadow-amber-600/25"
        : "bg-gradient-to-r from-[#4C1D95] via-[#6D28D9] to-[#7C3AED] shadow-purple-600/25"
    }`}>
      {/* Background ambient pattern */}
      <div className="absolute -right-8 -top-8 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute right-6 bottom-4 opacity-10 pointer-events-none">
        <Sparkles className="w-24 h-24 text-white" />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          {isHeld ? (
            <span className="px-2.5 py-1 rounded-full bg-white/25 backdrop-blur-md text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 border border-white/30 text-amber-100">
              <span className="w-2 h-2 rounded-full bg-amber-300 animate-pulse"></span>
              ⏸️ Period On Hold
            </span>
          ) : (
            <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 border border-white/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              📚 Next Active Class
            </span>
          )}
          <span className="text-xs text-white/80 font-medium">
            {isHeld ? "Class postponed or suspended" : "Starting soon"}
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-3">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {nextClass.subject}
            </h2>
            <p className="text-sm text-white/80 mt-1 flex items-center gap-2">
              <span>Course Code: {nextClass.code}</span>
              <span>•</span>
              <span>{nextClass.type}</span>
              {isHeld && holdReason && (
                <>
                  <span>•</span>
                  <span className="bg-white/20 px-2 py-0.5 rounded text-xs font-semibold">
                    Reason: {holdReason}
                  </span>
                </>
              )}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="bg-white/15 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
              <span className="text-[11px] text-white/80 uppercase block font-semibold">
                Class Time
              </span>
              <span className="text-base font-bold font-mono">
                {nextClass.time}
              </span>
            </div>

            <div className="bg-white/15 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
              <span className="text-[11px] text-white/80 uppercase block font-semibold">
                Venue
              </span>
              <span className="text-base font-bold">
                {nextClass.room}
              </span>
            </div>

            <div className="bg-white/15 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
              <span className="text-[11px] text-white/80 uppercase block font-semibold">
                Faculty
              </span>
              <span className="text-base font-bold truncate max-w-[140px]">
                {nextClass.faculty}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TimetableCard({ item, isNext = false, isHeld = false, onToggleHold }) {
  const isBreak = item.type === "Break";

  if (isBreak) {
    return (
      <div className="bg-amber-50/70 border border-dashed border-amber-200 rounded-xl p-3.5 flex items-center justify-between text-xs text-amber-800">
        <div className="flex items-center gap-2">
          <span className="text-base">🍱</span>
          <span className="font-bold">{item.subject}</span>
          <span className="text-amber-600 font-mono">({item.time})</span>
        </div>
        <span className="text-amber-700">{item.room}</span>
      </div>
    );
  }

  return (
    <div
      className={`rounded-xl border transition-all p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
        isHeld
          ? "bg-amber-50/60 border-amber-300 ring-1 ring-amber-200"
          : isNext
          ? "border-[#6D28D9] ring-2 ring-purple-100 shadow-md bg-purple-50/30"
          : "bg-white border-purple-100 hover:border-purple-300 hover:shadow-sm"
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`w-12 h-12 rounded-xl flex flex-col items-center justify-center shrink-0 font-mono ${
            isHeld
              ? "bg-amber-100 text-amber-800 border border-amber-200"
              : isNext
              ? "bg-[#6D28D9] text-white shadow-sm"
              : "bg-purple-100/70 text-[#6D28D9]"
          }`}
        >
          {isHeld ? (
            <PauseCircle className="w-5 h-5 text-amber-700" />
          ) : (
            <>
              <Clock className="w-4 h-4 mb-0.5" />
              <span className="text-[10px] font-bold leading-none">
                {item.startTime}
              </span>
            </>
          )}
        </div>

        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold text-purple-700">
              {item.code}
            </span>
            <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-100 text-slate-600 font-medium">
              {item.type}
            </span>
            {isHeld ? (
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500 text-white font-bold flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" /> ON HOLD
              </span>
            ) : isNext ? (
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-600 text-white font-bold">
                Upcoming Next
              </span>
            ) : null}
          </div>

          <h4 className={`font-bold text-base mt-0.5 ${isHeld ? "text-slate-700 line-through decoration-amber-500" : "text-slate-900"}`}>
            {item.subject}
          </h4>

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mt-1">
            <span className="flex items-center gap-1 text-slate-700 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#6D28D9]" />
              {item.room} ({item.block})
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-slate-400" />
              {item.faculty}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between sm:justify-end gap-3 sm:border-l sm:border-purple-100 sm:pl-4 shrink-0">
        <div className="text-left sm:text-right">
          <span className="text-xs text-slate-400 block">Duration</span>
          <span className="text-xs font-semibold text-slate-700 font-mono">
            {item.time}
          </span>
        </div>

        {/* Hold Toggle Button */}
        {onToggleHold && (
          <button
            onClick={() => onToggleHold(item.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1 cursor-pointer ${
              isHeld
                ? "bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300"
                : "bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200"
            }`}
            title={isHeld ? "Click to resume class" : "Click to put period on hold"}
          >
            {isHeld ? (
              <>
                <PlayCircle className="w-3.5 h-3.5 text-amber-800" />
                <span>Resume</span>
              </>
            ) : (
              <>
                <PauseCircle className="w-3.5 h-3.5 text-purple-700" />
                <span>Put on Hold</span>
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
