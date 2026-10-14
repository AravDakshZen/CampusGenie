import React, { useState } from "react";
import {
  MessageSquare,
  Send,
  X,
  CheckCircle2,
  Clock,
  Sparkles,
  MapPin,
  HelpCircle,
} from "lucide-react";
import { useApp } from "../context/AppContext";

export default function FacultyInquiryModal({ faculty, isOpen, onClose }) {
  const { currentUser, sendFacultyInquiry } = useApp();
  const [message, setMessage] = useState("");
  const [sentSuccess, setSentSuccess] = useState(false);
  const [sending, setSending] = useState(false);

  if (!isOpen || !faculty) return null;

  const quickTemplates = [
    `Good afternoon ${faculty.shortName}, are you currently free in cabin ${faculty.cabin}?`,
    `Hello ${faculty.shortName}, I have a quick doubt regarding the class topic, may I visit your cabin now?`,
    `Are you available for student consultations today after 3:00 PM?`,
    `When is your next available consultation slot this week?`,
  ];

  const handleSend = async (e) => {
    e?.preventDefault();
    if (!message.trim() || sending) return;

    setSending(true);
    try {
      await sendFacultyInquiry({
        facultyId: faculty.id,
        facultyName: faculty.name,
        message: message.trim(),
      });
      setSentSuccess(true);
      setTimeout(() => {
        setSentSuccess(false);
        setMessage("");
        onClose();
      }, 1600);
    } catch (err) {
      console.error("Failed to send inquiry:", err);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-purple-100 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          title="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-purple-100">
          <div className="relative">
            <img
              src={faculty.avatar}
              alt={faculty.name}
              className="w-13 h-13 rounded-2xl object-cover ring-2 ring-purple-200"
            />
            <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-2 ring-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-extrabold text-slate-900">
                Ask if {faculty.shortName} is Free
              </h3>
            </div>
            <p className="text-xs text-purple-700 font-semibold flex items-center gap-1.5 mt-0.5">
              <MapPin className="w-3.5 h-3.5 text-purple-600" />
              <span>Cabin {faculty.cabin} • {faculty.cabinLocation}</span>
            </p>
          </div>
        </div>

        {/* Success Alert */}
        {sentSuccess ? (
          <div className="py-8 text-center space-y-3 animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-md shadow-emerald-500/20">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-base font-bold text-slate-900">
              Inquiry Sent to {faculty.shortName}!
            </h4>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Your inquiry has been stored in the database. When {faculty.shortName} responds, you will receive an instant notification in your feed!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSend} className="space-y-4">
            {/* Student info indicator */}
            <div className="bg-[#FAF9FF] p-3 rounded-xl border border-purple-100 text-xs flex items-center justify-between text-slate-600">
              <span>
                Sending as: <strong>{currentUser?.name || "Student"}</strong> ({currentUser?.rollNumber || "23CSD101"})
              </span>
              <span className="text-[11px] font-semibold text-[#6D28D9] bg-purple-100/70 px-2 py-0.5 rounded-md">
                Verified Student
              </span>
            </div>

            {/* Quick Templates */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                <span>Quick Inquiry Questions:</span>
              </label>
              <div className="space-y-1.5">
                {quickTemplates.map((template, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setMessage(template)}
                    className="w-full text-left p-2 rounded-xl text-xs bg-slate-50 hover:bg-purple-50 text-slate-700 hover:text-[#6D28D9] border border-slate-200 hover:border-purple-300 transition-all cursor-pointer"
                  >
                    "{template}"
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Message Input */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Your Message / Question:
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={`Ask ${faculty.shortName} about their availability or doubt clarification...`}
                className="w-full p-3 rounded-xl border border-purple-200 focus:border-[#6D28D9] focus:ring-4 focus:ring-purple-100 text-xs text-slate-900 placeholder-slate-400 bg-white"
                required
              />
            </div>

            {/* Footer Buttons */}
            <div className="flex items-center justify-end gap-2 pt-2 border-t border-purple-50">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={!message.trim() || sending}
                className="px-5 py-2 rounded-xl text-xs font-bold bg-[#6D28D9] hover:bg-[#4C1D95] text-white shadow-md shadow-purple-600/25 flex items-center gap-1.5 disabled:opacity-50 cursor-pointer"
              >
                {sending ? (
                  <span>Sending to DB...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Inquiry to Teacher</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
