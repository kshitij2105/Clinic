import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BookingModal } from '../components/BookingModal';
import { Stethoscope, Award, GraduationCap, HeartPulse, CheckCircle2, MessageSquare, ShieldCheck, Zap } from 'lucide-react';

export default function About() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans">
      <Navbar />

      <section className="bg-emerald-50/50 py-16 lg:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 bg-emerald-200/50 rounded-3xl blur-2xl -z-10"></div>
              <img
                src="/dr.wanje.png"
                alt="Dr. Shraddha Wanje Clinic"
                className="rounded-3xl shadow-xl w-full h-[450px] object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-3.5 py-1.5 rounded-full text-xs font-semibold">
              <Stethoscope className="w-3.5 h-3.5 text-emerald-600" />
              <span>Meet Your Surgeon</span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900">Dr. Shraddha Wanje</h1>
            <p className="text-lg font-medium text-emerald-700">Consultant Proctologist and General Surgeon</p>

            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              Dr. Shraddha Wanje is an experienced general surgeon with advanced rectal specialisation. She is deeply committed to providing personalized, empathetic care to every patient, keeping her practice up-to-date with the latest research and technological breakthroughs in proctology and general surgery.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                <Award className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Advanced Specialization</h4>
                  <p className="text-xs text-slate-500">Proctology & Minimally Invasive Surgery</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                <GraduationCap className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Patient-First Ethics</h4>
                  <p className="text-xs text-slate-500">Transparent guidance & compassionate care</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => setBookingOpen(true)}
                className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-8 py-4 rounded-full shadow-lg transition-all"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Book Consultation with Dr. Shraddha</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Philosophy & Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-emerald-600">Our Core Principles</h2>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">Surgical Philosophy & Values</h3>
            <p className="text-slate-600">We believe in combining surgical precision with absolute discretion, comfort, and minimal recovery time.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-serif font-bold text-xl text-slate-900">Patient Privacy & Comfort</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Proctological and general surgeries can be daunting. We ensure a confidential, respectful, and comforting environment from your first consultation onwards.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="font-serif font-bold text-xl text-slate-900">Minimally Invasive Care</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Advanced technology with minimal invasive procedures which results in less pain, reduced bleeding, and exceptionally fast recovery so you return to life quickly.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h4 className="font-serif font-bold text-xl text-slate-900">Continuous Innovation</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Keeping the practice up-to-date with latest research, laser devices, stapler hemorrhoidopexy, and modern surgical protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}