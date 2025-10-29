import { createClient as createSupabaseServerClient } from '@supabase/supabase-js'

export async function createClient() {

    return createSupabaseServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_API_KEY!
    )
}