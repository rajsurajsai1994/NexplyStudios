import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ContactButton from './ContactButton';
import { colors } from '../lib/brand';
import { NEXPLY_SERVICES } from '../lib/services';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const location = useLocation();

  // Home only matches the exact root path; every other nav item also
  // covers its own sub-routes (e.g. Blog stays "active" on a blog post).
  const isActive = (href: string) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href);
  const isServicesActive = location.pathname.startsWith('/services/');

  // Shared active-state look for the pill nav links, desktop and mobile -
  // a tinted background plus the site's blue accent, so the current page
  // reads clearly without leaning on a whole new color.
  const navLinkStyle = (active: boolean) => ({
    color: active ? colors.primaryBlue : colors.navy,
    background: active ? 'rgba(28,78,255,0.08)' : undefined,
    fontWeight: active ? 600 : 400,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openServices = () => {
    clearTimeout(closeTimeout.current);
    setServicesOpen(true);
  };
  const scheduleCloseServices = () => {
    closeTimeout.current = setTimeout(() => setServicesOpen(false), 150);
  };

  // Closes both the mobile menu and its Services submenu - called whenever
  // a link inside the mobile menu is tapped, so the panel doesn't stay
  // open covering the page it just navigated to.
  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center pl-4 pr-1.5">
      <nav
        className={`relative w-full bg-white rounded-2xl shadow-lg transition-all duration-500 ease-in-out ${
          scrolled ? 'max-w-2xl' : 'max-w-4xl'
        }`}
      >
        <div
          className={`flex items-center justify-between gap-6 transition-all duration-500 ease-in-out ${
            scrolled ? 'pl-4 pr-2 py-1.5' : 'pl-5 pr-2 py-1.5'
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src="/nexply-studio-logo-nav.svg"
              alt="Nexply Studios"
              style={{ height: 44, width: 'auto' }}
            />
          </Link>

          {/* Desktop nav links */}
          <div className={`hidden md:flex items-center flex-1 ${scrolled ? 'gap-1' : 'gap-3'}`}>
            <Link
              to={NAV_LINKS[0].href}
              className={`text-sm rounded-xl hover:bg-gray-100 transition-all duration-500 ease-in-out whitespace-nowrap ${
                scrolled ? 'px-2 py-1.5' : 'px-4 py-2'
              }`}
              style={navLinkStyle(isActive(NAV_LINKS[0].href))}
            >
              {NAV_LINKS[0].label}
            </Link>

            <Link
              to={NAV_LINKS[1].href}
              className={`text-sm rounded-xl hover:bg-gray-100 transition-all duration-500 ease-in-out whitespace-nowrap ${
                scrolled ? 'px-2 py-1.5' : 'px-4 py-2'
              }`}
              style={navLinkStyle(isActive(NAV_LINKS[1].href))}
            >
              {NAV_LINKS[1].label}
            </Link>

            {/* Services - dropdown trigger */}
            <div
              className="relative"
              onMouseEnter={openServices}
              onMouseLeave={scheduleCloseServices}
            >
              <button
                type="button"
                onClick={() => setServicesOpen((v) => !v)}
                className={`flex items-center gap-1 text-sm rounded-xl hover:bg-gray-100 transition-all duration-500 ease-in-out whitespace-nowrap ${
                  scrolled ? 'px-2 py-1.5' : 'px-4 py-2'
                }`}
                style={navLinkStyle(isServicesActive)}
              >
                Services
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Glassmorphism dropdown panel */}
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 rounded-2xl backdrop-blur-xl overflow-hidden"
                    style={{
                      width: 560,
                      border: '1px solid rgba(255,255,255,0.14)',
                      background: 'rgba(13,14,31,0.85)',
                      boxShadow: '0 20px 50px rgba(0,0,0,0.45)',
                    }}
                  >
                    {/* Faint top sheen, matching the site's glass language */}
                    <div
                      className="pointer-events-none absolute inset-0"
                      style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 30%)' }}
                    />
                    <div className="relative grid grid-cols-2 gap-1 p-3">
                      {NEXPLY_SERVICES.map((service) => (
                        <Link
                          key={service.title}
                          to={`/services/${service.slug}`}
                          className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors duration-200 hover:bg-white/[0.06]"
                        >
                          <span
                            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                            style={{ background: service.gradient }}
                          >
                            <span className="text-white [&>svg]:w-4 [&>svg]:h-4">{service.icon}</span>
                          </span>
                          <span className="text-sm text-white/85 leading-snug">{service.title}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to={NAV_LINKS[2].href}
              className={`text-sm rounded-xl hover:bg-gray-100 transition-all duration-500 ease-in-out whitespace-nowrap ${
                scrolled ? 'px-2 py-1.5' : 'px-4 py-2'
              }`}
              style={navLinkStyle(isActive(NAV_LINKS[2].href))}
            >
              {NAV_LINKS[2].label}
            </Link>

            <Link
              to={NAV_LINKS[3].href}
              className={`text-sm rounded-xl hover:bg-gray-100 transition-all duration-500 ease-in-out whitespace-nowrap ${
                scrolled ? 'px-2 py-1.5' : 'px-4 py-2'
              }`}
              style={navLinkStyle(isActive(NAV_LINKS[3].href))}
            >
              {NAV_LINKS[3].label}
            </Link>
          </div>

          {/* Right cluster - desktop */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <ContactButton label="Let's Talk" href="/contact" />
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-100 transition-colors shrink-0"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} color={colors.navy} /> : <Menu size={22} color={colors.navy} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden flex flex-col items-stretch gap-1 px-4 pb-4 pt-1">
            <Link
              to={NAV_LINKS[0].href}
              onClick={closeMobileMenu}
              className="text-sm rounded-xl hover:bg-gray-100 px-4 py-2 w-full text-center"
              style={navLinkStyle(isActive(NAV_LINKS[0].href))}
            >
              {NAV_LINKS[0].label}
            </Link>
            <Link
              to={NAV_LINKS[1].href}
              onClick={closeMobileMenu}
              className="text-sm rounded-xl hover:bg-gray-100 px-4 py-2 w-full text-center"
              style={navLinkStyle(isActive(NAV_LINKS[1].href))}
            >
              {NAV_LINKS[1].label}
            </Link>

            {/* Services - collapsible on mobile */}
            <button
              onClick={() => setMobileServicesOpen((v) => !v)}
              className="flex items-center justify-center gap-1 text-sm rounded-xl hover:bg-gray-100 px-4 py-2 w-full"
              style={navLinkStyle(isServicesActive)}
            >
              Services
              <ChevronDown
                size={14}
                className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {mobileServicesOpen && (
              <div
                className="mx-2 my-1 rounded-2xl overflow-hidden"
                style={{ border: '1px solid rgba(0,0,0,0.08)', background: 'rgba(13,14,31,0.9)' }}
              >
                <div className="grid grid-cols-1 gap-1 p-3">
                  {NEXPLY_SERVICES.map((service) => (
                    <Link
                      key={service.title}
                      to={`/services/${service.slug}`}
                      onClick={closeMobileMenu}
                      className="flex items-center gap-3 rounded-xl px-3 py-2 transition-colors duration-200 hover:bg-white/[0.06]"
                    >
                      <span
                        className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: service.gradient }}
                      >
                        <span className="text-white [&>svg]:w-3.5 [&>svg]:h-3.5">{service.icon}</span>
                      </span>
                      <span className="text-sm text-white/85">{service.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <Link
              to={NAV_LINKS[2].href}
              onClick={closeMobileMenu}
              className="text-sm rounded-xl hover:bg-gray-100 px-4 py-2 w-full text-center"
              style={navLinkStyle(isActive(NAV_LINKS[2].href))}
            >
              {NAV_LINKS[2].label}
            </Link>

            <Link
              to={NAV_LINKS[3].href}
              onClick={closeMobileMenu}
              className="text-sm rounded-xl hover:bg-gray-100 px-4 py-2 w-full text-center"
              style={navLinkStyle(isActive(NAV_LINKS[3].href))}
            >
              {NAV_LINKS[3].label}
            </Link>

            <div className="flex items-center gap-2 w-full mt-2">
              <ContactButton label="Let's Talk" href="/contact" className="flex-1" onClick={closeMobileMenu} />
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
