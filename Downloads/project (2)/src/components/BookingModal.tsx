import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, FileText, MessageSquare } from 'lucide-react';
import { toast } from 'react-toastify';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTreatment?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, defaultTreatment = 'General Consultation' }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [treatment, setTreatment] = useState(defaultTreatment);
  const [preferredDate, setPreferredDate] = useState('');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      toast.error('Please enter your name and phone number.');
      return;
    }

    const message = encodeURIComponent(
      `Hello Dr. Shraddha Wanje,\n\nI would like to book a consultation.\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Treatment / Issue:* ${treatment}\n*Preferred Date:* ${preferredDate || 'As soon as possible'}\n*Notes:* ${notes || 'None'}`
    );

    window.open(`https://wa.me/918452909801?text=${message}`, '_blank');
    toast.success('Redirecting to WhatsApp to confirm your booking!');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full overflow-hidden border border-slate-100">
        <div className="bg-emerald-600 px-6 py-5 text-white flex items-center justify-between">
          <div>
            <h3 className="font-serif font-bold text-lg">Book Consultation</h3>
            <p className="text-xs text-emerald-100">Health Corner Clinic, Airoli, Navi Mumbai</p>
          </div>
          <button onClick={onClose} className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-emerald-700 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">Your Full Name *</label>
            <div className="relative">
              <User className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Rajesh Sharma"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-600"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">Phone Number (WhatsApp) *</label>
            <div className="relative">
              <Phone className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. +91 98765 43210"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-600"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">Select Concern / Treatment</label>
              <select
                value={treatment}
                onChange={(e) => setTreatment(e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-600"
              >
                <option value="General Consultation">General Consultation</option>
                <option value="Piles (Hemorrhoids)">Piles (Hemorrhoids)</option>
                <option value="Fissure & Fistula">Fissure & Fistula</option>
                <option value="Hernia & Appendix">Hernia & Appendix</option>
                <option value="Breast Diseases & Lumps">Breast Diseases & Lumps</option>
                <option value="Laser Skin Tags & Moles">Laser Skin Tags & Moles</option>
                <option value="General & Surgical Dentistry">General & Surgical Dentistry</option>
                <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">Preferred Date</label>
              <div className="relative">
                <Calendar className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-600"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">Additional Symptoms / Notes</label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Briefly describe your symptoms or preferred timing..."
              className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-600 resize-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 rounded-xl shadow-md transition-all hover:shadow-lg active:scale-95"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Confirm & Send via WhatsApp</span>
            </button>
            <p className="text-center text-xs text-slate-400 mt-2">
              You will be securely connected directly to Dr. Shraddha Wanje's clinic WhatsApp.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};