import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  Bell,
  Clock,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { useApp } from "../context/AppContext";

export default function Topbar() {
  const location = useLocation();
  const {
    unreadCount,
    setIsMobileMenuOpen,
    profile,
    demoTime,
    setDemoTime,
    demoDay,
    setDemoDay,
  } = useApp();

  // Page title mapping
  const getPageTitle = (pathname) => {
    switch (pathname) {
      case "/assistant":
      case "/":
        return {
          title: "AI Assistant",
          subtitle: "Ask anything about Rajalakshmi campus",
        };
      case "/transport":
        return {
          title: "Rajalakshmi Transport",
          subtitle: "Official bus schedules, routes & timings",
        };
      case "/faculty":
        return {
          title: "Faculty Availability",
          subtitle: "Real-time cabin hours & schedule status",
        };
      case "/timetable":
        return {
          title: "My Timetable",
          subtitle: "Weekly classes & next upcoming lecture",
        };
      case "/lost-found":
        return {
          title: "Lost & Found",
          subtitle: "Campus registry for missing & recovered items",
        };
      case "/notifications":
        return {
          title: "Notifications",
          subtitle: "Live alerts for faculty, buses & classes",
        };
      case "/profile":
        return {
          title: "Student Profile",
          subtitle: "Rajalakshmi Engineering College ID & Records",
        };
      case "/settings":
        return {
          title: "Settings",
          subtitle: "Preferences & demo simulation controls",
        };
      default:
        return {
          title: "Campus Genie",
          subtitle: "Rajalakshmi Smart Assistant",
        };
    }
  };

  const { title, subtitle } = getPageTitle(location.pathname);

  // Quick preset toggle for simulation demo
  const handleQuickTimePreset = (time, day) => {
    setDemoTime(time);
    setDemoDay(day);
  };

  return (
    <header className="sticky top-0 z-10 bg-white/90 backdrop-blur-md border-b border-purple-100 px-4 sm:px-6 py-3">
      <div className="flex items-center justify-between gap-4">
        {/* Left: Mobile hamburger & Page Title */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 text-slate-600 hover:text-[#6D28D9] hover:bg-purple-50 rounded-xl transition-colors"
            aria-label="Open navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div>
            <h1 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">
              {title}
            </h1>
            <p className="text-xs text-slate-500 hidden sm:block">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Right: Simulation Pill, Notifications, Profile Chip */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Demo Time Simulator Pill */}
          <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-50 border border-purple-200/60 text-xs text-purple-900">
            <Clock className="w-3.5 h-3.5 text-[#6D28D9]" />
            <span className="font-semibold text-slate-700">{demoDay}</span>
            <span className="text-[#6D28D9] font-mono font-bold">
              {demoTime === "14:30" ? "2:30 PM" : demoTime === "11:15" ? "11:15 AM" : demoTime}
            </span>

            {/* Quick switcher buttons */}
            <div className="flex items-center gap-1 pl-1 ml-1 border-l border-purple-200">
              <button
                onClick={() => handleQuickTimePreset("14:30", "Monday")}
                title="Simulate 2:30 PM (Revathi Ma'am available)"
                className={`px-1.5 py-0.5 rounded text-[10px] font-semibold transition-all ${
                  demoTime === "14:30"
                    ? "bg-[#6D28D9] text-white"
                    : "bg-white text-slate-600 hover:bg-purple-100"
                }`}
              >
                2:30 PM
              </button>
              <button
                onClick={() => handleQuickTimePreset("11:15", "Monday")}
                title="Simulate 11:15 AM (Arun Sir available)"
                className={`px-1.5 py-0.5 rounded text-[10px] font-semibold transition-all ${
                  demoTime === "11:15"
                    ? "bg-[#6D28D9] text-white"
                    : "bg-white text-slate-600 hover:bg-purple-100"
                }`}
              >
                11:15 AM
              </button>
              <button
                onClick={() => handleQuickTimePreset("17:30", "Monday")}
                title="Simulate 5:30 PM (Evening / after classes)"
                className={`px-1.5 py-0.5 rounded text-[10px] font-semibold transition-all ${
                  demoTime === "17:30"
                    ? "bg-[#6D28D9] text-white"
                    : "bg-white text-slate-600 hover:bg-purple-100"
                }`}
              >
                5:30 PM
              </button>
            </div>
          </div>

          {/* Notifications Bell */}
          <Link
            to="/notifications"
            className="relative p-2 text-slate-600 hover:text-[#6D28D9] hover:bg-purple-50 rounded-xl transition-colors"
            title="Notifications"
          >
            <Bell className="w-5 h-5" />
            {unreadCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-[#6D28D9] text-white text-[10px] font-bold rounded-full flex items-center justify-center ring-2 ring-white animate-pulse">
                {unreadCount}
              </span>
            )}
          </Link>

          {/* Student Profile Quick Chip */}
          <Link
            to="/profile"
            className="flex items-center gap-2.5 p-1 sm:px-3 sm:py-1.5 rounded-xl hover:bg-purple-50/70 border border-transparent hover:border-purple-200 transition-all"
          >
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-8 h-8 rounded-full object-cover ring-2 ring-[#6D28D9]/20"
            />
            <div className="hidden sm:block text-left">
              <p className="text-xs font-bold text-slate-800 leading-tight">
                {profile.name}
              </p>
              <p className="text-[10px] text-slate-400 font-mono">
                {profile.rollNumber}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
