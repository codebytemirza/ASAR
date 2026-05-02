import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createClient } from '@/utils/supabase/server';

type ContactPayload = {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
};

const SERVICE_LABELS: Record<string, string> = {
  iso: 'ISO Standards & Certification',
  ai: 'AI Services & Automation',
  training: 'Internal Audit & Training',
  data: 'Data Analysis & Pipelines',
  other: 'General Consulting',
};

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function getFirstName(name: string) {
  const trimmed = name.trim();
  if (!trimmed) return 'there';
  return trimmed.split(/\s+/)[0];
}

function getServiceLabel(service: string) {
  if (!service) return 'General Consulting';
  return SERVICE_LABELS[service.toLowerCase()] || service;
}

function formatLeadTimestamp(date: Date) {
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  }).format(date);

  const formattedTime = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }).format(date);

  return `${formattedDate} at ${formattedTime}`;
}

export async function POST(request: Request) {
  try {
    // ✅ FIXED: moved inside handler — no module-level crash
    const apiKey = process.env.RESEND_API_KEY;
    const resend = apiKey ? new Resend(apiKey) : null;

    const body = (await request.json()) as ContactPayload;
    const name = body.name?.trim() ?? '';
    const email = body.email?.trim() ?? '';
    const service = body.service?.trim() ?? '';
    const message = body.message?.trim() ?? '';

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const supabase = await createClient();
    const { error: insertError } = await supabase.from('leads').insert({
      name,
      email,
      service: service || null,
      message,
    });

    if (insertError) {
      console.error('Failed to insert lead:', insertError);
      return NextResponse.json(
        { error: 'Failed to save your request. Please try again.' },
        { status: 500 }
      );
    }

    const now = new Date();
    const timestamp = formatLeadTimestamp(now);
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeService = escapeHtml(getServiceLabel(service));
    const safeMessage = escapeHtml(message).replaceAll('\n', '<br/>');
    const firstName = escapeHtml(getFirstName(name));

    const theme = {
      background: 'hsl(0 0% 100%)',
      card: 'hsl(0 0% 100%)',
      textPrimary: 'hsl(222 47% 11%)',
      textMuted: 'hsl(215 16% 47%)',
      accent: 'hsl(211 100% 50%)',
      secondary: 'hsl(210 40% 98%)',
      border: 'hsl(214 32% 91%)',
      primary: 'hsl(216 80% 11%)',
    };

    const teamEmailHtml = `
      <div style="background:${theme.secondary};padding:28px;font-family:Inter,Arial,sans-serif;color:${theme.textPrimary};">
        <div style="max-width:760px;margin:0 auto;background:${theme.card};border:1px solid ${theme.border};border-radius:12px;overflow:hidden;">
          <div style="padding:24px 28px;border-bottom:2px solid ${theme.accent};background:${theme.background};">
            <h1 style="margin:0;font-size:28px;line-height:1.2;font-weight:900;letter-spacing:0.04em;color:${theme.accent};">ASAR GLOBAL</h1>
            <p style="margin:8px 0 0 0;font-size:14px;font-weight:600;color:${theme.textPrimary};">New Contact Form Lead</p>
          </div>
          <div style="padding:24px 28px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr style="background:${theme.secondary};"><td style="padding:12px 14px;border:1px solid ${theme.border};color:${theme.textMuted};width:180px;font-size:13px;font-weight:700;">Full Name</td><td style="padding:12px 14px;border:1px solid ${theme.border};color:${theme.textPrimary};font-size:14px;font-weight:600;">${safeName}</td></tr>
              <tr style="background:${theme.background};"><td style="padding:12px 14px;border:1px solid ${theme.border};color:${theme.textMuted};width:180px;font-size:13px;font-weight:700;">Email</td><td style="padding:12px 14px;border:1px solid ${theme.border};font-size:14px;font-weight:600;"><a href="mailto:${safeEmail}" style="color:${theme.accent};text-decoration:none;">${safeEmail}</a></td></tr>
              <tr style="background:${theme.secondary};"><td style="padding:12px 14px;border:1px solid ${theme.border};color:${theme.textMuted};width:180px;font-size:13px;font-weight:700;">Service Interested In</td><td style="padding:12px 14px;border:1px solid ${theme.border};color:${theme.textPrimary};font-size:14px;font-weight:600;">${safeService}</td></tr>
              <tr style="background:${theme.background};"><td style="padding:12px 14px;border:1px solid ${theme.border};color:${theme.textMuted};width:180px;font-size:13px;font-weight:700;vertical-align:top;">Message / Project Overview</td><td style="padding:12px 14px;border:1px solid ${theme.border};color:${theme.textPrimary};line-height:1.7;font-size:14px;font-weight:500;">${safeMessage}</td></tr>
              <tr style="background:${theme.secondary};"><td style="padding:12px 14px;border:1px solid ${theme.border};color:${theme.textMuted};width:180px;font-size:13px;font-weight:700;">Timestamp</td><td style="padding:12px 14px;border:1px solid ${theme.border};color:${theme.textPrimary};font-size:14px;font-weight:600;">${timestamp}</td></tr>
            </table>
          </div>
          <div style="padding:16px 28px;border-top:1px solid ${theme.border};text-align:center;color:${theme.textMuted};font-size:12px;">
            ASAR Global · asarglobal.com
          </div>
        </div>
      </div>
    `;

    const clientEmailHtml = `
      <div style="background:#f8fafc;padding:28px;font-family:Inter,Arial,sans-serif;color:#0f172a;">
        <div style="max-width:760px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
          <div style="padding:24px 28px;border-bottom:2px solid #007bff;">
            <h1 style="margin:0;font-size:28px;line-height:1.2;font-weight:900;letter-spacing:0.04em;color:#007bff;">ASAR GLOBAL</h1>
            <p style="margin:8px 0 0 0;color:#0f172a;font-size:14px;font-weight:600;">Thank you for reaching out</p>
          </div>
          <div style="padding:24px 28px;">
            <p style="margin:0 0 16px 0;color:#0f172a;font-size:16px;">Hello ${firstName},</p>
            <p style="margin:0 0 14px 0;color:#0f172a;line-height:1.7;">
              We have received your request regarding <strong style="color:#007bff;">${safeService}</strong>.
            </p>
            <p style="margin:0 0 18px 0;color:#0f172a;line-height:1.7;">
              Our team will get back to you within <strong style="color:#061833;">24 hours</strong>.
            </p>
            <div style="background:#f8fafc;border:1px solid #e2e8f0;border-left:4px solid #007bff;padding:14px 16px;border-radius:8px;margin:0 0 20px 0;">
              <p style="margin:0 0 8px 0;color:#64748b;font-size:12px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;">Service</p>
              <p style="margin:0 0 12px 0;color:#0f172a;font-size:14px;font-weight:700;">${safeService}</p>
              <p style="margin:0 0 8px 0;color:#64748b;font-size:12px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;">Message / Project Overview</p>
              <p style="margin:0;color:#0f172a;font-size:14px;line-height:1.7;">${safeMessage}</p>
            </div>
            <div style="margin:0 0 8px 0;padding:4px 0 0 0;">
              <p style="margin:0 0 12px 0;color:#64748b;font-size:14px;">In the meantime, learn more about our services</p>
              <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="border-radius:6px;background:#007bff;">
                    <a href="https://asarglobal.com/services" style="display:inline-block;padding:10px 16px;font-weight:700;font-size:14px;color:#ffffff;text-decoration:none;border-radius:6px;">
                      Explore Our Services
                    </a>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div style="padding:16px 28px;border-top:1px solid #e2e8f0;text-align:center;color:#64748b;font-size:12px;">
            <div style="margin-bottom:10px;">ASAR Global · asarglobal.com</div>
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin:0 auto;">
              <tr>
                <td style="border-radius:6px;background:#eef6ff;padding-right:8px;">
                  <a href="https://asarglobal.com" style="display:inline-block;padding:8px 12px;font-weight:700;font-size:12px;color:#007bff;text-decoration:none;border-radius:6px;">
                    Visit Website
                  </a>
                </td>
                <td style="border-radius:6px;background:#eef6ff;padding-left:8px;">
                  <a href="mailto:contact@asarglobal.com" style="display:inline-block;padding:8px 12px;font-weight:700;font-size:12px;color:#007bff;text-decoration:none;border-radius:6px;">
                    Email Us
                  </a>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    `;

    if (resend) {
      const [internalResult, clientResult] = await Promise.all([
        resend.emails.send({
          from: 'ASAR Global <contact@asarglobal.com>',
          to: process.env.NOTIFY_EMAIL || 'contact@asarglobal.com',
          subject: `New Lead: ${name} — ${getServiceLabel(service)}`,
          replyTo: email,
          tags: [{ name: 'category', value: 'contact-form' }],
          html: teamEmailHtml,
        }),
        resend.emails.send({
          from: 'ASAR Global <contact@asarglobal.com>',
          to: email,
          subject: 'We received your request — ASAR Global',
          html: clientEmailHtml,
        }),
      ]);

      const { error: internalEmailError } = internalResult;
      const { error: clientEmailError } = clientResult;

      if (internalEmailError || clientEmailError) {
        console.error('Email send failed:', {
          internalEmailError,
          clientEmailError,
        });
      }
    } else {
      console.warn('RESEND_API_KEY not set — emails skipped');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API error is:', error);
    return NextResponse.json(
      { error: 'Invalid request payload.' },
      { status: 400 }
    );
  }
}