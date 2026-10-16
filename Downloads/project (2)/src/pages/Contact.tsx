
import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BookingModal } from '../components/BookingModal';
import { MapPin, Phone, Clock, MessageSquare } from 'lucide-react';
import { toast } from 'react-toastify';

export default function Contact() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || !message.trim()) {
      toast.error('Please fill in all required fields.');
      return;
    }

    const waMessage = encodeURIComponent(
      `Hello Dr. Shraddha Wanje,\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Message:* ${message}`
    );

    window.open(
      `https://wa.me/918452909801?text=${waMessage}`,
      '_blank',
      'noopener,noreferrer'
    );

    toast.success('Opening WhatsApp to send your message!');
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans">
      <Navbar />

      {/* Page Header */}
      <section className="bg-emerald-50/50 py-16 lg:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-3.5 py-1.5 rounded-full text-xs font-semibold">
              <MapPin className="w-3.5 h-3.5 text-emerald-600" />
              <span>Get in Touch</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900">
              Contact Dr. Shraddha Wanje
            </h1>

            <p className="text-slate-600 text-base sm:text-lg">
              Visit our clinic in Airoli, Navi Mumbai or reach out instantly
              via phone or WhatsApp for consultation bookings and inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Details and Inquiry Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Clinic Information */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl font-bold text-slate-900">
                Clinic Details & Hours
              </h2>

              <p className="text-slate-600 text-sm">
                We are conveniently located in Airoli, Navi Mumbai, with
                facilities designed for patient privacy and comfort.
              </p>
            </div>

            <div className="space-y-6">

              {/* Address - Click to Open Google Maps */}
              <div className="flex items-start gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>

                <div>
                  <h4 className="font-serif font-bold text-lg text-slate-900">
                    Address
                  </h4>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Health+Corner+Clinic%2C+Sector+9%2C+Airoli%2C+Navi+Mumbai+400701"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Find Health Corner Clinic on Google Maps"
                    className="text-sm text-emerald-600 hover:text-emerald-700 hover:underline mt-1 block"
                  >
                    Health Corner Clinic, Sec 9, Airoli, Navi Mumbai - 400701
                  </a>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Health+Corner+Clinic%2C+Sector+9%2C+Airoli%2C+Navi+Mumbai+400701"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-xs font-semibold text-slate-600 hover:text-emerald-700 hover:underline"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>

              {/* Phone Number */}
              <div className="flex items-start gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>

                <div>
                  <h4 className="font-serif font-bold text-lg text-slate-900">
                    Phone Number
                  </h4>

                  <a
                    href="tel:+918452909801"
                    className="text-sm text-emerald-600 font-semibold hover:underline mt-1 block"
                  >
                    +91 8452909801
                  </a>
                </div>
              </div>

              {/* Consultation Hours */}
              <div className="flex items-start gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>

                <div>
                  <h4 className="font-serif font-bold text-lg text-slate-900">
                    Consultation Hours
                  </h4>

                  <p className="text-sm text-slate-600 mt-1">
                    Monday – Saturday: 10:00 AM – 8:00 PM
                  </p>

                  <p className="text-xs text-slate-500 mt-0.5">
                    Sunday: By appointment only
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Inquiry Form */}
          <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200/60 shadow-sm space-y-6">
            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-bold text-slate-900">
                Send an Inquiry
              </h3>

              <p className="text-xs text-slate-500">
                Submit your details to connect directly with Dr. Shraddha
                Wanje on WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Full Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1"
                >
                  Your Full Name *
                </label>

                <input
                  id="contact-name"
                  type="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Anand Kumar"
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-600"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="contact-phone"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1"
                >
                  WhatsApp Phone Number *
                </label>

                <input
                  id="contact-phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-600"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1"
                >
                  Your Message or Query *
                </label>

                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your inquiry or consultation requirements..."
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-600 resize-none"
                />
              </div>

              {/* WhatsApp Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3.5 rounded-xl shadow-md transition-all active:scale-95"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Send Message via WhatsApp</span>
              </button>

            </form>
          </div>
        </div>
      </section>

      <Footer />

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </div>
  );
}
