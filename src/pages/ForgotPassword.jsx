import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  KeyRound,
  ArrowRight,
  ArrowLeft,
  Building2,
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { requestPasswordReset, directAdminResetPassword } from "../lib/supabase";

export default function ForgotPassword() {
  const [email, setEmail] = useState("student@rajalakshmi.edu.in");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [recoveryLink, setRecoveryLink] = useState(null);

  // Direct reset tab state
  const [activeTab, setActiveTab] = useState("email"); // "email" | "direct"
  const [directPassword, setDirectPassword] = useState("");
  const [directConfirmPassword, setDirectConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSendResetEmail = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setRecoveryLink(null);

    const trimmedEmail = email.trim().toLowerCase();

    if (!trimmedEmail) {
      setError("Please enter your college email address.");
      return;
    }

    if (!trimmedEmail.endsWith("@rajalakshmi.edu.in")) {
      setError("❌ Access restricted: Please use your official @rajalakshmi.edu.in email ID.");
      return;
    }

    setLoading(true);

    try {
      const res = await requestPasswordReset(trimmedEmail);
      setSuccess(`Password reset instructions dispatched for ${trimmedEmail}!`);
      if (res?.recoveryUrl) {
        setRecoveryLink(res.recoveryUrl);
      }
    } catch (err) {
      console.error("Forgot password request failed:", err);
      let msg = err.message || "Failed to send reset link. Please check the email entered.";
      if (msg.toLowerCase().includes("user not found")) {
        msg = "No account found with this email. Please check your roll/college email or register a new account.";
      }
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleDirectReset = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const trimmedEmail = email.trim().toLowerCase();

    if (!trimmedEmail) {
      setError("Please enter your college email address.");
      return;
    }

    if (!trimmedEmail.endsWith("@rajalakshmi.edu.in")) {
      setError("❌ Access restricted: Please use your official @rajalakshmi.edu.in email ID.");
      return;
    }

    if (!directPassword || directPassword.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (directPassword !== directConfirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      await directAdminResetPassword(trimmedEmail, directPassword);
      setSuccess("Password updated successfully! You can now sign in with your new password.");
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      console.error("Direct reset failed:", err);
      setError(err.message || "Failed to update password. Please verify the account exists.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9FF] flex flex-col justify-center items-center p-4 sm:p-6 relative overflow-hidden">
      {/* Background decorative gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none" />

      {/* Main Card */}
      <div className="w-full max-w-md bg-white rounded-3xl border border-purple-100 shadow-xl shadow-purple-600/10 p-6 sm:p-8 relative z-10">
        {/* Back to Login Link */}
        <div className="mb-4">
          <Link
            to="/login"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-700 hover:text-purple-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Sign In</span>
          </Link>
        </div>

        {/* Brand Header */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-purple-100 text-[#6D28D9] mb-3 shadow-md shadow-purple-500/10">
            <KeyRound className="w-7 h-7" />
          </div>

          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Reset Password
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Recover access to your Campus Genie student account
          </p>
          <div className="flex items-center justify-center gap-1.5 mt-1.5 text-xs text-slate-400">
            <Building2 className="w-3.5 h-3.5 text-purple-600" />
            <span>Rajalakshmi Engineering College</span>
          </div>
        </div>

        {/* Mode Switcher Tabs */}
        <div className="flex rounded-2xl bg-purple-50 p-1 mb-5 border border-purple-100 text-xs font-bold">
          <button
            type="button"
            onClick={() => {
              setActiveTab("email");
              setError("");
              setSuccess("");
            }}
            className={`flex-1 py-2 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
              activeTab === "email"
                ? "bg-white text-[#6D28D9] shadow-sm"
                : "text-slate-600 hover:text-[#6D28D9]"
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Reset Link</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab("direct");
              setError("");
              setSuccess("");
            }}
            className={`flex-1 py-2 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
              activeTab === "direct"
                ? "bg-white text-[#6D28D9] shadow-sm"
                : "text-slate-600 hover:text-[#6D28D9]"
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Direct Instant Reset</span>
          </button>
        </div>

        {/* Alerts */}
        {error && (
          <div className="mb-4 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-start gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <div className="flex-1">{error}</div>
          </div>
        )}

        {success && (
          <div className="mb-4 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
            <div className="flex-1">{success}</div>
          </div>
        )}

        {/* TAB 1: Send Reset Link */}
        {activeTab === "email" && (
          <form onSubmit={handleSendResetEmail} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                College Email
              </label>
              <div className="relative flex items-center">
                <div className="absolute left-3.5 text-slate-400 pointer-events-none">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                  placeholder="student@rajalakshmi.edu.in"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-purple-200 focus:border-[#6D28D9] focus:ring-4 focus:ring-purple-100 text-sm text-slate-900 placeholder-slate-400 transition-all bg-white"
                  required
                />
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                Enter your registered <span className="font-mono text-purple-700">@rajalakshmi.edu.in</span> email
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] hover:from-[#4C1D95] hover:to-[#7C3AED] text-white font-bold text-sm shadow-md shadow-purple-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 cursor-pointer"
            >
              {loading ? (
                <span>Generating recovery link...</span>
              ) : (
                <>
                  <span>Send Recovery Instructions</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            {recoveryLink && (
              <div className="mt-4 p-3 bg-purple-50 rounded-xl border border-purple-200">
                <div className="flex items-center gap-1.5 text-xs font-bold text-purple-900 mb-1">
                  <SparkleIcon className="w-3.5 h-3.5 text-purple-700" />
                  <span>Instant Recovery Link Ready:</span>
                </div>
                <p className="text-[11px] text-purple-700 mb-2">
                  You can click below to immediately reset your password without checking email:
                </p>
                <a
                  href={recoveryLink}
                  className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 bg-[#6D28D9] text-white rounded-lg hover:bg-[#5B21B6] transition-colors"
                >
                  <span>Open Password Reset Link</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </form>
        )}

        {/* TAB 2: Direct Reset Form */}
        {activeTab === "direct" && (
          <form onSubmit={handleDirectReset} className="space-y-3.5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                College Email
              </label>
              <div className="relative flex items-center">
                <Mail className="w-4 h-4 absolute left-3.5 text-slate-400 pointer-events-none" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="student@rajalakshmi.edu.in"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-purple-200 focus:border-[#6D28D9] text-sm text-slate-900 bg-white"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                New Password
              </label>
              <div className="relative flex items-center">
                <Lock className="w-4 h-4 absolute left-3.5 text-slate-400 pointer-events-none" />
                <input
                  type="password"
                  value={directPassword}
                  onChange={(e) => setDirectPassword(e.target.value)}
                  placeholder="Minimum 6 characters"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-purple-200 focus:border-[#6D28D9] text-sm text-slate-900 bg-white"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Confirm New Password
              </label>
              <div className="relative flex items-center">
                <Lock className="w-4 h-4 absolute left-3.5 text-slate-400 pointer-events-none" />
                <input
                  type="password"
                  value={directConfirmPassword}
                  onChange={(e) => setDirectConfirmPassword(e.target.value)}
                  placeholder="Re-enter new password"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-purple-200 focus:border-[#6D28D9] text-sm text-slate-900 bg-white"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] hover:from-[#4C1D95] text-white font-bold text-sm shadow-md shadow-purple-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
            >
              {loading ? (
                <span>Updating password in Supabase...</span>
              ) : (
                <>
                  <KeyRound className="w-4 h-4" />
                  <span>Update Password Now</span>
                </>
              )}
            </button>
          </form>
        )}

        {/* Footer info */}
        <div className="mt-5 pt-4 border-t border-purple-100 flex flex-col items-center justify-center gap-1 text-slate-400 text-[11px]">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Supabase Cloud Authentication Service</span>
          </div>
          <span className="font-mono text-[10px] text-purple-600">
            Project: fyknhourmgoyvdvjndce
          </span>
        </div>
      </div>
    </div>
  );
}

function SparkleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z" />
    </svg>
  );
}

