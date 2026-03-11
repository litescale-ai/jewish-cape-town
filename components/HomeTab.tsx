import { Bell, AlertTriangle, Heart, ArrowRight, Calendar, Book, Building2, Utensils, Clock } from 'lucide-react';

export default function HomeTab() {
  return (
    <div className="flex-1 flex flex-col pb-6">
      {/* Header Section */}
      <header className="bg-[#1e3a5f] text-white pt-12 pb-6 px-5 rounded-b-3xl shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 100% 0%, rgba(197, 164, 89, 0.4) 0%, transparent 50%), radial-gradient(circle at 0% 100%, rgba(197, 164, 89, 0.2) 0%, transparent 50%)' }}></div>
        <div className="relative z-10 flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
              <Building2 className="text-[#c5a459]" size={20} />
            </div>
            <div>
              <p className="text-white/70 text-xs font-medium uppercase tracking-wider">UJC Community</p>
              <h1 className="text-xl font-bold tracking-tight">Shalom, Sarah</h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center backdrop-blur-sm relative">
              <Bell className="text-white" size={20} />
              <span className="absolute top-2 right-2.5 h-2 w-2 rounded-full bg-[#c5a459] border border-[#1e3a5f]"></span>
            </button>
            <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-[#c5a459]/50 bg-[#162e4d]">
              <img src="https://i.pravatar.cc/150?img=47" alt="Profile" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>

        {/* Emergency Button */}
        <button className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white p-4 rounded-xl shadow-lg shadow-red-500/30 flex items-center justify-between group active:scale-[0.98] transition-all">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 rounded-lg p-2 backdrop-blur-sm">
              <AlertTriangle className="text-white" size={24} />
            </div>
            <div className="flex flex-col items-start">
              <span className="font-bold text-lg leading-tight">CSO EMERGENCY</span>
              <span className="text-xs text-white/90 font-medium">Tap for immediate assistance</span>
            </div>
          </div>
          <ArrowRight className="text-white/80 group-hover:translate-x-1 transition-transform" size={20} />
        </button>
      </header>

      <main className="px-5 pt-6 flex flex-col gap-6">
        {/* Fundraising Section */}
        <section className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-bold text-slate-800 text-lg">Community Fund</h3>
              <p className="text-slate-500 text-sm">Target: R110M</p>
            </div>
            <div className="bg-[#c5a459]/10 text-[#c5a459] px-3 py-1 rounded-full text-xs font-bold">
              7.4% Reached
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-end gap-1 mb-2">
              <span className="text-2xl font-black text-[#1e3a5f] tracking-tight">R8,200,000</span>
              <span className="text-sm text-slate-400 font-medium mb-1">raised</span>
            </div>
            <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-[#c5a459] rounded-full" style={{ width: '7.4%' }}></div>
            </div>
          </div>
          <div className="flex items-stretch gap-4">
            <div className="flex-1 bg-slate-50 rounded-xl p-3 flex flex-col justify-center items-center gap-1 border border-slate-100">
              <Heart className="text-[#c5a459]" size={20} />
              <span className="text-xs font-semibold text-slate-600 text-center">Quick<br/>Give</span>
            </div>
            <button className="flex-[3] bg-[#1e3a5f] hover:bg-[#162e4d] text-white rounded-xl py-3 px-4 font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#1e3a5f]/20 transition-colors">
              Donate Now
              <ArrowRight size={18} />
            </button>
          </div>
        </section>

        {/* Quick Actions Grid */}
        <section className="grid grid-cols-4 gap-3">
          {[
            { icon: Calendar, label: 'Calendar' },
            { icon: Book, label: 'Parasha' },
            { icon: Building2, label: 'Minyan' },
            { icon: Utensils, label: 'Kosher' },
          ].map((action, i) => (
            <button key={i} className="flex flex-col items-center gap-2 group">
              <div className="h-14 w-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-[#1e3a5f] group-hover:scale-105 transition-transform">
                <action.icon size={24} />
              </div>
              <span className="text-xs font-medium text-slate-600 text-center">{action.label}</span>
            </button>
          ))}
        </section>

        {/* Upcoming Events Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-slate-800 text-lg">Upcoming Events</h3>
            <button className="text-[#c5a459] text-sm font-semibold hover:text-[#c5a459]/80">View All</button>
          </div>
          <div className="flex overflow-x-auto gap-4 pb-4 -mx-5 px-5 no-scrollbar snap-x">
            {/* Event Card 1 */}
            <div className="min-w-[280px] snap-center bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group">
              <div className="h-32 bg-slate-200 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1605289355680-75fb41239154?q=80&w=800&auto=format&fit=crop" alt="Shabbat" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold shadow-sm">
                  <span className="text-[#c5a459] block text-center text-xs uppercase">Fri</span>
                  <span className="text-slate-900 block text-center text-lg leading-none">18</span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#1e3a5f]/10 text-[#1e3a5f] uppercase tracking-wide">Community</span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock size={12} /> 18:30
                  </span>
                </div>
                <h4 className="font-bold text-slate-800 mb-1 line-clamp-1">Community Shabbat Dinner</h4>
                <p className="text-slate-500 text-xs mb-3 line-clamp-2">Join us for a warm evening of community, prayer, and delicious food at the Gardens Shul.</p>
                <button className="w-full py-2 rounded-lg border border-slate-200 text-slate-600 text-xs font-semibold hover:bg-slate-50 transition-colors">RSVP</button>
              </div>
            </div>

            {/* Event Card 2 */}
            <div className="min-w-[280px] snap-center bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group">
              <div className="h-32 bg-slate-200 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop" alt="Torah" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold shadow-sm">
                  <span className="text-[#c5a459] block text-center text-xs uppercase">Tue</span>
                  <span className="text-slate-900 block text-center text-lg leading-none">22</span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#c5a459]/10 text-[#c5a459] uppercase tracking-wide">Education</span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock size={12} /> 20:00
                  </span>
                </div>
                <h4 className="font-bold text-slate-800 mb-1 line-clamp-1">Weekly Torah Classes</h4>
                <p className="text-slate-500 text-xs mb-3 line-clamp-2">Deep dive into the weekly Parasha with Rabbi Goldstein. Refreshments served.</p>
                <button className="w-full py-2 rounded-lg border border-slate-200 text-slate-600 text-xs font-semibold hover:bg-slate-50 transition-colors">Learn More</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
