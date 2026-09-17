// ============================================================
// DEMMA - CONNEXION À SUPABASE
// ============================================================

const SUPABASE_URL = 'https://lpizyydqhxxnyvxhqbnj.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwaXp5eWRxaHh4bnl2eGhxYm5qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkyMDY0NDgsImV4cCI6MjEwNDc4MjQ0OH0.GVmzLzaeCRPQ609mSde9AuTeuiUPm0eEYZkMKp2SXEA';

let supabaseClient = null;

function initialiserSupabase() {
    if (typeof window.supabase === 'undefined') {
        console.error('❌ La bibliothèque Supabase n\'est pas chargée.');
        return null;
    }
    if (!supabaseClient) {
        supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        console.log('✅ Supabase initialisé');
    }
    return supabaseClient;
}

async function obtenirUtilisateurConnecte() {
    const client = initialiserSupabase();
    if (!client) return null;
    const { data: { session } } = await client.auth.getSession();
    return session ? session.user : null;
}

async function obtenirProfilUtilisateur() {
    const client = initialiserSupabase();
    if (!client) return null;
    const user = await obtenirUtilisateurConnecte();
    if (!user) return null;
    const { data, error } = await client
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();
    if (error) {
        console.error('Erreur récupération profil :', error);
        return null;
    }
    return data;
}

async function deconnecter() {
    const client = initialiserSupabase();
    if (!client) return;
    await client.auth.signOut();
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', function() {
    initialiserSupabase();
});
