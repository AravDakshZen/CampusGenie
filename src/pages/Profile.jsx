import React, { useState } from "react";
import {
  User,
  Mail,
  GraduationCap,
  Calendar,
  Bus,
  Shield,
  Edit3,
  Check,
  X,
  Sparkles,
  QrCode,
  Building,
} from "lucide-react";
import { useApp } from "../context/AppContext";

export default function Profile() {
  const { profile, updateProfile } = useApp();

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...profile });
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    updateProfile(formData);
    setIsEditing(false);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  return (
    <div className="p-4 sm:p-6 max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-purple-100">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            <span>Student Profile</span>
            <span className="px-2.5 py-0.5 rounded-full bg-purple-100 text-[#6D28D9] text-xs font-bold">
              REC Verified
            </span>
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Rajalakshmi Engineering College Student Information System
          </p>
        </div>

        <button
          onClick={() => {
            setFormData({ ...profile });
            setIsEditing(!isEditing);
          }}
          className="self-start sm:self-auto flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-50 hover:bg-purple-100 text-[#6D28D9] font-bold text-xs border border-purple-200 transition-colors"
        >
          <Edit3 className="w-3.5 h-3.5" />
          <span>{isEditing ? "Cancel Editing" : "Edit Profile"}</span>
        </button>
      </div>

      {saveSuccess && (
        <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2 animate-in fade-in duration-200">
          <Check className="w-4 h-4 text-emerald-600" />
          <span>Student profile details successfully updated in local prototype storage!</span>
        </div>
      )}

      {/* Main Profile Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: REC ID Card Card */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-b from-[#4C1D95] to-[#6D28D9] rounded-3xl p-6 text-white shadow-xl shadow-purple-600/20 text-center relative overflow-hidden flex flex-col justify-between h-full">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />
            
            <div>
              {/* ID Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/20 text-left">
                <div>
                  <h3 className="font-extrabold text-sm uppercase tracking-wider">
                    Rajalakshmi
                  </h3>
                  <p className="text-[10px] text-purple-200">Engineering College</p>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/20">
                  STUDENT ID
                </span>
              </div>

              {/* Avatar & Basic Info */}
              <div className="my-6">
                <div className="relative inline-block">
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="w-24 h-24 rounded-2xl object-cover ring-4 ring-white/30 mx-auto shadow-md"
                  />
                  <span className="absolute bottom-0 right-0 w-5 h-5 bg-emerald-400 rounded-full ring-2 ring-white"></span>
                </div>

                <h2 className="text-xl font-extrabold mt-3 tracking-tight">
                  {profile.name}
                </h2>
                <p className="text-xs text-purple-200 font-mono font-bold mt-0.5">
                  Roll No: {profile.rollNumber}
                </p>
                <p className="text-[11px] text-purple-300">
                  Reg: {profile.registerNumber || "2116230101"}
                </p>
              </div>

              {/* Department & Batch */}
              <div className="bg-white/10 rounded-2xl p-3 text-left space-y-1.5 text-xs mb-4">
                <div className="flex justify-between">
                  <span className="text-purple-200">Department:</span>
                  <span className="font-semibold text-right truncate max-w-[130px]">
                    {profile.department}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-200">Year / Section:</span>
                  <span className="font-semibold">
                    {profile.year} • Sec {profile.section}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-200">Bus Route:</span>
                  <span className="font-semibold">
                    {profile.busRoute || "Bus 11 (Retteri)"}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom QR & Validity */}
            <div className="pt-4 border-t border-white/20 flex items-center justify-between text-[11px] text-purple-200">
              <span>Valid Thru: 2027</span>
              <div className="flex items-center gap-1 font-mono">
                <QrCode className="w-4 h-4 text-white" />
                <span>REC-PASS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right 2 Columns: Full Details or Edit Form */}
        <div className="lg:col-span-2 space-y-6">
          {isEditing ? (
            /* Edit Profile Form */
            <div className="bg-white rounded-3xl border border-purple-100 p-6 shadow-sm">
              <h2 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Edit3 className="w-4 h-4 text-[#6D28D9]" />
                <span>Edit Student Records</span>
              </h2>

              <form onSubmit={handleSave} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200 text-sm text-slate-900 focus:outline-none focus:border-[#6D28D9]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Roll Number
                    </label>
                    <input
                      type="text"
                      value={formData.rollNumber}
                      onChange={(e) =>
                        setFormData({ ...formData, rollNumber: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200 text-sm text-slate-900 focus:outline-none focus:border-[#6D28D9]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Department
                    </label>
                    <input
                      type="text"
                      value={formData.department}
                      onChange={(e) =>
                        setFormData({ ...formData, department: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200 text-sm text-slate-900 focus:outline-none focus:border-[#6D28D9]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Year
                    </label>
                    <input
                      type="text"
                      value={formData.year}
                      onChange={(e) =>
                        setFormData({ ...formData, year: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200 text-sm text-slate-900 focus:outline-none focus:border-[#6D28D9]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Section
                    </label>
                    <input
                      type="text"
                      value={formData.section}
                      onChange={(e) =>
                        setFormData({ ...formData, section: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200 text-sm text-slate-900 focus:outline-none focus:border-[#6D28D9]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Bus Route
                    </label>
                    <input
                      type="text"
                      value={formData.busRoute || "Bus 11 (Retteri)"}
                      onChange={(e) =>
                        setFormData({ ...formData, busRoute: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200 text-sm text-slate-900 focus:outline-none focus:border-[#6D28D9]"
                    />
                  </div>
                </div>

                <div className="pt-3 flex items-center justify-end gap-2 border-t border-purple-100">
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-[#6D28D9] text-white font-bold text-xs hover:bg-[#4C1D95] shadow-md shadow-purple-600/20"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          ) : (
            /* Profile Details Display */
            <div className="bg-white rounded-3xl border border-purple-100 p-6 shadow-sm space-y-6">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">
                  Academic & Contact Records
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-3.5 rounded-2xl bg-[#FAF9FF] border border-purple-50 space-y-1">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#6D28D9]" /> Official College Email
                    </span>
                    <span className="font-bold text-slate-900 font-mono text-sm block">
                      {profile.collegeEmail}
                    </span>
                    <span className="text-[10px] text-emerald-600 font-semibold">
                      ● Active Rajalakshmi Domain
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#FAF9FF] border border-purple-50 space-y-1">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-[#6D28D9]" /> Department
                    </span>
                    <span className="font-bold text-slate-900 text-sm block">
                      {profile.department}
                    </span>
                    <span className="text-[10px] text-slate-500 font-semibold">
                      Undergraduate B.E. Program
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#FAF9FF] border border-purple-50 space-y-1">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#6D28D9]" /> Current Standing
                    </span>
                    <span className="font-bold text-slate-900 text-sm block">
                      {profile.year} • Section {profile.section}
                    </span>
                    <span className="text-[10px] text-purple-700 font-semibold">
                      Semester V (Academic Year 2026-2027)
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#FAF9FF] border border-purple-50 space-y-1">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Bus className="w-3.5 h-3.5 text-[#6D28D9]" /> Transport Pass
                    </span>
                    <span className="font-bold text-slate-900 text-sm block">
                      {profile.busRoute || "Bus 11 (Moolakadai / Retteri)"}
                    </span>
                    <span className="text-[10px] text-emerald-600 font-semibold">
                      ● REC Transport Card Activated
                    </span>
                  </div>
                </div>
              </div>

              {/* Faculty Advisor Section */}
              <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-100 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-500 uppercase font-bold tracking-wider block">
                    Assigned Faculty Counselor
                  </span>
                  <span className="font-bold text-slate-900 text-sm">
                    {profile.advisor || "Dr. Revathi S. (CSE-204)"}
                  </span>
                  <p className="text-xs text-slate-500">Cabin CSE-204 • Available 2:00 PM – 4:00 PM</p>
                </div>
                <span className="px-3 py-1 rounded-xl bg-white text-[#6D28D9] border border-purple-200 text-xs font-bold shadow-2xs">
                  Academic Mentor
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
