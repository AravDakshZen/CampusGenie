import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Lock,
  KeyRound,
  Eye,
  EyeOff,
  ArrowRight,
  ArrowLeft,
  Building2,
  AlertCircle,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import { supabase, updateUserPassword } from "../lib/supabase";

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [hasSession, setHasSession] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    // Check if user has active session or recovery session
    supabase.auth.getSession().then(({ data: { session } }) => {
      // If no session and no hash parameters, user might not have clicked a valid link
      if (!session && !window.location.hash) {
        setHasSession(false);
      }
    });
  }, []);

  const handleReset = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!newPassword || newPassword.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      await updateUserPassword(newPassword);
      setSuccess("Your password has been successfully reset! Redirecting to login...");
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      console.error("Password update error:", err);
      setError(err.message || "Failed to update password. Your recovery link may have expired.");
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
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-purple-100 text-[#6D28D9] mb-3 shadow-md shadow-purple-500/10">
            <KeyRound className="w-7 h-7" />
          </div>

          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Create New Password
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Choose a new secure password for your student account
          </p>
          <div className="flex items-center justify-center gap-1.5 mt-1.5 text-xs text-slate-400">
            <Building2 className="w-3.5 h-3.5 text-purple-600" />
            <span>Rajalakshmi Engineering College</span>
          </div>
        </div>

        {!hasSession && (
          <div className="mb-4 p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold">
            Note: If you opened this page directly without a recovery link, please use the{" "}
            <Link to="/forgot-password" className="text-purple-700 underline font-bold">
              Forgot Password
            </Link>{" "}
            page to send a link first.
          </div>
        )}

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

        <form onSubmit={handleReset} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              New Password
            </label>
            <div className="relative flex items-center">
              <Lock className="w-4 h-4 absolute left-3.5 text-slate-400 pointer-events-none" />
              <input
                type={showPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter at least 6 characters"
                className="w-full pl-10 pr-10 py-3 rounded-xl border border-purple-200 focus:border-[#6D28D9] focus:ring-4 focus:ring-purple-100 text-sm text-slate-900 bg-white"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 text-slate-400 hover:text-slate-600 p-1"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Confirm New Password
            </label>
            <div className="relative flex items-center">
              <Lock className="w-4 h-4 absolute left-3.5 text-slate-400 pointer-events-none" />
              <input
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter your new password"
                className="w-full pl-10 pr-10 py-3 rounded-xl border border-purple-200 focus:border-[#6D28D9] focus:ring-4 focus:ring-purple-100 text-sm text-slate-900 bg-white"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] hover:from-[#4C1D95] hover:to-[#7C3AED] text-white font-bold text-sm shadow-md shadow-purple-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 cursor-pointer"
          >
            {loading ? (
              <span>Updating password...</span>
            ) : (
              <>
                <span>Save New Password</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <div className="mt-5 pt-4 border-t border-purple-100 flex flex-col items-center justify-center gap-1 text-slate-400 text-[11px]">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Supabase Cloud Authentication Service</span>
          </div>
        </div>
      </div>
    </div>
  );
}

