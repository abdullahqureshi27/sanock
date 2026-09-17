import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';

export async function GET() {
  const sql = getDb();
  let dbStatus = 'Not configured (DATABASE_URL missing)';

  if (sql) {
    try {
      const result = await sql`SELECT 1 as connected`;
      if (result && result.length > 0) {
        dbStatus = 'Connected to Neon PostgreSQL';
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      dbStatus = `Connection error: ${msg}`;
    }
  }

  return NextResponse.json({
    status: 'Next.js App Router Server is running',
    database: dbStatus,
    time: new Date().toISOString(),
  });
}
