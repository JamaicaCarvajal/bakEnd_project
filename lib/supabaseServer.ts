import { createMockSupabaseClient } from './mockSupabase';

export async function supabaseServer() {
  return createMockSupabaseClient();
}
