# Campus Genie – AI-Powered Smart Campus Assistant
### Rajalakshmi Engineering College (REC), Thandalam, Chennai

**Campus Genie** is a complete, modern, responsive web application designed for Rajalakshmi Engineering College students. It provides a ChatGPT-style conversational AI assistant connected to official campus datasets for Transport, Faculty Availability, Timetable, Lost & Found, Notifications, and Student Profile.

---

## 🚀 Key Features

1. **Authentication (REC Single Sign-On)**
   - Strict domain restriction: Only `@rajalakshmi.edu.in` email addresses are permitted.
   - Validation rejects invalid domains (e.g., `@gmail.com`, `@yahoo.com`) with: `❌ Please use your Rajalakshmi Engineering College email ID.`.
   - Direct-to-assistant flow: Upon login, immediately opens the **AI Assistant** (no generic landing page).
   - Pre-filled credentials provided for instant testing: `student@rajalakshmi.edu.in`.

2. **🤖 AI Assistant (Main Home Screen)**
   - ChatGPT-style conversation stream with typing indicator (`🤖 Campus Genie is thinking...`).
   - One-tap quick action buttons:
     - 🚌 *Where is Bus 11 going?*
     - ⏰ *Is Revathi Ma'am available now?*
     - 📚 *What's my next class?*
     - 🔎 *Show Lost & Found*
   - Voice search input toggle (Web Speech API integration with mock fallback).
   - Intent recognition across local campus datasets:
     - **Transport:** Bus routes, stops, departure & return times, campus bay positions, driver contacts.
     - **Faculty:** Real-time schedule checking (e.g., Dr. Revathi S. in CSE-204, Dr. Arun Kumar in AI-108).
     - **Timetable:** Next upcoming class calculation with venue and faculty.
     - **Lost & Found:** Registry queries and recent finds.
   - **Strict Anti-Hallucination Policy:** If information is not in the campus dataset, responds with:  
     `"Sorry 😅 I couldn't find that information in the current campus data."`

3. **🚌 Rajalakshmi Transport Module (Full 146 Routes Dataset)**
   - Referenced directly from the official **REC Transport Department** (`https://www.rectransport.com/js/146routedec25.php`).
   - Integrated all **147 official routes**: Route 1 (Ennore), Route 1B (Beach Station), Route 2 (Tondiarpet), Route 11 (Moolakadai), Route 14 (Manali), Route 18 (Avadi), Route 19 (SP Kovil / Chengalpattu), Route 19E (Tambaram MCC), Route 21 (Velachery), Route 34 (Porur), Route 37 (DLF / Poonamallee), Route 38 (Kancheepuram), Route 41C (Vellore), Route 42 (Arakkonam), Route 45 (Padappai), and all intermediate sub-routes.
   - Dual View Mode:
     - **Card Grid View:** Interactive cards with departure times, campus bay positions, stop timeline, driver contacts, and "Ask AI" buttons.
     - **Official 146 Routes Table View:** Exact digital replica of `rectransport.com/js/146routedec25.php` table featuring S.No, Route No, Route Name, Starting Time, and direct Boarding Points links.
   - Search by bus number (e.g., "11", "42"), destination, or intermediate boarding point.
   - Return trips schedule: 3:15 PM (65 common buses) & 5:05 PM (65 common buses).
   - Source label: `Source: REC Transport Department`.

4. **👩‍🏫 Faculty Availability Module**
   - Schedule-based availability calculation using stored academic timetables and simulated/real time.
   - Status indicators:
     - 🟢 **Available Now**
     - 🔴 **Currently Unavailable**
     - ⚪ **Availability Not Updated**
   - Search by faculty name or filter by department (CSE, AI & DS, IT, ECE).
   - "Notify Me" subscription toggle to receive availability alerts.

5. **📚 Student Timetable Module**
   - Daily schedule tabs: Monday through Friday.
   - Highlighted **Next Class Card** (e.g., DBMS at 10:00 AM in Room 402 with Dr. Revathi S.).
   - Visual breakdown of theory, practical lab sessions, and lunch breaks.

6. **🔎 Lost & Found Module**
   - Search missing and recovered campus belongings.
   - Real recorded items: Black Backpack (Library), Student ID Card (A Block), Casio Calculator, AirPods Case, etc.
   - *"Report Lost Item"* and *"Report Found Item"* modals that immediately save new entries and dispatch notifications.

7. **🔔 Notifications Module**
   - Live badge count in top navigation.
   - Specific alert types: Faculty cabin arrival, 15-minute transport departure reminder, 15-minute upcoming lecture reminder.
   - Actions: Mark as read, Mark all as read, Clear notification, Clear all.

8. **👤 Student Profile**
   - Student: Yashawini (Roll No: 23CSD101, Computer Science III Year Section A).
   - ID card preview, assigned faculty counselor (Dr. Revathi S.), bus pass details (Bus 11).
   - In-app profile editor.

9. **⚙️ Settings & Simulation Controls**
   - Notification preferences (faculty alerts, bus alerts, class reminders).
   - Dark mode toggle and sound feedback toggle.
   - **Demo Time Simulator:** Quick switch between 11:15 AM (Arun Sir available), 2:30 PM (Revathi Ma'am available), and 5:30 PM (after hours) to demonstrate schedule status changes live during presentations.

---

## 🎨 Design Theme & Colors

- **Primary Purple:** `#6D28D9`
- **Dark Purple:** `#4C1D95`
- **Light Purple:** `#F3E8FF`
- **Background:** `#FAF9FF`
- **White:** `#FFFFFF`
- **Text:** `#1F2937`
- Typography: *Plus Jakarta Sans*

---

## 📁 Project Architecture

```
campus-genie/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx            # Desktop sidebar & mobile drawer navigation
│   │   ├── Topbar.jsx             # Header, unread badge, simulation clock, profile
│   │   ├── ChatBox.jsx            # ChatGPT-style conversation area & voice input
│   │   ├── ChatMessage.jsx        # User & AI message bubbles with embedded cards
│   │   ├── NotificationPanel.jsx  # Notification management panel
│   │   ├── TransportCard.jsx      # Bus route cards with stops and "Ask AI"
│   │   ├── FacultyCard.jsx        # Schedule-based faculty availability cards
│   │   ├── TimetableCard.jsx      # Class cards & next upcoming class highlight
│   │   ├── LostFoundCard.jsx      # Lost & found articles with claim button
│   │   └── StatusBadge.jsx        # Universal status badge pills
│   ├── pages/
│   │   ├── Login.jsx              # SSO login with @rajalakshmi.edu.in validation
│   │   ├── AIAssistant.jsx        # Main home screen chat page
│   │   ├── Transport.jsx          # Dedicated REC transport directory
│   │   ├── Faculty.jsx            # Faculty availability search & filters
│   │   ├── Timetable.jsx          # Student schedule with day tabs
│   │   ├── LostFound.jsx          # Lost & found registry with report forms
│   │   ├── Notifications.jsx      # Campus alert feed
│   │   ├── Profile.jsx            # Student digital ID & records
│   │   └── Settings.jsx           # Preferences & demo time simulation
│   ├── data/
│   │   ├── transportData.js       # Official REC Transport Department dataset
│   │   ├── facultyData.js         # Faculty schedules & status calculator
│   │   ├── timetableData.js       # Weekly timetable & next class resolver
│   │   ├── lostFoundData.js       # Lost & found initial records
│   │   ├── notificationData.js    # Initial notification alerts
│   │   └── aiAssistantEngine.js   # Local intent classifier & query handler
│   ├── context/
│   │   └── AppContext.jsx         # Global state & persistence (localStorage)
│   ├── App.jsx                    # Routing & protected layout
│   ├── main.jsx                   # React 19 root mounting
│   └── index.css                  # Tailwind CSS v4 custom theme
├── index.html
├── package.json
└── vite.config.js
```

---

## 🛠️ How to Run

1. Open a terminal in `C:\Users\DELL\.gemini\antigravity\scratch\campus-genie`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
4. Open your browser at `http://localhost:5173/`
