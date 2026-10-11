import React, { createContext, useContext, useState, useEffect } from "react";
import { initialNotifications } from "../data/notificationData";
import { initialLostFoundItems } from "../data/lostFoundData";
import { studentInfo } from "../data/timetableData";
import { facultyList, getFacultyAvailability } from "../data/facultyData";
import { supabase, signInUser, signUpUser, signOutUser } from "../lib/supabase";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  // Authentication State
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem("campus_genie_user");
    return saved ? JSON.parse(saved) : null;
  });

  const [authLoading, setAuthLoading] = useState(true);

  // Notifications State
  const [notifications, setNotifications] = useState(() => {
    const saved = localStorage.getItem("campus_genie_notifs");
    return saved ? JSON.parse(saved) : initialNotifications;
  });

  // Lost & Found Items State
  const [lostFoundItems, setLostFoundItems] = useState(() => {
    const saved = localStorage.getItem("campus_genie_lostfound");
    return saved ? JSON.parse(saved) : initialLostFoundItems;
  });

  // Student Profile State
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem("campus_genie_profile");
    return saved ? JSON.parse(saved) : studentInfo;
  });

  // Timetable Holds (array of class IDs currently marked on hold/suspended)
  const [timetableHolds, setTimetableHolds] = useState(() => {
    const saved = localStorage.getItem("campus_genie_holds");
    return saved ? JSON.parse(saved) : ["mon-4"]; // default mock hold on Monday OS class
  });

  // Timetable Clock Lock (freeze/hold clock mode)
  const [isTimetableClockLocked, setIsTimetableClockLocked] = useState(false);

  // Faculty Notification Subscriptions
  const [facultyAlerts, setFacultyAlerts] = useState(["fac-revathi"]);

  // Demo Time Simulation (Default Monday 14:30 / 2:30 PM: Revathi Ma'am is Available 2-4 PM)
  const [demoTime, setDemoTime] = useState("14:30");
  const [demoDay, setDemoDay] = useState("Monday");

  // Chat prefilled question (when clicking "Ask AI" from other pages)
  const [activeChatPrompt, setActiveChatPrompt] = useState("");

  // Gemini API Key (stored locally so user can test Gemini freely)
  const [geminiApiKey, setGeminiApiKey] = useState(() => {
    return localStorage.getItem("campus_genie_gemini_key") || "";
  });

  // Settings
  const [settings, setSettings] = useState({
    notificationsEnabled: true,
    facultyAlertsEnabled: true,
    transportAlertsEnabled: true,
    classRemindersEnabled: true,
    darkMode: false,
    soundEnabled: true,
    useGeminiAI: true,
  });

  // Mobile sidebar drawer state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Listen to Supabase Auth state changes
  useEffect(() => {
    let mounted = true;

    async function initAuth() {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session && mounted) {
          const userMeta = session.user.user_metadata || {};
          const userObj = {
            id: session.user.id,
            email: session.user.email,
            name: userMeta.full_name || profile.name || "Student",
            rollNumber: userMeta.roll_number || profile.rollNumber || "23CSD101",
            department: userMeta.department || profile.department || "Computer Science and Engineering",
            year: userMeta.year || profile.year || "III Year",
            loginTime: new Date().toISOString(),
          };
          setCurrentUser(userObj);
          setProfile((prev) => ({
            ...prev,
            name: userObj.name,
            rollNumber: userObj.rollNumber,
            department: userObj.department,
            collegeEmail: userObj.email,
          }));
        }
      } catch (e) {
        console.warn("Supabase session check:", e);
      } finally {
        if (mounted) setAuthLoading(false);
      }
    }

    initAuth();

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        const userMeta = session.user.user_metadata || {};
        const userObj = {
          id: session.user.id,
          email: session.user.email,
          name: userMeta.full_name || profile.name || "Student",
          rollNumber: userMeta.roll_number || profile.rollNumber || "23CSD101",
          department: userMeta.department || profile.department || "Computer Science and Engineering",
          year: userMeta.year || profile.year || "III Year",
          loginTime: new Date().toISOString(),
        };
        setCurrentUser(userObj);
      } else {
        // if explicitly signed out from supabase
      }
    });

    return () => {
      mounted = false;
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  // Sync states to localStorage
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("campus_genie_user", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("campus_genie_user");
    }
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem("campus_genie_holds", JSON.stringify(timetableHolds));
  }, [timetableHolds]);

  useEffect(() => {
    localStorage.setItem("campus_genie_gemini_key", geminiApiKey);
  }, [geminiApiKey]);

  useEffect(() => {
    localStorage.setItem("campus_genie_notifs", JSON.stringify(notifications));
  }, [notifications]);

  useEffect(() => {
    localStorage.setItem("campus_genie_lostfound", JSON.stringify(lostFoundItems));
  }, [lostFoundItems]);

  useEffect(() => {
    localStorage.setItem("campus_genie_profile", JSON.stringify(profile));
  }, [profile]);

  // Dynamically synchronize notifications based on schedule and demo time
  useEffect(() => {
    const revathi = facultyList.find((f) => f.id === "fac-revathi");
    const revathiAvail = revathi ? getFacultyAvailability(revathi, demoTime, demoDay) : null;
    const isRevathiAvailable = revathiAvail?.status === "Available Now";

    const arun = facultyList.find((f) => f.id === "fac-arun");
    const arunAvail = arun ? getFacultyAvailability(arun, demoTime, demoDay) : null;
    const isArunAvailable = arunAvail?.status === "Available Now";

    setNotifications((prev) => {
      let updated = [...prev];

      // Handle Revathi notification
      const revathiIndex = updated.findIndex(
        (n) => n.id === "notif-1" || n.id === "notif-revathi-avail" || n.title.includes("Revathi Ma'am is available now")
      );
      if (isRevathiAvailable) {
        if (revathiIndex === -1) {
          updated.unshift({
            id: "notif-revathi-avail",
            title: "Revathi Ma'am is available now!",
            subtitle: "CSE-204 • Available until 4:00 PM",
            category: "faculty",
            icon: "GraduationCap",
            timestamp: "Just now",
            timeAgo: "Live",
            read: false,
            priority: "high",
            actionLink: "/faculty",
            details: "Dr. Revathi S. is currently available in cabin CSE-204 for student consultations and DBMS clarifications.",
          });
        }
      } else {
        if (revathiIndex !== -1) {
          updated.splice(revathiIndex, 1);
        }
      }

      // Handle Arun notification
      const arunIndex = updated.findIndex(
        (n) => n.id === "notif-arun-avail" || n.title.includes("Arun Sir is available now")
      );
      if (isArunAvailable) {
        if (arunIndex === -1) {
          updated.unshift({
            id: "notif-arun-avail",
            title: "Arun Sir is available now!",
            subtitle: "AI-108 • Available until 12:00 PM",
            category: "faculty",
            icon: "GraduationCap",
            timestamp: "Just now",
            timeAgo: "Live",
            read: false,
            priority: "high",
            actionLink: "/faculty",
            details: "Dr. Arun Kumar K. is currently available in cabin AI-108 for student consultations.",
          });
        }
      } else {
        if (arunIndex !== -1) {
          updated.splice(arunIndex, 1);
        }
      }

      return updated;
    });
  }, [demoTime, demoDay]);

  // Auth actions
  const login = async (email, password = "campusgenie123") => {
    try {
      const data = await signInUser(email, password);
      const userMeta = data.user?.user_metadata || {};
      const userObj = {
        id: data.user?.id,
        email: data.user?.email || email,
        name: userMeta.full_name || profile.name || "Student",
        rollNumber: userMeta.roll_number || profile.rollNumber || "23CSD101",
        department: userMeta.department || profile.department || "Computer Science and Engineering",
        year: userMeta.year || profile.year || "III Year",
        section: userMeta.section || profile.section || "A",
        loginTime: new Date().toISOString(),
      };
      setCurrentUser(userObj);
      setProfile((prev) => ({
        ...prev,
        name: userObj.name,
        rollNumber: userObj.rollNumber,
        department: userObj.department,
        collegeEmail: userObj.email,
      }));
      return data;
    } catch (err) {
      console.error("Supabase login error:", err);
      throw err;
    }
  };

  const signup = async (userData) => {
    try {
      const data = await signUpUser(userData);
      const userObj = {
        id: data.user?.id,
        email: userData.email,
        name: userData.fullName,
        rollNumber: userData.rollNumber,
        department: userData.department,
        year: userData.year || "III Year",
        loginTime: new Date().toISOString(),
      };
      setCurrentUser(userObj);
      setProfile((prev) => ({
        ...prev,
        name: userData.fullName,
        rollNumber: userData.rollNumber,
        department: userData.department,
        collegeEmail: userData.email,
      }));
      return data;
    } catch (err) {
      console.error("Signup error:", err);
      throw err;
    }
  };

  const logout = async () => {
    try {
      await signOutUser();
    } catch (e) {
      console.warn("Sign out:", e);
    }
    setCurrentUser(null);
    localStorage.removeItem("campus_genie_user");
  };

  // Timetable Hold Actions
  const toggleTimetableHold = (classId) => {
    setTimetableHolds((prev) => {
      const exists = prev.includes(classId);
      const next = exists ? prev.filter((id) => id !== classId) : [...prev, classId];
      
      // Notify student
      addNotification({
        title: exists ? `Class resumed` : `Class marked ON HOLD`,
        subtitle: `Timetable schedule updated for period ${classId}.`,
        category: "timetable",
        icon: "Calendar",
        actionLink: "/timetable",
        details: exists
          ? `The hold on class ${classId} was cleared and regular schedule restored.`
          : `Class ${classId} has been placed on hold / suspended for today.`,
      });

      return next;
    });
  };

  const toggleTimetableClockLock = () => {
    setIsTimetableClockLocked((prev) => !prev);
  };

  // Notification actions
  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const clearNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  const addNotification = (notif) => {
    const newNotif = {
      id: `notif-${Date.now()}`,
      timestamp: "Just now",
      timeAgo: "Just now",
      read: false,
      priority: "normal",
      ...notif,
    };
    setNotifications((prev) => [newNotif, ...prev]);
  };

  // Lost & Found actions
  const addLostFoundItem = (item) => {
    const newItem = {
      id: `lf-${Date.now()}`,
      date: "Just now",
      statusColor: item.type === "found" ? "emerald" : "amber",
      claimed: false,
      ...item,
    };
    setLostFoundItems((prev) => [newItem, ...prev]);

    // Also trigger notification
    addNotification({
      title: `New ${newItem.status} Item: ${newItem.title}`,
      subtitle: `Location: ${newItem.location}`,
      category: "lost_found",
      icon: "Search",
      actionLink: "/lost-found",
      details: newItem.description,
    });
  };

  // Toggle faculty alert
  const toggleFacultyAlert = (facId, facName) => {
    setFacultyAlerts((prev) => {
      const exists = prev.includes(facId);
      if (exists) {
        return prev.filter((id) => id !== facId);
      } else {
        addNotification({
          title: `Subscribed to ${facName}'s availability`,
          subtitle: `You will get an instant alert when they are in their cabin.`,
          category: "faculty",
          icon: "GraduationCap",
          actionLink: "/faculty",
          details: `Availability alerts enabled for ${facName}.`,
        });
        return [...prev, facId];
      }
    });
  };

  // Update profile
  const updateProfile = (updatedFields) => {
    setProfile((prev) => ({ ...prev, ...updatedFields }));
  };

  return (
    <AppContext.Provider
      value={{
        currentUser,
        authLoading,
        login,
        signup,
        logout,
        notifications,
        unreadCount,
        markAsRead,
        markAllAsRead,
        clearNotification,
        clearAllNotifications,
        addNotification,
        lostFoundItems,
        addLostFoundItem,
        profile,
        updateProfile,
        facultyAlerts,
        toggleFacultyAlert,
        demoTime,
        setDemoTime,
        demoDay,
        setDemoDay,
        timetableHolds,
        toggleTimetableHold,
        isTimetableClockLocked,
        toggleTimetableClockLock,
        geminiApiKey,
        setGeminiApiKey,
        activeChatPrompt,
        setActiveChatPrompt,
        settings,
        setSettings,
        isMobileMenuOpen,
        setIsMobileMenuOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
