import { createClient } from '@supabase/supabase-js'

const URL = 'https://nssxrqsdfnzkoujdklgu.supabase.co'

const API_KEY = 'sb_publishable_EFJZ3ouwVhSMe-j2vsp29Q_zMdmfwhn'

export const supabase = createClient(URL, API_KEY)