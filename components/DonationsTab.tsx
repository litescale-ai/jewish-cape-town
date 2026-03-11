import { useState } from 'react';
import { ArrowLeft, Filter, Search, Receipt, Heart, Gift, X, ArrowRight } from 'lucide-react';

export default function DonationsTab() {
  const [showModal, setShowModal] = useState(false);
  const [selectedOrg, setSelectedOrg] = useState<any>(null);

  const orgs = [
    { id: 'ujc', name: 'UJC', desc: 'Umbrella Body for Cape Town Jewry', img: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=400&auto=format&fit=crop' },
    { id: 'cso', name: 'CSO', desc: 'Protecting Jewish Life & Community', img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400&auto=format&fit=crop' },
    { id: 'chev', name: 'Chevrah Kadisha', desc: 'Welfare & Social Services Support', img: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=400&auto=format&fit=crop' },
    { id: 'herzlia', name: 'Herzlia', desc: 'Jewish Education & Values', img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=400&auto=format&fit=crop' },
    { id: 'ort', name: 'ORT JET', desc: 'Business Mentorship & Growth', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=400&auto=format&fit=crop' },
    { id: 'cjc', name: 'Cape Jewish Chronicle', desc: 'Community News & Voice', img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=400&auto=format&fit=crop' },
  ];

  const handleDonateClick = (org: any) => {
    setSelectedOrg(org);
    setShowModal(true);
  };

  return (
    <div className="flex-1 flex flex-col bg-slate-50 pb-6 relative">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 bg-white sticky top-0 z-20 shadow-sm">
        <div className="flex items-center gap-3">
          <button className="text-slate-800 flex items-center justify-center rounded-full w-10 h-10 hover:bg-slate-100 transition-colors">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl font-bold text-slate-800">Donations</h1>
        </div>
        <button className="text-slate-800 flex items-center justify-center rounded-full w-10 h-10 hover:bg-slate-100 transition-colors">
          <Filter size={20} />
        </button>
      </header>

      <main className="flex-1 overflow-y-auto">
        {/* Search Section */}
        <div className="px-4 pt-4 pb-2 bg-white sticky top-[72px] z-10">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="text-slate-400" size={18} />
            </div>
            <input 
              type="text" 
              className="block w-full pl-10 pr-3 py-3 border-none rounded-xl bg-slate-100 text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-[#1e3a5f] transition-all duration-200" 
              placeholder="Search organizations (e.g., CSO, Herzlia)" 
            />
          </div>
          
          <div className="flex gap-2 mt-3 overflow-x-auto no-scrollbar pb-2">
            <button className="px-4 py-1.5 rounded-full bg-[#1e3a5f] text-white text-sm font-medium whitespace-nowrap shadow-sm">All</button>
            <button className="px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium whitespace-nowrap hover:bg-slate-50 transition-colors">Education</button>
            <button className="px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium whitespace-nowrap hover:bg-slate-50 transition-colors">Security</button>
            <button className="px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium whitespace-nowrap hover:bg-slate-50 transition-colors">Welfare</button>
          </div>
        </div>

        {/* Featured Donation / Tax Note */}
        <div className="px-4 mt-4 mb-2">
          <div className="bg-[#1e3a5f]/5 border border-[#1e3a5f]/10 rounded-lg p-3 flex items-start gap-3">
            <Receipt className="text-[#1e3a5f] mt-0.5" size={20} />
            <div>
              <p className="text-sm font-semibold text-[#1e3a5f]">Tax Deductible</p>
              <p className="text-xs text-slate-500 mt-0.5">All donations are eligible for a Section 18A tax receipt.</p>
            </div>
          </div>
        </div>

        <h2 className="px-4 pt-4 pb-2 text-lg font-bold text-slate-800">Support Our Community</h2>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 px-4 pb-4">
          {orgs.map((org) => (
            <div key={org.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden flex flex-col h-full group">
              <div className="aspect-[16/10] w-full bg-slate-100 relative">
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${org.img}')` }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span className="absolute bottom-2 left-2 bg-white/90 text-xs font-bold px-2 py-0.5 rounded text-slate-800">{org.name.split(' ')[0]}</span>
              </div>
              <div className="p-3 flex flex-col flex-1">
                <h3 className="font-bold text-slate-800 text-base leading-tight">{org.name}</h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">{org.desc}</p>
                <div className="mt-auto pt-3">
                  <button 
                    onClick={() => handleDonateClick(org)}
                    className="w-full py-2 bg-[#c5a459] hover:bg-[#b0924e] text-white text-sm font-bold rounded-lg transition-colors shadow-sm flex items-center justify-center gap-1"
                  >
                    <span>Donate</span>
                    <Heart size={14} className="fill-current" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Donation Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 backdrop-blur-sm">
          <div className="w-full max-w-md bg-white rounded-t-2xl shadow-2xl p-6 pb-10 animate-in slide-in-from-bottom duration-300">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-lg text-slate-800">Donate to {selectedOrg?.name}</h3>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-slate-600">
                <X size={24} />
              </button>
            </div>
            
            <p className="text-sm text-slate-500 mb-3">Choose an amount to donate</p>
            
            <div className="grid grid-cols-4 gap-2 mb-4">
              <button className="py-2 px-1 rounded-lg border border-[#1e3a5f]/20 bg-[#1e3a5f]/5 text-[#1e3a5f] text-sm font-semibold hover:bg-[#1e3a5f] hover:text-white transition-colors">R100</button>
              <button className="py-2 px-1 rounded-lg border border-[#1e3a5f] bg-[#1e3a5f] text-white text-sm font-bold shadow-md transform scale-105">R250</button>
              <button className="py-2 px-1 rounded-lg border border-[#1e3a5f]/20 bg-[#1e3a5f]/5 text-[#1e3a5f] text-sm font-semibold hover:bg-[#1e3a5f] hover:text-white transition-colors">R500</button>
              <button className="py-2 px-1 rounded-lg border border-[#1e3a5f]/20 bg-[#1e3a5f]/5 text-[#1e3a5f] text-sm font-semibold hover:bg-[#1e3a5f] hover:text-white transition-colors">R1000</button>
            </div>
            
            <div className="relative mb-4">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-semibold">R</span>
              <input 
                type="number" 
                className="w-full pl-8 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-bold focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent outline-none" 
                placeholder="Other Amount" 
              />
            </div>
            
            <div className="flex items-center justify-between mb-6 p-3 bg-slate-50 rounded-lg border border-slate-100">
              <div className="flex items-center gap-2">
                <Gift className="text-[#c5a459]" size={20} />
                <span className="text-sm font-medium text-slate-800">Send as a Gift</span>
              </div>
              <div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
                <input type="checkbox" name="toggle" id="toggle" className="peer absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-slate-300 checked:right-0 checked:border-[#c5a459] z-10" />
                <label htmlFor="toggle" className="block overflow-hidden h-5 rounded-full bg-slate-300 cursor-pointer peer-checked:bg-[#c5a459]"></label>
              </div>
            </div>
            
            <button className="w-full py-3.5 bg-[#1e3a5f] hover:bg-[#162e4d] text-white text-base font-bold rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2">
              <span>Confirm Donation (R250)</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
