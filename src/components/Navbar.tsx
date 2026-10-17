import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Stethoscope, Phone, Menu, X, MessageSquare, Moon, Sun } from 'lucide-react';
import { useTheme } from './useTheme';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${nextTheme} mode`}
      aria-pressed={theme === 'dark'}
      title={`Switch to ${nextTheme} mode`}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-colors hover:border-emerald-600 hover:text-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
    >
      {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
};

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Treatments', path: '/treatments' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleWhatsAppBooking = () => {
    const message = encodeURIComponent("Hello Dr. Shraddha Wanje, I would like to book a consultation at your Airoli clinic.");
    window.open(`https://wa.me/918452909801?text=${message}`, '_blank');
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-white py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xl group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
            <Stethoscope className="w-5 h-5" />
          </div>
          <div>
            <span className="font-serif font-bold text-lg text-slate-800 block leading-tight">Dr. Shraddha Wanje</span>
            <span className="text-xs text-slate-500 tracking-wide font-medium">Proctologist & General Surgeon</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-emerald-600 ${isActive ? 'text-emerald-600 font-semibold' : 'text-slate-600'}`}
              >
                {link.name}
              </Link>
            );
          })}
          <ThemeToggle />
        </nav>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+918452909801" className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors">
            <Phone className="w-4 h-4 text-emerald-600" />
            <span>+91 8452909801</span>
          </a>
          <button
            onClick={handleWhatsAppBooking}
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow active:scale-95"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Book via WhatsApp</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-700 p-2 focus:outline-none"
            aria-label="Toggle Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-lg px-6 py-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-base font-medium py-2 border-b border-slate-50 ${location.pathname === link.path ? 'text-emerald-600 font-semibold' : 'text-slate-700'}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 flex flex-col gap-3">
            <a href="tel:+918452909801" className="flex items-center gap-2 text-sm font-medium text-slate-700 py-1">
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>+91 8452909801</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleWhatsAppBooking();
              }}
              className="flex items-center justify-center gap-2 bg-emerald-600 text-white w-full py-3 rounded-xl text-sm font-medium shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Book Appointment via WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};