/**
 * Google Gemini Integration for Campus Genie
 * Grounded with complete Rajalakshmi Engineering College campus dataset.
 */

import { busRoutes } from "../data/transportData";
import { facultyList } from "../data/facultyData";
import { weeklyTimetable, studentInfo } from "../data/timetableData";

// Construct Grounding System Prompt from actual campus data
export function buildCampusKnowledgePrompt(demoTime = "14:30", demoDay = "Monday") {
  const facultySummary = facultyList
    .map(
      (f) =>
        `- ${f.name} (${f.shortName}): Cabin ${f.cabin} (${f.cabinLocation}), Dept: ${f.department}, Specialization: ${f.specialization}. Consultation hours: ${f.defaultAvailableTimeText || "Not updated"}. Schedule: ${JSON.stringify(f.schedule)}`
    )
    .join("\n");

  const timetableSummary = Object.entries(weeklyTimetable)
    .map(([day, classes]) => {
      const classStr = classes
        .filter((c) => c.type !== "Break")
        .map((c) => `${c.time}: ${c.subject} (${c.code}) in ${c.room} by ${c.faculty}`)
        .join("; ");
      return `${day}: ${classStr}`;
    })
    .join("\n");

  // Sample primary bus routes
  const topBusRoutes = busRoutes
    .slice(0, 20)
    .map(
      (b) =>
        `Bus ${b.busNumber} (${b.routeName}): Departs ${b.startingTime} from ${b.startingPoint}. Key stops: ${b.stops.map((s) => s.name).slice(0, 5).join(", ")}`
    )
    .join("\n");

  return `You are "Campus Genie", the official AI campus assistant for Rajalakshmi Engineering College (REC), Thandalam, Chennai.
Current simulated campus time: ${demoDay}, ${demoTime}.
Logged-in student: ${studentInfo.name} (Roll: ${studentInfo.rollNumber}, ${studentInfo.year} ${studentInfo.department}, Sec ${studentInfo.section}).

CAMPUS INFORMATION KNOWLEDGE BASE:

[FACULTY DIRECTORY & CABINS]
${facultySummary}

[STUDENT TIMETABLE]
${timetableSummary}

[PRIMARY REC BUS ROUTES]
${topBusRoutes}
(REC operates over 65 buses covering Chennai, Tiruvallur, Kanchipuram, and Chengalpattu).
Return bus timings: 3:15 PM (all arterial routes) and 5:05 PM (for special lab sessions).

[CAMPUS BLOCKS]
- Tech Park: UI/UX Lab, DBMS Lab, Network Lab, IT Dept.
- Academic Block 2: CSE Classrooms, Dr. Revathi cabin (CSE-204), Dr. Priya Dharshini cabin (CSE-102).
- Heritage Block: AI Classrooms, Dr. Arun Kumar cabin (AI-108).
- Central Amenity: Food court, student cafeteria.

INSTRUCTIONS:
1. Always be polite, helpful, and concise with college students.
2. Format answers with clear emojis, bullet points, and bold text for readability.
3. If asked about faculty availability, cross-check their cabin number and their consultation hours for ${demoDay} at ${demoTime}.
4. If asked about buses or timetable, provide exact timings and room numbers from the knowledge base above.
5. If information is not in the knowledge base, politely state that it is not available in the REC campus database.`;
}

/**
 * Calls Google Gemini API
 */
export async function callGemini(query, apiKey, options = {}) {
  const { demoTime = "14:30", demoDay = "Monday" } = options;

  if (!apiKey || !apiKey.trim()) {
    throw new Error("No Gemini API key provided");
  }

  const systemPrompt = buildCampusKnowledgePrompt(demoTime, demoDay);
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey.trim()}`;

  const payload = {
    system_instruction: {
      parts: [{ text: systemPrompt }],
    },
    contents: [
      {
        role: "user",
        parts: [{ text: query }],
      },
    ],
    generationConfig: {
      temperature: 0.2,
      maxOutputTokens: 600,
    },
  };

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorJson = await response.json().catch(() => ({}));
    throw new Error(
      errorJson?.error?.message || `Gemini API returned status ${response.status}`
    );
  }

  const data = await response.json();
  const candidateText =
    data.candidates?.[0]?.content?.parts?.[0]?.text ||
    "Sorry, I could not generate a response.";

  return candidateText;
}
