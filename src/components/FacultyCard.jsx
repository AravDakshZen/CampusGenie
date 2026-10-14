import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  GraduationCap,
  MapPin,
  Clock,
  Mail,
  Phone,
  Bell,
  Sparkles,
  BookOpen,
  Calendar,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  XCircle,
  MessageSquare,
  Send,
} from "lucide-react";
import StatusBadge from "./StatusBadge";
import { getFacultyAvailability } from "../data/facultyData";
import { useApp } from "../context/AppContext";

export default function FacultyCard({ faculty, onInquire }) {
  const {
    demoTime,
    demoDay,
    facultyAlerts,
    toggleFacultyAlert,
    setActiveChatPrompt,
    facultyInquiries,
  } = useApp();
  const navigate = useNavigate();
  const [showSchedule, setShowSchedule] = useState(false);

  // Calculated availability from schedule, demo time, and database status override
  const statusOverride = faculty.status && faculty.status !== "Auto" ? faculty.status : null;
  const availability = getFacultyAvailability(faculty, demoTime, demoDay, statusOverride);
  const isSubscribed = facultyAlerts.includes(faculty.id);

  // Find recent inquiry for this faculty
  const latestInquiry = facultyInquiries?.find((inq) => inq.faculty_id === faculty.id);

  const handleAskAI = () => {
    setActiveChatPrompt(`Is ${faculty.shortName} available now?`);
    navigate("/assistant");
  };

  return (
    <div className="bg-white rounded-2xl border border-purple-100 p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
      <div>
        {/* Top: Avatar, Name & Status */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={faculty.avatar}
                alt={faculty.name}
                className="w-13 h-13 rounded-2xl object-cover ring-2 ring-purple-100 group-hover:ring-[#6D28D9]/40 transition-all"
              />
              <span
                className={`absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full ring-2 ring-white ${
                  availability.status === "Available Now"
                    ? "bg-emerald-500 animate-pulse"
                    : availability.status === "Currently Unavailable"
                    ? "bg-rose-500"
                    : "bg-slate-400"
                }`}
              />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#6D28D9] bg-purple-50 px-2 py-0.5 rounded">
                {faculty.deptCode}
              </span>
              <h3 className="font-bold text-slate-900 text-base group-hover:text-[#6D28D9] transition-colors mt-0.5 leading-snug">
                {faculty.name}
              </h3>
              <p className="text-xs text-slate-500">{faculty.designation}</p>
            </div>
          </div>
        </div>

        {/* Status Badge Full Width */}
        <div className="mb-3">
          <StatusBadge status={availability.status} size="lg" />
          <p className="text-xs text-slate-500 mt-1.5 pl-1 font-medium flex items-center gap-1.5">
            {availability.status === "Available Now" ? (
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            ) : availability.status === "Currently Unavailable" ? (
              <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0" />
            ) : null}
            <span>{availability.detail}</span>
          </p>
        </div>

        {/* Live Student Inquiry / Teacher Response Banner if present */}
        {latestInquiry && (
          <div className="mb-3 p-2.5 rounded-xl text-xs bg-indigo-50/70 border border-indigo-100/80">
            <div className="flex items-center justify-between text-[11px] font-bold text-indigo-950 mb-1">
              <span className="flex items-center gap-1">
                <MessageSquare className="w-3 h-3 text-indigo-600" />
                <span>Student Inquiry & Response:</span>
              </span>
              <span
                className={`px-1.5 py-0.2 rounded text-[10px] font-bold ${
                  latestInquiry.reply_text
                    ? "bg-emerald-100 text-emerald-800"
                    : "bg-amber-100 text-amber-800"
                }`}
              >
                {latestInquiry.reply_text ? "Responded" : "Pending"}
              </span>
            </div>
            {latestInquiry.reply_text ? (
              <p className="text-[11px] text-emerald-900 font-medium bg-emerald-50/80 p-1.5 rounded-lg border border-emerald-100 mt-1">
                <strong>{faculty.shortName}:</strong> "{latestInquiry.reply_text}"
              </p>
            ) : (
              <p className="text-[11px] text-slate-600 italic">
                Inquiry sent by {latestInquiry.student_name}: "{latestInquiry.message.slice(0, 50)}..."
              </p>
            )}
          </div>
        )}

        {/* Cabin & Available Hours Info */}
        <div className="space-y-2 p-3 bg-[#FAF9FF] rounded-xl border border-purple-50 text-xs mb-3">
          <div className="flex items-start gap-2 text-slate-700">
            <MapPin className="w-3.5 h-3.5 text-[#6D28D9] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900">Cabin: {faculty.cabin}</span>
              <p className="text-[11px] text-slate-500">{faculty.cabinLocation}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-slate-700 pt-2 border-t border-purple-100/60">
            <Clock className="w-3.5 h-3.5 text-[#6D28D9] shrink-0" />
            <div>
              <span className="text-slate-500">Consultation: </span>
              <span className="font-semibold text-slate-800">
                {faculty.defaultAvailableTimeText || "Availability Not Updated"}
              </span>
            </div>
          </div>

          {faculty.subjectsTaught && faculty.subjectsTaught.length > 0 && (
            <div className="flex items-center gap-2 text-slate-700 pt-2 border-t border-purple-100/60">
              <BookOpen className="w-3.5 h-3.5 text-[#6D28D9] shrink-0" />
              <span className="text-[11px] text-slate-600 truncate">
                {faculty.subjectsTaught.join(", ")}
              </span>
            </div>
          )}
        </div>

        {/* Weekly Consultation Hours Accordion */}
        <div className="mb-3">
          <button
            type="button"
            onClick={() => setShowSchedule(!showSchedule)}
            className="w-full flex items-center justify-between px-3 py-1.5 rounded-lg bg-purple-50/60 hover:bg-purple-100/70 text-[#6D28D9] text-[11px] font-semibold transition-colors"
          >
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3 h-3" />
              <span>{showSchedule ? "Hide Full Weekly Schedule" : "View Full Weekly Schedule"}</span>
            </span>
            {showSchedule ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>

          {showSchedule && (
            <div className="mt-2 p-3 bg-white rounded-xl border border-purple-100 text-xs space-y-1.5 animate-in fade-in duration-150">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                Scheduled Cabin Consultation Hours:
              </p>
              {faculty.schedule && faculty.schedule.length > 0 ? (
                faculty.schedule.map((slot, idx) => {
                  const isCurrentDay = slot.day.toLowerCase() === demoDay.toLowerCase();
                  return (
                    <div
                      key={idx}
                      className={`flex items-center justify-between px-2 py-1 rounded text-[11px] ${
                        isCurrentDay
                          ? "bg-purple-50 font-semibold text-[#6D28D9] border border-purple-200"
                          : "text-slate-600"
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        {slot.day}
                        {isCurrentDay && (
                          <span className="text-[9px] px-1 py-0.2 rounded bg-purple-200/70 text-purple-800 font-bold">
                            Today
                          </span>
                        )}
                      </span>
                      <span className="font-mono text-slate-700">{slot.text}</span>
                    </div>
                  );
                })
              ) : (
                <p className="text-slate-400 italic text-[11px]">
                  No consultation schedule updated for this semester yet.
                </p>
              )}
            </div>
          )}
        </div>

        {/* Contact Links */}
        <div className="flex items-center gap-2 mb-4 text-xs">
          <a
            href={`mailto:${faculty.email}`}
            className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg bg-slate-50 hover:bg-purple-50 text-slate-600 hover:text-[#6D28D9] border border-slate-200 hover:border-purple-200 transition-colors"
            title={`Email: ${faculty.email}`}
          >
            <Mail className="w-3 h-3" />
            <span className="text-[11px] font-medium">Email</span>
          </a>
          {faculty.phone && (
            <a
              href={`tel:${faculty.phone}`}
              className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg bg-slate-50 hover:bg-purple-50 text-slate-600 hover:text-[#6D28D9] border border-slate-200 hover:border-purple-200 transition-colors"
              title={`Call: ${faculty.phone}`}
            >
              <Phone className="w-3 h-3" />
              <span className="text-[11px] font-medium">Cabin Phone</span>
            </a>
          )}
        </div>
      </div>

      {/* Footer Controls: Ask If Free, Notify Toggle & Ask AI */}
      <div className="pt-3 border-t border-purple-50 space-y-2">
        <button
          onClick={() => onInquire && onInquire(faculty)}
          className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-purple-50 hover:bg-purple-100 text-[#6D28D9] font-bold text-xs border border-purple-200 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
        >
          <MessageSquare className="w-3.5 h-3.5 text-[#6D28D9]" />
          <span>Ask if {faculty.shortName} is Free</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => toggleFacultyAlert(faculty.id, faculty.shortName)}
            className={`flex-1 flex items-center justify-center gap-1.5 px-2.5 py-2 rounded-xl text-xs font-semibold border transition-all ${
              isSubscribed
                ? "bg-purple-100 text-[#6D28D9] border-purple-300 shadow-inner"
                : "border-purple-200 text-slate-700 hover:bg-purple-50"
            }`}
            title={isSubscribed ? "Alert active" : "Enable notification when available"}
          >
            {isSubscribed ? (
              <>
                <Bell className="w-3.5 h-3.5 fill-purple-600 text-purple-600" />
                <span>Notifying</span>
              </>
            ) : (
              <>
                <Bell className="w-3.5 h-3.5" />
                <span>Notify Me</span>
              </>
            )}
          </button>

          <button
            onClick={handleAskAI}
            className="flex-1 flex items-center justify-center gap-1.5 px-2.5 py-2 rounded-xl text-xs font-semibold bg-[#6D28D9] hover:bg-[#4C1D95] text-white shadow-sm shadow-purple-600/20 transition-all hover:scale-[1.02]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ask AI</span>
          </button>
        </div>
      </div>
    </div>
  );
}
