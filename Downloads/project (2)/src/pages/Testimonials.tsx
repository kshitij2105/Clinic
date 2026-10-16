import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BookingModal } from '../components/BookingModal';
import { Star, Quote, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const testimonials = [
    {
      quote: "I know talking about hemorrhoids or fissures doesn't exactly scream 'aesthetic', but ignoring them is definitely a red flag. Dr. Shraddha made me feel completely at ease and the laser procedure was surprisingly painless!",
      author: "Ashit Patel",
      role: "Patient",
      treatment: "Piles Laser Treatment"
    },
    {
      quote: "Dr. Shraddha Wanje is exceptionally professional. Her gentle approach and clear explanation of the laparoscopic hernia surgery gave me immense confidence. Fast recovery just as promised.",
      author: "Sahil Dhepale",
      role: "Patient",
      treatment: "Hernia Surgery"
    },
    {
      quote: "The laser treatment for skin tags and minor lumps was quick and flawless. Health Corner Clinic is extremely clean, well-managed, and Dr. Shraddha is top-notch.",
      author: "Mohit Ahire",
      role: "Patient",
      treatment: "Laser Skin Tags Removal"
    },
    {
      quote: "Finding a specialist who is both highly skilled and empathetic is rare. Dr. Shraddha answered all my questions regarding fistula treatment without hesitation. Highly recommended!",
      author: "Amit Deshmukh",
      role: "Patient",
      treatment: "Fistula Care"
    },
    {
      quote: "Clean clinic in Airoli, minimal waiting time, and excellent post-operative care instructions. Thank you Dr. Shraddha for your wonderful care.",
      author: "Priya Kulkarni",
      role: "Patient",
      treatment: "General Surgery"
    },
    {
      quote: "Professionalism at its best. The laser procedure for my fissure was life-changing. No long hospital stays and minimal discomfort.",
      author: "Rahul Shinde",
      role: "Patient",
      treatment: "Fissure Laser Care"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans">
      <Navbar />

      <section className="bg-emerald-50/50 py-16 lg:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <Star className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
            <span>Patient Success Stories</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900">Feedback Submitted by Patients</h1>
          <p className="text-slate-600 text-base sm:text-lg">
            Boost your confidence and trust by reading testimonials from our clients. Recommendations from others who have experienced healing here are invaluable.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <span className="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full font-medium">{t.treatment}</span>
                </div>
                <p className="text-sm italic leading-relaxed text-slate-700">"{t.quote}"</p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-200/60">
                <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-serif font-bold flex items-center justify-center">
                  {t.author[0]}
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">{t.author}</h4>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <h2 className="font-serif text-3xl font-bold">Ready to experience compassionate, expert care?</h2>
          <p className="text-slate-300 text-sm">Book your consultation with Dr. Shraddha Wanje today via WhatsApp.</p>
          <button
            onClick={() => setBookingOpen(true)}
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-8 py-3.5 rounded-full shadow-lg transition-all"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Book Consultation Now</span>
          </button>
        </div>
      </section>

      <Footer />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}