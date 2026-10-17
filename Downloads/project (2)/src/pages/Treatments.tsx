import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BookingModal } from '../components/BookingModal';
import { Stethoscope, CheckCircle2, ArrowRight, MessageSquare, Zap, ShieldAlert } from 'lucide-react';

export default function Treatments() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState('General Consultation');

  const openBooking = (treatment: string) => {
    setSelectedTreatment(treatment);
    setBookingOpen(true);
  };

  const sections = [
    {
      category: "Proctology & Rectal Specialisation",
      desc: "Advanced laser and minimally invasive treatments for painful rectal conditions with same-day discharge options.",
      items: [
        { name: "Piles (Hemorrhoids)", desc: "Painless laser hemorrhoidopexy with fast healing and minimal recurrence." },
        { name: "Fissure", desc: "Advanced laser sphincterotomy or medical management for chronic anal fissures." },
        { name: "Fistula", desc: "Sphincter-sparing laser closure techniques (FiLaC) preventing incontinence." },
        { name: "Abscess", desc: "Precise drainage and definitive management of perianal abscesses." }
      ]
    },
    {
      category: "General & Soft Tissue Surgery",
      desc: "Expert surgical interventions for hernias, appendicitis, and benign growths.",
      items: [
        { name: "Hernia", desc: "Laparoscopic and open mesh hernioplasty for inguinal, umbilical, and incisional hernias." },
        { name: "Appendix", desc: "Minimally invasive laparoscopic appendectomy for acute or chronic appendicitis." },
        { name: "Hydrocele", desc: "Safe surgical correction of hydrocele with short recovery times." },
        { name: "Lumps & Lipomas", desc: "Excision biopsy and removal of benign soft tissue lumps and lipomas." }
      ]
    },
    {
      category: "Breast Diseases & Laser Aesthetics",
      desc: "Comprehensive breast health evaluations and precise laser cosmetic skin procedures.",
      items: [
        { name: "Breast Diseases", desc: "Evaluation and management of benign breast lumps, fibroadenomas, and mastalgia." },
        { name: "Skin Tags Removal", desc: "Quick, scarless laser removal of skin tags." },
        { name: "Moles Removal", desc: "Precise cosmetic laser mole removal with optimal aesthetic results." }
      ]
    },
    
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans">
      <Navbar />

      <section className="bg-emerald-50/50 py-16 lg:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <Zap className="w-3.5 h-3.5 text-emerald-600" />
            <span>Advanced Technology & Laser Techniques</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900">Treatments & Services</h1>
          <p className="text-slate-600 text-base sm:text-lg">
            Explore our comprehensive range of proctological, general surgical, and dental care options performed with state-of-the-art laser technology and minimal pain.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {sections.map((sec, idx) => (
            <div key={idx} className="space-y-8">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">{sec.category}</h2>
                <p className="text-slate-600 text-sm sm:text-base mt-1">{sec.desc}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {sec.items.map((item, i) => (
                  <div key={i} className="bg-slate-50/80 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between space-y-4 hover:shadow-md transition-all group">
                    <div className="space-y-2">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                        ✓
                      </div>
                      <h3 className="font-serif font-bold text-lg text-slate-900">{item.name}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>

                    <button
                      onClick={() => openBooking(item.name)}
                      className="w-full bg-white hover:bg-emerald-600 hover:text-white text-slate-700 font-medium py-2 px-3 rounded-xl text-xs transition-all border border-slate-200 hover:border-transparent flex items-center justify-center gap-1.5"
                    >
                      <span>Book Consult</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} defaultTreatment={selectedTreatment} />
    </div>
  );
}