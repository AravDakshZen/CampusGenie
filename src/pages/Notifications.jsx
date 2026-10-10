import React from "react";
import NotificationPanel from "../components/NotificationPanel";
import { Bell, Sparkles, ShieldCheck } from "lucide-react";
import { useApp } from "../context/AppContext";

export default function Notifications() {
  const { notifications, unreadCount } = useApp();

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#4C1D95] via-[#6D28D9] to-[#8B5CF6] rounded-3xl p-6 sm:p-8 text-white shadow-xl shadow-purple-600/15 relative overflow-hidden">
        <div className="absolute -right-12 -top-12 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold mb-3 border border-white/20">
              <Bell className="w-3.5 h-3.5" />
              <span>Campus Alert Feed</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Notifications & Alerts
            </h1>
            <p className="text-purple-200 text-xs sm:text-sm mt-1 max-w-md leading-relaxed">
              Real-time updates on faculty cabin hours, bus departure reminders, and upcoming lecture alerts.
            </p>
          </div>

          <div className="bg-white/15 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/20 text-center shrink-0">
            <span className="text-[11px] text-purple-200 block uppercase font-bold tracking-wider">
              Unread
            </span>
            <span className="text-2xl font-extrabold font-mono">
              {unreadCount}
            </span>
          </div>
        </div>
      </div>

      {/* Notification List Container */}
      <div className="bg-white rounded-3xl border border-purple-100 p-6 shadow-sm">
        <NotificationPanel showActions={true} />
      </div>

      <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-200 text-xs text-slate-500 flex items-center justify-between">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-[#6D28D9]" />
          Notifications are strictly generated only when corresponding schedule data is active.
        </span>
        <span className="text-[11px] text-slate-400 hidden sm:inline">Rajalakshmi Campus Genie</span>
      </div>
    </div>
  );
}
