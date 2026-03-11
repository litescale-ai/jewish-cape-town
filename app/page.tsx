'use client';

import { useState } from 'react';
import HomeTab from '@/components/HomeTab';
import DonationsTab from '@/components/DonationsTab';
import DirectoryTab from '@/components/DirectoryTab';
import ProfileTab from '@/components/ProfileTab';
import BottomNav from '@/components/BottomNav';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 pb-20">
      {activeTab === 'home' && <HomeTab />}
      {activeTab === 'donations' && <DonationsTab />}
      {activeTab === 'directory' && <DirectoryTab />}
      {activeTab === 'profile' && <ProfileTab />}
      {activeTab === 'events' && (
        <div className="flex-1 flex items-center justify-center text-slate-500">
          Events coming soon...
        </div>
      )}
      
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
