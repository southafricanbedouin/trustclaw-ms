import { createClient } from "@supabase/supabase-js";
import { env } from "~/env";

if (!env.NEXT_PUBLIC_SUPABASE_URL || !env.SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error(
    "Supabase environment variables not configured (optional feature disabled)"
  );
}

export const supabaseServer = createClient(
  env.NEXT_PUBLIC_SUPABASE_URL,
  env.SUPABASE_SERVICE_ROLE_KEY
);
