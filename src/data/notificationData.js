/**
 * Notifications dataset for Rajalakshmi Engineering College
 * Covers Faculty Availability, Transport Departures, and Class Reminders.
 */

export const initialNotifications = [
  {
    id: "notif-1",
    title: "Revathi Ma'am is available now!",
    subtitle: "CSE-204 • Available until 4:00 PM",
    category: "faculty",
    icon: "GraduationCap",
    timestamp: "Just now",
    timeAgo: "2 mins ago",
    read: false,
    priority: "high",
    actionLink: "/faculty",
    details: "Dr. Revathi S. is currently in cabin CSE-204 for academic advising, DBMS clarifications, and final project guidance.",
  },
  {
    id: "notif-2",
    title: "Bus 11 departs in 15 minutes",
    subtitle: "Route 11 to Moolakadai • Campus Bay 11",
    category: "transport",
    icon: "Bus",
    timestamp: "3:00 PM",
    timeAgo: "15 mins ago",
    read: false,
    priority: "normal",
    actionLink: "/transport",
    details: "Evening departure scheduled at 3:15 PM from Campus Bay 11 via Poonamallee, Korattur, and Retteri.",
  },
  {
    id: "notif-3",
    title: "Your next DBMS class starts in 15 minutes",
    subtitle: "Room 402 • Academic Block 2",
    category: "timetable",
    icon: "BookOpen",
    timestamp: "9:45 AM",
    timeAgo: "45 mins ago",
    read: false,
    priority: "high",
    actionLink: "/timetable",
    details: "CS19501: Database Management Systems lecture by Dr. Revathi S. Starting at 10:00 AM.",
  },
  {
    id: "notif-4",
    title: "Lost & Found Update: Student ID Card reported",
    subtitle: "Found at A-Block steps",
    category: "lost_found",
    icon: "Search",
    timestamp: "Yesterday",
    timeAgo: "1 day ago",
    read: true,
    priority: "low",
    actionLink: "/lost-found",
    details: "An ECE student smart ID card has been deposited with the security desk at the Main Block entrance.",
  },
];
