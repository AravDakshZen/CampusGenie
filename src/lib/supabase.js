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
      await supabase.from("profiles").upsert(
        {
          id: data.user.id,
          email: data.user.email,
          full_name: meta.full_name || email.split("@")[0],
          roll_number: meta.roll_number || null,
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
