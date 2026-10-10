import React from "react";
import { useNavigate } from "react-router-dom";
import {
  GraduationCap,
  MapPin,
  Clock,
  Mail,
  Bell,
  BellOff,
  Sparkles,
  BookOpen,
} from "lucide-react";
import StatusBadge from "./StatusBadge";
import { getFacultyAvailability } from "../data/facultyData";
import { useApp } from "../context/AppContext";

export default function FacultyCard({ faculty }) {
  const { demoTime, demoDay, facultyAlerts, toggleFacultyAlert, setActiveChatPrompt } =
    useApp();
  const navigate = useNavigate();

  // Calculated availability from schedule and demo time
  const availability = getFacultyAvailability(faculty, demoTime, demoDay);
  const isSubscribed = facultyAlerts.includes(faculty.id);

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
                    ? "bg-emerald-500"
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
        <div className="mb-4">
          <StatusBadge status={availability.status} size="lg" />
          <p className="text-xs text-slate-500 mt-1.5 pl-1">
            {availability.detail}
          </p>
        </div>

        {/* Cabin & Available Hours Info */}
        <div className="space-y-2 p-3 bg-[#FAF9FF] rounded-xl border border-purple-50 text-xs mb-4">
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
              <span className="text-slate-500">Consultation Hours: </span>
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
      </div>

      {/* Footer Controls: Notify Toggle & Ask AI */}
      <div className="pt-3 border-t border-purple-50 flex items-center gap-2">
        <button
          onClick={() => toggleFacultyAlert(faculty.id, faculty.shortName)}
          className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
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
          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-[#6D28D9] hover:bg-[#4C1D95] text-white shadow-sm shadow-purple-600/20 transition-all hover:scale-[1.02]"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Ask AI</span>
        </button>
      </div>
    </div>
  );
}
