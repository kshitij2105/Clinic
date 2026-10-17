import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Phone, MapPin, Clock, MessageSquare, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello Dr. Shraddha Wanje, I would like to inquire about your consultation hours.");
    window.open(`https://wa.me/918452909801?text=${message}`, '_blank');
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand & Bio */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
              <Stethoscope className="w-5 h-5" />
            </div>
            <span className="font-serif font-bold text-lg text-white">Dr. Shraddha Wanje</span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            Experienced Consultant Proctologist and General Surgeon dedicated to compassionate, advanced minimally invasive care.
          </p>
          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-2 bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600 hover:text-white px-4 py-2 rounded-lg text-xs font-medium transition-colors border border-emerald-500/30"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </button>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-sm mb-4 tracking-wider uppercase">Quick Links</h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-emerald-400 transition-colors">About Doctor</Link></li>
            <li><Link to="/treatments" className="hover:text-emerald-400 transition-colors">Treatments & Services</Link></li>
            <li><Link to="/testimonials" className="hover:text-emerald-400 transition-colors">Patient Reviews</Link></li>
            <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">Contact & Clinic</Link></li>
          </ul>
        </div>

        {/* Treatments */}
        <div>
          <h3 className="text-white font-semibold text-sm mb-4 tracking-wider uppercase">Specialties</h3>
          <ul className="space-y-2.5 text-sm text-slate-400">
            <li>Piles, Fissure & Fistula Laser Care</li>
            <li>Hernia & Appendix Surgery</li>
            <li>Breast Diseases & Lumps</li>
            <li>Hydrocele Treatment</li>
            <li>Laser Mole & Skin Tag Removal</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <h3 className="text-white font-semibold text-sm mb-4 tracking-wider uppercase">Clinic Details</h3>
          <div className="flex items-start gap-3 text-sm text-slate-400">
            <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
            <a
              href="https://www.google.com/maps/search/?api=1&query=Health+Corner+Clinic%2C+Sector+9%2C+Airoli%2C+Navi+Mumbai+400701"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-emerald-700 transition-colors"
              aria-label="Find Health Corner Clinic on Google Maps"
            >
              Health Corner Clinic, Sec 9, Airoli, Navi Mumbai - 400701
            </a>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-400">
            <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
            <a href="tel:+918452909801" className="hover:text-white transition-colors">+91 8452909801</a>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-400">
            <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Mon - Sat: 10:00 AM - 8:00 PM</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <p>© 2026 Dr. Shraddha Wanje Clinic. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
          <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
          <span className="flex items-center gap-1 text-slate-400">
            Made with <Heart className="w-3 h-3 text-emerald-500 fill-emerald-500" /> for patient care
          </span>
        </div>
      </div>
    </footer>
  );
};