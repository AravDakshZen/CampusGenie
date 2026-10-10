-- ==============================================================================
-- CAMPUS GENIE - OFFICIAL DATABASE SCHEMA FOR SUPABASE
-- Run this in your Supabase SQL Editor: https://supabase.com/dashboard/project/fyknhourmgoyvdvjndce/sql/new
-- ==============================================================================

-- 1. Student Profiles Table
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL UNIQUE,
  full_name TEXT NOT NULL,
  roll_number TEXT,
  department TEXT,
  year TEXT DEFAULT 'III Year',
  section TEXT DEFAULT 'A',
  bus_route TEXT DEFAULT 'Bus 11 (Moolakadai / Retteri)',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public profiles are viewable by everyone" ON public.profiles;
CREATE POLICY "Public profiles are viewable by everyone" ON public.profiles FOR SELECT USING (true);

DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;
CREATE POLICY "Users can update their own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can insert their own profile" ON public.profiles;
CREATE POLICY "Users can insert their own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);

-- 2. Faculty Directory & Live Cabin Status
CREATE TABLE IF NOT EXISTS public.faculty (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  short_name TEXT NOT NULL,
  designation TEXT NOT NULL,
  department TEXT NOT NULL,
  dept_code TEXT NOT NULL,
  cabin TEXT NOT NULL,
  cabin_location TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  avatar TEXT,
  specialization TEXT,
  subjects_taught TEXT[],
  status TEXT DEFAULT 'Auto', -- 'Available Now', 'Currently Unavailable', 'Auto'
  schedule JSONB DEFAULT '[]'::jsonb,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.faculty ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Faculty is viewable by everyone" ON public.faculty;
CREATE POLICY "Faculty is viewable by everyone" ON public.faculty FOR SELECT USING (true);

DROP POLICY IF EXISTS "Authenticated users can update faculty status" ON public.faculty;
CREATE POLICY "Authenticated users can update faculty status" ON public.faculty FOR UPDATE USING (auth.role() = 'authenticated');

-- Seed initial faculty
INSERT INTO public.faculty (id, name, short_name, designation, department, dept_code, cabin, cabin_location, email, phone, avatar, specialization, subjects_taught, schedule)
VALUES
  ('fac-revathi', 'Dr. Revathi S.', 'Revathi Ma''am', 'Associate Professor', 'Computer Science and Engineering', 'CSE', 'CSE-204', 'Academic Block 2, 2nd Floor', 'revathi.s@rajalakshmi.edu.in', '+91 44 6718 1111', 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80', 'Database Systems, Big Data Analytics', ARRAY['Database Management Systems (DBMS)', 'Distributed Systems'], '[{"day":"Monday","start":"14:00","end":"16:00","text":"2:00 PM – 4:00 PM"},{"day":"Tuesday","start":"14:00","end":"16:00","text":"2:00 PM – 4:00 PM"},{"day":"Wednesday","start":"10:00","end":"12:00","text":"10:00 AM – 12:00 PM"},{"day":"Thursday","start":"14:00","end":"16:00","text":"2:00 PM – 4:00 PM"},{"day":"Friday","start":"11:00","end":"13:00","text":"11:00 AM – 1:00 PM"}]'::jsonb),
  ('fac-arun', 'Dr. Arun Kumar K.', 'Arun Sir', 'Assistant Professor (Selection Grade)', 'Artificial Intelligence & Data Science', 'AI & DS', 'AI-108', 'Heritage Block, 1st Floor', 'arunkumar.k@rajalakshmi.edu.in', '+91 44 6718 1122', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80', 'Deep Learning, Computer Vision', ARRAY['Artificial Intelligence', 'UI/UX Design Studio'], '[{"day":"Monday","start":"11:00","end":"12:00","text":"11:00 AM – 12:00 PM"},{"day":"Tuesday","start":"11:00","end":"12:00","text":"11:00 AM – 12:00 PM"},{"day":"Wednesday","start":"14:00","end":"15:30","text":"2:00 PM – 3:30 PM"},{"day":"Thursday","start":"11:00","end":"12:00","text":"11:00 AM – 12:00 PM"},{"day":"Friday","start":"14:00","end":"15:00","text":"2:00 PM – 3:00 PM"}]'::jsonb),
  ('fac-priya', 'Dr. Priya Dharshini M.', 'Priya Ma''am', 'Professor & Head - Student Affairs', 'Computer Science and Engineering', 'CSE', 'CSE-102', 'Academic Block 2, 1st Floor', 'priyadharshini.m@rajalakshmi.edu.in', '+91 44 6718 1133', 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=150&auto=format&fit=crop&q=80', 'Computer Networks, Network Security', ARRAY['Computer Networks', 'Cyber Physical Systems'], '[{"day":"Monday","start":"09:30","end":"11:30","text":"9:30 AM – 11:30 AM"},{"day":"Tuesday","start":"09:30","end":"11:30","text":"9:30 AM – 11:30 AM"},{"day":"Thursday","start":"10:00","end":"12:00","text":"10:00 AM – 12:00 PM"},{"day":"Friday","start":"14:00","end":"16:00","text":"2:00 PM – 4:00 PM"}]'::jsonb)
ON CONFLICT (id) DO NOTHING;

-- 3. Timetable Holds Table
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

-- 4. Lost & Found Table
CREATE TABLE IF NOT EXISTS public.lost_found (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  location TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('lost', 'found')),
  date TEXT NOT NULL,
  status TEXT NOT NULL,
  description TEXT,
  contact TEXT,
  claimed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.lost_found ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Lost & found viewable by everyone" ON public.lost_found;
CREATE POLICY "Lost & found viewable by everyone" ON public.lost_found FOR SELECT USING (true);
DROP POLICY IF EXISTS "Manage lost & found" ON public.lost_found;
CREATE POLICY "Manage lost & found" ON public.lost_found FOR ALL USING (true);

-- 5. Notifications Table
CREATE TABLE IF NOT EXISTS public.notifications (
  id TEXT PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
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
