
import React, { useState } from 'react';
import { Globe, Map as MapIcon, Compass } from 'lucide-react';

export const MapTab: React.FC = () => {
  const [activeMap, setActiveMap] = useState<'MAP1' | 'MAP2' | 'MAP3'>('MAP1');

  const map1Url = "https://mapgenie.io/where-winds-meet/maps/world";
  const map2Url = "https://yysls-map.6fast.com/yysls/maps/qinghe?lang=en";
  const map3Url = "https://boarhat.gg/games/where-winds-meet/interactive-map/";

  return (
    <div className="w-full h-full flex flex-col bg-stone-950">
      {/* Sub-tabs Header */}
      <div className="flex border-b border-stone-800 bg-stone-900 shrink-0">
        <button
          onClick={() => setActiveMap('MAP1')}
          className={`flex-1 py-3 px-2 md:px-4 text-xs md:text-sm font-bold tracking-wider transition-colors flex items-center justify-center gap-2 ${
            activeMap === 'MAP1' 
              ? 'text-amber-500 border-b-2 border-amber-500 bg-stone-800/50' 
              : 'text-stone-500 hover:text-stone-300 hover:bg-stone-800/30'
          }`}
        >
          <Globe size={16} />
          <span className="truncate">MapGenie</span>
        </button>
        <button
          onClick={() => setActiveMap('MAP2')}
          className={`flex-1 py-3 px-2 md:px-4 text-xs md:text-sm font-bold tracking-wider transition-colors flex items-center justify-center gap-2 ${
            activeMap === 'MAP2' 
              ? 'text-amber-500 border-b-2 border-amber-500 bg-stone-800/50' 
              : 'text-stone-500 hover:text-stone-300 hover:bg-stone-800/30'
          }`}
        >
          <MapIcon size={16} />
          <span className="truncate">6Fast (CN Alt)</span>
        </button>
        <button
          onClick={() => setActiveMap('MAP3')}
          className={`flex-1 py-3 px-2 md:px-4 text-xs md:text-sm font-bold tracking-wider transition-colors flex items-center justify-center gap-2 ${
            activeMap === 'MAP3' 
              ? 'text-amber-500 border-b-2 border-amber-500 bg-stone-800/50' 
              : 'text-stone-500 hover:text-stone-300 hover:bg-stone-800/30'
          }`}
        >
          <Compass size={16} />
          <span className="truncate">BoarHat</span>
        </button>
      </div>

      {/* Map Views */}
      <div className="flex-1 relative w-full overflow-hidden bg-stone-900">
        {/* Map 1: MapGenie */}
        <div 
            className="w-full h-full"
            style={{ display: activeMap === 'MAP1' ? 'block' : 'none' }}
        >
          <iframe 
            src={map1Url}
            className="w-full h-full border-none"
            title="Where Winds Meet Interactive Map - MapGenie"
            // Strict sandbox: Blocks new window pop-ups. In-page ads from the source cannot be blocked.
            sandbox="allow-scripts allow-same-origin allow-forms allow-modals"
          />
        </div>

        {/* Map 2: 6Fast */}
        <div 
            className="w-full h-full"
            style={{ display: activeMap === 'MAP2' ? 'block' : 'none' }}
        >
          <iframe 
            src={map2Url}
            className="w-full h-full border-none"
            title="Where Winds Meet Interactive Map - 6Fast"
            sandbox="allow-scripts allow-same-origin allow-forms allow-modals"
          />
        </div>
        
        {/* Map 3: BoarHat */}
        <div 
            className="w-full h-full"
            style={{ display: activeMap === 'MAP3' ? 'block' : 'none' }}
        >
          <iframe 
            src={map3Url}
            className="w-full h-full border-none"
            title="Where Winds Meet Interactive Map - BoarHat"
            sandbox="allow-scripts allow-same-origin allow-forms allow-modals"
          />
        </div>
      </div>
    </div>
  );
};
