import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { AppProvider, useApp } from "./context/AppContext";

// Components
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

// Pages
import Login from "./pages/Login";
import AIAssistant from "./pages/AIAssistant";
import Transport from "./pages/Transport";
import Faculty from "./pages/Faculty";
import Timetable from "./pages/Timetable";
import LostFound from "./pages/LostFound";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

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
  if (currentUser) {
    return <Navigate to="/assistant" replace />;
  }
  return children;
}

export default function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          {/* Login Route */}
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
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
