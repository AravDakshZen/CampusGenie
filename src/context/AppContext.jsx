import React, { createContext, useContext, useState, useEffect } from "react";
import { initialNotifications } from "../data/notificationData";
import { initialLostFoundItems } from "../data/lostFoundData";
import { studentInfo, weeklyTimetable } from "../data/timetableData";
import { facultyList, getFacultyAvailability } from "../data/facultyData";
import {
  supabase,
  signInUser,
  signUpUser,
  signOutUser,
  getFacultyFromDB,
  updateFacultyStatusInDB,
  getTimetableFromDB,
  getFacultyInquiriesFromDB,
  createFacultyInquiryInDB,
  respondToFacultyInquiryInDB,
  getLostFoundFromDB,
  addLostFoundItemToDB,
  claimLostFoundItemInDB,
  ensureDemoAccounts,
} from "../lib/supabase";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  // Authentication State
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem("campus_genie_user");
    return saved ? JSON.parse(saved) : null;
  });

  const [authLoading, setAuthLoading] = useState(true);

  // Faculty Dataset State (Synchronized with Database)
  const [facultyData, setFacultyData] = useState(() => {
    const saved = localStorage.getItem("campus_genie_faculty");
    return saved ? JSON.parse(saved) : facultyList;
  });

  // Timetable Dataset State (Synchronized with Database)
  const [timetableData, setTimetableData] = useState(() => {
    const saved = localStorage.getItem("campus_genie_timetable");
    return saved ? JSON.parse(saved) : weeklyTimetable;
  });

  // Faculty Inquiries State (Student asks if teacher is free, teacher replies)
  const [facultyInquiries, setFacultyInquiries] = useState(() => {
    const saved = localStorage.getItem("campus_genie_inquiries");
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: "inq-demo-1",
            faculty_id: "fac-revathi",
            faculty_name: "Dr. Revathi S.",
            student_name: "Yashawini S.",
            student_email: "student@rajalakshmi.edu.in",
            student_roll: "23CSD101",
            message: "Good afternoon Ma'am! Are you free right now in cabin CSE-204 for DBMS project clarification?",
            status: "available",
            reply_text: "Yes Yashawini! I am in cabin CSE-204 right now until 4:00 PM. Please bring your project report.",
            responded_at: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
            created_at: new Date(Date.now() - 15 * 60 * 1000).toISOString(),
          },
        ];
  });

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

  // Gemini API Key (stored in env or locally)
  const [geminiApiKey, setGeminiApiKey] = useState(() => {
    return (
      import.meta.env.VITE_GEMINI_API_KEY ||
      localStorage.getItem("campus_genie_gemini_key") ||
      ""
    );
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

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "PASSWORD_RECOVERY") {
        console.log("Supabase PASSWORD_RECOVERY event detected");
        if (window.location.pathname !== "/reset-password") {
          window.location.replace("/reset-password" + window.location.hash);
        }
        return;
      }

      if (session) {
        // If arriving from recovery link hash, do not treat as standard login
        if (window.location.hash.includes("type=recovery") || window.location.search.includes("type=recovery")) {
          if (window.location.pathname !== "/reset-password") {
            window.location.replace("/reset-password" + window.location.hash);
          }
          return;
        }

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

  // Save state to localStorage
  useEffect(() => {
    localStorage.setItem("campus_genie_faculty", JSON.stringify(facultyData));
  }, [facultyData]);

  useEffect(() => {
    localStorage.setItem("campus_genie_timetable", JSON.stringify(timetableData));
  }, [timetableData]);

  useEffect(() => {
    localStorage.setItem("campus_genie_inquiries", JSON.stringify(facultyInquiries));
  }, [facultyInquiries]);

  // Fetch initial data from Database on mount and ensure demo accounts exist
  useEffect(() => {
    ensureDemoAccounts().catch(() => {});

    async function loadDBData() {
      // 1. Fetch Faculty from DB
      try {
        const dbFaculty = await getFacultyFromDB();
        if (dbFaculty && dbFaculty.length > 0) {
          const mapped = dbFaculty.map((f) => ({
            id: f.id,
            name: f.name,
            shortName: f.short_name,
            searchAliases: [f.short_name.toLowerCase(), f.name.toLowerCase()],
            designation: f.designation,
            department: f.department,
            deptCode: f.dept_code,
            cabin: f.cabin,
            cabinLocation: f.cabin_location,
            email: f.email,
            phone: f.phone,
            avatar: f.avatar,
            specialization: f.specialization,
            subjectsTaught: f.subjects_taught || [],
            defaultAvailableTimeText: f.default_available_time_text,
            status: f.status || "Auto",
            schedule: f.schedule || [],
          }));
          setFacultyData(mapped);
        }
      } catch (err) {
        console.warn("Using fallback faculty dataset:", err.message);
      }

      // 2. Fetch Timetable from DB
      try {
        const dbTimetable = await getTimetableFromDB();
        if (dbTimetable && dbTimetable.length > 0) {
          const grouped = {};
          dbTimetable.forEach((row) => {
            if (!grouped[row.day]) grouped[row.day] = [];
            grouped[row.day].push({
              id: row.id,
              time: row.time,
              startTime: row.start_time,
              endTime: row.end_time,
              subject: row.subject,
              code: row.code,
              room: row.room,
              block: row.block,
              faculty: row.faculty_name,
              facultyId: row.faculty_id,
              type: row.type,
              isHeld: row.is_held,
            });
          });
          setTimetableData(grouped);
        }
      } catch (err) {
        console.warn("Using fallback timetable dataset:", err.message);
      }

      // 3. Fetch Inquiries from DB
      try {
        const dbInquiries = await getFacultyInquiriesFromDB();
        if (dbInquiries && dbInquiries.length > 0) {
          setFacultyInquiries(dbInquiries);
        }
      } catch (err) {
        console.warn("Using fallback inquiries dataset:", err.message);
      }

      // 4. Fetch Lost & Found from DB
      try {
        const dbLostFound = await getLostFoundFromDB();
        if (dbLostFound && dbLostFound.length > 0) {
          setLostFoundItems(
            dbLostFound.map((item) => ({
              id: item.id,
              title: item.title,
              category: item.category,
              type: item.type,
              location: item.location,
              date: item.date,
              status: item.status,
              statusColor: item.status_color || (item.type === "found" ? "emerald" : "amber"),
              description: item.description,
              contactPerson: item.contact_person,
              contactLocation: item.contact_location,
              image: item.image,
              claimed: Boolean(item.claimed),
              claimedBy: item.claimed_by,
              createdAt: item.created_at,
            }))
          );
        }
      } catch (err) {
        console.warn("Using fallback lost & found dataset:", err.message);
      }
    }

    loadDBData();

    // Set up Realtime subscriptions for inquiries, faculty & lost_found if table exists
    const channel = supabase
      .channel("campus_db_changes")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "faculty_inquiries" },
        async () => {
          try {
            const freshInquiries = await getFacultyInquiriesFromDB();
            if (freshInquiries) setFacultyInquiries(freshInquiries);
          } catch (e) {}
        }
      )
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "lost_found" },
        async () => {
          try {
            const freshLostFound = await getLostFoundFromDB();
            if (freshLostFound && freshLostFound.length > 0) {
              setLostFoundItems(
                freshLostFound.map((item) => ({
                  id: item.id,
                  title: item.title,
                  category: item.category,
                  type: item.type,
                  location: item.location,
                  date: item.date,
                  status: item.status,
                  statusColor: item.status_color || (item.type === "found" ? "emerald" : "amber"),
                  description: item.description,
                  contactPerson: item.contact_person,
                  contactLocation: item.contact_location,
                  image: item.image,
                  claimed: Boolean(item.claimed),
                  claimedBy: item.claimed_by,
                  createdAt: item.created_at,
                }))
              );
            }
          } catch (e) {}
        }
      )
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "faculty" },
        async () => {
          try {
            const freshFaculty = await getFacultyFromDB();
            if (freshFaculty) {
              setFacultyData((prev) =>
                freshFaculty.map((f) => ({
                  id: f.id,
                  name: f.name,
                  shortName: f.short_name,
                  searchAliases: [f.short_name.toLowerCase(), f.name.toLowerCase()],
                  designation: f.designation,
                  department: f.department,
                  deptCode: f.dept_code,
                  cabin: f.cabin,
                  cabinLocation: f.cabin_location,
                  email: f.email,
                  phone: f.phone,
                  avatar: f.avatar,
                  specialization: f.specialization,
                  subjectsTaught: f.subjects_taught || [],
                  defaultAvailableTimeText: f.default_available_time_text,
                  status: f.status || "Auto",
                  schedule: f.schedule || [],
                }))
              );
            }
          } catch (e) {}
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // Dynamically synchronize notifications based on schedule and demo time
  useEffect(() => {
    const revathi = facultyData.find((f) => f.id === "fac-revathi");
    const revathiAvail = revathi ? getFacultyAvailability(revathi, demoTime, demoDay, revathi.status !== "Auto" ? revathi.status : null) : null;
    const isRevathiAvailable = revathiAvail?.status === "Available Now";

    const arun = facultyData.find((f) => f.id === "fac-arun");
    const arunAvail = arun ? getFacultyAvailability(arun, demoTime, demoDay, arun.status !== "Auto" ? arun.status : null) : null;
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
  }, [demoTime, demoDay, facultyData]);

  // Auth actions
  const login = async (email, password = "campusgenie123") => {
    try {
      const data = await signInUser(email, password);
      const userMeta = data.user?.user_metadata || {};
      const role = userMeta.role || (email.includes(".s@") || email.includes(".k@") || email.includes(".m@") ? "faculty" : "student");
      let facultyId = userMeta.faculty_id || null;
      if (!facultyId && role === "faculty") {
        if (email.includes("revathi")) facultyId = "fac-revathi";
        else if (email.includes("arun")) facultyId = "fac-arun";
        else if (email.includes("priya")) facultyId = "fac-priya";
      }

      const userObj = {
        id: data.user?.id,
        email: data.user?.email || email,
        name: userMeta.full_name || (role === "faculty" ? "Faculty Professor" : profile.name || "Student"),
        role,
        facultyId,
        rollNumber: userMeta.roll_number || (role === "student" ? profile.rollNumber || "23CSD101" : null),
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
        role: "student",
        facultyId: null,
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

  // Student Sends Inquiry to Teacher ("Is Ma'am / Sir Free?")
  const sendFacultyInquiry = async ({ facultyId, facultyName, message }) => {
    const studentName = currentUser?.name || profile.name || "Yashawini S.";
    const studentEmail = currentUser?.email || profile.collegeEmail || "student@rajalakshmi.edu.in";
    const studentRoll = currentUser?.rollNumber || profile.rollNumber || "23CSD101";

    const newInquiry = {
      id: `inq-${Date.now()}`,
      faculty_id: facultyId,
      faculty_name: facultyName,
      student_id: currentUser?.id,
      student_name: studentName,
      student_email: studentEmail,
      student_roll: studentRoll,
      message,
      status: "pending",
      reply_text: null,
      responded_at: null,
      created_at: new Date().toISOString(),
    };

    // Optimistically update
    setFacultyInquiries((prev) => [newInquiry, ...prev]);

    // Send to Supabase DB
    try {
      const created = await createFacultyInquiryInDB({
        facultyId,
        facultyName,
        studentName,
        studentEmail,
        studentRoll,
        message,
      });
      if (created) {
        setFacultyInquiries((prev) =>
          prev.map((item) => (item.id === newInquiry.id ? created : item))
        );
      }
    } catch (err) {
      console.warn("Stored inquiry locally, database sync note:", err.message);
    }

    // Add local notification
    addNotification({
      title: `Inquiry sent to ${facultyName}`,
      subtitle: `Waiting for teacher response on cabin availability`,
      category: "faculty",
      icon: "Send",
      actionLink: "/faculty",
      details: `You sent an availability inquiry to ${facultyName}: "${message}"`,
    });
  };

  // Teacher Responds to Inquiry
  const respondToFacultyInquiry = async (inquiryId, status, replyText) => {
    setFacultyInquiries((prev) =>
      prev.map((inq) =>
        inq.id === inquiryId
          ? {
              ...inq,
              status,
              reply_text: replyText,
              responded_at: new Date().toISOString(),
            }
          : inq
      )
    );

    try {
      await respondToFacultyInquiryInDB(inquiryId, { status, replyText });
    } catch (err) {
      console.warn("DB response sync note:", err.message);
    }

    addNotification({
      title: `Response sent to student`,
      subtitle: replyText,
      category: "faculty",
      icon: "CheckCircle2",
      priority: "high",
      actionLink: "/faculty",
      details: `You responded: "${replyText}"`,
    });
  };

  // Teacher Updates their Live Cabin Availability in Database
  const updateFacultyCabinStatus = async (facultyId, status) => {
    setFacultyData((prev) =>
      prev.map((f) => (f.id === facultyId ? { ...f, status } : f))
    );

    try {
      await updateFacultyStatusInDB(facultyId, status);
    } catch (err) {
      console.warn("DB status update note:", err.message);
    }

    addNotification({
      title: `Cabin status updated`,
      subtitle: `Marked as: ${status}`,
      category: "faculty",
      icon: "Clock",
      actionLink: "/faculty",
      details: `Your live cabin status was updated to: ${status}. Students will see this live.`,
    });
  };

  // Timetable Hold Actions
  const toggleTimetableHold = (classId) => {
    setTimetableHolds((prev) => {
      const exists = prev.includes(classId);
      const next = exists ? prev.filter((id) => id !== classId) : [...prev, classId];
      
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
  const addLostFoundItem = async (item) => {
    const newItem = {
      id: item.id || `lf-${Date.now()}`,
      date: item.date || "Just now",
      statusColor: item.type === "found" ? "emerald" : "amber",
      claimed: false,
      ...item,
    };
    // Optimistic UI update
    setLostFoundItems((prev) => [newItem, ...prev]);

    addNotification({
      title: `New ${newItem.status} Item: ${newItem.title}`,
      subtitle: `Location: ${newItem.location}`,
      category: "lost_found",
      icon: "Search",
      actionLink: "/lost-found",
      details: newItem.description,
    });

    // Save to Supabase DB
    try {
      await addLostFoundItemToDB(newItem);
    } catch (err) {
      console.warn("Could not save lost & found item to Supabase:", err.message);
    }
  };

  const claimLostFoundItem = async (itemId) => {
    // Optimistic UI update
    setLostFoundItems((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, claimed: true } : item))
    );

    addNotification({
      title: "Claim request submitted",
      subtitle: "Campus security desk has been notified regarding your item claim.",
      category: "lost_found",
      icon: "CheckCircle",
      actionLink: "/lost-found",
      details: "Your claim has been logged with campus security.",
    });

    // Save to Supabase DB
    try {
      await claimLostFoundItemInDB(itemId, currentUser?.name || profile?.name || "Student");
    } catch (err) {
      console.warn("Could not update claim in Supabase:", err.message);
    }
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
        setCurrentUser,
        authLoading,
        login,
        signup,
        logout,
        facultyData,
        setFacultyData,
        timetableData,
        setTimetableData,
        facultyInquiries,
        sendFacultyInquiry,
        respondToFacultyInquiry,
        updateFacultyCabinStatus,
        notifications,
        unreadCount,
        markAsRead,
        markAllAsRead,
        clearNotification,
        clearAllNotifications,
        addNotification,
        lostFoundItems,
        addLostFoundItem,
        claimLostFoundItem,
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
