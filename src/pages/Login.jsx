import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Sparkles,
  Lock,
  Mail,
  User,
  Hash,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  Eye,
  EyeOff,
  Building2,
  LogIn,
  UserPlus,
} from "lucide-react";
import { useApp } from "../context/AppContext";

export default function Login() {
  const [mode, setMode] = useState("signin"); // "signin" | "signup"
  
  // Sign In state
  const [email, setEmail] = useState("student@rajalakshmi.edu.in");
  const [password, setPassword] = useState("campusgenie123");
  const [showPassword, setShowPassword] = useState(false);
  
  // Sign Up state
  const [signupName, setSignupName] = useState("");
  const [signupRoll, setSignupRoll] = useState("");
  const [signupDept, setSignupDept] = useState("Computer Science and Engineering");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupConfirmPassword, setSignupConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const { login, signup } = useApp();
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const trimmedEmail = email.trim().toLowerCase();

    if (!trimmedEmail) {
      setError("Please enter your college email address.");
      return;
    }

    if (!password) {
      setError("Please enter your account password.");
      return;
    }

    if (!trimmedEmail.endsWith("@rajalakshmi.edu.in")) {
      setError("❌ Access restricted: Please use your official @rajalakshmi.edu.in email ID.");
      return;
    }

    setLoading(true);

    try {
      await login(trimmedEmail, password);
      setSuccess("Authentication successful! Loading campus assistant...");
      setTimeout(() => {
        navigate("/assistant");
      }, 500);
    } catch (err) {
      console.error("Sign in failed:", err);
      let errorMsg = err.message || "Failed to sign in. Please verify your email and password.";
      if (errorMsg.toLowerCase().includes("invalid login credentials")) {
        errorMsg = "Invalid email or password. Please verify your credentials.";
      } else if (errorMsg.toLowerCase().includes("email not confirmed")) {
        errorMsg = "Email address has not been confirmed in Supabase yet.";
      }
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const trimmedEmail = signupEmail.trim().toLowerCase();

    if (!signupName.trim()) {
      setError("Please enter your full student name.");
      return;
    }

    if (!trimmedEmail) {
      setError("Please enter your college email address.");
      return;
    }

    if (!trimmedEmail.endsWith("@rajalakshmi.edu.in")) {
      setError("❌ Please use your official @rajalakshmi.edu.in email ID for student registration.");
      return;
    }

    if (!signupPassword || signupPassword.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (signupPassword !== signupConfirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      await signup({
        email: trimmedEmail,
        password: signupPassword,
        fullName: signupName.trim(),
        rollNumber: signupRoll.trim() || "23CSD999",
        department: signupDept,
      });

      setSuccess("Account successfully created in Supabase database! Redirecting...");
      setTimeout(() => {
        navigate("/assistant");
      }, 700);
    } catch (err) {
      console.error("Signup failed:", err);
      setError(err.message || "Unable to register student account. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handlePresetFill = (presetEmail, presetPass = "campusgenie123") => {
    setEmail(presetEmail);
    setPassword(presetPass);
    setError("");
    setSuccess("");
  };

  return (
    <div className="min-h-screen bg-[#FAF9FF] flex flex-col justify-center items-center p-4 sm:p-6 relative overflow-hidden">
      {/* Background decorative gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none" />

      {/* Main Authentication Card */}
      <div className="w-full max-w-md bg-white rounded-3xl border border-purple-100 shadow-xl shadow-purple-600/10 p-6 sm:p-8 relative z-10">
        {/* Brand Header */}
        <div className="text-center mb-5">
          <div className="inline-flex relative mb-3">
            <img
              src="/logo.png"
              alt="Campus Genie"
              className="w-20 h-20 object-contain rounded-2xl shadow-lg shadow-purple-500/20 ring-4 ring-purple-100 mx-auto transform hover:scale-105 transition-transform bg-white"
            />
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Campus Genie
          </h1>
          <p className="text-sm font-medium text-purple-700 mt-0.5">
            AI-Powered Rajalakshmi Campus Assistant
          </p>
          <div className="flex items-center justify-center gap-1.5 mt-1.5 text-xs text-slate-500">
            <Building2 className="w-3.5 h-3.5 text-purple-600" />
            <span>Rajalakshmi Engineering College, Thandalam</span>
          </div>
        </div>

        {/* Tab Switcher: Sign In vs Sign Up */}
        <div className="flex rounded-2xl bg-purple-50 p-1 mb-5 border border-purple-100">
          <button
            type="button"
            onClick={() => {
              setMode("signin");
              setError("");
              setSuccess("");
            }}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
              mode === "signin"
                ? "bg-white text-[#6D28D9] shadow-sm"
                : "text-slate-600 hover:text-[#6D28D9]"
            }`}
          >
            <LogIn className="w-3.5 h-3.5" />
            <span>Sign In</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setMode("signup");
              setError("");
              setSuccess("");
            }}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
              mode === "signup"
                ? "bg-white text-[#6D28D9] shadow-sm"
                : "text-slate-600 hover:text-[#6D28D9]"
            }`}
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span>New Student Sign Up</span>
          </button>
        </div>

        {/* Error Notification Alert */}
        {error && (
          <div className="mb-4 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-start gap-2 animate-in fade-in duration-200">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <div className="flex-1">{error}</div>
          </div>
        )}

        {/* Success Alert */}
        {success && (
          <div className="mb-4 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold flex items-start gap-2 animate-in fade-in duration-200">
            <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
            <div className="flex-1">{success}</div>
          </div>
        )}

        {/* SIGN IN FORM */}
        {mode === "signin" && (
          <form onSubmit={handleSignIn} className="space-y-4">
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
                  placeholder="Enter your password"
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
                <span>Authenticating with Supabase...</span>
              ) : (
                <>
                  <span>Sign In with Database</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}

        {/* SIGN UP FORM */}
        {mode === "signup" && (
          <form onSubmit={handleSignUp} className="space-y-3.5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Full Name
              </label>
              <div className="relative flex items-center">
                <User className="w-4 h-4 absolute left-3.5 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  value={signupName}
                  onChange={(e) => setSignupName(e.target.value)}
                  placeholder="e.g. Yashawini S."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-purple-200 focus:border-[#6D28D9] focus:ring-4 focus:ring-purple-100 text-sm text-slate-900 bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Roll Number
                </label>
                <div className="relative flex items-center">
                  <Hash className="w-4 h-4 absolute left-3 text-slate-400 pointer-events-none" />
                  <input
                    type="text"
                    value={signupRoll}
                    onChange={(e) => setSignupRoll(e.target.value)}
                    placeholder="23CSD101"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-purple-200 focus:border-[#6D28D9] text-xs font-mono uppercase bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Department
                </label>
                <select
                  value={signupDept}
                  onChange={(e) => setSignupDept(e.target.value)}
                  className="w-full px-2.5 py-2.5 rounded-xl border border-purple-200 focus:border-[#6D28D9] text-xs font-semibold bg-white"
                >
                  <option value="Computer Science and Engineering">CSE</option>
                  <option value="Artificial Intelligence & Data Science">AI & DS</option>
                  <option value="Information Technology">IT</option>
                  <option value="Electronics & Communication Engineering">ECE</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                College Email
              </label>
              <div className="relative flex items-center">
                <Mail className="w-4 h-4 absolute left-3.5 text-slate-400 pointer-events-none" />
                <input
                  type="email"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  placeholder="name@rajalakshmi.edu.in"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-purple-200 focus:border-[#6D28D9] text-sm text-slate-900 bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  placeholder="Min 6 characters"
                  className="w-full px-3 py-2.5 rounded-xl border border-purple-200 focus:border-[#6D28D9] text-sm bg-white"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={signupConfirmPassword}
                  onChange={(e) => setSignupConfirmPassword(e.target.value)}
                  placeholder="Re-enter password"
                  className="w-full px-3 py-2.5 rounded-xl border border-purple-200 focus:border-[#6D28D9] text-sm bg-white"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] hover:from-[#4C1D95] text-white font-bold text-sm shadow-md shadow-purple-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
            >
              {loading ? (
                <span>Registering student in Supabase...</span>
              ) : (
                <>
                  <UserPlus className="w-4 h-4" />
                  <span>Create Account in Supabase</span>
                </>
              )}
            </button>
          </form>
        )}

        {/* Quick Demo Credentials Helper */}
        <div className="mt-5 pt-4 border-t border-purple-100 text-center">
          <p className="text-xs text-slate-500 font-medium mb-2">
            Try with verified test account:
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              type="button"
              onClick={() => handlePresetFill("student@rajalakshmi.edu.in", "campusgenie123")}
              className="px-2.5 py-1 rounded-lg bg-purple-50 text-[#6D28D9] text-xs font-semibold hover:bg-purple-100 border border-purple-200 transition-colors"
            >
              ✅ student@rajalakshmi.edu.in
            </button>
            <button
              type="button"
              onClick={() => handlePresetFill("test@gmail.com", "campusgenie123")}
              className="px-2.5 py-1 rounded-lg bg-rose-50 text-rose-700 text-xs font-semibold hover:bg-rose-100 border border-rose-200 transition-colors"
              title="Test invalid domain rejection"
            >
              ❌ test@gmail.com
            </button>
          </div>
        </div>

        {/* Security & Supabase Status Badge */}
        <div className="mt-4 flex flex-col items-center justify-center gap-1 text-slate-400 text-[11px]">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Supabase Cloud Database Authentication</span>
          </div>
          <span className="font-mono text-[10px] text-purple-600">
            Project: fyknhourmgoyvdvjndce
          </span>
        </div>
      </div>
    </div>
  );
}
