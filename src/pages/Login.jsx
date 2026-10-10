import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Sparkles,
  Lock,
  Mail,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  Eye,
  EyeOff,
  Building2,
} from "lucide-react";
import { useApp } from "../context/AppContext";

export default function Login() {
  const [email, setEmail] = useState("student@rajalakshmi.edu.in");
  const [password, setPassword] = useState("campusgenie123");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useApp();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const trimmedEmail = email.trim().toLowerCase();

    // Validation 1: Email cannot be empty
    if (!trimmedEmail) {
      setError("Email cannot be empty.");
      return;
    }

    // Validation 2: Password cannot be empty
    if (!password) {
      setError("Password cannot be empty.");
      return;
    }

    // Validation 3: Email must end with exactly @rajalakshmi.edu.in
    if (!trimmedEmail.endsWith("@rajalakshmi.edu.in")) {
      setError("❌ Please use your Rajalakshmi Engineering College email ID.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      login(trimmedEmail);
      // Requirement: Open AI Assistant immediately!
      navigate("/assistant");
    }, 300);
  };

  const handlePresetFill = (presetEmail) => {
    setEmail(presetEmail);
    setPassword("campusgenie123");
    setError("");
  };

  return (
    <div className="min-h-screen bg-[#FAF9FF] flex flex-col justify-center items-center p-4 sm:p-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none" />

      {/* Main Login Card */}
      <div className="w-full max-w-md bg-white rounded-3xl border border-purple-100 shadow-xl shadow-purple-600/10 p-6 sm:p-8 relative z-10">
        {/* Brand Header with Uploaded Campus Genie Logo */}
        <div className="text-center mb-6">
          <div className="inline-flex relative mb-3">
            <img
              src="/logo.png"
              alt="Campus Genie"
              className="w-20 h-20 object-contain rounded-2xl shadow-lg shadow-purple-500/20 ring-4 ring-purple-100 mx-auto transform hover:scale-105 transition-transform"
            />
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Campus Genie
          </h1>
          <p className="text-sm font-medium text-purple-700 mt-1">
            AI-Powered Rajalakshmi Campus Assistant
          </p>
          <div className="flex items-center justify-center gap-1.5 mt-2 text-xs text-slate-500">
            <Building2 className="w-3.5 h-3.5 text-purple-600" />
            <span>Rajalakshmi Engineering College, Thandalam</span>
          </div>
        </div>

        {/* Error Notification Alert */}
        {error && (
          <div className="mb-5 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-start gap-2 animate-in fade-in duration-200">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <div className="flex-1">{error}</div>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
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
              />
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              Must end with <span className="font-mono text-purple-700">@rajalakshmi.edu.in</span>
            </p>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Password
            </label>
            <div className="relative flex items-center">
              <div className="absolute left-3.5 text-slate-400 pointer-events-none">
                <Lock className="w-4 h-4" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (error) setError("");
                }}
                placeholder="Enter your college password"
                className="w-full pl-10 pr-10 py-3 rounded-xl border border-purple-200 focus:border-[#6D28D9] focus:ring-4 focus:ring-purple-100 text-sm text-slate-900 placeholder-slate-400 transition-all bg-white"
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

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] hover:from-[#4C1D95] hover:to-[#7C3AED] text-white font-bold text-sm shadow-md shadow-purple-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 cursor-pointer"
          >
            {loading ? (
              <span>Authenticating...</span>
            ) : (
              <>
                <span>Sign In to Campus Genie</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Quick Demo Credentials Helper */}
        <div className="mt-6 pt-5 border-t border-purple-100 text-center">
          <p className="text-xs text-slate-500 font-medium mb-2">
            Try with pre-filled test accounts:
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              type="button"
              onClick={() => handlePresetFill("student@rajalakshmi.edu.in")}
              className="px-2.5 py-1 rounded-lg bg-purple-50 text-[#6D28D9] text-xs font-semibold hover:bg-purple-100 border border-purple-200 transition-colors"
            >
              ✅ Valid: student@rajalakshmi.edu.in
            </button>
            <button
              type="button"
              onClick={() => handlePresetFill("student@gmail.com")}
              className="px-2.5 py-1 rounded-lg bg-rose-50 text-rose-700 text-xs font-semibold hover:bg-rose-100 border border-rose-200 transition-colors"
              title="Test invalid domain rejection"
            >
              ❌ Invalid: student@gmail.com
            </button>
          </div>
        </div>

        {/* Security Badge */}
        <div className="mt-6 flex items-center justify-center gap-1.5 text-slate-400 text-[11px]">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Rajalakshmi Engineering College Single Sign-On (SSO)</span>
        </div>
      </div>
    </div>
  );
}
