-- ==============================================================================
-- CAMPUS GENIE - COMPLETE DATABASE SCHEMA, DUMMY ACCOUNTS & TIMETABLE DATA
-- Rajalakshmi Engineering College (REC)
-- Run this complete script in your Supabase SQL Editor:
-- https://supabase.com/dashboard/project/fyknhourmgoyvdvjndce/sql/new
-- ==============================================================================

-- 0. Enable pgcrypto extension for secure password hashing and UUID generation
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- ==============================================================================
-- 1. PROFILES TABLE (Students & Teachers)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL UNIQUE,
  full_name TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'student' CHECK (role IN ('student', 'faculty', 'admin')),
  roll_number TEXT,
  department TEXT,
  year TEXT DEFAULT 'III Year',
  section TEXT DEFAULT 'A',
  faculty_id TEXT,
  bus_route TEXT DEFAULT 'Bus 11 (Moolakadai / Retteri)',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Ensure all columns exist if profiles table already existed
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS role TEXT DEFAULT 'student';
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS faculty_id TEXT;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS bus_route TEXT DEFAULT 'Bus 11 (Moolakadai / Retteri)';

DROP POLICY IF EXISTS "Public profiles are viewable by everyone" ON public.profiles;
CREATE POLICY "Public profiles are viewable by everyone" ON public.profiles FOR SELECT USING (true);

DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;
CREATE POLICY "Users can update their own profile" ON public.profiles FOR UPDATE USING (true);

DROP POLICY IF EXISTS "Users can insert their own profile" ON public.profiles;
CREATE POLICY "Users can insert their own profile" ON public.profiles FOR INSERT WITH CHECK (true);

-- ==============================================================================
-- 2. FACULTY DIRECTORY & LIVE CABIN STATUS
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.faculty (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  short_name TEXT NOT NULL,
  designation TEXT NOT NULL,
  department TEXT NOT NULL,
  dept_code TEXT NOT NULL,
  cabin TEXT NOT NULL,
  cabin_location TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT,
  avatar TEXT,
  specialization TEXT,
  subjects_taught TEXT[],
  default_available_time_text TEXT,
  status TEXT DEFAULT 'Auto', -- 'Available Now', 'Currently Unavailable', 'Auto', 'In Meeting'
  schedule JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.faculty ENABLE ROW LEVEL SECURITY;

-- Ensure all columns exist even if faculty table was previously created with an older schema
ALTER TABLE public.faculty ADD COLUMN IF NOT EXISTS default_available_time_text TEXT;
ALTER TABLE public.faculty ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'Auto';
ALTER TABLE public.faculty ADD COLUMN IF NOT EXISTS schedule JSONB DEFAULT '[]'::jsonb;
ALTER TABLE public.faculty ADD COLUMN IF NOT EXISTS created_at TIMESTAMPTZ DEFAULT NOW();
ALTER TABLE public.faculty ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ DEFAULT NOW();

DROP POLICY IF EXISTS "Faculty is viewable by everyone" ON public.faculty;
CREATE POLICY "Faculty is viewable by everyone" ON public.faculty FOR SELECT USING (true);

DROP POLICY IF EXISTS "Anyone can update faculty status" ON public.faculty;
CREATE POLICY "Anyone can update faculty status" ON public.faculty FOR ALL USING (true);

-- Seed Faculty records
INSERT INTO public.faculty (id, name, short_name, designation, department, dept_code, cabin, cabin_location, email, phone, avatar, specialization, subjects_taught, default_available_time_text, status, schedule)
VALUES
  (
    'fac-revathi',
    'Dr. Revathi S.',
    'Revathi Ma''am',
    'Associate Professor',
    'Computer Science and Engineering',
    'CSE',
    'CSE-204',
    'Academic Block 2, 2nd Floor',
    'revathi.s@rajalakshmi.edu.in',
    '+91 44 6718 1111',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    'Database Systems, Big Data Analytics',
    ARRAY['Database Management Systems (DBMS)', 'Distributed Systems'],
    '2:00 PM – 4:00 PM',
    'Available Now',
    '[{"day":"Monday","start":"14:00","end":"16:00","text":"2:00 PM – 4:00 PM"},{"day":"Tuesday","start":"14:00","end":"16:00","text":"2:00 PM – 4:00 PM"},{"day":"Wednesday","start":"10:00","end":"12:00","text":"10:00 AM – 12:00 PM"},{"day":"Thursday","start":"14:00","end":"16:00","text":"2:00 PM – 4:00 PM"},{"day":"Friday","start":"11:00","end":"13:00","text":"11:00 AM – 1:00 PM"}]'::jsonb
  ),
  (
    'fac-arun',
    'Dr. Arun Kumar K.',
    'Arun Sir',
    'Assistant Professor (Selection Grade)',
    'Artificial Intelligence & Data Science',
    'AI & DS',
    'AI-108',
    'Heritage Block, 1st Floor',
    'arunkumar.k@rajalakshmi.edu.in',
    '+91 44 6718 1122',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    'Deep Learning, Computer Vision',
    ARRAY['Artificial Intelligence', 'UI/UX Design Studio'],
    '11:00 AM – 12:00 PM',
    'Currently Unavailable',
    '[{"day":"Monday","start":"11:00","end":"12:00","text":"11:00 AM – 12:00 PM"},{"day":"Tuesday","start":"11:00","end":"12:00","text":"11:00 AM – 12:00 PM"},{"day":"Wednesday","start":"14:00","end":"15:30","text":"2:00 PM – 3:30 PM"},{"day":"Thursday","start":"11:00","end":"12:00","text":"11:00 AM – 12:00 PM"},{"day":"Friday","start":"14:00","end":"15:00","text":"2:00 PM – 3:00 PM"}]'::jsonb
  ),
  (
    'fac-priya',
    'Dr. Priya Dharshini M.',
    'Priya Ma''am',
    'Professor & Head - Student Affairs',
    'Computer Science and Engineering',
    'CSE',
    'CSE-102',
    'Academic Block 2, 1st Floor',
    'priyadharshini.m@rajalakshmi.edu.in',
    '+91 44 6718 1133',
    'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=150&auto=format&fit=crop&q=80',
    'Computer Networks, Network Security',
    ARRAY['Computer Networks', 'Cyber Physical Systems'],
    '9:30 AM – 11:30 AM',
    'Auto',
    '[{"day":"Monday","start":"09:30","end":"11:30","text":"9:30 AM – 11:30 AM"},{"day":"Tuesday","start":"09:30","end":"11:30","text":"9:30 AM – 11:30 AM"},{"day":"Thursday","start":"10:00","end":"12:00","text":"10:00 AM – 12:00 PM"},{"day":"Friday","start":"14:00","end":"16:00","text":"2:00 PM – 4:00 PM"}]'::jsonb
  ),
  (
    'fac-manikandan',
    'Dr. Manikandan S.',
    'Manikandan Sir',
    'Associate Professor',
    'Information Technology',
    'IT',
    'IT-305',
    'Tech Park, 3rd Floor',
    'manikandan.s@rajalakshmi.edu.in',
    '+91 44 6718 1144',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    'Cloud Computing, DevOps',
    ARRAY['Cloud Computing', 'Full Stack Development'],
    '3:00 PM – 4:30 PM',
    'Auto',
    '[{"day":"Monday","start":"15:00","end":"16:30","text":"3:00 PM – 4:30 PM"},{"day":"Wednesday","start":"15:00","end":"16:30","text":"3:00 PM – 4:30 PM"},{"day":"Friday","start":"09:30","end":"11:00","text":"9:30 AM – 11:00 AM"}]'::jsonb
  ),
  (
    'fac-rajeshwari',
    'Prof. Rajeshwari V.',
    'Rajeshwari Ma''am',
    'Assistant Professor',
    'Electronics & Communication Engineering',
    'ECE',
    'ECE-214',
    'Admin Block, 2nd Floor',
    'rajeshwari.v@rajalakshmi.edu.in',
    '+91 44 6718 1155',
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    'VLSI Architecture, Embedded Sensors',
    ARRAY['VLSI Design', 'Embedded Systems'],
    NULL,
    'Auto',
    '[]'::jsonb
  )
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  short_name = EXCLUDED.short_name,
  designation = EXCLUDED.designation,
  department = EXCLUDED.department,
  cabin = EXCLUDED.cabin,
  cabin_location = EXCLUDED.cabin_location,
  email = EXCLUDED.email,
  phone = EXCLUDED.phone,
  avatar = EXCLUDED.avatar,
  specialization = EXCLUDED.specialization,
  subjects_taught = EXCLUDED.subjects_taught,
  default_available_time_text = EXCLUDED.default_available_time_text,
  status = EXCLUDED.status,
  schedule = EXCLUDED.schedule;

-- ==============================================================================
-- 3. TIMETABLES TABLE (Weekly Periods & Schedule)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.timetables (
  id TEXT PRIMARY KEY,
  day TEXT NOT NULL, -- 'Monday', 'Tuesday', etc.
  period_number INT NOT NULL,
  time TEXT NOT NULL,
  start_time TEXT NOT NULL,
  end_time TEXT NOT NULL,
  subject TEXT NOT NULL,
  code TEXT NOT NULL,
  room TEXT NOT NULL,
  block TEXT NOT NULL,
  faculty_name TEXT NOT NULL,
  faculty_id TEXT REFERENCES public.faculty(id) ON DELETE SET NULL,
  type TEXT NOT NULL, -- 'Theory', 'Practical', 'Break', 'Theory & Tutorial', 'Activity', 'Project'
  department TEXT DEFAULT 'Computer Science and Engineering',
  year TEXT DEFAULT 'III Year',
  section TEXT DEFAULT 'A',
  is_held BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.timetables ENABLE ROW LEVEL SECURITY;

-- Ensure columns exist if table was already created in earlier migrations
ALTER TABLE public.timetables ADD COLUMN IF NOT EXISTS is_held BOOLEAN DEFAULT FALSE;
ALTER TABLE public.timetables ADD COLUMN IF NOT EXISTS department TEXT DEFAULT 'Computer Science and Engineering';
ALTER TABLE public.timetables ADD COLUMN IF NOT EXISTS year TEXT DEFAULT 'III Year';
ALTER TABLE public.timetables ADD COLUMN IF NOT EXISTS section TEXT DEFAULT 'A';

DROP POLICY IF EXISTS "Timetables viewable by everyone" ON public.timetables;
CREATE POLICY "Timetables viewable by everyone" ON public.timetables FOR SELECT USING (true);

DROP POLICY IF EXISTS "Manage timetables" ON public.timetables;
CREATE POLICY "Manage timetables" ON public.timetables FOR ALL USING (true);

-- Seed Complete Weekly Timetable
INSERT INTO public.timetables (id, day, period_number, time, start_time, end_time, subject, code, room, block, faculty_name, faculty_id, type)
VALUES
  -- MONDAY
  ('mon-1', 'Monday', 1, '9:00 AM - 9:55 AM', '09:00', '09:55', 'UI/UX Design Studio', 'CS19511', 'Lab 2', 'Tech Park', 'Dr. Arun Kumar K.', 'fac-arun', 'Practical'),
  ('mon-2', 'Monday', 2, '10:00 AM - 10:55 AM', '10:00', '10:55', 'Database Management Systems (DBMS)', 'CS19501', 'Room 402', 'Academic Block 2', 'Dr. Revathi S.', 'fac-revathi', 'Theory'),
  ('mon-3', 'Monday', 3, '11:00 AM - 11:55 AM', '11:00', '11:55', 'Computer Networks', 'CS19502', 'Room 301', 'Academic Block 2', 'Dr. Priya Dharshini M.', 'fac-priya', 'Theory'),
  ('mon-lunch', 'Monday', 4, '12:00 PM - 1:00 PM', '12:00', '13:00', 'Lunch Break', 'BREAK', 'Food Court / Green Lawn', 'Central Amenity', '-', NULL, 'Break'),
  ('mon-4', 'Monday', 5, '1:00 PM - 1:55 PM', '13:00', '13:55', 'Operating Systems', 'CS19503', 'Room 402', 'Academic Block 2', 'Prof. S. Ramesh', NULL, 'Theory'),
  ('mon-5', 'Monday', 6, '2:00 PM - 3:55 PM', '14:00', '15:55', 'Artificial Intelligence', 'CS19504', 'Room 204', 'Academic Block 2', 'Dr. Arun Kumar K.', 'fac-arun', 'Theory & Tutorial'),

  -- TUESDAY
  ('tue-1', 'Tuesday', 1, '9:00 AM - 9:55 AM', '09:00', '09:55', 'Object Oriented Analysis & Design', 'CS19505', 'Room 402', 'Academic Block 2', 'Dr. Manikandan S.', 'fac-manikandan', 'Theory'),
  ('tue-2', 'Tuesday', 2, '10:00 AM - 11:55 AM', '10:00', '11:55', 'DBMS Practical Lab', 'CS19521', 'Computing Lab 3', 'Tech Park', 'Dr. Revathi S.', 'fac-revathi', 'Practical'),
  ('tue-lunch', 'Tuesday', 3, '12:00 PM - 1:00 PM', '12:00', '13:00', 'Lunch Break', 'BREAK', 'Food Court', 'Central Amenity', '-', NULL, 'Break'),
  ('tue-3', 'Tuesday', 4, '1:00 PM - 1:55 PM', '13:00', '13:55', 'Theory of Computation', 'CS19506', 'Room 402', 'Academic Block 2', 'Dr. S. K. Geetha', NULL, 'Theory'),
  ('tue-4', 'Tuesday', 5, '2:00 PM - 3:00 PM', '14:00', '15:00', 'Professional Communication & Soft Skills', 'HS19501', 'Seminar Hall 1', 'Main Administrative Block', 'Prof. Andrea D.', NULL, 'Activity'),

  -- WEDNESDAY
  ('wed-1', 'Wednesday', 1, '9:00 AM - 9:55 AM', '09:00', '09:55', 'Computer Networks', 'CS19502', 'Room 301', 'Academic Block 2', 'Dr. Priya Dharshini M.', 'fac-priya', 'Theory'),
  ('wed-2', 'Wednesday', 2, '10:00 AM - 10:55 AM', '10:00', '10:55', 'Cloud Computing Essentials', 'CS19507', 'Room 402', 'Academic Block 2', 'Dr. Manikandan S.', 'fac-manikandan', 'Theory'),
  ('wed-3', 'Wednesday', 3, '11:00 AM - 12:55 PM', '11:00', '12:55', 'Network Programming Lab', 'CS19522', 'Lab 4', 'Tech Park', 'Dr. Priya Dharshini M.', 'fac-priya', 'Practical'),
  ('wed-lunch', 'Wednesday', 4, '1:00 PM - 2:00 PM', '13:00', '14:00', 'Lunch Break', 'BREAK', 'Food Court', 'Central Amenity', '-', NULL, 'Break'),
  ('wed-4', 'Wednesday', 5, '2:00 PM - 3:55 PM', '14:00', '15:55', 'Mini Project & Product Development', 'CS19531', 'Innovation Lab', 'Heritage Block', 'Dr. Revathi S. / Dr. Arun Kumar', 'fac-revathi', 'Project'),

  -- THURSDAY
  ('thu-1', 'Thursday', 1, '9:00 AM - 9:55 AM', '09:00', '09:55', 'Artificial Intelligence', 'CS19504', 'Room 204', 'Academic Block 2', 'Dr. Arun Kumar K.', 'fac-arun', 'Theory'),
  ('thu-2', 'Thursday', 2, '10:00 AM - 10:55 AM', '10:00', '10:55', 'Database Management Systems (DBMS)', 'CS19501', 'Room 402', 'Academic Block 2', 'Dr. Revathi S.', 'fac-revathi', 'Theory'),
  ('thu-3', 'Thursday', 3, '11:00 AM - 11:55 AM', '11:00', '11:55', 'Operating Systems', 'CS19503', 'Room 402', 'Academic Block 2', 'Prof. S. Ramesh', NULL, 'Theory'),
  ('thu-lunch', 'Thursday', 4, '12:00 PM - 1:00 PM', '12:00', '13:00', 'Lunch Break', 'BREAK', 'Food Court', 'Central Amenity', '-', NULL, 'Break'),
  ('thu-4', 'Thursday', 5, '1:00 PM - 2:55 PM', '13:00', '14:55', 'Full Stack Web Development Studio', 'CS19523', 'Web Tech Lab', 'Tech Park', 'Dr. Manikandan S.', 'fac-manikandan', 'Practical'),
  ('thu-5', 'Thursday', 6, '3:00 PM - 4:00 PM', '15:00', '16:00', 'Library & Self Study Hour', 'LIB01', 'Central Library', 'Central Library Building', 'Department Mentors', NULL, 'Study'),

  -- FRIDAY
  ('fri-1', 'Friday', 1, '9:00 AM - 9:55 AM', '09:00', '09:55', 'Cloud Computing Essentials', 'CS19507', 'Room 402', 'Academic Block 2', 'Dr. Manikandan S.', 'fac-manikandan', 'Theory'),
  ('fri-2', 'Friday', 2, '10:00 AM - 10:55 AM', '10:00', '10:55', 'Professional Ethics & Human Values', 'GE19501', 'Room 402', 'Academic Block 2', 'Dr. K. Jayanthi', NULL, 'Theory'),
  ('fri-3', 'Friday', 3, '11:00 AM - 11:55 AM', '11:00', '11:55', 'Theory of Computation', 'CS19506', 'Room 402', 'Academic Block 2', 'Dr. S. K. Geetha', NULL, 'Theory'),
  ('fri-lunch', 'Friday', 4, '12:00 PM - 1:00 PM', '12:00', '13:00', 'Lunch Break', 'BREAK', 'Food Court', 'Central Amenity', '-', NULL, 'Break'),
  ('fri-4', 'Friday', 5, '1:00 PM - 2:55 PM', '13:00', '14:55', 'Operating Systems Laboratory', 'CS19524', 'Systems Lab 1', 'Academic Block 2', 'Prof. S. Ramesh', NULL, 'Practical')
ON CONFLICT (id) DO UPDATE SET
  day = EXCLUDED.day,
  period_number = EXCLUDED.period_number,
  time = EXCLUDED.time,
  start_time = EXCLUDED.start_time,
  end_time = EXCLUDED.end_time,
  subject = EXCLUDED.subject,
  code = EXCLUDED.code,
  room = EXCLUDED.room,
  block = EXCLUDED.block,
  faculty_name = EXCLUDED.faculty_name,
  faculty_id = EXCLUDED.faculty_id,
  type = EXCLUDED.type;

-- ==============================================================================
-- 4. FACULTY AVAILABILITY INQUIRIES & REPLIES (Student asks if Free, Teacher responds)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.faculty_inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  faculty_id TEXT NOT NULL REFERENCES public.faculty(id) ON DELETE CASCADE,
  faculty_name TEXT NOT NULL,
  student_id UUID,
  student_name TEXT NOT NULL,
  student_email TEXT NOT NULL,
  student_roll TEXT,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'available', 'busy', 'away', 'custom_reply')),
  reply_text TEXT,
  responded_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.faculty_inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Inquiries viewable by everyone" ON public.faculty_inquiries;
CREATE POLICY "Inquiries viewable by everyone" ON public.faculty_inquiries FOR SELECT USING (true);

DROP POLICY IF EXISTS "Manage inquiries" ON public.faculty_inquiries;
CREATE POLICY "Manage inquiries" ON public.faculty_inquiries FOR ALL USING (true);

-- Insert dummy sample inquiry to test immediately
INSERT INTO public.faculty_inquiries (faculty_id, faculty_name, student_name, student_email, student_roll, message, status, reply_text, responded_at, created_at)
VALUES
  (
    'fac-revathi',
    'Dr. Revathi S.',
    'Yashawini S.',
    'student@rajalakshmi.edu.in',
    '23CSD101',
    'Good afternoon Ma''am! Are you free right now in cabin CSE-204 for DBMS project clarification?',
    'available',
    'Yes Yashawini! I am in cabin CSE-204 right now until 4:00 PM. Please bring your project report.',
    NOW() - INTERVAL '5 minutes',
    NOW() - INTERVAL '15 minutes'
  ),
  (
    'fac-arun',
    'Dr. Arun Kumar K.',
    'Yashawini S.',
    'student@rajalakshmi.edu.in',
    '23CSD101',
    'Hello Sir, will you be available in AI-108 cabin after 3 PM today?',
    'pending',
    NULL,
    NULL,
    NOW() - INTERVAL '2 minutes'
  )
ON CONFLICT DO NOTHING;

-- ==============================================================================
-- 5. TIMETABLE HOLDS TABLE
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.timetable_holds (
  id TEXT PRIMARY KEY,
  class_id TEXT NOT NULL,
  day TEXT NOT NULL,
  reason TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.timetable_holds ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Timetable holds viewable by everyone" ON public.timetable_holds;
CREATE POLICY "Timetable holds viewable by everyone" ON public.timetable_holds FOR SELECT USING (true);
DROP POLICY IF EXISTS "Manage timetable holds" ON public.timetable_holds;
CREATE POLICY "Manage timetable holds" ON public.timetable_holds FOR ALL USING (true);

INSERT INTO public.timetable_holds (id, class_id, day, reason)
VALUES ('hold-mon-4', 'mon-4', 'Monday', 'Faculty in Department Academic Council Meeting')
ON CONFLICT (id) DO NOTHING;

-- ==============================================================================
-- 6. NOTIFICATIONS TABLE
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.notifications (
  id TEXT PRIMARY KEY,
  user_id UUID,
  title TEXT NOT NULL,
  subtitle TEXT,
  category TEXT DEFAULT 'general',
  icon TEXT DEFAULT 'Bell',
  priority TEXT DEFAULT 'normal',
  action_link TEXT,
  details TEXT,
  read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Notifications viewable" ON public.notifications;
CREATE POLICY "Notifications viewable" ON public.notifications FOR SELECT USING (true);
DROP POLICY IF EXISTS "Manage notifications" ON public.notifications;
CREATE POLICY "Manage notifications" ON public.notifications FOR ALL USING (true);

INSERT INTO public.notifications (id, title, subtitle, category, icon, priority, action_link, details)
VALUES
  (
    'notif-revathi-live',
    'Revathi Ma''am is available now!',
    'CSE-204 • Available until 4:00 PM',
    'faculty',
    'GraduationCap',
    'high',
    '/faculty',
    'Dr. Revathi S. is currently available in cabin CSE-204 for student consultations.'
  ),
  (
    'notif-inquiry-reply',
    'Dr. Revathi S. responded to your inquiry',
    'Yes Yashawini! I am in cabin CSE-204 right now until 4:00 PM.',
    'faculty',
    'CheckCircle2',
    'high',
    '/faculty',
    'Your availability inquiry has been answered: "Yes Yashawini! I am in cabin CSE-204 right now until 4:00 PM. Please bring your project report."'
  )
ON CONFLICT (id) DO NOTHING;

-- ==============================================================================
-- 7. LOST & FOUND TABLE & INITIAL ITEMS
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.lost_found (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('lost', 'found')),
  location TEXT NOT NULL,
  date TEXT NOT NULL DEFAULT 'Today',
  status TEXT NOT NULL DEFAULT 'Lost',
  status_color TEXT DEFAULT 'amber',
  description TEXT NOT NULL,
  contact_person TEXT,
  contact_location TEXT,
  image TEXT,
  claimed BOOLEAN DEFAULT FALSE,
  claimed_by TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.lost_found ENABLE ROW LEVEL SECURITY;

-- Ensure all columns exist if the table was created earlier with a different schema
ALTER TABLE public.lost_found ADD COLUMN IF NOT EXISTS title TEXT;
ALTER TABLE public.lost_found ADD COLUMN IF NOT EXISTS category TEXT DEFAULT 'Other';
ALTER TABLE public.lost_found ADD COLUMN IF NOT EXISTS type TEXT DEFAULT 'lost';
ALTER TABLE public.lost_found ADD COLUMN IF NOT EXISTS location TEXT;
ALTER TABLE public.lost_found ADD COLUMN IF NOT EXISTS date TEXT DEFAULT 'Today';
ALTER TABLE public.lost_found ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'Lost';
ALTER TABLE public.lost_found ADD COLUMN IF NOT EXISTS status_color TEXT DEFAULT 'amber';
ALTER TABLE public.lost_found ADD COLUMN IF NOT EXISTS description TEXT;
ALTER TABLE public.lost_found ADD COLUMN IF NOT EXISTS contact_person TEXT;
ALTER TABLE public.lost_found ADD COLUMN IF NOT EXISTS contact_location TEXT;
ALTER TABLE public.lost_found ADD COLUMN IF NOT EXISTS image TEXT;
ALTER TABLE public.lost_found ADD COLUMN IF NOT EXISTS claimed BOOLEAN DEFAULT FALSE;
ALTER TABLE public.lost_found ADD COLUMN IF NOT EXISTS claimed_by TEXT;
ALTER TABLE public.lost_found ADD COLUMN IF NOT EXISTS created_at TIMESTAMPTZ DEFAULT NOW();

DROP POLICY IF EXISTS "Lost and found viewable by everyone" ON public.lost_found;
CREATE POLICY "Lost and found viewable by everyone" ON public.lost_found FOR SELECT USING (true);
DROP POLICY IF EXISTS "Lost and found insertable by everyone" ON public.lost_found;
CREATE POLICY "Lost and found insertable by everyone" ON public.lost_found FOR INSERT WITH CHECK (true);
DROP POLICY IF EXISTS "Lost and found updatable by everyone" ON public.lost_found;
CREATE POLICY "Lost and found updatable by everyone" ON public.lost_found FOR UPDATE USING (true);

INSERT INTO public.lost_found (id, title, category, type, location, date, status, status_color, description, contact_person, contact_location, image, claimed)
VALUES
  (
    'lf-1',
    'Black Backpack',
    'Bags',
    'found',
    'Central Library (2nd Floor Reading Hall)',
    'Today, 11:30 AM',
    'Found',
    'emerald',
    'American Tourister black backpack containing lecture notebooks, water bottle, and a blue pen pouch. Handed over to Central Library help desk.',
    'Library Help Desk Officer',
    'Library Ground Floor Counter',
    'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&auto=format&fit=crop&q=80',
    false
  ),
  (
    'lf-2',
    'Student ID Card',
    'Identity',
    'found',
    'A Block (Near Canteen Steps)',
    'Yesterday',
    'Found',
    'emerald',
    'Rajalakshmi Engineering College student smart ID card belonging to ECE Department (Batch 2024-2028). Submitted to A-Block security desk.',
    'A-Block Security Officer',
    'Security Desk, Main Entrance',
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&auto=format&fit=crop&q=80',
    false
  ),
  (
    'lf-3',
    'Casio fx-991EX Scientific Calculator',
    'Electronics',
    'lost',
    'Room 402 (Academic Block 2)',
    'Today, 10:15 AM',
    'Lost',
    'amber',
    'Black scientific calculator with student roll number sticker (23CSD101) on the reverse cover. Accidentally left on row 3 desk after DBMS lecture.',
    'Yashawini (Student)',
    'CSE Dept III-A / Contact via Campus Genie',
    'https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?w=400&auto=format&fit=crop&q=80',
    false
  ),
  (
    'lf-4',
    'AirPods Pro Wireless Charging Case',
    'Electronics',
    'found',
    'Main Ground Sports Pavilion',
    'Oct 04, 2026',
    'Found',
    'emerald',
    'White Apple AirPods Pro charging case in a purple silicone protective sleeve. Found on the first tier of the sports pavilion bleachers.',
    'Physical Education Director',
    'Sports Complex Office',
    'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&auto=format&fit=crop&q=80',
    false
  ),
  (
    'lf-5',
    'Titan Silver Dial Analog Watch',
    'Accessories',
    'lost',
    'Tech Park (Computing Lab 2)',
    'Oct 03, 2026',
    'Lost',
    'amber',
    'Titan silver metal strap watch with white dial. Kept near System 24 during UI/UX Lab session. Finder please return to CSE HOD office.',
    'K. Vignesh (Student)',
    'Tech Park Lab Assistant',
    'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400&auto=format&fit=crop&q=80',
    false
  ),
  (
    'lf-6',
    'Blue Windproof Umbrella',
    'Accessories',
    'found',
    'Heritage Block (Ground Floor Corridor)',
    'Oct 02, 2026',
    'Found',
    'emerald',
    'Dark blue foldable umbrella left on the corridor bench near the AI Seminar Hall.',
    'Block Attendant',
    'Heritage Block Desk',
    'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&auto=format&fit=crop&q=80',
    false
  )
ON CONFLICT (id) DO NOTHING;

-- ==============================================================================
-- 8. DUMMY ACCOUNTS IN AUTH.USERS & PROFILES (Students & Teachers)
-- Password for all accounts: campusgenie123
-- ==============================================================================
CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA extensions;

-- Ensure required columns exist on public.profiles before running insert
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS role TEXT DEFAULT 'student';
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS faculty_id TEXT;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS roll_number TEXT;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS department TEXT;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS year TEXT DEFAULT 'III Year';
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS section TEXT DEFAULT 'A';
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS bus_route TEXT DEFAULT 'Bus 11 (Moolakadai / Retteri)';

DO $$
DECLARE
  v_enc_pass TEXT;
  v_student_id UUID := '11111111-1111-1111-1111-111111111111';
  v_revathi_id UUID := '22222222-2222-2222-2222-222222222222';
  v_arun_id UUID    := '33333333-3333-3333-3333-333333333333';
  v_priya_id UUID   := '44444444-4444-4444-4444-444444444444';
BEGIN
  -- Safe crypt call using extensions schema
  BEGIN
    v_enc_pass := extensions.crypt('campusgenie123', extensions.gen_salt('bf'));
  EXCEPTION WHEN OTHERS THEN
    v_enc_pass := crypt('campusgenie123', gen_salt('bf'));
  END;

  -- 1. Student Account: student@rajalakshmi.edu.in
  IF NOT EXISTS (SELECT 1 FROM auth.users WHERE email = 'student@rajalakshmi.edu.in') THEN
    INSERT INTO auth.users (
      id, instance_id, aud, role, email, encrypted_password, email_confirmed_at,
      raw_app_meta_data, raw_user_meta_data, created_at, updated_at,
      confirmation_token, recovery_token, email_change_token_new, email_change
    ) VALUES (
      v_student_id, '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated',
      'student@rajalakshmi.edu.in', v_enc_pass, NOW(),
      '{"provider":"email","providers":["email"]}'::jsonb,
      '{"full_name":"Yashawini S.","roll_number":"23CSD101","department":"Computer Science and Engineering","role":"student","year":"III Year","section":"A"}'::jsonb,
      NOW(), NOW(), '', '', '', ''
    );
  END IF;

  -- 2. Teacher Account 1: revathi.s@rajalakshmi.edu.in
  IF NOT EXISTS (SELECT 1 FROM auth.users WHERE email = 'revathi.s@rajalakshmi.edu.in') THEN
    INSERT INTO auth.users (
      id, instance_id, aud, role, email, encrypted_password, email_confirmed_at,
      raw_app_meta_data, raw_user_meta_data, created_at, updated_at,
      confirmation_token, recovery_token, email_change_token_new, email_change
    ) VALUES (
      v_revathi_id, '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated',
      'revathi.s@rajalakshmi.edu.in', v_enc_pass, NOW(),
      '{"provider":"email","providers":["email"]}'::jsonb,
      '{"full_name":"Dr. Revathi S.","role":"faculty","faculty_id":"fac-revathi","department":"Computer Science and Engineering"}'::jsonb,
      NOW(), NOW(), '', '', '', ''
    );
  END IF;

  -- 3. Teacher Account 2: arunkumar.k@rajalakshmi.edu.in
  IF NOT EXISTS (SELECT 1 FROM auth.users WHERE email = 'arunkumar.k@rajalakshmi.edu.in') THEN
    INSERT INTO auth.users (
      id, instance_id, aud, role, email, encrypted_password, email_confirmed_at,
      raw_app_meta_data, raw_user_meta_data, created_at, updated_at,
      confirmation_token, recovery_token, email_change_token_new, email_change
    ) VALUES (
      v_arun_id, '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated',
      'arunkumar.k@rajalakshmi.edu.in', v_enc_pass, NOW(),
      '{"provider":"email","providers":["email"]}'::jsonb,
      '{"full_name":"Dr. Arun Kumar K.","role":"faculty","faculty_id":"fac-arun","department":"Artificial Intelligence & Data Science"}'::jsonb,
      NOW(), NOW(), '', '', '', ''
    );
  END IF;

  -- 4. Teacher Account 3: priyadharshini.m@rajalakshmi.edu.in
  IF NOT EXISTS (SELECT 1 FROM auth.users WHERE email = 'priyadharshini.m@rajalakshmi.edu.in') THEN
    INSERT INTO auth.users (
      id, instance_id, aud, role, email, encrypted_password, email_confirmed_at,
      raw_app_meta_data, raw_user_meta_data, created_at, updated_at,
      confirmation_token, recovery_token, email_change_token_new, email_change
    ) VALUES (
      v_priya_id, '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated',
      'priyadharshini.m@rajalakshmi.edu.in', v_enc_pass, NOW(),
      '{"provider":"email","providers":["email"]}'::jsonb,
      '{"full_name":"Dr. Priya Dharshini M.","role":"faculty","faculty_id":"fac-priya","department":"Computer Science and Engineering"}'::jsonb,
      NOW(), NOW(), '', '', '', ''
    );
  END IF;

  -- Link auth accounts to public.profiles
  INSERT INTO public.profiles (id, email, full_name, role, roll_number, department, year, section, faculty_id)
  SELECT
    id,
    email,
    COALESCE(raw_user_meta_data->>'full_name', email),
    COALESCE(raw_user_meta_data->>'role', 'student'),
    raw_user_meta_data->>'roll_number',
    raw_user_meta_data->>'department',
    COALESCE(raw_user_meta_data->>'year', 'III Year'),
    COALESCE(raw_user_meta_data->>'section', 'A'),
    raw_user_meta_data->>'faculty_id'
  FROM auth.users
  WHERE email IN (
    'student@rajalakshmi.edu.in',
    'revathi.s@rajalakshmi.edu.in',
    'arunkumar.k@rajalakshmi.edu.in',
    'priyadharshini.m@rajalakshmi.edu.in'
  )
  ON CONFLICT (id) DO UPDATE SET
    full_name = EXCLUDED.full_name,
    role = EXCLUDED.role,
    faculty_id = EXCLUDED.faculty_id;

END $$;
