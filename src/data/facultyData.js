/**
 * Rajalakshmi Engineering College Faculty Dataset & Schedule Checker
 * 
 * Includes schedule-based availability calculation.
 * Status values:
 * - 'Available Now' (🟢)
 * - 'Currently Unavailable' (🔴)
 * - 'Availability Not Updated' (⚪)
 */

export const facultyList = [
  {
    id: "fac-revathi",
    name: "Dr. Revathi S.",
    shortName: "Revathi Ma'am",
    searchAliases: ["revathi", "revathi ma'am", "revathi mam", "dr revathi"],
    designation: "Associate Professor",
    department: "Computer Science and Engineering",
    deptCode: "CSE",
    cabin: "CSE-204",
    cabinLocation: "Academic Block 2, 2nd Floor",
    email: "revathi.s@rajalakshmi.edu.in",
    phone: "+91 44 6718 1111",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    specialization: "Database Systems, Big Data Analytics",
    subjectsTaught: ["Database Management Systems (DBMS)", "Distributed Systems"],
    defaultAvailableTimeText: "2:00 PM – 4:00 PM",
    schedule: [
      { day: "Monday", start: "14:00", end: "16:00", text: "2:00 PM – 4:00 PM" },
      { day: "Tuesday", start: "14:00", end: "16:00", text: "2:00 PM – 4:00 PM" },
      { day: "Wednesday", start: "10:00", end: "12:00", text: "10:00 AM – 12:00 PM" },
      { day: "Thursday", start: "14:00", end: "16:00", text: "2:00 PM – 4:00 PM" },
      { day: "Friday", start: "11:00", end: "13:00", text: "11:00 AM – 1:00 PM" },
    ],
  },
  {
    id: "fac-arun",
    name: "Dr. Arun Kumar K.",
    shortName: "Arun Sir",
    searchAliases: ["arun", "arun sir", "dr arun", "arun kumar"],
    designation: "Assistant Professor (Selection Grade)",
    department: "Artificial Intelligence & Data Science",
    deptCode: "AI & DS",
    cabin: "AI-108",
    cabinLocation: "Heritage Block, 1st Floor",
    email: "arunkumar.k@rajalakshmi.edu.in",
    phone: "+91 44 6718 1122",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    specialization: "Deep Learning, Computer Vision",
    subjectsTaught: ["Artificial Intelligence", "UI/UX Design Studio"],
    defaultAvailableTimeText: "11:00 AM – 12:00 PM",
    schedule: [
      { day: "Monday", start: "11:00", end: "12:00", text: "11:00 AM – 12:00 PM" },
      { day: "Tuesday", start: "11:00", end: "12:00", text: "11:00 AM – 12:00 PM" },
      { day: "Wednesday", start: "14:00", end: "15:30", text: "2:00 PM – 3:30 PM" },
      { day: "Thursday", start: "11:00", end: "12:00", text: "11:00 AM – 12:00 PM" },
      { day: "Friday", start: "14:00", end: "15:00", text: "2:00 PM – 3:00 PM" },
    ],
  },
  {
    id: "fac-priya",
    name: "Dr. Priya Dharshini M.",
    shortName: "Priya Ma'am",
    searchAliases: ["priya", "priya ma'am", "dr priya", "priyadharshini"],
    designation: "Professor & Head - Student Affairs",
    department: "Computer Science and Engineering",
    deptCode: "CSE",
    cabin: "CSE-102",
    cabinLocation: "Academic Block 2, 1st Floor",
    email: "priyadharshini.m@rajalakshmi.edu.in",
    phone: "+91 44 6718 1133",
    avatar: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=150&auto=format&fit=crop&q=80",
    specialization: "Computer Networks, Network Security",
    subjectsTaught: ["Computer Networks", "Cyber Physical Systems"],
    defaultAvailableTimeText: "9:30 AM – 11:30 AM",
    schedule: [
      { day: "Monday", start: "09:30", end: "11:30", text: "9:30 AM – 11:30 AM" },
      { day: "Tuesday", start: "09:30", end: "11:30", text: "9:30 AM – 11:30 AM" },
      { day: "Thursday", start: "10:00", end: "12:00", text: "10:00 AM – 12:00 PM" },
      { day: "Friday", start: "14:00", end: "16:00", text: "2:00 PM – 4:00 PM" },
    ],
  },
  {
    id: "fac-manikandan",
    name: "Dr. Manikandan S.",
    shortName: "Manikandan Sir",
    searchAliases: ["manikandan", "manikandan sir", "mani sir"],
    designation: "Associate Professor",
    department: "Information Technology",
    deptCode: "IT",
    cabin: "IT-305",
    cabinLocation: "Tech Park, 3rd Floor",
    email: "manikandan.s@rajalakshmi.edu.in",
    phone: "+91 44 6718 1144",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    specialization: "Cloud Computing, DevOps",
    subjectsTaught: ["Cloud Computing", "Full Stack Development"],
    defaultAvailableTimeText: "3:00 PM – 4:30 PM",
    schedule: [
      { day: "Monday", start: "15:00", end: "16:30", text: "3:00 PM – 4:30 PM" },
      { day: "Wednesday", start: "15:00", end: "16:30", text: "3:00 PM – 4:30 PM" },
      { day: "Friday", start: "09:30", end: "11:00", text: "9:30 AM – 11:00 AM" },
    ],
  },
  {
    id: "fac-rajeshwari",
    name: "Prof. Rajeshwari V.",
    shortName: "Rajeshwari Ma'am",
    searchAliases: ["rajeshwari", "rajeshwari ma'am", "prof rajeshwari"],
    designation: "Assistant Professor",
    department: "Electronics & Communication Engineering",
    deptCode: "ECE",
    cabin: "ECE-214",
    cabinLocation: "Admin Block, 2nd Floor",
    email: "rajeshwari.v@rajalakshmi.edu.in",
    phone: "+91 44 6718 1155",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    specialization: "VLSI Architecture, Embedded Sensors",
    subjectsTaught: ["VLSI Design", "Embedded Systems"],
    defaultAvailableTimeText: null, // Schedule not updated
    schedule: [], // Intentionally empty to test "Availability Not Updated"
  },
];

export function getFacultyAvailability(faculty, timeStr, dayStr, statusOverride) {
  if (statusOverride) {
    if (statusOverride === "Available Now") {
      return {
        status: "Available Now",
        detail: `Currently present in cabin ${faculty.cabin}`,
      };
    }
    if (statusOverride === "Currently Unavailable") {
      return {
        status: "Currently Unavailable",
        detail: `Faculty is currently out of cabin / in lecture`,
      };
    }
  }

  if (!faculty.schedule || faculty.schedule.length === 0) {
    return {
      status: "Availability Not Updated",
      detail: "Schedule not updated for this semester",
    };
  }

  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  let day = dayStr;
  let time = timeStr;

  if (!day || !time) {
    const now = new Date();
    const allDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    day = allDays[now.getDay()];
    if (day === "Sunday" || day === "Saturday") {
      day = "Monday";
    }
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    time = `${hours}:${minutes}`;
  }

  const currentDayIndex = daysOfWeek.findIndex((d) => d.toLowerCase() === day.toLowerCase());

  // 1. Check all slots for the current day
  const todaySlots = faculty.schedule
    .filter((slot) => slot.day.toLowerCase() === day.toLowerCase())
    .sort((a, b) => a.start.localeCompare(b.start));

  for (const slot of todaySlots) {
    if (time >= slot.start && time <= slot.end) {
      // Calculate remaining minutes
      const [endH, endM] = slot.end.split(":").map(Number);
      const [curH, curM] = time.split(":").map(Number);
      const remainingMin = (endH * 60 + endM) - (curH * 60 + curM);
      const remainingText = remainingMin > 60 
        ? `${Math.floor(remainingMin / 60)}h ${remainingMin % 60}m left`
        : `${remainingMin} min left`;

      return {
        status: "Available Now",
        detail: `In cabin until ${format12Hour(slot.end)} (${remainingText})`,
        slot,
        remainingMinutes: remainingMin,
      };
    }
  }

  // 2. Check if there is an upcoming slot later today
  const upcomingTodaySlot = todaySlots.find((slot) => slot.start > time);
  if (upcomingTodaySlot) {
    return {
      status: "Currently Unavailable",
      detail: `Next available: Today at ${format12Hour(upcomingTodaySlot.start)} (${upcomingTodaySlot.text})`,
      slot: upcomingTodaySlot,
    };
  }

  // 3. Search for the next available slot on subsequent days (wrapping around the week)
  if (currentDayIndex !== -1) {
    for (let offset = 1; offset <= 5; offset++) {
      const nextDayIndex = (currentDayIndex + offset) % daysOfWeek.length;
      const nextDayName = daysOfWeek[nextDayIndex];
      const nextDaySlots = faculty.schedule
        .filter((s) => s.day.toLowerCase() === nextDayName.toLowerCase())
        .sort((a, b) => a.start.localeCompare(b.start));

      if (nextDaySlots.length > 0) {
        const nextSlot = nextDaySlots[0];
        const dayLabel = offset === 1 ? "Tomorrow" : nextDayName;
        return {
          status: "Currently Unavailable",
          detail: `Next available: ${dayLabel} (${nextSlot.day}) at ${format12Hour(nextSlot.start)}`,
          slot: nextSlot,
        };
      }
    }
  }

  // If only 1 slot in the whole schedule
  const fallbackSlot = faculty.schedule[0];
  return {
    status: "Currently Unavailable",
    detail: `Next available: ${fallbackSlot.day} at ${format12Hour(fallbackSlot.start)}`,
    slot: fallbackSlot,
  };
}

export function format12Hour(time24) {
  if (!time24) return "";
  const [h, m] = time24.split(":").map(Number);
  const suffix = h >= 12 ? "PM" : "AM";
  const hours = h % 12 || 12;
  return `${hours}:${String(m).padStart(2, "0")} ${suffix}`;
}
