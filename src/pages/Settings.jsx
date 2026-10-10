import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Bell,
  Moon,
  Volume2,
  LogOut,
  Clock,
  Sparkles,
  Shield,
  Sliders,
  Check,
} from "lucide-react";
import { useApp } from "../context/AppContext";

export default function Settings() {
  const {
    settings,
    setSettings,
    logout,
    demoTime,
    setDemoTime,
    demoDay,
    setDemoDay,
  } = useApp();

  const navigate = useNavigate();

  const toggleSetting = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="pb-2 border-b border-purple-100">
        <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
          Application Settings
        </h1>
        <p className="text-xs text-slate-500 mt-0.5">
          Configure notifications, assistant preferences, and test environment simulation
        </p>
      </div>

      {/* Demo Simulation Controls Card */}
      <div className="bg-white rounded-3xl border border-purple-100 p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-2xl bg-purple-100 text-[#6D28D9] flex items-center justify-center font-bold">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900">
              Schedule & Time Simulation
            </h2>
            <p className="text-xs text-slate-500">
              Change the simulated campus time to see real-time faculty availability and next class updates
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="block text-slate-700 font-bold uppercase text-[11px] mb-1.5">
              Simulated Day of Week
            </label>
            <select
              value={demoDay}
              onChange={(e) => setDemoDay(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200 bg-white font-semibold text-slate-800 focus:outline-none focus:border-[#6D28D9]"
            >
              {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-slate-700 font-bold uppercase text-[11px] mb-1.5">
              Simulated Clock Time
            </label>
            <select
              value={demoTime}
              onChange={(e) => setDemoTime(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200 bg-white font-semibold text-slate-800 focus:outline-none focus:border-[#6D28D9]"
            >
              <option value="14:30">2:30 PM (Dr. Revathi Available 2-4 PM)</option>
              <option value="11:15">11:15 AM (Dr. Arun Available 11 AM - 12 PM)</option>
              <option value="09:30">9:30 AM (Morning Lectures / Next Class)</option>
              <option value="17:30">5:30 PM (Evening / Classes Ended)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Notification Preferences */}
      <div className="bg-white rounded-3xl border border-purple-100 p-6 shadow-sm space-y-4">
        <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <Bell className="w-4 h-4 text-[#6D28D9]" />
          <span>Notification Preferences</span>
        </h2>

        <div className="space-y-3 divide-y divide-purple-50">
          <div className="flex items-center justify-between pt-2">
            <div>
              <p className="text-sm font-semibold text-slate-800">Faculty Availability Alerts</p>
              <p className="text-xs text-slate-500">
                Receive alerts when subscribed professors are inside their cabins
              </p>
            </div>
            <button
              onClick={() => toggleSetting("facultyAlertsEnabled")}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors ${
                settings.facultyAlertsEnabled ? "bg-[#6D28D9]" : "bg-slate-300"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                  settings.facultyAlertsEnabled ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between pt-3">
            <div>
              <p className="text-sm font-semibold text-slate-800">Transport & Bus Alerts</p>
              <p className="text-xs text-slate-500">
                Reminders 15 minutes before your bus departs from campus bays
              </p>
            </div>
            <button
              onClick={() => toggleSetting("transportAlertsEnabled")}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors ${
                settings.transportAlertsEnabled ? "bg-[#6D28D9]" : "bg-slate-300"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                  settings.transportAlertsEnabled ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between pt-3">
            <div>
              <p className="text-sm font-semibold text-slate-800">Class Timetable Reminders</p>
              <p className="text-xs text-slate-500">
                Alerts 15 minutes before upcoming lecture and lab hours start
              </p>
            </div>
            <button
              onClick={() => toggleSetting("classRemindersEnabled")}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors ${
                settings.classRemindersEnabled ? "bg-[#6D28D9]" : "bg-slate-300"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                  settings.classRemindersEnabled ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* App Appearance & Sound */}
      <div className="bg-white rounded-3xl border border-purple-100 p-6 shadow-sm space-y-4">
        <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <Sliders className="w-4 h-4 text-[#6D28D9]" />
          <span>Appearance & Sound</span>
        </h2>

        <div className="space-y-3 divide-y divide-purple-50">
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-3">
              <Moon className="w-4 h-4 text-purple-600" />
              <div>
                <p className="text-sm font-semibold text-slate-800">Dark Mode (Night Campus)</p>
                <p className="text-xs text-slate-500">
                  Switch to eye-friendly dark purple aesthetic
                </p>
              </div>
            </div>
            <button
              onClick={() => toggleSetting("darkMode")}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors ${
                settings.darkMode ? "bg-[#6D28D9]" : "bg-slate-300"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                  settings.darkMode ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between pt-3">
            <div className="flex items-center gap-3">
              <Volume2 className="w-4 h-4 text-purple-600" />
              <div>
                <p className="text-sm font-semibold text-slate-800">Sound Effects & Speech</p>
                <p className="text-xs text-slate-500">
                  Play audio feedback on message send and voice input
                </p>
              </div>
            </div>
            <button
              onClick={() => toggleSetting("soundEnabled")}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors ${
                settings.soundEnabled ? "bg-[#6D28D9]" : "bg-slate-300"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                  settings.soundEnabled ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Logout Action */}
      <div className="bg-rose-50/60 rounded-3xl border border-rose-200 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-sm font-bold text-rose-800">Account Session</h3>
          <p className="text-xs text-rose-600 mt-0.5">
            Logging out will return to the Rajalakshmi email authentication screen
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-md transition-colors self-start sm:self-auto"
        >
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
}
