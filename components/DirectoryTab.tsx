import { ArrowLeft, Search, ChevronRight } from 'lucide-react';

export default function DirectoryTab() {
  const orgs = [
    { name: 'United Jewish Campaign', desc: "Funding the community's future", color: 'bg-teal-700' },
    { name: 'Jewish Community Services', desc: 'Social welfare and family support', color: 'bg-amber-100' },
    { name: 'CSO Cape Town', desc: 'Protecting Jewish life and way of life', color: 'bg-emerald-800' },
    { name: 'Herzlia Schools', desc: 'Educational excellence with Jewish values', color: 'bg-slate-100' },
    { name: 'Highlands House', desc: 'Aged care and retirement living', color: 'bg-orange-50' },
    { name: 'SAJBD Cape Council', desc: 'Civil rights and advocacy', color: 'bg-emerald-900' },
    { name: 'Kaplan Centre', desc: 'Jewish studies and research at UCT', color: 'bg-slate-50' },
    { name: 'Mensch', desc: 'Social change and activism', color: 'bg-teal-900' },
    { name: 'SA Jewish Museum', desc: 'Preserving heritage and history', color: 'bg-teal-800' },
    { name: 'Temple Israel', desc: 'Progressive Jewish community', color: 'bg-blue-900' },
  ];

  return (
    <div className="flex-1 flex flex-col bg-white pb-6">
      {/* Header */}
      <div className="flex items-center bg-white p-4 pb-2 justify-between sticky top-0 z-10 border-b border-slate-100">
        <button className="text-slate-900 flex size-10 shrink-0 items-center justify-center hover:bg-slate-50 rounded-full transition-colors">
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-slate-900 text-lg font-bold leading-tight flex-1 text-center pr-10">Community Directory</h2>
      </div>

      {/* Search Bar */}
      <div className="px-4 py-3 bg-white sticky top-[60px] z-10">
        <div className="flex w-full items-center rounded-xl h-12 shadow-sm ring-1 ring-slate-200 bg-slate-50 px-4">
          <Search className="text-slate-400 mr-2" size={20} />
          <input 
            className="flex-1 bg-transparent border-none focus:outline-none text-slate-800 placeholder:text-slate-400" 
            placeholder="Search organizations..." 
          />
        </div>
      </div>

      {/* Directory List */}
      <div className="flex flex-col">
        {orgs.map((org, i) => (
          <button key={i} className="flex items-center gap-4 bg-white px-4 min-h-[80px] py-3 justify-between border-b border-slate-100 hover:bg-slate-50 transition-colors group text-left">
            <div className="flex items-center gap-4">
              <div className={`rounded-lg size-14 shrink-0 shadow-sm flex items-center justify-center ${org.color}`}>
                {/* Placeholder for logo */}
                <div className="w-8 h-8 rounded-full bg-black/10"></div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-slate-900 text-base font-bold leading-normal line-clamp-1 group-hover:text-[#c5a459] transition-colors">{org.name}</p>
                <p className="text-slate-500 text-sm font-normal leading-normal line-clamp-2">{org.desc}</p>
              </div>
            </div>
            <div className="shrink-0 text-slate-400 group-hover:text-[#c5a459] transition-colors">
              <ChevronRight size={24} />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
