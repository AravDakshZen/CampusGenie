/**
 * AI Assistant Engine for Campus Genie
 * Searches local static datasets for:
 * 1. Rajalakshmi Transport (bus routes, stops, timings, drivers)
 * 2. Faculty Availability (schedule-based status, cabins)
 * 3. Student Timetable (next class, schedule per day)
 * 4. Lost & Found (search lost / found items)
 * 
 * Strict Rule: Never invent campus information. If not found, returns:
 * "Sorry 😅 I couldn't find that information in the current campus data."
 */

import { busRoutes, transportMeta } from "./transportData.js";
import { facultyList, getFacultyAvailability } from "./facultyData.js";
import { weeklyTimetable, getNextClass, studentInfo } from "./timetableData.js";

export function processUserQuery(query, lostFoundList = [], demoTime = "14:30", demoDay = "Monday") {
  const q = query.trim().toLowerCase();
  
  if (!q) {
    return {
      text: "Please enter a question about Rajalakshmi Engineering College campus.",
      type: "empty",
    };
  }

  // 1. GREETING & GENERAL
  if (/^(hi|hello|hey|vanakkam|good\s+morning|good\s+afternoon|good\s+evening)\b/i.test(q)) {
    return {
      text: `Hi ${studentInfo.name}! 👋 I'm Campus Genie, your Rajalakshmi campus assistant. You can ask me about REC bus routes (like Bus 11), faculty cabin availability (like Revathi Ma'am or Arun Sir), your next class timetable, or items in Lost & Found. What would you like to check?`,
      type: "greeting",
      suggestions: [
        "Where is Bus 11 going?",
        "Is Revathi Ma'am available now?",
        "What's my next class?",
        "Show Lost & Found",
      ],
    };
  }

  // 2. TIMETABLE INTENTS
  if (
    q.includes("next class") ||
    q.includes("next lecture") ||
    q.includes("what is my next class") ||
    q.includes("upcoming class") ||
    q.includes("what's next")
  ) {
    const nextClass = getNextClass(demoDay, demoTime);
    if (nextClass) {
      const subjectDisplay = nextClass.subject.includes("DBMS") ? "DBMS" : nextClass.subject;
      const timeDisplay = nextClass.startTime ? formatTime(nextClass.startTime) : (nextClass.time ? nextClass.time.split(" - ")[0] : "10:00 AM");
      return {
        text: `📚 Your next class is ${subjectDisplay} at ${timeDisplay} in ${nextClass.room}.`,
        type: "timetable",
        cardData: nextClass,
        meta: `Active Schedule for ${demoDay}`,
      };
    }
  }

  if (
    q.includes("timetable") ||
    q.includes("schedule") ||
    q.includes("classes today") ||
    q.includes("today's class") ||
    q.includes("classes on monday") ||
    q.includes("classes on tuesday") ||
    q.includes("classes on wednesday") ||
    q.includes("classes on thursday") ||
    q.includes("classes on friday")
  ) {
    let targetDay = demoDay;
    if (q.includes("monday")) targetDay = "Monday";
    else if (q.includes("tuesday")) targetDay = "Tuesday";
    else if (q.includes("wednesday")) targetDay = "Wednesday";
    else if (q.includes("thursday")) targetDay = "Thursday";
    else if (q.includes("friday")) targetDay = "Friday";

    const dayClasses = weeklyTimetable[targetDay] || [];
    if (dayClasses.length > 0) {
      const summaryList = dayClasses
        .filter((c) => c.type !== "Break")
        .map((c) => `• **${c.time}**: ${c.subject} (${c.room} - ${c.faculty})`)
        .join("\n");

      return {
        text: `📚 Here is your class schedule for **${targetDay}** (${studentInfo.year} ${studentInfo.department} - Sec ${studentInfo.section}):\n\n${summaryList}`,
        type: "timetable_list",
        day: targetDay,
        classes: dayClasses,
      };
    }
  }

  // 3. FACULTY INTENTS
  const isFacultyQuery =
    q.includes("faculty") ||
    q.includes("teacher") ||
    q.includes("professor") ||
    q.includes("available") ||
    q.includes("cabin") ||
    q.includes("staff") ||
    facultyList.some((f) => f.searchAliases.some((alias) => q.includes(alias)));

  if (isFacultyQuery) {
    // Check specific faculty
    const matchedFaculty = facultyList.find((f) =>
      f.searchAliases.some((alias) => q.includes(alias))
    );

    if (matchedFaculty) {
      const availability = getFacultyAvailability(matchedFaculty, demoTime, demoDay);
      if (availability.status === "Available Now") {
        return {
          text: `👩‍🏫 Yes! ${matchedFaculty.shortName} is available in ${matchedFaculty.cabin} until ${matchedFaculty.schedule.find((s) => s.day === demoDay)?.end ? formatTime(matchedFaculty.schedule.find((s) => s.day === demoDay)?.end) : "4:00 PM"}. (${matchedFaculty.department})`,
          type: "faculty",
          cardData: { ...matchedFaculty, availability },
        };
      } else if (availability.status === "Currently Unavailable") {
        return {
          text: `👩‍🏫 ${matchedFaculty.shortName} is currently unavailable. ${availability.detail}. Cabin: ${matchedFaculty.cabin} (${matchedFaculty.cabinLocation}).`,
          type: "faculty",
          cardData: { ...matchedFaculty, availability },
        };
      } else {
        return {
          text: `⚪ Availability for ${matchedFaculty.shortName} is not updated in the current campus data. Cabin: ${matchedFaculty.cabin}.`,
          type: "faculty",
          cardData: { ...matchedFaculty, availability },
        };
      }
    }

    if (q.includes("who is available") || q.includes("available faculty") || q.includes("available now")) {
      const availableList = facultyList
        .map((f) => ({ faculty: f, availability: getFacultyAvailability(f, demoTime, demoDay) }))
        .filter((item) => item.availability.status === "Available Now");

      if (availableList.length > 0) {
        const names = availableList.map((i) => `• **${i.faculty.name}** in ${i.faculty.cabin} (${i.availability.detail})`).join("\n");
        return {
          text: `👩‍🏫 Currently available faculty right now (${demoDay} at ${demoTime}):\n\n${names}`,
          type: "faculty_list",
          list: availableList,
        };
      } else {
        return {
          text: `👩‍🏫 No faculty members have scheduled consultation hours at ${demoTime} on ${demoDay}. You can check again during academic cabin hours (10:00 AM – 4:00 PM).`,
          type: "faculty",
        };
      }
    }
  }

  // 4. TRANSPORT INTENTS
  const isTransportQuery =
    q.includes("bus") ||
    q.includes("route") ||
    q.includes("transport") ||
    q.includes("going") ||
    q.includes("trip") ||
    q.includes("rectransport") ||
    q.includes("stop") ||
    busRoutes.some(
      (b) =>
        b.destination &&
        b.destination.length > 3 &&
        q.includes(b.destination.toLowerCase())
    );

  if (isTransportQuery) {
    // Extract bus number requiring at least one digit (e.g. "bus 11", "route 19E", "34", "10A")
    const busMatch = q.match(/\b(?:bus\s*|route\s*)(\d{1,2}[a-z]?)\b/i) || q.match(/\b(\d{1,2}[a-z]?)\b/i);
    const busNum = busMatch ? busMatch[1].toUpperCase() : null;

    let matchedBus = null;
    if (busNum) {
      matchedBus = busRoutes.find(
        (b) => b.busNumber.toUpperCase() === busNum || b.routeNumber.toUpperCase() === busNum
      );
    }

    // Or search by destination/stop name
    if (!matchedBus) {
      matchedBus = busRoutes.find((b) => {
        const dest = b.destination.toLowerCase();
        const baseDest = dest.replace(/[()]/g, "").trim();
        const words = baseDest.split(/\s+/).filter((w) => w.length > 3);
        return (
          q.includes(dest) ||
          q.includes(baseDest) ||
          words.some((w) => q.includes(w)) ||
          b.stops.some((s) => q.includes(s.name.toLowerCase()))
        );
      });
    }

    if (matchedBus) {
      const stopNames = matchedBus.stops.map((s) => s.name).join(" → ");
      return {
        text: `🚌 Bus ${matchedBus.busNumber} operates on the route available in the Rajalakshmi Transport data. Would you like to see the complete route and timings?\n\n• **Route Name**: ${matchedBus.routeName}\n• **Departure**: ${matchedBus.startingTime} from ${matchedBus.startingPoint}\n• **Destination**: Rajalakshmi Engineering College (Bay ${matchedBus.busNumber})\n• **Important Stops**: ${stopNames}`,
        type: "transport",
        cardData: matchedBus,
        routeSummary: stopNames,
      };
    }

    if (q.includes("return") || q.includes("evening") || q.includes("afternoon")) {
      return {
        text: `🚌 **REC Return Bus Schedule:**\n• **3:15 PM**: 65 buses covering common arterial routes.\n• **5:05 PM**: 65 buses covering common arterial routes for students in lab/special classes.\n\nSource: REC Transport Department. All buses depart from their designated campus bays.`,
        type: "transport_return",
      };
    }

    if (q.includes("buses") || q.includes("routes") || q.includes("all buses")) {
      const listStr = busRoutes
        .map((b) => `• **Bus ${b.busNumber}**: ${b.routeName} (Starts: ${b.startingTime})`)
        .join("\n");
      return {
        text: `🚌 Here are primary REC Transport routes from the official dataset:\n\n${listStr}\n\nAsk me about any specific bus (e.g. "Where is Bus 11 going?") for detailed stops!`,
        type: "transport_list",
      };
    }
  }

  // 5. LOST & FOUND INTENTS
  if (
    q.includes("lost") ||
    q.includes("found") ||
    q.includes("backpack") ||
    q.includes("bag") ||
    q.includes("id card") ||
    q.includes("calculator") ||
    q.includes("airpods") ||
    q.includes("watch") ||
    q.includes("umbrella")
  ) {
    const list = lostFoundList.length > 0 ? lostFoundList : [];
    
    // Check specific items
    const matches = list.filter((item) =>
      item.title.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.location.toLowerCase().includes(q) ||
      (q.includes("lost") && item.type === "lost") ||
      (q.includes("found") && item.type === "found")
    );

    const itemsToDisplay = matches.length > 0 ? matches : list;

    const itemsText = itemsToDisplay
      .slice(0, 4)
      .map(
        (item) =>
          `• [${item.status.toUpperCase()}] **${item.title}** - Location: ${item.location} (${item.date})`
      )
      .join("\n");

    return {
      text: `🔎 Here are the relevant Lost & Found items recorded on campus:\n\n${itemsText}\n\nYou can view full details or report new items in the Lost & Found section.`,
      type: "lost_found",
      items: itemsToDisplay.slice(0, 4),
    };
  }

  // 6. DEFAULT / FALLBACK (STRICT CAMPUS DATA POLICY)
  return {
    text: "Sorry 😅 I couldn't find that information in the current campus data.",
    type: "unknown",
    suggestions: [
      "Where is Bus 11 going?",
      "Is Revathi Ma'am available now?",
      "What is my next class?",
      "Show lost items",
    ],
  };
}

function formatTime(t24) {
  const [h, m] = t24.split(":").map(Number);
  const suffix = h >= 12 ? "PM" : "AM";
  const hours = h % 12 || 12;
  return `${hours}:${String(m).padStart(2, "0")} ${suffix}`;
}
