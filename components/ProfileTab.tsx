import { ArrowLeft, Settings, Edit2, Mail, Phone, Plus, ChevronRight, GraduationCap, Building2, Heart, PlusCircle } from 'lucide-react';

export default function ProfileTab() {
  return (
    <div className="flex-1 flex flex-col bg-slate-50 pb-6">
      {/* Header */}
      <header className="sticky top-0 z-10 flex items-center justify-between px-4 py-3 bg-white shadow-sm border-b border-slate-100">
        <button className="text-slate-800 p-2 rounded-full hover:bg-slate-100 transition-colors">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-lg font-bold text-center flex-1 text-[#1e3a5f]">Profile</h1>
        <button className="text-slate-800 p-2 rounded-full hover:bg-slate-100 transition-colors">
          <Settings size={24} />
        </button>
      </header>

      {/* Profile Info */}
      <div className="flex flex-col items-center pt-8 pb-6 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="relative">
          <div className="h-28 w-28 rounded-full border-4 border-white shadow-lg bg-cover bg-center" style={{ backgroundImage: "url('https://i.pravatar.cc/150?img=47')" }}></div>
          <div className="absolute bottom-1 right-1 bg-[#c5a459] text-white p-1.5 rounded-full border-2 border-white flex items-center justify-center shadow-sm">
            <Edit2 size={14} />
          </div>
        </div>
        <h2 className="mt-4 text-2xl font-bold text-slate-800">Sarah Cohen</h2>
        <div className="mt-2 flex flex-col items-center gap-1">
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <Mail size={16} />
            <span>sarah.cohen@example.com</span>
          </div>
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <Phone size={16} />
            <span>+27 82 123 4567</span>
          </div>
        </div>
      </div>

      {/* Stats / Contribution History */}
      <div className="px-4 py-2">
        <div className="bg-[#1e3a5f] rounded-xl p-5 shadow-lg text-white relative overflow-hidden">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute -left-2 -bottom-2 w-16 h-16 bg-[#c5a459]/20 rounded-full blur-lg"></div>
          
          <div className="relative z-10 flex justify-between items-center mb-4 border-b border-white/10 pb-4">
            <h3 className="font-medium text-white/90">Contribution History</h3>
            <span className="bg-white/20 text-xs px-2 py-1 rounded text-white font-medium">2023</span>
          </div>
          
          <div className="relative z-10 grid grid-cols-3 gap-2 text-center divide-x divide-white/10">
            <div className="flex flex-col gap-1">
              <span className="text-xs text-blue-200 font-light">Total Given</span>
              <span className="text-lg font-bold text-[#c5a459]">R 12,500</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-blue-200 font-light">Events</span>
              <span className="text-lg font-bold">14</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-blue-200 font-light">Years Active</span>
              <span className="text-lg font-bold">5</span>
            </div>
          </div>
        </div>
      </div>

      {/* My Family Section */}
      <div className="px-4 mt-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-bold text-slate-800">My Family</h3>
          <button className="text-[#1e3a5f] text-sm font-medium flex items-center gap-1 hover:text-blue-800">
            Add Member <Plus size={16} />
          </button>
        </div>
        <div className="space-y-3">
          <div className="bg-white rounded-lg p-3 flex items-center gap-4 shadow-sm border border-slate-100">
            <div className="h-12 w-12 rounded-full bg-slate-200 bg-cover bg-center flex-shrink-0" style={{ backgroundImage: "url('https://i.pravatar.cc/150?img=11')" }}></div>
            <div className="flex-1">
              <p className="text-slate-800 font-semibold">David Cohen</p>
              <p className="text-xs text-slate-500">Spouse</p>
            </div>
            <button className="p-2 text-slate-400 hover:text-[#1e3a5f] transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
          
          <div className="bg-white rounded-lg p-3 flex items-center gap-4 shadow-sm border border-slate-100">
            <div className="h-12 w-12 rounded-full bg-indigo-50 text-[#1e3a5f] flex items-center justify-center flex-shrink-0 font-bold text-lg">
              L
            </div>
            <div className="flex-1">
              <p className="text-slate-800 font-semibold">Leah Cohen</p>
              <p className="text-xs text-slate-500">Child</p>
            </div>
            <button className="p-2 text-slate-400 hover:text-[#1e3a5f] transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Affiliations */}
      <div className="px-4 mt-8 mb-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-bold text-slate-800">Affiliations</h3>
          <button className="text-[#1e3a5f] text-sm font-medium">View All</button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center text-center gap-3 hover:border-[#c5a459]/50 transition-colors cursor-pointer group">
            <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
              <GraduationCap className="text-[#1e3a5f]" size={24} />
            </div>
            <div>
              <p className="font-bold text-sm text-slate-800">Herzlia</p>
              <p className="text-xs text-slate-500 mt-1">Alumni</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center text-center gap-3 hover:border-[#c5a459]/50 transition-colors cursor-pointer group">
            <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
              <Building2 className="text-[#1e3a5f]" size={24} />
            </div>
            <div>
              <p className="font-bold text-sm text-slate-800">UOS</p>
              <p className="text-xs text-slate-500 mt-1">Member</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center text-center gap-3 hover:border-[#c5a459]/50 transition-colors cursor-pointer group">
            <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
              <Heart className="text-[#1e3a5f]" size={24} />
            </div>
            <div>
              <p className="font-bold text-sm text-slate-800">CSO</p>
              <p className="text-xs text-slate-500 mt-1">Volunteer</p>
            </div>
          </div>
          
          <div className="bg-slate-50 p-4 rounded-xl border border-dashed border-slate-300 flex flex-col items-center justify-center text-center gap-2 cursor-pointer hover:bg-slate-100 transition-colors">
            <PlusCircle className="text-slate-400" size={24} />
            <p className="font-medium text-xs text-slate-500">Add Org</p>
          </div>
        </div>
      </div>
    </div>
  );
}
