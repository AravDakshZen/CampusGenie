import React, { useState } from "react";
import {
  CalendarDays,
  Clock,
  MapPin,
  Sparkles,
  BookOpen,
  Calendar,
  ExternalLink,
  PauseCircle,
  PlayCircle,
  AlertCircle,
  Lock,
  Unlock,
} from "lucide-react";
import {
  weeklyTimetable,
  getNextClass,
  studentInfo,
} from "../data/timetableData";
import TimetableCard, {
  NextClassHighlightCard,
} from "../components/TimetableCard";
import { useApp } from "../context/AppContext";

export default function Timetable() {
  const {
    demoTime,
    demoDay,
    timetableHolds,
    toggleTimetableHold,
    isTimetableClockLocked,
    toggleTimetableClockLock,
  } = useApp();
  const [selectedDay, setSelectedDay] = useState(demoDay || "Monday");

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  // Find next class respecting timetable holds
  const nextClass = getNextClass(selectedDay, demoTime, timetableHolds);
  const classesForDay = weeklyTimetable[selectedDay] || [];
  const heldCountForDay = classesForDay.filter((c) => timetableHolds.includes(c.id)).length;

  return (
    <div className="p-4 sm:p-6 max-w-6xl mx-auto space-y-6">
      {/* Student Academic Info Banner */}
      <div className="bg-white rounded-3xl border border-purple-100 p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-purple-100 text-[#6D28D9] flex items-center justify-center font-bold">
            <CalendarDays className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                My Class Timetable
              </h1>
              <span className="px-2 py-0.5 rounded-full bg-purple-100 text-[#6D28D9] text-xs font-bold">
                {studentInfo.year} • Sec {studentInfo.section}
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              {studentInfo.department} • Academic Year {studentInfo.academicYear}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Timetable Clock & Freeze/Hold Toggle */}
          <div className="flex items-center gap-3 text-xs bg-purple-50/70 p-2.5 px-3 rounded-2xl border border-purple-100">
            <Clock className="w-4 h-4 text-[#6D28D9]" />
            <div>
              <span className="text-slate-500 block text-[11px]">Academic Clock</span>
              <span className="font-bold text-slate-800 font-mono">
                {selectedDay} • {demoTime === "14:30" ? "2:30 PM" : demoTime}
              </span>
            </div>
            <button
              onClick={toggleTimetableClockLock}
              className={`ml-2 p-1.5 rounded-xl border text-[11px] font-bold flex items-center gap-1 transition-all ${
                isTimetableClockLocked
                  ? "bg-amber-100 text-amber-900 border-amber-300"
                  : "bg-white text-slate-600 border-purple-200 hover:bg-purple-100"
              }`}
              title={isTimetableClockLocked ? "Clock is on HOLD (Frozen)" : "Click to hold/freeze timetable clock"}
            >
              {isTimetableClockLocked ? (
                <>
                  <Lock className="w-3.5 h-3.5 text-amber-700" />
                  <span>Clock Held</span>
                </>
              ) : (
                <>
                  <Unlock className="w-3.5 h-3.5 text-purple-600" />
                  <span>Hold Clock</span>
                </>
              )}
            </button>
          </div>

          <a
            href="https://rajalakshmi.digiicampus.com/calendar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-3 rounded-2xl bg-purple-50 hover:bg-purple-100 text-[#6D28D9] font-bold text-xs border border-purple-200 transition-all shadow-2xs"
            title="Official Rajalakshmi ERP Calendar"
          >
            <span>DigiiCampus Calendar</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Held Notification Banner if any class on hold */}
      {heldCountForDay > 0 && (
        <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-2xl flex items-center justify-between text-xs text-amber-900 animate-in fade-in duration-200">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              <strong>Timetable Notice:</strong> {heldCountForDay} period{heldCountForDay > 1 ? "s are" : " is"} currently on <strong>HOLD / Suspended</strong> on {selectedDay}. Next class highlight automatically adjusts.
            </span>
          </div>
          <span className="font-semibold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
            {heldCountForDay} Held
          </span>
        </div>
      )}

      {/* Required Highlighted Next Upcoming Class Card */}
      <NextClassHighlightCard nextClass={nextClass} />

      {/* Day Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar border-b border-purple-100">
        {days.map((day) => {
          const isSelected = selectedDay === day;
          const dayHolds = (weeklyTimetable[day] || []).filter((c) => timetableHolds.includes(c.id)).length;

          return (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-xs transition-all whitespace-nowrap cursor-pointer ${
                isSelected
                  ? "bg-[#6D28D9] text-white shadow-md shadow-purple-600/20 scale-[1.02]"
                  : "bg-white text-slate-600 border border-purple-100 hover:bg-purple-50 hover:text-[#6D28D9]"
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{day}</span>
              {day === demoDay && (
                <span
                  className={`text-[9px] px-1.5 py-0.2 rounded-full font-bold uppercase ${
                    isSelected ? "bg-white/20 text-white" : "bg-purple-100 text-[#6D28D9]"
                  }`}
                >
                  Today
                </span>
              )}
              {dayHolds > 0 && (
                <span
                  className={`text-[9px] px-1.5 py-0.2 rounded-full font-bold uppercase ${
                    isSelected ? "bg-amber-400 text-amber-950" : "bg-amber-100 text-amber-800"
                  }`}
                >
                  {dayHolds} Held
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Class Schedule List for Selected Day */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-400 px-1">
          <span>
            Schedule for {selectedDay} ({classesForDay.filter((c) => c.type !== "Break").length} Lectures / Labs)
          </span>
          <span className="flex items-center gap-1.5">
            <span>Click &apos;Put on Hold&apos; to simulate suspended periods</span>
          </span>
        </div>

        {classesForDay.map((item) => (
          <TimetableCard
            key={item.id}
            item={item}
            isNext={nextClass && nextClass.id === item.id}
            isHeld={timetableHolds.includes(item.id)}
            onToggleHold={toggleTimetableHold}
          />
        ))}
      </div>
    </div>
  );
}
