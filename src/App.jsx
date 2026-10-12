import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AppProvider, useApp } from "./context/AppContext";

// Components
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

// Pages
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import AIAssistant from "./pages/AIAssistant";
import Transport from "./pages/Transport";
import Faculty from "./pages/Faculty";
import Timetable from "./pages/Timetable";
import LostFound from "./pages/LostFound";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

// Intercept password reset links landing on any route
function AuthRecoveryRedirect() {
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    const hash = window.location.hash || "";
    const search = window.location.search || "";
    const isRecovery =
      hash.includes("type=recovery") ||
      search.includes("type=recovery") ||
      (hash.includes("access_token=") && hash.includes("recovery"));

    if (isRecovery && location.pathname !== "/reset-password") {
      console.log("Intercepted recovery link, redirecting to /reset-password");
      navigate("/reset-password" + hash + search, { replace: true });
    }
  }, [location, navigate]);

  return null;
}

// Protected Layout
function MainLayout() {
  const { currentUser, settings } = useApp();

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div
      className={`min-h-screen flex flex-col lg:flex-row ${
        settings.darkMode
          ? "bg-slate-950 text-slate-100"
          : "bg-[#FAF9FF] text-[#1F2937]"
      }`}
    >
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

// Public Route (redirects to /assistant if already logged in)
function PublicRoute({ children }) {
  const { currentUser } = useApp();
  // Don't redirect away if this is a recovery link
  if (currentUser && !window.location.hash.includes("type=recovery")) {
    return <Navigate to="/assistant" replace />;
  }
  return children;
}

export default function App() {
  return (
    <AppProvider>
      <Router>
        <AuthRecoveryRedirect />
        <Routes>
          {/* Authentication Routes */}
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/forgot-password"
            element={<ForgotPassword />}
          />
          <Route
            path="/reset-password"
            element={<ResetPassword />}
          />

          {/* Protected Application Routes */}
          <Route element={<MainLayout />}>
            <Route index element={<Navigate to="/assistant" replace />} />
            <Route path="/assistant" element={<AIAssistant />} />
            <Route path="/transport" element={<Transport />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/timetable" element={<Timetable />} />
            <Route path="/lost-found" element={<LostFound />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/assistant" replace />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}
