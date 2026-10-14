import { createClient } from "@supabase/supabase-js";

// Read Supabase config from Vite environment variables (.env)
export const SUPABASE_URL =
  import.meta.env?.VITE_SUPABASE_URL || "https://fyknhourmgoyvdvjndce.supabase.co";
export const SUPABASE_ANON_KEY =
  import.meta.env?.VITE_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5a25ob3VybWdveXZkdmpuZGNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE2NDMyMTEsImV4cCI6MjEwNzIxOTIxMX0.d1O0VsHavs66SNh3L2wQAP1DzDoUqIH3gr7oEctEl6g";
export const SUPABASE_SERVICE_ROLE_KEY =
  import.meta.env?.VITE_SUPABASE_SERVICE_ROLE_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5a25ob3VybWdveXZkdmpuZGNlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc5MTY0MzIxMSwiZXhwIjoyMTA3MjE5MjExfQ.bbyvwE04cyUXz7HmpaxtI1h5aw3RYZ6-mUoykbE_tPQ";

// Standard client for frontend application
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});

// Admin client for auto-verifying students and direct administrative access
export const supabaseAdmin = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

/**
 * Sign In with Email & Password
 */
export async function signInUser(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw error;
  }

  // Ensure profile record exists
  if (data?.user) {
    try {
      const meta = data.user.user_metadata || {};
      const role = meta.role || (email.includes(".s@") || email.includes(".k@") || email.includes(".m@") ? "faculty" : "student");
      let facultyId = meta.faculty_id || null;
      if (!facultyId && role === "faculty") {
        if (email.includes("revathi")) facultyId = "fac-revathi";
        else if (email.includes("arun")) facultyId = "fac-arun";
        else if (email.includes("priya")) facultyId = "fac-priya";
      }

      await supabase.from("profiles").upsert(
        {
          id: data.user.id,
          email: data.user.email,
          full_name: meta.full_name || email.split("@")[0],
          role,
          faculty_id: facultyId,
          roll_number: meta.roll_number || (role === "student" ? "23CSD101" : null),
          department: meta.department || "Computer Science and Engineering",
          year: meta.year || "III Year",
          section: meta.section || "A",
        },
        { onConflict: "id" }
      );
    } catch (profErr) {
      console.warn("Profile sync warning:", profErr);
    }
  }

  return data;
}

/**
 * Sign Up new student
 * Auto-confirms user via admin API to prevent "Email not confirmed" lockout in development/demo
 */
export async function signUpUser({ email, password, fullName, rollNumber, department, year = "III Year", section = "A" }) {
  // First, check if admin can create directly with email_confirm: true
  try {
    const { data: adminData, error: adminError } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: {
        full_name: fullName,
        roll_number: rollNumber,
        department,
        year,
        section,
      },
    });

    if (adminError) {
      // If user already registered, bubble up error
      if (adminError.message?.toLowerCase().includes("already registered") || adminError.status === 422) {
        throw new Error("This email is already registered. Please sign in instead.");
      }
      // If admin failed for another reason, fallback to regular signUp
      console.warn("Admin create fallback to standard signup:", adminError.message);
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
            roll_number: rollNumber,
            department,
            year,
            section,
          },
        },
      });
      if (error) throw error;
      return data;
    }

    // Ensure profiles table record
    if (adminData?.user) {
      try {
        await supabaseAdmin.from("profiles").upsert({
          id: adminData.user.id,
          email,
          full_name: fullName,
          roll_number: rollNumber || null,
          department,
          year,
          section,
        });
      } catch (profErr) {
        console.warn("Admin profile upsert warning:", profErr);
      }
    }

    // Auto-sign in the created user
    const { data: loginData, error: loginError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (loginError) {
      return adminData;
    }
    return loginData;
  } catch (err) {
    throw err;
  }
}

/**
 * Sign Out
 */
export async function signOutUser() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("Sign out error:", error.message);
  }
}

/**
 * Send Password Reset Email / Recovery Link
 */
export async function requestPasswordReset(email) {
  const trimmedEmail = email.trim().toLowerCase();
  
  // 1. Try standard Supabase resetPasswordForEmail
  const redirectUrl = `${window.location.origin}/reset-password`;
  const { data, error } = await supabase.auth.resetPasswordForEmail(trimmedEmail, {
    redirectTo: redirectUrl,
  });

  if (error) {
    throw error;
  }

  // 2. Also generate admin recovery link as backup/helper for development & campus testing
  let recoveryUrl = null;
  try {
    const { data: linkData, error: linkError } = await supabaseAdmin.auth.admin.generateLink({
      type: "recovery",
      email: trimmedEmail,
      options: {
        redirectTo: redirectUrl,
      },
    });
    if (!linkError && linkData?.properties?.action_link) {
      recoveryUrl = linkData.properties.action_link;
    }
  } catch (adminErr) {
    console.warn("Admin recovery link fallback note:", adminErr.message);
  }

  return {
    ...data,
    recoveryUrl,
  };
}

/**
 * Update User Password (used after opening recovery link)
 */
export async function updateUserPassword(newPassword) {
  const { data, error } = await supabase.auth.updateUser({
    password: newPassword,
  });

  if (error) {
    throw error;
  }

  return data;
}

/**
 * Direct Admin Password Reset (for verified college accounts)
 */
export async function directAdminResetPassword(email, newPassword) {
  const trimmedEmail = email.trim().toLowerCase();
  
  // Look up user by email
  const { data: { users }, error: listError } = await supabaseAdmin.auth.admin.listUsers();
  if (listError) throw listError;

  const targetUser = users.find((u) => u.email.toLowerCase() === trimmedEmail);
  if (!targetUser) {
    throw new Error("No user registered with this college email address.");
  }

  const { data, error } = await supabaseAdmin.auth.admin.updateUserById(targetUser.id, {
    password: newPassword,
  });

  if (error) throw error;
  return data;
}

/**
 * Faculty Database Operations
 */
export async function getFacultyFromDB() {
  const { data, error } = await supabase.from("faculty").select("*");
  if (error) throw error;
  return data;
}

export async function updateFacultyStatusInDB(facultyId, status) {
  const { data, error } = await supabase
    .from("faculty")
    .update({ status, updated_at: new Date().toISOString() })
    .eq("id", facultyId)
    .select();
  if (error) throw error;
  return data;
}

/**
 * Timetables Database Operations
 */
export async function getTimetableFromDB() {
  const { data, error } = await supabase
    .from("timetables")
    .select("*")
    .order("period_number", { ascending: true });
  if (error) throw error;
  return data;
}

export async function updateTimetableHoldInDB(classId, isHeld) {
  const { data, error } = await supabase
    .from("timetables")
    .update({ is_held: isHeld })
    .eq("id", classId)
    .select();
  if (error) throw error;
  return data;
}

/**
 * Faculty Inquiries (Student asks if teacher is free, Teacher responds)
 */
export async function getFacultyInquiriesFromDB(facultyId = null) {
  let query = supabase.from("faculty_inquiries").select("*").order("created_at", { ascending: false });
  if (facultyId) {
    query = query.eq("faculty_id", facultyId);
  }
  const { data, error } = await query;
  if (error) throw error;
  return data;
}

export async function createFacultyInquiryInDB({ facultyId, facultyName, studentName, studentEmail, studentRoll, message }) {
  const { data, error } = await supabase
    .from("faculty_inquiries")
    .insert([
      {
        faculty_id: facultyId,
        faculty_name: facultyName,
        student_name: studentName,
        student_email: studentEmail,
        student_roll: studentRoll,
        message,
        status: "pending",
      },
    ])
    .select();
  if (error) throw error;
  return data?.[0];
}

export async function respondToFacultyInquiryInDB(inquiryId, { status, replyText }) {
  const { data, error } = await supabase
    .from("faculty_inquiries")
    .update({
      status,
      reply_text: replyText,
      responded_at: new Date().toISOString(),
    })
    .eq("id", inquiryId)
    .select();
  if (error) throw error;
  return data?.[0];
}

/**
 * Lost & Found Database Operations
 */
export async function getLostFoundFromDB() {
  const { data, error } = await supabase
    .from("lost_found")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data;
}

export async function addLostFoundItemToDB(item) {
  const payload = {
    id: item.id || `lf-${Date.now()}`,
    title: item.title,
    category: item.category || "Other",
    type: item.type,
    location: item.location,
    date: item.date || "Just now",
    status: item.status || (item.type === "found" ? "Found" : "Lost"),
    status_color: item.statusColor || (item.type === "found" ? "emerald" : "amber"),
    description: item.description,
    contact_person: item.contactPerson || null,
    contact_location: item.contactLocation || null,
    image: item.image || null,
    claimed: false,
  };
  const { data, error } = await supabase
    .from("lost_found")
    .insert([payload])
    .select();
  if (error) throw error;
  return data?.[0];
}

export async function claimLostFoundItemInDB(itemId, claimedBy = "Student") {
  const { data, error } = await supabase
    .from("lost_found")
    .update({ claimed: true, claimed_by: claimedBy })
    .eq("id", itemId)
    .select();
  if (error) throw error;
  return data?.[0];
}

/**
 * Ensure Demo Accounts Exist (Students & Teachers)
 */
export async function ensureDemoAccounts() {
  const demoUsers = [
    {
      email: "student@rajalakshmi.edu.in",
      password: "campusgenie123",
      fullName: "Yashawini S.",
      role: "student",
      rollNumber: "23CSD101",
      department: "Computer Science and Engineering",
    },
    {
      email: "revathi.s@rajalakshmi.edu.in",
      password: "campusgenie123",
      fullName: "Dr. Revathi S.",
      role: "faculty",
      facultyId: "fac-revathi",
      department: "Computer Science and Engineering",
    },
    {
      email: "arunkumar.k@rajalakshmi.edu.in",
      password: "campusgenie123",
      fullName: "Dr. Arun Kumar K.",
      role: "faculty",
      facultyId: "fac-arun",
      department: "Artificial Intelligence & Data Science",
    },
    {
      email: "priyadharshini.m@rajalakshmi.edu.in",
      password: "campusgenie123",
      fullName: "Dr. Priya Dharshini M.",
      role: "faculty",
      facultyId: "fac-priya",
      department: "Computer Science and Engineering",
    },
  ];

  for (const user of demoUsers) {
    try {
      await supabaseAdmin.auth.admin.createUser({
        email: user.email,
        password: user.password,
        email_confirm: true,
        user_metadata: {
          full_name: user.fullName,
          role: user.role,
          roll_number: user.rollNumber || null,
          faculty_id: user.facultyId || null,
          department: user.department,
        },
      });
    } catch (e) {
      // Ignored if user already registered
    }
  }
}

