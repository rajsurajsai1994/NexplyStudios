import { useState } from 'react';
import type { FormEvent } from 'react';
import { Phone, Mail, MapPin, Send, Check } from 'lucide-react';
import { DARK_BG_GRADIENT, gradientA, gradientTextStyle } from '../../lib/brand';

// Confirmed email address.
const CONTACT_EMAIL = 'next@nexplystudio.com';

const inputStyle = {
  border: '1px solid rgba(255,255,255,0.15)',
  background: 'rgba(255,255,255,0.03)',
};

const labelStyle = { color: 'rgba(255,255,255,0.55)' };

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function ContactFormSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill in your name, email, and message.');
      setStatus('error');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('That email address doesn’t look right.');
      setStatus('error');
      return;
    }

    setStatus('sending');
    setError('');

    // No backend is wired up yet, so we hand off to the visitor's own email
    // client with everything pre-filled - a real, working send path that
    // needs no third-party service or API key. Swap this for a fetch() to a
    // form backend (e.g. Formspree/EmailJS) once one is chosen.
    const subject = encodeURIComponent(topic.trim() ? `New project inquiry: ${topic.trim()}` : 'New project inquiry');
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n${topic.trim() ? `What they need: ${topic}\n` : ''}\n${message}`,
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    setStatus('sent');
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
              href="tel:+917842203319"
              className="flex items-center gap-3 group"
              style={{ color: 'rgba(255,255,255,0.85)' }}
            >
              <span
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{ border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.03)' }}
              >
                <Phone size={16} />
              </span>
              <span className="text-sm group-hover:text-white transition-colors">
                +91 78422 03319 · +91 87909 41280
              </span>
            </a>

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

            <div className="flex items-start gap-3" style={{ color: 'rgba(255,255,255,0.85)' }}>
              <span
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{ border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.03)' }}
              >
                <MapPin size={16} />
              </span>
              <span className="text-sm leading-relaxed pt-2">
                8th Floor, Suite 30, Jayabheri Silicon Towers, Hitech City Rd, Kothaguda,
                Hyderabad, Telangana 500084.
              </span>
            </div>
          </div>

          {/* Form */}
          <form
            className="flex flex-col gap-4 rounded-2xl backdrop-blur-md p-6"
            style={{ border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)' }}
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-name" className="text-xs uppercase tracking-wide" style={labelStyle}>
                  Your name
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
                <label htmlFor="contact-email" className="text-xs uppercase tracking-wide" style={labelStyle}>
                  Your email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-white/30"
                  style={inputStyle}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-topic" className="text-xs uppercase tracking-wide" style={labelStyle}>
                What do you need help with?
              </label>
              <input
                id="contact-topic"
                name="topic"
                type="text"
                autoComplete="off"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-white/30"
                style={inputStyle}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-message" className="text-xs uppercase tracking-wide" style={labelStyle}>
                Tell us a bit more
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                required
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
                className="flex items-center gap-2 text-sm font-medium self-start rounded-full px-5 py-3"
                style={{ color: '#9CFFC7', border: '1px solid rgba(156,255,199,0.3)', background: 'rgba(156,255,199,0.08)' }}
              >
                <Check size={16} />
                Opening your email client with this message pre-filled...
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
