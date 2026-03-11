import { Home, Calendar, Heart, BookOpen, User } from 'lucide-react';

export default function BottomNav({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'directory', icon: BookOpen, label: 'Directory' },
    { id: 'donations', icon: Heart, label: 'Donate', isCenter: true },
    { id: 'events', icon: Calendar, label: 'Events' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 px-6 py-2 pb-safe shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-50">
      <div className="flex justify-between items-end pb-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          if (item.isCenter) {
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className="flex flex-col items-center gap-1 group w-16"
              >
                <div className={`h-12 w-12 -mt-6 rounded-full shadow-lg flex items-center justify-center border-4 border-white transform transition-transform active:scale-95 ${isActive ? 'bg-[#1e3a5f] text-white' : 'bg-[#c5a459] text-white'}`}>
                  <Icon size={24} className={isActive ? 'fill-current' : ''} />
                </div>
                <span className={`text-[10px] font-medium ${isActive ? 'text-[#1e3a5f] font-bold' : 'text-slate-500'}`}>
                  {item.label}
                </span>
              </button>
            );
          }

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className="flex flex-col items-center gap-1 group w-16"
            >
              <div className="p-1 rounded-full transition-colors">
                <Icon 
                  size={24} 
                  className={isActive ? 'text-[#1e3a5f]' : 'text-slate-400'} 
                  strokeWidth={isActive ? 2.5 : 2}
                />
              </div>
              <span className={`text-[10px] ${isActive ? 'text-[#1e3a5f] font-bold' : 'text-slate-500 font-medium'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
