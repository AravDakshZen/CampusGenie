import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Bot,
  Bus,
  GraduationCap,
  CalendarDays,
  Search,
  Bell,
  User,
  Settings,
  LogOut,
  X,
  Sparkles,
} from "lucide-react";
import { useApp } from "../context/AppContext";

export default function Sidebar() {
  const { logout, unreadCount, isMobileMenuOpen, setIsMobileMenuOpen, profile } =
    useApp();
  const navigate = useNavigate();

  const navItems = [
    {
      to: "/assistant",
      label: "AI Assistant",
      icon: Bot,
      badge: "AI",
      badgeColor: "bg-purple-100 text-purple-700",
    },
    {
      to: "/transport",
      label: "Transport",
      icon: Bus,
    },
    {
      to: "/faculty",
      label: "Faculty Availability",
      icon: GraduationCap,
    },
    {
      to: "/timetable",
      label: "My Timetable",
      icon: CalendarDays,
    },
    {
      to: "/lost-found",
      label: "Lost & Found",
      icon: Search,
    },
    {
      to: "/notifications",
      label: "Notifications",
      icon: Bell,
      count: unreadCount,
    },
    {
      to: "/profile",
      label: "Profile",
      icon: User,
    },
    {
      to: "/settings",
      label: "Settings",
      icon: Settings,
    },
  ];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const closeMobile = () => {
    setIsMobileMenuOpen(false);
  };

  const sidebarContent = (
    <div className="flex flex-col h-full bg-white border-r border-purple-100 text-slate-800">
      {/* Brand Header */}
      <div className="p-5 border-b border-purple-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Campus Genie"
            className="w-10 h-10 object-contain rounded-xl shadow-md shadow-purple-500/20 ring-2 ring-purple-100"
          />
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-lg text-slate-900 tracking-tight">
                Campus Genie
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-purple-100 text-[#6D28D9]">
                REC
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium truncate max-w-[140px]">
              Rajalakshmi Engg College
            </p>
          </div>
        </div>

        {/* Mobile close button */}
        <button
          onClick={closeMobile}
          className="lg:hidden p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
          aria-label="Close menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        <div className="px-3 pb-2 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
          Main Menu
        </div>
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={closeMobile}
              className={({ isActive }) =>
                `flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all group ${
                  isActive
                    ? "bg-[#6D28D9] text-white shadow-md shadow-purple-600/25"
                    : "text-slate-600 hover:bg-[#F3E8FF]/60 hover:text-[#6D28D9]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div className="flex items-center gap-3">
                    <Icon
                      className={`w-4 h-4 transition-colors ${
                        isActive
                          ? "text-white"
                          : "text-slate-400 group-hover:text-[#6D28D9]"
                      }`}
                    />
                    <span>{item.label}</span>
                  </div>

                  {item.count > 0 && (
                    <span
                      className={`px-2 py-0.5 text-xs font-semibold rounded-full ${
                        isActive
                          ? "bg-white text-[#6D28D9]"
                          : "bg-[#6D28D9] text-white"
                      }`}
                    >
                      {item.count}
                    </span>
                  )}

                  {item.badge && !item.count && (
                    <span
                      className={`px-1.5 py-0.5 text-[10px] font-bold rounded ${
                        isActive
                          ? "bg-white/20 text-white"
                          : item.badgeColor
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </>
              )}
            </NavLink>
          );
        })}
      </div>

      {/* Student Mini Profile & Logout */}
      <div className="p-3 border-t border-purple-100 space-y-2">
        <NavLink
          to="/profile"
          onClick={closeMobile}
          className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-purple-50/70 transition-colors group"
        >
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-9 h-9 rounded-full object-cover ring-2 ring-purple-200"
          />
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-slate-800 truncate group-hover:text-[#6D28D9]">
              {profile.name}
            </p>
            <p className="text-[11px] text-slate-400 truncate">
              {profile.rollNumber} • {profile.department.split(" ")[0]}
            </p>
          </div>
        </NavLink>

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3.5 py-2 text-sm font-medium text-rose-600 hover:bg-rose-50 rounded-xl transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 h-screen sticky top-0 shrink-0 z-20">
        {sidebarContent}
      </aside>

      {/* Mobile Drawer Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 lg:hidden"
          onClick={closeMobile}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 left-0 w-72 max-w-[85vw] bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden shadow-2xl ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {sidebarContent}
      </div>
    </>
  );
}
