import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BookingModal } from '../components/BookingModal';
import { 
  Stethoscope, ShieldCheck, Zap, Award, CheckCircle2, 
  MapPin, Phone, MessageSquare, ArrowRight, HeartPulse, 
  Sparkles, Star, Quote, ChevronRight 
} from 'lucide-react';

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState('General Consultation');

  const openBooking = (treatment: string = 'General Consultation') => {
    setSelectedTreatment(treatment);
    setBookingOpen(true);
  };

  const treatmentCategories = [
    {
      title: "Proctology & General Surgery",
      desc: "Specialized care for delicate conditions with advanced laser and stapler techniques ensuring minimal pain.",
      items: ["Piles (Hemorrhoids)", "Fissure & Fistula", "Abscess & Lumps", "Hernia & Appendix", "Hydrocele"]
    },
    {
      title: "Breast & General Care",
      desc: "Comprehensive diagnostic and surgical interventions for breast diseases, benign lumps, and soft tissue concerns.",
      items: ["Breast Diseases & Lumps", "Skin Tags Removal", "Laser Mole Removal", "General Surgical Care"]
    },
    {
    title: "Proctology & Rectal Specialisation",
    desc: "Advanced laser and minimally invasive treatments for painful rectal conditions with same-day discharge options.",
    items: [
      "Piles (Hemorrhoids)",
      "Fissure",
      "Fistula",
      "Abscess"
    ]
  }
    
  ];

  const testimonials = [
    {
      quote: "I know talking about hemorrhoids or fissures doesn't exactly scream 'aesthetic', but ignoring them is definitely a red flag. Dr. Shraddha made me feel completely at ease and the laser procedure was surprisingly painless!",
      author: "Kiran Jadhav",
      role: "Patient"
    },
    {
      quote: "Dr. Shraddha Wanje is exceptionally professional. Her gentle approach and explanation of the laparoscopic hernia surgery gave me immense confidence. Fast recovery just as promised.",
      author: "Shreyash Pathak",
      role: "Patient"
    },
    {
      quote: "The laser treatment for skin tags and minor lumps was quick and flawless. Health Corner Clinic is extremely clean, well-managed, and Dr. Shraddha is top-notch.",
      author: "Sandeep Aher",
      role: "Patient"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-800">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/50 via-white to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Advanced Minimally Invasive & Laser Surgeon</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-tight">
              Dr. Shraddha Wanje
            </h1>
            
            <p className="text-lg sm:text-xl font-medium text-emerald-700">
              Consultant Proctologist and General Surgeon
            </p>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
              Dr. Shraddha Wanje is an experienced general surgeon with advanced rectal specialisation. She is committed to providing personalized care to her patients, keeping her practice up-to-date with the latest research and technology in the field.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => openBooking('General Consultation')}
                className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-8 py-4 rounded-full shadow-lg hover:shadow-emerald-600/25 transition-all text-base active:scale-95"
              >
                <span>Book a Consult</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => {
                  const message = encodeURIComponent("Hello Dr. Shraddha Wanje, I would like to make a quick inquiry.");
                  window.open(`https://wa.me/918452909801?text=${message}`, '_blank');
                }}
                className="flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-emerald-600 text-slate-700 font-medium px-6 py-4 rounded-full transition-all text-base"
              >
                <MessageSquare className="w-5 h-5 text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Painless Laser Options</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Same Day Discharge for Laser Proctology</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Airoli, Navi Mumbai</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-4 bg-emerald-200/50 rounded-3xl blur-2xl -z-10"></div>
              <div className="bg-white rounded-3xl p-4 shadow-xl border border-slate-100">
                
<img
  src="/dr-shraddha-wanje.jpg"
  alt="Dr. Shraddha Wanje, Consultant General Surgeon"
  className="rounded-2xl w-full h-[420px] object-cover object-top"
/>

                <div className="mt-4 p-4 bg-emerald-50/70 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-slate-900 text-sm">Health Corner Clinic</h4>
                      <p className="text-xs text-slate-600">Sec 9, Airoli, Navi Mumbai</p>
                    </div>
                  </div>
                  <a
                    href="tel:+918452909801"
                    className="bg-white text-emerald-700 hover:bg-emerald-600 hover:text-white p-2.5 rounded-xl shadow-sm transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Quote Banner */}
      <section className="bg-slate-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-4">
          <Quote className="w-12 h-12 text-emerald-400 mx-auto opacity-80" />
          <blockquote className="font-serif text-2xl sm:text-3xl italic leading-relaxed text-slate-100">
            "I know talking about hemorrhoids or fissures doesn't exactly scream 'aesthetic', but ignoring them is definitely a red flag."
          </blockquote>
          <p className="text-sm font-medium tracking-wider text-emerald-400 uppercase">— Dr. Shraddha Wanje</p>
        </div>
      </section>

      {/* Why Choose Dr. Shraddha */}
      <section className="py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-emerald-600">Excellence in Surgery</h2>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">Why Choose Dr. Shraddha Wanje</h3>
            <p className="text-slate-600">Combining clinical precision with patient-centric compassion and state-of-the-art medical technology.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-slate-100 space-y-4 group">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xl group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="font-serif font-bold text-xl text-slate-900">Expertise</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Extensive surgical experience specializing in proctology, general surgery, hernia repairs, and advanced rectal procedures with exceptional patient outcomes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-slate-100 space-y-4 group">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xl group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h4 className="font-serif font-bold text-xl text-slate-900">Philosophy</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Advanced technology with minimal invasive procedures which results in less pain, shorter hospital stays, and exceptionally fast recovery.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-slate-100 space-y-4 group">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xl group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="font-serif font-bold text-xl text-slate-900">Technology</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                We use cutting-edge lasers, staplers, and other advanced surgical techniques to ensure precision, safety, and superior long-term results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Available Treatments & Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-emerald-600">Comprehensive Care</h2>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">Available Treatments & Services</h3>
              <p className="text-slate-600 max-w-xl">
                Share your health concerns or choose from our specialized offerings for painless, effective healing.
              </p>
            </div>
            <Link
              to="/treatments"
              className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
            >
              <span>View all treatments</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {treatmentCategories.map((cat, idx) => (
              <div key={idx} className="bg-slate-50/70 p-8 rounded-3xl border border-slate-100 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <h4 className="font-serif font-bold text-xl text-slate-900">{cat.title}</h4>
                  <p className="text-sm text-slate-600">{cat.desc}</p>
                  <ul className="space-y-3 pt-2">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                        <div className="w-2 h-2 rounded-full bg-emerald-600 shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => openBooking(cat.items[0])}
                  className="w-full bg-white hover:bg-emerald-600 hover:text-white text-slate-800 font-medium py-3 px-4 rounded-xl text-sm transition-all shadow-sm border border-slate-200 hover:border-transparent flex items-center justify-center gap-2"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-20 bg-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-emerald-300">Patient Success Stories</h2>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">Feedback Submitted by Patients</h3>
            <p className="text-emerald-100/80">Boost your confidence with recommendations and feedback from patients who have experienced healing here.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-emerald-800/80 backdrop-blur-md p-8 rounded-3xl border border-emerald-700/50 flex flex-col justify-between space-y-6 shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-amber-300">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-300" />
                    ))}
                  </div>
                  <p className="text-sm italic leading-relaxed text-emerald-50">"{t.quote}"</p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-emerald-700/60">
                  <div className="w-10 h-10 rounded-full bg-emerald-700 text-white font-serif font-bold flex items-center justify-center">
                    {t.author[0]}
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-white">{t.author}</h5>
                    <p className="text-xs text-emerald-200">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Clinic Banner */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-3.5 py-1.5 rounded-full text-xs font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                <span>Visit Health Corner Clinic</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold">Ready to consult with Dr. Shraddha Wanje?</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Book your visit today at Airoli, Navi Mumbai or reach out instantly via phone or WhatsApp for quick assistance and appointment scheduling.
              </p>
              
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-white">Clinic Address</h5>
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
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-white">Phone Number</h5>
                    <a href="tel:+918452909801" className="text-sm text-slate-300 hover:text-emerald-400 transition-colors">+91 8452909801</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 p-8 sm:p-10 rounded-2xl border border-slate-700/60 space-y-6">
              <h4 className="font-serif font-bold text-2xl text-white">Quick Appointment</h4>
              <p className="text-xs text-slate-400">Connect instantly with our clinic desk via WhatsApp to reserve your slot.</p>
              
              <div className="space-y-4">
                <button
                  onClick={() => openBooking('General Consultation')}
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3.5 rounded-xl transition-all shadow-md"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Book Consult on WhatsApp</span>
                </button>
                <a
                  href="tel:+918452909801"
                  className="w-full flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white font-medium py-3.5 rounded-xl transition-all"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call +91 8452909801</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultTreatment={selectedTreatment}
      />
    </div>
  );
}
