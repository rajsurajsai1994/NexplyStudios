import { useState } from 'react';
import type { FormEvent } from 'react';
import { Phone, Mail, MapPin, Send, Check } from 'lucide-react';
import { DARK_BG_GRADIENT, gradientA, gradientTextStyle } from '../../lib/brand';
import { NEXPLY_SERVICES } from '../../lib/services';
import { OFFICES } from '../../lib/offices';

const CONTACT_EMAIL = 'next@nexplystudio.com';

// Web3Forms - form submissions are emailed to next@nexplystudio.com. This is
// a public access key by design (it only allows sending to the configured
// inbox); spam is handled by the honeypot field + Web3Forms' own filtering.
const WEB3FORMS_ACCESS_KEY = 'f651cc4f-3378-4ee2-b971-f9695b2050b6';
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

const SERVICE_OPTIONS = [...NEXPLY_SERVICES.map((s) => s.title), 'Other'];

const inputStyle = {
  border: '1px solid rgba(255,255,255,0.15)',
  background: 'rgba(255,255,255,0.03)',
};

const labelStyle = { color: 'rgba(255,255,255,0.55)' };

type Status = 'idle' | 'sending' | 'sent' | 'error';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactFormSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [botcheck, setBotcheck] = useState(''); // honeypot - real users never fill this
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (botcheck) return; // bot

    const digits = phone.replace(/\D/g, '');

    if (!name.trim()) {
      setError('Please tell us your name.');
      setStatus('error');
      return;
    }
    if (digits.length < 7 || digits.length > 15) {
      setError('Please enter a valid phone number so our team can call you back.');
      setStatus('error');
      return;
    }
    if (email.trim() && !EMAIL_RE.test(email.trim())) {
      setError('That email address doesn’t look right. You can also leave it blank.');
      setStatus('error');
      return;
    }

    setStatus('sending');
    setError('');

    const payload: Record<string, string> = {
      access_key: WEB3FORMS_ACCESS_KEY,
      from_name: 'Nexply Studios website',
      subject: service
        ? `New enquiry: ${service} — from ${name.trim()}`
        : `New enquiry from ${name.trim()}`,
      name: name.trim(),
      phone: phone.trim(),
      service: service || 'Not specified',
      message: message.trim() || 'No additional details provided.',
    };
    if (email.trim()) payload.email = email.trim();

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        setStatus('sent');
        setName('');
        setEmail('');
        setPhone('');
        setService('');
        setMessage('');
      } else {
        setError(
          (data && data.message) ||
            'Something went wrong sending that. Please email us directly at next@nexplystudio.com.',
        );
        setStatus('error');
      }
    } catch {
      setError(
        'Couldn’t reach the server. Check your connection, or email us directly at next@nexplystudio.com.',
      );
      setStatus('error');
    }
  }

  return (
    <section id="contact-form" className="relative" style={{ background: DARK_BG_GRADIENT }}>
      <div
        className="relative z-10 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
        style={{ maxWidth: 1200, padding: 'clamp(64px, 8vw, 100px) clamp(16px, 4vw, 40px)' }}
      >
        {/* Left: contact details + form */}
        <div className="flex flex-col gap-10">
          <div>
            <h2 className="text-white font-medium mb-4" style={{ fontSize: 'clamp(28px, 3.6vw, 44px)' }}>
              Get in <span style={gradientTextStyle}>touch</span>
            </h2>
            <p style={{ color: 'rgb(169, 151, 206)', fontSize: 'clamp(14px, 1.1vw, 17px)' }}>
              Tell us a bit about your brand and what you need - we'll take it from there.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-3 group"
              style={{ color: 'rgba(255,255,255,0.85)' }}
            >
              <span
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{ border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.03)' }}
              >
                <Mail size={16} />
              </span>
              <span className="text-sm group-hover:text-white transition-colors">{CONTACT_EMAIL}</span>
            </a>

            {OFFICES.map((office) => (
              <div key={office.label} className="flex items-start gap-3" style={{ color: 'rgba(255,255,255,0.85)' }}>
                <span
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.03)' }}
                >
                  <MapPin size={16} />
                </span>
                <span className="text-sm leading-relaxed pt-1.5 flex flex-col gap-1">
                  <span className="text-xs font-semibold uppercase tracking-[0.12em]" style={labelStyle}>
                    {office.label}
                  </span>
                  <span>{office.lines.join(' ')}</span>
                  {office.phone && (
                    <a
                      href={office.phoneHref}
                      className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
                    >
                      <Phone size={13} />
                      {office.phone}
                    </a>
                  )}
                </span>
              </div>
            ))}
          </div>

          {/* Form */}
          <form
            className="flex flex-col gap-4 rounded-2xl backdrop-blur-md p-6"
            style={{ border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)' }}
            onSubmit={handleSubmit}
            noValidate
          >
            {/* honeypot - hidden from users, catches bots */}
            <input
              type="checkbox"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
              checked={!!botcheck}
              onChange={(e) => setBotcheck(e.target.checked ? 'on' : '')}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-name" className="text-xs uppercase tracking-wide" style={labelStyle}>
                  Your name <span style={{ color: '#F5B841' }}>*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-white/30"
                  style={inputStyle}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-phone" className="text-xs uppercase tracking-wide" style={labelStyle}>
                  Phone number <span style={{ color: '#F5B841' }}>*</span>
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel"
                  required
                  placeholder="10-digit mobile number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/[^\d\s+()-]/g, ''))}
                  className="rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-white/30"
                  style={inputStyle}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-email" className="text-xs uppercase tracking-wide" style={labelStyle}>
                  Email <span className="normal-case opacity-60">(optional)</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-white/30"
                  style={inputStyle}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-service" className="text-xs uppercase tracking-wide" style={labelStyle}>
                  Which service?
                </label>
                <select
                  id="contact-service"
                  name="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors focus:border-white/30 appearance-none"
                  style={{
                    ...inputStyle,
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%23ffffff88' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' viewBox='0 0 24 24'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 14px center',
                  }}
                >
                  <option value="" style={{ background: '#12132a', color: '#fff' }}>
                    Select a service
                  </option>
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt} style={{ background: '#12132a', color: '#fff' }}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-message" className="text-xs uppercase tracking-wide" style={labelStyle}>
                Tell us a bit more <span className="normal-case opacity-60">(optional)</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none resize-none transition-colors focus:border-white/30"
                style={inputStyle}
              />
            </div>

            {status === 'error' && (
              <p role="alert" className="text-sm" style={{ color: '#FF9D9D' }}>
                {error}
              </p>
            )}

            {status === 'sent' ? (
              <p
                role="status"
                className="flex items-start gap-2 text-sm font-medium self-start rounded-2xl px-5 py-4"
                style={{ color: '#9CFFC7', border: '1px solid rgba(156,255,199,0.3)', background: 'rgba(156,255,199,0.08)' }}
              >
                <Check size={16} className="mt-0.5 shrink-0" />
                Thank you - your enquiry has reached our team. We&apos;ll call you back within 24 hours.
              </p>
            ) : (
              <button
                type="submit"
                disabled={status === 'sending'}
                className="group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 overflow-hidden self-start disabled:opacity-60"
                style={{ background: '#0b0a1f' }}
              >
                <span
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"
                  style={{ background: gradientA }}
                />
                <span className="relative z-10 text-white text-[15px] font-medium">
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </span>
                <Send size={16} className="relative z-10 text-white" />
              </button>
            )}

            <p className="text-[11px]" style={{ color: 'rgba(255,255,255,0.35)' }}>
              By sending this you agree to our{' '}
              <a href="/privacy" className="underline underline-offset-2 hover:text-white/60">
                privacy policy
              </a>
              .
            </p>
          </form>
        </div>

        {/* Right: map */}
        <div
          className="rounded-2xl overflow-hidden backdrop-blur-md min-h-[400px] lg:min-h-full"
          style={{ border: '1px solid rgba(255,255,255,0.12)' }}
        >
          <iframe
            title="Nexply Studios location"
            src="https://www.google.com/maps?q=Jayabheri+Silicon+Towers,+Hitech+City+Rd,+Kothaguda,+Hyderabad,+Telangana+500084&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 400, filter: 'grayscale(0.3) invert(0.9) contrast(0.9)' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
