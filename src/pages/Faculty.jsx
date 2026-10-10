import React, { useState, useMemo } from "react";
import {
  GraduationCap,
  Search,
  Clock,
  Filter,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Sparkles,
  Building,
} from "lucide-react";
import { facultyList, getFacultyAvailability } from "../data/facultyData";
import FacultyCard from "../components/FacultyCard";
import { useApp } from "../context/AppContext";

export default function Faculty() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("All Departments");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const { demoTime, setDemoTime, demoDay, setDemoDay } = useApp();

  const departments = [
    "All Departments",
    "Computer Science and Engineering",
    "Artificial Intelligence & Data Science",
    "Information Technology",
    "Electronics & Communication Engineering",
  ];

  const statuses = ["All", "Available Now", "Currently Unavailable", "Availability Not Updated"];

  // Filter faculty
  const filteredFaculty = useMemo(() => {
    return facultyList.filter((fac) => {
      // Dept filter
      if (selectedDept !== "All Departments" && fac.department !== selectedDept) {
        return false;
      }

      // Status filter
      const availability = getFacultyAvailability(fac, demoTime, demoDay);
      if (selectedStatus !== "All" && availability.status !== selectedStatus) {
        return false;
      }

      // Search term
      if (!searchTerm.trim()) return true;
      const term = searchTerm.toLowerCase();

      return (
        fac.name.toLowerCase().includes(term) ||
        fac.shortName.toLowerCase().includes(term) ||
        fac.cabin.toLowerCase().includes(term) ||
        fac.department.toLowerCase().includes(term) ||
        fac.specialization?.toLowerCase().includes(term)
      );
    });
  }, [searchTerm, selectedDept, selectedStatus, demoTime, demoDay]);

  // Statistics counters
  const stats = useMemo(() => {
    let available = 0;
    let unavailable = 0;
    let notUpdated = 0;

    facultyList.forEach((f) => {
      const s = getFacultyAvailability(f, demoTime, demoDay).status;
      if (s === "Available Now") available++;
      else if (s === "Currently Unavailable") unavailable++;
      else notUpdated++;
    });

    return { available, unavailable, notUpdated };
  }, [demoTime, demoDay]);

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#4C1D95] via-[#6D28D9] to-[#8B5CF6] rounded-3xl p-6 sm:p-8 text-white shadow-xl shadow-purple-600/15 relative overflow-hidden">
        <div className="absolute -right-12 -top-12 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold mb-3 border border-white/20">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Rajalakshmi Faculty Consultation</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Faculty Availability
            </h1>
            <p className="text-purple-200 text-xs sm:text-sm mt-1 max-w-xl leading-relaxed">
              Check professor cabin locations and real-time consultation hours calculated from official academic schedules.
            </p>
          </div>

          {/* Demo Time Controller Box */}
          <div className="bg-white/15 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-xs space-y-2.5 shrink-0">
            <div className="flex items-center justify-between gap-3 text-purple-100">
              <span className="font-semibold flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-white" /> Schedule Clock:
              </span>
              <div className="flex items-center gap-2">
                <select
                  value={demoDay}
                  onChange={(e) => setDemoDay(e.target.value)}
                  className="bg-white text-[#6D28D9] font-bold text-xs px-2 py-0.5 rounded cursor-pointer border-none outline-none"
                >
                  {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
                <span className="font-mono font-bold bg-white text-[#6D28D9] px-2 py-0.5 rounded">
                  {demoTime === "14:30" ? "2:30 PM" : demoTime === "11:15" ? "11:15 AM" : demoTime === "17:30" ? "5:30 PM" : demoTime}
                </span>
              </div>
            </div>
            <p className="text-[11px] text-purple-200">
              Preset schedule checkpoints & live clock:
            </p>
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                onClick={() => { setDemoDay("Monday"); setDemoTime("14:30"); }}
                className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                  demoDay === "Monday" && demoTime === "14:30"
                    ? "bg-white text-[#6D28D9] shadow-sm"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                Mon 2:30 PM (Revathi)
              </button>
              <button
                onClick={() => { setDemoDay("Monday"); setDemoTime("11:15"); }}
                className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                  demoDay === "Monday" && demoTime === "11:15"
                    ? "bg-white text-[#6D28D9] shadow-sm"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                Mon 11:15 AM (Arun)
              </button>
              <button
                onClick={() => { setDemoDay("Monday"); setDemoTime("17:30"); }}
                className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                  demoTime === "17:30"
                    ? "bg-white text-[#6D28D9] shadow-sm"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                5:30 PM (After Hours)
              </button>
              <button
                onClick={() => {
                  const now = new Date();
                  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                  let d = days[now.getDay()];
                  if (d === "Sunday" || d === "Saturday") d = "Monday";
                  const h = String(now.getHours()).padStart(2, "0");
                  const m = String(now.getMinutes()).padStart(2, "0");
                  setDemoDay(d);
                  setDemoTime(`${h}:${m}`);
                }}
                className="px-2.5 py-1 rounded-lg font-semibold bg-emerald-500/80 hover:bg-emerald-500 text-white transition-all shadow-xs"
                title="Sync with current system device time"
              >
                ⚡ Live Time
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Summary KPI Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div
          onClick={() => setSelectedStatus("Available Now")}
          className={`cursor-pointer bg-white p-4 rounded-2xl border transition-all flex items-center justify-between ${
            selectedStatus === "Available Now"
              ? "border-emerald-500 ring-2 ring-emerald-100"
              : "border-purple-100 hover:border-purple-300"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Available in Cabin</p>
              <p className="text-xl font-extrabold text-slate-900">{stats.available}</p>
            </div>
          </div>
          <span className="text-xs text-emerald-600 font-semibold">🟢 Active</span>
        </div>

        <div
          onClick={() => setSelectedStatus("Currently Unavailable")}
          className={`cursor-pointer bg-white p-4 rounded-2xl border transition-all flex items-center justify-between ${
            selectedStatus === "Currently Unavailable"
              ? "border-rose-500 ring-2 ring-rose-100"
              : "border-purple-100 hover:border-purple-300"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
              <XCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">In Lectures / Off</p>
              <p className="text-xl font-extrabold text-slate-900">{stats.unavailable}</p>
            </div>
          </div>
          <span className="text-xs text-rose-600 font-semibold">🔴 Unavailable</span>
        </div>

        <div
          onClick={() => setSelectedStatus("Availability Not Updated")}
          className={`cursor-pointer bg-white p-4 rounded-2xl border transition-all flex items-center justify-between ${
            selectedStatus === "Availability Not Updated"
              ? "border-slate-500 ring-2 ring-slate-100"
              : "border-purple-100 hover:border-purple-300"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-600 flex items-center justify-center">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Not Updated</p>
              <p className="text-xl font-extrabold text-slate-900">{stats.notUpdated}</p>
            </div>
          </div>
          <span className="text-xs text-slate-500 font-semibold">⚪ Pending</span>
        </div>
      </div>

      {/* Search & Department Selector */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search faculty name..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-purple-200 focus:border-[#6D28D9] focus:ring-4 focus:ring-purple-100 text-sm text-slate-800 placeholder-slate-400 bg-white transition-all"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
            >
              Clear
            </button>
          )}
        </div>

        {/* Department Filter Dropdown */}
        <div className="flex items-center gap-2">
          <Building className="w-4 h-4 text-purple-600 hidden sm:block" />
          <select
            value={selectedDept}
            onChange={(e) => setSelectedDept(e.target.value)}
            className="px-3 py-2.5 rounded-xl border border-purple-200 bg-white text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-200"
          >
            {departments.map((d) => (
              <option key={d} value={d}>
                {d === "All Departments" ? "All Departments" : d.split(" ")[0] + " Department"}
              </option>
            ))}
          </select>

          {selectedStatus !== "All" && (
            <button
              onClick={() => setSelectedStatus("All")}
              className="px-2.5 py-1 text-xs font-semibold text-rose-600 bg-rose-50 rounded-lg hover:bg-rose-100"
            >
              Clear status filter
            </button>
          )}
        </div>
      </div>

      {/* Faculty Cards Grid */}
      {filteredFaculty.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-purple-200 p-6">
          <GraduationCap className="w-12 h-12 text-purple-300 mx-auto mb-3" />
          <h3 className="font-bold text-slate-800 text-base">No faculty found</h3>
          <p className="text-xs text-slate-500 mt-1">
            Try adjusting your search criteria or changing the department filter.
          </p>
          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedDept("All Departments");
              setSelectedStatus("All");
            }}
            className="mt-4 px-4 py-2 rounded-xl bg-[#6D28D9] text-white text-xs font-semibold hover:bg-[#4C1D95]"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredFaculty.map((faculty) => (
            <FacultyCard key={faculty.id} faculty={faculty} />
          ))}
        </div>
      )}
    </div>
  );
}
