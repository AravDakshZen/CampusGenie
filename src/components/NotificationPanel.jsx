import React from "react";
import { Link } from "react-router-dom";
import {
  Bell,
  CheckCheck,
  Trash2,
  GraduationCap,
  Bus,
  Calendar,
  Search,
  Check,
  Clock,
  ArrowRight,
} from "lucide-react";
import { useApp } from "../context/AppContext";

export default function NotificationPanel({ limit, showActions = true }) {
  const {
    notifications,
    unreadCount,
    markAsRead,
    markAllAsRead,
    clearNotification,
    clearAllNotifications,
  } = useApp();

  const displayed = limit ? notifications.slice(0, limit) : notifications;

  const getCategoryIcon = (category) => {
    switch (category) {
      case "faculty":
        return <GraduationCap className="w-4 h-4 text-purple-600" />;
      case "transport":
        return <Bus className="w-4 h-4 text-indigo-600" />;
      case "timetable":
        return <Calendar className="w-4 h-4 text-blue-600" />;
      case "lost_found":
        return <Search className="w-4 h-4 text-amber-600" />;
      default:
        return <Bell className="w-4 h-4 text-purple-600" />;
    }
  };

  const getCategoryBadge = (category) => {
    switch (category) {
      case "faculty":
        return "bg-purple-100 text-purple-800";
      case "transport":
        return "bg-indigo-100 text-indigo-800";
      case "timetable":
        return "bg-blue-100 text-blue-800";
      case "lost_found":
        return "bg-amber-100 text-amber-800";
      default:
        return "bg-slate-100 text-slate-800";
    }
  };

  return (
    <div className="space-y-4">
      {/* Top Header Actions */}
      {showActions && (
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-purple-100">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-slate-800">
              Recent Alerts
            </span>
            {unreadCount > 0 && (
              <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-[#6D28D9] text-white">
                {unreadCount} Unread
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 text-xs">
            {unreadCount > 0 && (
              <button
                onClick={markAllAsRead}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-purple-200 text-[#6D28D9] hover:bg-purple-50 font-medium transition-colors"
              >
                <CheckCheck className="w-3.5 h-3.5" /> Mark all read
              </button>
            )}

            {notifications.length > 0 && (
              <button
                onClick={clearAllNotifications}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:text-rose-600 hover:bg-rose-50 font-medium transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" /> Clear all
              </button>
            )}
          </div>
        </div>
      )}

      {/* Notifications List */}
      {displayed.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-purple-200 p-6">
          <div className="w-12 h-12 rounded-full bg-purple-50 text-[#6D28D9] flex items-center justify-center mx-auto mb-3">
            <Bell className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-800 text-sm">No notifications yet</h3>
          <p className="text-xs text-slate-400 mt-1">
            You're all caught up with faculty availability, transport, and class schedules!
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {displayed.map((item) => (
            <div
              key={item.id}
              className={`rounded-2xl border transition-all p-4 flex items-start justify-between gap-3 ${
                item.read
                  ? "bg-white border-purple-100 opacity-80"
                  : "bg-white border-purple-200 shadow-sm ring-1 ring-purple-100"
              }`}
            >
              <div className="flex items-start gap-3 flex-1 min-w-0">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    item.read ? "bg-slate-100" : "bg-purple-50 ring-2 ring-purple-100"
                  }`}
                >
                  {getCategoryIcon(item.category)}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${getCategoryBadge(
                        item.category
                      )}`}
                    >
                      {item.category.replace("_", " ")}
                    </span>
                    {!item.read && (
                      <span className="w-2 h-2 rounded-full bg-[#6D28D9]" />
                    )}
                    <span className="text-[11px] text-slate-400 font-mono ml-auto">
                      {item.timeAgo || item.timestamp}
                    </span>
                  </div>

                  <h4
                    className={`text-sm ${
                      item.read ? "font-semibold text-slate-800" : "font-bold text-slate-900"
                    }`}
                  >
                    {item.title}
                  </h4>

                  <p className="text-xs text-slate-600 mt-0.5 line-clamp-2">
                    {item.subtitle}
                  </p>

                  {item.details && (
                    <p className="text-xs text-slate-400 mt-1 font-normal">
                      {item.details}
                    </p>
                  )}

                  {item.actionLink && (
                    <Link
                      to={item.actionLink}
                      onClick={() => markAsRead(item.id)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#6D28D9] hover:underline mt-2"
                    >
                      View details <ArrowRight className="w-3 h-3" />
                    </Link>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-1 shrink-0 ml-2">
                {!item.read && (
                  <button
                    onClick={() => markAsRead(item.id)}
                    title="Mark as read"
                    className="p-1.5 text-slate-400 hover:text-[#6D28D9] hover:bg-purple-50 rounded-lg transition-colors"
                  >
                    <Check className="w-4 h-4" />
                  </button>
                )}

                <button
                  onClick={() => clearNotification(item.id)}
                  title="Remove notification"
                  className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
