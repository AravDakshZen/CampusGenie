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
  MessageSquare,
  Send,
  UserCheck,
  Bell,
  RefreshCw,
} from "lucide-react";
import { getFacultyAvailability } from "../data/facultyData";
import FacultyCard from "../components/FacultyCard";
import FacultyInquiryModal from "../components/FacultyInquiryModal";
import { useApp } from "../context/AppContext";

export default function Faculty() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("All Departments");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [activeTab, setActiveTab] = useState("directory"); // "directory" | "inquiries"
  const [inquiryFaculty, setInquiryFaculty] = useState(null);
  const [replyInputText, setReplyInputText] = useState({});

  const {
    currentUser,
    facultyData,
    facultyInquiries,
    respondToFacultyInquiry,
    updateFacultyCabinStatus,
    demoTime,
    setDemoTime,
    demoDay,
    setDemoDay,
  } = useApp();

  const isTeacher =
    currentUser?.role === "faculty" ||
    currentUser?.email?.includes(".s@") ||
    currentUser?.email?.includes(".k@") ||
    currentUser?.email?.includes(".m@") ||
    currentUser?.facultyId;

  const currentTeacherId =
    currentUser?.facultyId ||
    (currentUser?.email?.includes("revathi")
      ? "fac-revathi"
      : currentUser?.email?.includes("arun")
      ? "fac-arun"
      : currentUser?.email?.includes("priya")
      ? "fac-priya"
      : null);

  const currentTeacherObj = facultyData.find((f) => f.id === currentTeacherId);

  const departments = [
    "All Departments",
    "Computer Science and Engineering",
    "Artificial Intelligence & Data Science",
    "Information Technology",
    "Electronics & Communication Engineering",
  ];

  const statuses = [
    "All",
    "Available Now",
    "Currently Unavailable",
    "Availability Not Updated",
  ];

  // Filter faculty based on database records
  const filteredFaculty = useMemo(() => {
    return facultyData.filter((fac) => {
      // Dept filter
      if (selectedDept !== "All Departments" && fac.department !== selectedDept) {
        return false;
      }

      // Status filter
      const statusOverride = fac.status && fac.status !== "Auto" ? fac.status : null;
      const availability = getFacultyAvailability(fac, demoTime, demoDay, statusOverride);
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
  }, [searchTerm, selectedDept, selectedStatus, demoTime, demoDay, facultyData]);

  // Statistics counters
  const stats = useMemo(() => {
    let available = 0;
    let unavailable = 0;
    let notUpdated = 0;

    facultyData.forEach((f) => {
      const statusOverride = f.status && f.status !== "Auto" ? f.status : null;
      const s = getFacultyAvailability(f, demoTime, demoDay, statusOverride).status;
      if (s === "Available Now") available++;
      else if (s === "Currently Unavailable") unavailable++;
      else notUpdated++;
    });

    return { available, unavailable, notUpdated };
  }, [demoTime, demoDay, facultyData]);

  // Teacher quick response presets
  const handleTeacherReply = async (inquiryId, replyPreset) => {
    const text = replyPreset || replyInputText[inquiryId] || "Yes, I am in cabin now!";
    await respondToFacultyInquiry(inquiryId, "available", text);
    setReplyInputText((prev) => ({ ...prev, [inquiryId]: "" }));
  };

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#4C1D95] via-[#6D28D9] to-[#8B5CF6] rounded-3xl p-6 sm:p-8 text-white shadow-xl shadow-purple-600/15 relative overflow-hidden">
        <div className="absolute -right-12 -top-12 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold mb-3 border border-white/20">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Rajalakshmi Faculty Consultation & Live Inquiries</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Faculty Availability & Inquiries
            </h1>
            <p className="text-purple-200 text-xs sm:text-sm mt-1 max-w-xl leading-relaxed">
              Check professor cabin locations and consultation hours. Students can send live "Are you free?" inquiries and professors can respond instantly.
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
                  {demoTime === "14:30"
                    ? "2:30 PM"
                    : demoTime === "11:15"
                    ? "11:15 AM"
                    : demoTime === "17:30"
                    ? "5:30 PM"
                    : demoTime}
                </span>
              </div>
            </div>
            <p className="text-[11px] text-purple-200">
              Preset schedule checkpoints & live clock:
            </p>
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                onClick={() => {
                  setDemoDay("Monday");
                  setDemoTime("14:30");
                }}
                className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                  demoDay === "Monday" && demoTime === "14:30"
                    ? "bg-white text-[#6D28D9] shadow-sm"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                Mon 2:30 PM (Revathi)
              </button>
              <button
                onClick={() => {
                  setDemoDay("Monday");
                  setDemoTime("11:15");
                }}
                className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                  demoDay === "Monday" && demoTime === "11:15"
                    ? "bg-white text-[#6D28D9] shadow-sm"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                Mon 11:15 AM (Arun)
              </button>
              <button
                onClick={() => {
                  setDemoDay("Monday");
                  setDemoTime("17:30");
                }}
                className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                  demoTime === "17:30"
                    ? "bg-white text-[#6D28D9] shadow-sm"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                Mon 5:30 PM (After Hours)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* TEACHER DASHBOARD (Shown when logged in as a Teacher) */}
      {isTeacher && currentTeacherObj && (
        <div className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white rounded-3xl p-6 shadow-xl border border-purple-400/30 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-purple-700/60">
            <div className="flex items-center gap-3">
              <img
                src={currentTeacherObj.avatar}
                alt={currentTeacherObj.name}
                className="w-12 h-12 rounded-2xl object-cover ring-2 ring-purple-300"
              />
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-md bg-purple-500/40 text-purple-200 text-xs font-bold uppercase">
                    Teacher Mode Active
                  </span>
                  <span className="text-xs text-purple-300 font-mono">
                    Cabin: {currentTeacherObj.cabin}
                  </span>
                </div>
                <h3 className="text-lg font-bold">
                  {currentTeacherObj.name} ({currentTeacherObj.designation})
                </h3>
              </div>
            </div>

            {/* Teacher Status Controls */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-purple-200 font-medium mr-1">
                Your Cabin Status:
              </span>
              <button
                onClick={() => updateFacultyCabinStatus(currentTeacherObj.id, "Available Now")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  currentTeacherObj.status === "Available Now"
                    ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/30 ring-2 ring-white"
                    : "bg-purple-800/80 text-purple-200 hover:bg-purple-700"
                }`}
              >
                🟢 Mark Available Now
              </button>
              <button
                onClick={() => updateFacultyCabinStatus(currentTeacherObj.id, "Currently Unavailable")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  currentTeacherObj.status === "Currently Unavailable"
                    ? "bg-rose-500 text-white shadow-md shadow-rose-500/30 ring-2 ring-white"
                    : "bg-purple-800/80 text-purple-200 hover:bg-purple-700"
                }`}
              >
                🔴 Mark Busy / In Lecture
              </button>
              <button
                onClick={() => updateFacultyCabinStatus(currentTeacherObj.id, "Auto")}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  currentTeacherObj.status === "Auto" || !currentTeacherObj.status
                    ? "bg-white text-[#6D28D9] font-bold"
                    : "bg-purple-800/80 text-purple-200 hover:bg-purple-700"
                }`}
              >
                ⚪ Auto Schedule
              </button>
            </div>
          </div>

          {/* Pending Inquiries for this Teacher */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-purple-300 mb-2 flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-purple-300" />
              <span>Incoming Student Inquiries Addressed to You:</span>
            </h4>

            {facultyInquiries.filter((inq) => inq.faculty_id === currentTeacherObj.id).length === 0 ? (
              <p className="text-xs text-purple-200/80 bg-purple-950/40 p-3 rounded-xl border border-purple-800/50">
                No inquiries yet. Students can click "Ask if {currentTeacherObj.shortName} is Free" on your card.
              </p>
            ) : (
              <div className="space-y-3">
                {facultyInquiries
                  .filter((inq) => inq.faculty_id === currentTeacherObj.id)
                  .map((inquiry) => (
                    <div
                      key={inquiry.id}
                      className="bg-purple-950/60 p-4 rounded-2xl border border-purple-700/60 text-xs space-y-2.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white text-sm">
                          👨‍🎓 {inquiry.student_name} ({inquiry.student_roll || "Student"})
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            inquiry.status === "available"
                              ? "bg-emerald-500/30 text-emerald-300 border border-emerald-500/40"
                              : "bg-amber-500/30 text-amber-300 border border-amber-500/40"
                          }`}
                        >
                          {inquiry.reply_text ? "Responded" : "Pending Response"}
                        </span>
                      </div>

                      <p className="text-purple-100 bg-purple-900/40 p-2 rounded-xl italic">
                        "{inquiry.message}"
                      </p>

                      {inquiry.reply_text ? (
                        <div className="bg-emerald-950/60 p-2.5 rounded-xl border border-emerald-500/30 text-emerald-200">
                          <strong>Your Response:</strong> "{inquiry.reply_text}"
                        </div>
                      ) : (
                        <div className="space-y-2 pt-1">
                          <p className="text-[11px] font-semibold text-purple-300">
                            Quick Respond to {inquiry.student_name}:
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            <button
                              onClick={() =>
                                handleTeacherReply(
                                  inquiry.id,
                                  `Yes ${inquiry.student_name}! I am in cabin ${currentTeacherObj.cabin} right now until 4:00 PM. Please come in.`
                                )
                              }
                              className="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-[11px] transition-colors"
                            >
                              🟢 "Yes, free in cabin! Come over."
                            </button>
                            <button
                              onClick={() =>
                                handleTeacherReply(
                                  inquiry.id,
                                  `In a lecture right now. I will be free in cabin ${currentTeacherObj.cabin} at 3:30 PM.`
                                )
                              }
                              className="px-2.5 py-1 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-semibold text-[11px] transition-colors"
                            >
                              🟡 "In lecture right now. Free at 3:30 PM."
                            </button>
                            <button
                              onClick={() =>
                                handleTeacherReply(
                                  inquiry.id,
                                  "Currently unavailable today. Please visit tomorrow during consultation hours."
                                )
                              }
                              className="px-2.5 py-1 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 font-semibold text-[11px] transition-colors"
                            >
                              🔴 "Unavailable today, see tomorrow."
                            </button>
                          </div>

                          <div className="flex items-center gap-2 mt-2">
                            <input
                              type="text"
                              value={replyInputText[inquiry.id] || ""}
                              onChange={(e) =>
                                setReplyInputText((prev) => ({
                                  ...prev,
                                  [inquiry.id]: e.target.value,
                                }))
                              }
                              placeholder="Type custom response to student..."
                              className="flex-1 px-3 py-1.5 text-xs bg-purple-900/60 border border-purple-600 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                            />
                            <button
                              onClick={() => handleTeacherReply(inquiry.id)}
                              className="px-4 py-1.5 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-bold rounded-xl text-xs transition-colors shrink-0"
                            >
                              Send Reply
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tabs: Faculty Directory vs Inquiries History */}
      <div className="flex items-center gap-3 border-b border-purple-100 pb-2">
        <button
          onClick={() => setActiveTab("directory")}
          className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-bold transition-all ${
            activeTab === "directory"
              ? "bg-[#6D28D9] text-white shadow-sm shadow-purple-600/20"
              : "text-slate-600 hover:text-[#6D28D9] hover:bg-purple-50"
          }`}
        >
          <GraduationCap className="w-4 h-4" />
          <span>Faculty Directory ({filteredFaculty.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("inquiries")}
          className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-bold transition-all ${
            activeTab === "inquiries"
              ? "bg-[#6D28D9] text-white shadow-sm shadow-purple-600/20"
              : "text-slate-600 hover:text-[#6D28D9] hover:bg-purple-50"
          }`}
        >
          <MessageSquare className="w-4 h-4" />
          <span>Live Inquiries & Responses ({facultyInquiries.length})</span>
        </button>
      </div>

      {/* VIEW 1: FACULTY DIRECTORY */}
      {activeTab === "directory" && (
        <>
          {/* Quick Stats Pill Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              onClick={() => setSelectedStatus("Available Now")}
              className={`p-4 rounded-2xl border text-left transition-all ${
                selectedStatus === "Available Now"
                  ? "bg-emerald-50 border-emerald-300 ring-2 ring-emerald-500/20"
                  : "bg-white border-purple-100 hover:border-emerald-200"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-800 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Available Now
                </span>
                <span className="text-xl font-extrabold text-emerald-700">
                  {stats.available}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                Professors present in cabin for consultation
              </p>
            </button>

            <button
              onClick={() => setSelectedStatus("Currently Unavailable")}
              className={`p-4 rounded-2xl border text-left transition-all ${
                selectedStatus === "Currently Unavailable"
                  ? "bg-rose-50 border-rose-300 ring-2 ring-rose-500/20"
                  : "bg-white border-purple-100 hover:border-rose-200"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-rose-800 flex items-center gap-1.5">
                  <XCircle className="w-4 h-4 text-rose-600" /> Currently Unavailable
                </span>
                <span className="text-xl font-extrabold text-rose-700">
                  {stats.unavailable}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                Currently engaged in lectures / meetings
              </p>
            </button>

            <button
              onClick={() => setSelectedStatus("All")}
              className={`p-4 rounded-2xl border text-left transition-all ${
                selectedStatus === "All"
                  ? "bg-purple-50 border-purple-300 ring-2 ring-purple-500/20"
                  : "bg-white border-purple-100 hover:border-purple-200"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-purple-900 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-purple-600" /> Total Directory
                </span>
                <span className="text-xl font-extrabold text-purple-800">
                  {facultyData.length}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                Full REC engineering faculty roster
              </p>
            </button>
          </div>

          {/* Search & Department Filter Bar */}
          <div className="bg-white p-4 rounded-2xl border border-purple-100 shadow-sm flex flex-col sm:flex-row items-center gap-3">
            {/* Search */}
            <div className="relative flex-1 w-full max-w-md">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search faculty name, cabin (e.g. CSE-204), or subject..."
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
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Building className="w-4 h-4 text-purple-600 hidden sm:block" />
              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="w-full sm:w-auto px-3 py-2.5 rounded-xl border border-purple-200 bg-white text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-200"
              >
                {departments.map((d) => (
                  <option key={d} value={d}>
                    {d === "All Departments" ? "All Departments" : d}
                  </option>
                ))}
              </select>

              {selectedStatus !== "All" && (
                <button
                  onClick={() => setSelectedStatus("All")}
                  className="px-2.5 py-1 text-xs font-semibold text-rose-600 bg-rose-50 rounded-lg hover:bg-rose-100 shrink-0"
                >
                  Clear status
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
                <FacultyCard
                  key={faculty.id}
                  faculty={faculty}
                  onInquire={(fac) => setInquiryFaculty(fac)}
                />
              ))}
            </div>
          )}
        </>
      )}

      {/* VIEW 2: INQUIRIES & RESPONSES LOG */}
      {activeTab === "inquiries" && (
        <div className="space-y-4">
          <div className="bg-white rounded-3xl border border-purple-100 p-6 shadow-sm">
            <h3 className="text-base font-extrabold text-slate-900 mb-1 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-[#6D28D9]" />
              <span>Student Inquiries & Teacher Responses (Supabase Database Log)</span>
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Real-time database feed of questions sent by students to faculty asking whether they are free in their cabins.
            </p>

            {facultyInquiries.length === 0 ? (
              <div className="p-8 text-center bg-purple-50/50 rounded-2xl border border-dashed border-purple-200">
                <MessageSquare className="w-8 h-8 text-purple-300 mx-auto mb-2" />
                <p className="text-xs text-slate-600 font-semibold">
                  No inquiries sent yet. Click "Ask if Free" on any faculty card to send an inquiry!
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {facultyInquiries.map((inq) => {
                  const fac = facultyData.find((f) => f.id === inq.faculty_id);
                  return (
                    <div
                      key={inq.id}
                      className="p-4 rounded-2xl bg-[#FAF9FF] border border-purple-100 space-y-3"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-purple-100/60 pb-2">
                        <div className="flex items-center gap-2.5">
                          {fac?.avatar && (
                            <img
                              src={fac.avatar}
                              alt={inq.faculty_name}
                              className="w-9 h-9 rounded-xl object-cover ring-1 ring-purple-200"
                            />
                          )}
                          <div>
                            <span className="font-bold text-slate-900 text-sm">
                              To: {inq.faculty_name}
                            </span>
                            <span className="text-xs text-slate-500 ml-2">
                              • From: {inq.student_name} ({inq.student_roll || "23CSD101"})
                            </span>
                          </div>
                        </div>

                        <span
                          className={`self-start sm:self-auto px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                            inq.reply_text
                              ? "bg-emerald-100 text-emerald-800"
                              : "bg-amber-100 text-amber-800"
                          }`}
                        >
                          {inq.reply_text ? "✅ Teacher Responded" : "⏳ Pending Teacher Response"}
                        </span>
                      </div>

                      <div className="text-xs text-slate-700 bg-white p-3 rounded-xl border border-purple-50">
                        <span className="font-bold text-slate-800 block text-[11px] text-purple-700 mb-0.5">
                          Student Inquiry:
                        </span>
                        "{inq.message}"
                      </div>

                      {inq.reply_text ? (
                        <div className="text-xs text-emerald-950 bg-emerald-50 p-3 rounded-xl border border-emerald-200">
                          <div className="flex items-center justify-between text-[11px] font-bold text-emerald-800 mb-1">
                            <span>👩‍🏫 {inq.faculty_name}'s Response:</span>
                            {inq.responded_at && (
                              <span className="text-emerald-700 font-normal">
                                {new Date(inq.responded_at).toLocaleTimeString([], {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })}
                              </span>
                            )}
                          </div>
                          "{inq.reply_text}"
                        </div>
                      ) : (
                        <p className="text-[11px] text-slate-400 italic">
                          Waiting for {inq.faculty_name} to respond from their dashboard.
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Inquiry Modal */}
      <FacultyInquiryModal
        faculty={inquiryFaculty}
        isOpen={!!inquiryFaculty}
        onClose={() => setInquiryFaculty(null)}
      />
    </div>
  );
}
