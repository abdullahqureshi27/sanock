import { neon } from '@neondatabase/serverless';

export function getDb() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    return null;
  }
  return neon(connectionString);
}

let tableInitialized = false;

export async function initContactTable() {
  const sql = getDb();
  if (!sql || tableInitialized) return;

  try {
    await sql`
      CREATE TABLE IF NOT EXISTS contact_messages (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        subject VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;
    tableInitialized = true;
    console.log('[Neon DB] contact_messages table verified/initialized');
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error('[Neon DB] Table initialization error:', msg);
  }
}

interface SaveContactParams {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export async function saveContactMessage(data: SaveContactParams): Promise<boolean> {
  const sql = getDb();
  if (!sql) {
    console.warn('[Neon DB] DATABASE_URL is not configured in .env.local. Skipping database insert.');
    return false;
  }

  try {
    await initContactTable();

    await sql`
      INSERT INTO contact_messages (name, email, phone, subject, message)
      VALUES (${data.name}, ${data.email}, ${data.phone}, ${data.subject}, ${data.message});
    `;

    console.log(`[Neon DB] Successfully saved inquiry from ${data.email}`);
    return true;
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error('[Neon DB] Failed to save contact message:', msg);
    return false;
  }
}
