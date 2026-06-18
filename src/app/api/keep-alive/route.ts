import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';

/**
 * GET /api/keep-alive
 *
 * Sends a lightweight ping to the Supabase database to prevent the free-tier
 * project from pausing due to inactivity (Supabase pauses after ~7 days idle).
 *
 * Call this endpoint every 4 hours via:
 *  - Vercel Cron (vercel.json)
 *  - UptimeRobot (free, https://uptimerobot.com)
 *  - cron-job.org (free, https://cron-job.org)
 */
export async function GET(request: Request) {
  // Optional: protect the endpoint with a secret token so only your cron
  // service can trigger it (set CRON_SECRET in your environment variables).
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret) {
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
  }

  try {
    const supabase = await createClient();

    // Lightweight ping — selects 1 row from leads to prove DB is alive.
    // Uses no write operations so it's safe to call repeatedly.
    const { error } = await supabase
      .from('leads')
      .select('id')
      .limit(1);

    if (error) {
      console.error('[keep-alive] Supabase ping failed:', error.message);
      return NextResponse.json(
        { ok: false, error: error.message, timestamp: new Date().toISOString() },
        { status: 500 }
      );
    }

    const timestamp = new Date().toISOString();
    console.log(`[keep-alive] Supabase pinged successfully at ${timestamp}`);

    return NextResponse.json({ ok: true, timestamp });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error('[keep-alive] Unexpected error:', message);
    return NextResponse.json(
      { ok: false, error: message, timestamp: new Date().toISOString() },
      { status: 500 }
    );
  }
}
