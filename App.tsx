
import React, { useState } from 'react';
import { Map, ScrollText, Layout, Coffee } from 'lucide-react';
import { Tab } from './types';
import { MapTab } from './components/MapTab';
import { XiangqiBoard } from './components/XiangqiBoard';
import { GuideTab } from './components/GuideTab';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.CHESS);
  const [legalView, setLegalView] = useState<'PRIVACY' | 'TERMS' | null>(null);

  const handleLegalClick = (view: 'PRIVACY' | 'TERMS') => {
    setLegalView(view);
    setActiveTab(Tab.LEGAL);
  };

  const renderContent = () => {
    switch (activeTab) {
      case Tab.MAP:
        return <MapTab />;
      case Tab.CHESS:
        return <XiangqiBoard />;
      case Tab.GUIDE:
        return <GuideTab />;
      case Tab.LEGAL:
        if (legalView === 'PRIVACY') return <PrivacyPolicy />;
        return <TermsOfService />;
      default:
        return <XiangqiBoard />;
    }
  };

  const NavButton: React.FC<{
    onClick: () => void;
    isActive: boolean;
    icon: React.ReactNode;
    label: string;
  }> = ({ onClick, isActive, icon, label }) => {
    const activeClasses = 'text-amber-500 bg-stone-800';
    const inactiveClasses = 'text-stone-500 hover:text-stone-300 hover:bg-stone-800/50';
    const baseClasses = 'flex flex-col items-center justify-center w-full h-full space-y-1';

    return (
      <button
        onClick={onClick}
        className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
      >
        {icon}
        <span className="text-[10px] font-medium uppercase tracking-wide">
          {label}
        </span>
      </button>
    );
  };

  const headerContent = (
    <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full overflow-hidden shrink-0">
        <img src="https://play-lh.googleusercontent.com/C077FpQVnL7G5O6Mowj-sWKdTjUwEWAWxOVQUcBwhHY1yOZePOoIxtlOS5Tn9kIzLoI2eU8BWZ4Nh4ufS63zBg=w240-h480-rw" alt="Where Winds Meet Logo" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-lg font-bold tracking-wider text-stone-200">Where Winds Meet <span className="text-amber-600">Companion</span></h1>
    </div>
  );

  // Default Standalone Layout (Bottom Nav)
  return (
    <div 
        className="flex flex-col h-screen w-screen bg-stone-900 text-stone-100 font-sans"
        style={{ backgroundColor: '#1c1917', minHeight: '100vh' }}
    >
      <header className="bg-stone-950 border-b border-stone-800 p-3 flex items-center justify-between shrink-0 z-10">
        {headerContent}
        <div className="flex items-center gap-4">
          <a 
            href="https://www.paypal.com/donate/?business=P6P5JA7WRBM36&no_recurring=0&item_name=If+you+enjoyed+any+of+the+apps+I%27ve+created%2C+please+donate+and+buy+me+a+coffee.+Thank+you+and+I+hope+you%27ve+enjoyed+my+work%21&currency_code=USD"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#98ff98] hover:bg-[#80e580] text-stone-900 font-bold px-4 py-2 rounded-lg shadow-md transition-all hover:scale-105 flex items-center gap-2 text-base sm:flex hidden"
          >
            <Coffee size={20} />
            Buy me a Coffee! (Donate)
          </a>
          <div className="text-xs text-stone-500 hidden sm:block">
            <button onClick={() => handleLegalClick('TERMS')} className="hover:text-stone-300 mr-2">Terms</button>
            <button onClick={() => handleLegalClick('PRIVACY')} className="hover:text-stone-300">Privacy</button>
          </div>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto overflow-x-hidden relative">
        {renderContent()}
      </main>
      <nav className="shrink-0 bg-stone-950 border-t border-stone-800 pb-safe">
        <div className="flex justify-around items-center h-16">
          <NavButton onClick={() => { setActiveTab(Tab.GUIDE); setLegalView(null); }} isActive={activeTab === Tab.GUIDE} icon={<ScrollText size={20} />} label="Guide" />
          <NavButton onClick={() => { setActiveTab(Tab.MAP); setLegalView(null); }} isActive={activeTab === Tab.MAP} icon={<Map size={20} />} label="Map" />
          <NavButton onClick={() => { setActiveTab(Tab.CHESS); setLegalView(null); }} isActive={activeTab === Tab.CHESS} icon={<Layout size={20} />} label="Chess" />
        </div>
      </nav>
    </div>
  );
};

export default App;
