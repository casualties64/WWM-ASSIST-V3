
import React, { useState } from 'react';
import { CheckSquare, Settings, AlertTriangle, HelpCircle, Gift, TrendingUp, Monitor, Gamepad2, Video, Globe, Clock, Info, Coffee, Menu, ExternalLink, BookOpen, ArrowRight } from 'lucide-react';

export const GuideTab: React.FC = () => {
  const [activeGuide, setActiveGuide] = useState<string>('INTERNAL');
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const GUIDES = [
    { 
        id: 'INTERNAL', 
        title: 'App Guide (General)', 
        url: null,
        description: 'Comprehensive general guide for WWM'
    },
    { 
        id: 'PART1', 
        title: 'Part 1: F2P & Spending', 
        url: null, // Now internal
        description: 'Maximize Jade, Coupons & Gacha'
    },
    { 
        id: 'PART2', 
        title: 'Part 2: Gameplay & UI', 
        url: null, // Now internal
        description: 'Efficiency, UI Breakdown, Routine'
    },
    { 
        id: 'PART3', 
        title: 'Part 3: Weapon Skins', 
        url: null, // Now internal
        description: 'Advanced Weapon Reforging'
    },
    { 
        id: 'PART4', 
        title: 'Part 4: Merchant Trading', 
        url: null, // Now internal
        description: 'How to Make Serious Money'
    },
    { 
        id: 'PART5', 
        title: 'Part 5: Cosmetics Roadmap', 
        url: 'https://www.reddit.com/r/wherewindsmeet_/comments/1p3is5r/guide_part_5_cn_spoilers_want_to_plan_your_pulls/',
        description: 'CN Spoilers & Planning Pulls'
    },
  ];

  const renderSidebar = () => (
    <div className="flex flex-col h-full bg-stone-950 border-r border-stone-800 w-full lg:w-80 shrink-0">
        {/* Credit Header */}
        <div className="p-4 bg-stone-900 border-b border-stone-800">
            <div className="bg-stone-800/50 rounded-lg p-3 border border-stone-700/50">
                <span className="text-[10px] uppercase font-bold text-stone-500 tracking-wider block mb-1">Guide Credit</span>
                <div className="text-stone-300 text-xs">
                    Content courtesy of <br/>
                    <a 
                        href="https://www.reddit.com/user/Silent-Musician-7918/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[#98ff98] hover:underline font-bold text-sm inline-flex items-center gap-1 mt-1 break-all"
                    >
                        u/Silent-Musician-7918 <ExternalLink size={10} />
                    </a>
                    <span className="block text-stone-500 text-[10px] mt-0.5">on Reddit</span>
                </div>
            </div>
        </div>

        {/* Navigation List */}
        <div className="flex-1 overflow-y-auto p-2 space-y-2">
            {GUIDES.map(guide => (
                <button
                    key={guide.id}
                    onClick={() => { setActiveGuide(guide.id); setShowMobileMenu(false); }}
                    className={`w-full text-left p-3 rounded-lg transition-all border text-sm group relative overflow-hidden flex items-start gap-3 ${
                        activeGuide === guide.id 
                        ? 'bg-amber-900/20 border-amber-600/50 text-amber-500 shadow-md' 
                        : 'bg-stone-900/50 border-stone-800 text-stone-400 hover:bg-stone-800 hover:text-stone-200'
                    }`}
                >
                    <div className={`mt-0.5 shrink-0 ${activeGuide === guide.id ? 'text-amber-500' : 'text-stone-600'}`}>
                        {guide.id === 'INTERNAL' || guide.id.startsWith('PART') ? <BookOpen size={16} /> : <ExternalLink size={16} />}
                    </div>
                    <div className="relative z-10">
                        <div className="font-bold mb-0.5">{guide.title}</div>
                        <div className="text-xs opacity-80 leading-tight">{guide.description}</div>
                    </div>
                    {activeGuide === guide.id && <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500" />}
                </button>
            ))}
        </div>

        {/* Donation Footer */}
        <div className="p-4 border-t border-stone-800">
            <a 
                href="https://www.paypal.com/donate/?business=P6P5JA7WRBM36&no_recurring=0&item_name=If+you+enjoyed+any+of+the+apps+I%27ve+created%2C+please+donate+and+buy+me+a+coffee.+Thank+you+and+I+hope+you%27ve+enjoyed+my+work%21&currency_code=USD"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-white font-bold py-3 px-4 rounded-lg shadow-lg transition-all hover:scale-[1.02] text-xs uppercase tracking-wide"
            >
                <Coffee size={16} /> Buy me a Coffee!
            </a>
        </div>
    </div>
  );

  const renderNavButtons = () => (
      <div className="space-y-3 text-sm">
          <p className="flex items-start gap-2">
              <span>👉</span> 
              <button onClick={() => setActiveGuide('PART1')} className="text-left font-bold text-amber-500 hover:text-amber-400 hover:underline">
                  [CLICK HERE FOR PART1: F2P &amp; Spending Guide: How to maximize your Jade, Coupons, and Gacha (CN Experience)]
              </button>
          </p>
          <p className="flex items-start gap-2">
              <span>👉</span> 
              <button onClick={() => setActiveGuide('PART2')} className="text-left font-bold text-amber-500 hover:text-amber-400 hover:underline">
                  [CLICK HERE FOR PART 2: Gameplay, UI &amp; "No-Grind" Routine]
              </button>
          </p>
          <p className="flex items-start gap-2">
              <span>👉</span> 
              <button onClick={() => setActiveGuide('PART3')} className="text-left font-bold text-amber-500 hover:text-amber-400 hover:underline">
                  [CLICK HERE FOR PART 3: Advanced Weapon Reforging(Weapon skins)]
              </button>
          </p>
          <p className="flex items-start gap-2">
              <span>👉</span> 
              <button onClick={() => setActiveGuide('PART4')} className="text-left font-bold text-amber-500 hover:text-amber-400 hover:underline">
                  [CLICK HERE FOR PART 4: Where Winds Meet: The Ultimate Merchant Trading Guide (How to Make Serious Money)]
              </button>
          </p>
           <p className="flex items-start gap-2">
              <span>👉</span> 
              <button onClick={() => setActiveGuide('PART5')} className="text-left font-bold text-amber-500 hover:text-amber-400 hover:underline">
                  [CLICK HERE FOR Part 5: [CN Spoilers] Want to plan your pulls? Here is the complete Cosmetics Roadmap(still update)]
              </button>
          </p>
          <p className="flex items-start gap-2">
              <span>👉</span> 
              <a className="text-amber-500 hover:text-amber-400 hover:underline cursor-pointer font-bold" href="https://www.reddit.com/r/wherewindsmeet_/comments/1p6xsyn/psa_if_you_cant_trigger_a_new_encounterquest_read/" target="_blank" rel="noopener noreferrer">
                  [PSA] If you can't trigger a new Encounter/Quest, read this (It's not a bug!)
              </a>
          </p>
      </div>
  );

  const renderContent = () => {
    if (activeGuide === 'INTERNAL') {
        return (
            <div className="max-w-5xl mx-auto w-full p-4 lg:p-8 space-y-8 animate-in fade-in duration-300 pb-24">
                {/* Header */}
                <div className="bg-gradient-to-r from-stone-800 to-stone-900 p-6 rounded-xl border border-stone-700 shadow-lg">
                    <h1 className="text-2xl md:text-3xl font-bold text-amber-500 mb-2">App Guide (General)</h1>
                    <p className="text-stone-400 text-sm md:text-base italic">Introduction</p>
                    <p className="text-stone-300 text-sm md:text-base mt-2">
                    This guide focuses on efficiency, scaling, and input precision. It is written for players who want to optimize their account long term instead of guessing or over-farming.
                    </p>
                </div>

                {/* Scope */}
                <section className="space-y-4">
                    <h2 className="text-xl font-bold text-stone-200 border-b border-stone-700 pb-2 flex items-center gap-2">
                        <Info size={20} className="text-amber-500" /> Scope
                    </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-stone-300">
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-500 rounded-full shrink-0"/> Things to do on a weekly/daily basis</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-500 rounded-full shrink-0"/> Performance and input configuration</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-500 rounded-full shrink-0"/> Weapon roles and pairing</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-500 rounded-full shrink-0"/> Leveling and breakthrough order</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-500 rounded-full shrink-0"/> Mystic Arts, Talents, Inner Arts</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-500 rounded-full shrink-0"/> Gear, Resonance, weekly systems, and co-op</li>
                    </ul>
                </section>

                {/* Daily & Weekly Routine */}
                <section className="space-y-4">
                    <h2 className="text-xl font-bold text-stone-200 border-b border-stone-700 pb-2 flex items-center gap-2">
                        <CheckSquare size={20} className="text-amber-500" /> Daily & Weekly Routine
                    </h2>
                    
                    <div className="space-y-6">
                        {/* Daily Checklist */}
                        <div className="bg-stone-900/50 p-4 rounded-lg border border-stone-800">
                            <h3 className="text-amber-500 font-bold mb-3 uppercase text-sm tracking-wide">Daily Checklist</h3>
                            <ol className="list-decimal pl-5 space-y-3 text-stone-300 text-sm">
                                <li>
                                    <strong className="text-stone-200">Spend Mental Energy</strong>
                                    <p className="text-stone-400 text-xs">Never let it cap. Use it on one stronghold or any small objective.</p>
                                </li>
                                <li>
                                    <strong className="text-stone-200">Complete one casual activity</strong>
                                    <p className="text-stone-400 text-xs">Pitch-Pot is quickest.</p>
                                </li>
                                <li>
                                    <strong className="text-stone-200">Visit your home</strong>
                                    <p className="text-stone-400 text-xs">Use the grooming interaction. (Blissful retreat -&gt; House on left -&gt; Table mirror).</p>
                                </li>
                                <li>
                                    <strong className="text-stone-200">Buy daily/weekly-limited materials</strong>
                                    <p className="text-stone-400 text-xs mb-1">Prioritize useful items with limited stock.</p>
                                    <ul className="list-disc pl-4 text-xs text-stone-500 space-y-1">
                                        <li>Menu &gt; Shop &gt; Items: Lingering Melody</li>
                                        <li>Menu &gt; Season &gt; Season Shop: Oscillating Jade, Life Supplies Support Box, Martial Arts Chest, Inner Way Note Chest, Small Box of Commerce Coins</li>
                                        <li>If you see raw ore / coarse fur: buy all 99.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong className="text-stone-200">Handle guild events (if unlocked)</strong>
                                    <p className="text-stone-400 text-xs">Start multi-day chains early.</p>
                                </li>
                            </ol>
                        </div>

                        {/* Weekly Checklist */}
                        <div className="bg-stone-900/50 p-4 rounded-lg border border-stone-800">
                            <h3 className="text-amber-500 font-bold mb-3 uppercase text-sm tracking-wide">Weekly Checklist</h3>
                            <ol className="list-decimal pl-5 space-y-3 text-stone-300 text-sm">
                                <li>
                                    <strong className="text-stone-200">Weekly Dungeon (Hero's Realm)</strong>
                                    <p className="text-stone-400 text-xs">Do before reset. Ideally later in the week after upgrades. Can do twice if in a guild.</p>
                                </li>
                                <li>
                                    <strong className="text-stone-200">Use weekly jade fish and echo jades</strong>
                                    <p className="text-stone-400 text-xs">Spend on internal arts, skill breakthroughs. (Jade fish: Season Shop, Echo jade: Merchants).</p>
                                </li>
                                <li>
                                    <strong className="text-stone-200">Stronghold farming</strong>
                                    <p className="text-stone-400 text-xs">&lt;Lv40: prevent Mental Energy cap. &gt;Lv40: target boss strongholds for set gear.</p>
                                </li>
                                <li>
                                    <strong className="text-stone-200">Recycle unused gear</strong>
                                    <p className="text-stone-400 text-xs">Every replaced item should be dismantled.</p>
                                </li>
                                <li>
                                    <strong className="text-stone-200">Finish multi-day sect/guild tasks</strong>
                                    <p className="text-stone-400 text-xs">Start early to avoid missing weekly completion.</p>
                                </li>
                            </ol>
                        </div>

                         {/* Avoiding Waste */}
                         <div className="bg-red-950/20 p-4 rounded-lg border border-red-900/30">
                            <h3 className="text-red-400 font-bold mb-3 uppercase text-sm tracking-wide flex items-center gap-2"><AlertTriangle size={16}/> Avoiding Waste</h3>
                            <ul className="space-y-2 text-stone-300 text-sm">
                                <li><strong className="text-stone-200">Mental Energy rewards scale:</strong> Don’t farm heavily until mid-game.</li>
                                <li><strong className="text-stone-200">Weekly dungeon mats are exclusive:</strong> Skipping = permanent loss.</li>
                                <li><strong className="text-stone-200">Weekly shop mats compound:</strong> Always buy them.</li>
                                <li><strong className="text-stone-200">Recycling is progression:</strong> Dismantle blue/low-level gear. You'll need mats for tuning later.</li>
                                <li><strong className="text-stone-200">Weekly caps &gt; daily tasks:</strong> Hit weekly limits first.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Resets & Schedules */}
                <section className="space-y-4">
                    <h2 className="text-xl font-bold text-stone-200 border-b border-stone-700 pb-2 flex items-center gap-2">
                        <Clock size={20} className="text-amber-500" /> Daily & Weekly Resets/Schedules
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         <div className="bg-stone-900/50 p-4 rounded border border-stone-800">
                             <h3 className="font-bold text-white mb-2">Reset Timings</h3>
                             <p className="text-sm text-stone-400">New Day: <strong>21:00 UST</strong></p>
                             <p className="text-sm text-stone-400">New Week: <strong>Monday</strong></p>
                         </div>
                         <div className="bg-stone-900/50 p-4 rounded border border-stone-800 space-y-2">
                             <div>
                                 <strong className="text-amber-500 text-sm block">Saturday & Sunday</strong>
                                 <p className="text-xs text-stone-400">Guild war, Fireworks (Kaifeng), Buying merchant commodities.</p>
                             </div>
                             <div>
                                 <strong className="text-amber-500 text-sm block">Monday Onwards</strong>
                                 <p className="text-xs text-stone-400">Weekly shop reset, Bond lvl refresh, Raids (10-man, 5-man, Guild), Sect/BP Caps refresh.</p>
                             </div>
                             <div>
                                 <strong className="text-amber-500 text-sm block">Wednesday Onwards</strong>
                                 <p className="text-xs text-stone-400">Selling commodities to other players.</p>
                             </div>
                         </div>
                    </div>
                </section>

                {/* Settings & Optimization */}
                <section className="space-y-6">
                    <h2 className="text-xl font-bold text-stone-200 border-b border-stone-700 pb-2 flex items-center gap-2">
                        <Monitor size={20} className="text-amber-500" /> Settings & Optimization
                    </h2>
                    <p className="text-sm text-stone-400">These configurations ensure smooth combat timing. Stability and clarity take priority over visual quality.</p>

                    {/* Display & Graphics */}
                    <div>
                        <h3 className="font-bold text-stone-200 mb-2 flex items-center gap-2"><Video size={16}/> Display & Graphics</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left text-stone-300">
                                <thead className="text-xs text-stone-400 uppercase bg-stone-800">
                                    <tr>
                                        <th className="px-4 py-2 rounded-tl-lg">Setting</th>
                                        <th className="px-4 py-2">Value</th>
                                        <th className="px-4 py-2 rounded-tr-lg">Reason</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-stone-900/50">
                                    <tr className="border-b border-stone-800">
                                        <td className="px-4 py-2 font-medium">Display Mode</td>
                                        <td className="px-4 py-2 text-amber-500">Fullscreen</td>
                                        <td className="px-4 py-2 text-stone-500">Prevents focus loss and hitching.</td>
                                    </tr>
                                    <tr className="border-b border-stone-800">
                                        <td className="px-4 py-2 font-medium">FPS Limit</td>
                                        <td className="px-4 py-2 text-amber-500">Uncapped / 120+</td>
                                        <td className="px-4 py-2 text-stone-500">Smoother input timing.</td>
                                    </tr>
                                    <tr className="border-b border-stone-800">
                                        <td className="px-4 py-2 font-medium">V-Sync</td>
                                        <td className="px-4 py-2 text-amber-500">Off</td>
                                        <td className="px-4 py-2 text-stone-500">Reduces input delay.</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 font-medium">Motion Blur</td>
                                        <td className="px-4 py-2 text-amber-500">Off</td>
                                        <td className="px-4 py-2 text-stone-500">Improves clarity.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Control Layout */}
                    <div>
                        <h3 className="font-bold text-stone-200 mb-2 flex items-center gap-2"><Gamepad2 size={16}/> Control Layout</h3>
                        <div className="bg-stone-900/50 p-4 rounded border border-stone-800 text-sm">
                            <p className="mb-3 text-stone-400">Bind offensive (keyboard) and defensive (mouse) tools separately to prevent conflict.</p>
                            <div className="grid grid-cols-2 gap-4">
                                <ul className="space-y-1">
                                    <li className="flex justify-between"><span className="text-stone-500">Light Attack</span> <span className="text-stone-200">LMB</span></li>
                                    <li className="flex justify-between"><span className="text-stone-500">Parry</span> <span className="text-stone-200">Forward Mouse Btn</span></li>
                                    <li className="flex justify-between"><span className="text-stone-500">Dodge</span> <span className="text-stone-200">Back Mouse Btn</span></li>
                                </ul>
                                <ul className="space-y-1">
                                    <li className="flex justify-between"><span className="text-stone-500">Weapon Skill</span> <span className="text-stone-200">Q / E</span></li>
                                    <li className="flex justify-between"><span className="text-stone-500">Mystic Arts</span> <span className="text-stone-200">1–4</span></li>
                                    <li className="flex justify-between"><span className="text-stone-500">Movement</span> <span className="text-stone-200">F</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Camera Config */}
                    <div>
                        <h3 className="font-bold text-stone-200 mb-2">Camera Configuration</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left text-stone-300">
                                <thead className="text-xs text-stone-400 uppercase bg-stone-800">
                                    <tr>
                                        <th className="px-4 py-2 rounded-tl-lg">Setting</th>
                                        <th className="px-4 py-2">Value</th>
                                        <th className="px-4 py-2 rounded-tr-lg">Purpose</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-stone-900/50">
                                    <tr className="border-b border-stone-800">
                                        <td className="px-4 py-2">Camera Distance</td>
                                        <td className="px-4 py-2 text-amber-500">Wide</td>
                                        <td className="px-4 py-2 text-stone-500">Improves awareness.</td>
                                    </tr>
                                    <tr className="border-b border-stone-800">
                                        <td className="px-4 py-2">Horizontal Sens</td>
                                        <td className="px-4 py-2 text-amber-500">6–8</td>
                                        <td className="px-4 py-2 text-stone-500">Smooth tracking.</td>
                                    </tr>
                                    <tr className="border-b border-stone-800">
                                        <td className="px-4 py-2">Vertical Sens</td>
                                        <td className="px-4 py-2 text-amber-500">5–6</td>
                                        <td className="px-4 py-2 text-stone-500">Prevents over-aiming.</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2">Camera Correction</td>
                                        <td className="px-4 py-2 text-amber-500">Off / Close</td>
                                        <td className="px-4 py-2 text-stone-500">Avoids disruption.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="bg-stone-900/50 p-4 rounded border border-stone-800">
                            <strong className="text-stone-200 block mb-2">Network Settings</strong>
                            <p className="text-stone-400 mb-1">Use wired Ethernet. Avoid VPNs unless they lower ping significantly.</p>
                            <p className="text-xs text-stone-500 italic">Consistent latency &gt; Raw speed.</p>
                        </div>
                        <div className="bg-stone-900/50 p-4 rounded border border-stone-800">
                            <strong className="text-stone-200 block mb-2">Performance Checklist</strong>
                            <ul className="list-disc pl-5 text-stone-400 space-y-1">
                                <li>Cap FPS only if heating occurs.</li>
                                <li>Update GPU drivers (DX12).</li>
                                <li>Close overlays (Discord/Steam).</li>
                                <li>Run from SSD.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Pre-Game Configuration */}
                <section className="space-y-4">
                    <h2 className="text-xl font-bold text-stone-200 border-b border-stone-700 pb-2 flex items-center gap-2">
                        <Settings size={20} className="text-amber-500" /> Pre-Game Configuration
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                         <div className="bg-stone-900/50 p-4 rounded border border-stone-800">
                             <strong className="text-amber-500 block mb-1">Guidance Mode</strong>
                             <p className="text-stone-300 mb-2"><strong>Detailed:</strong> Recommended for start.</p>
                             <p className="text-stone-300"><strong>Moderate:</strong> Switch later for cleaner UI.</p>
                         </div>
                         <div className="bg-stone-900/50 p-4 rounded border border-stone-800">
                             <strong className="text-amber-500 block mb-1">Operation Mode</strong>
                             <p className="text-stone-300 mb-2"><strong>ARPG:</strong> Recommended (Auto-cam).</p>
                             <p className="text-stone-300"><strong>MMORPG:</strong> Manual drag.</p>
                         </div>
                         <div className="bg-stone-900/50 p-4 rounded border border-stone-800">
                             <strong className="text-amber-500 block mb-1">Game Difficulty</strong>
                             <p className="text-stone-300 mb-2"><strong>Recommended:</strong> Balanced.</p>
                             <p className="text-stone-300"><strong>Legend/Hardcore:</strong> Permanent difficulty/Permadeath.</p>
                         </div>
                         <div className="bg-stone-900/50 p-4 rounded border border-stone-800">
                             <strong className="text-amber-500 block mb-1">Social Tendency</strong>
                             <p className="text-stone-300"><strong>Shared Journey:</strong> Recommended (Enables Co-op/Trade).</p>
                         </div>
                    </div>
                    <div className="bg-stone-900/50 p-4 rounded border border-stone-800 text-sm">
                         <strong className="text-amber-500 block mb-1">Character & Talents</strong>
                         <p className="text-stone-300 mb-2">First 3 edits are free. Create final look early.</p>
                         <p className="text-stone-300"><strong>Recommended Talent:</strong> <em>Rhetoric Edge</em> (Improves persuasion in quests).</p>
                    </div>
                </section>

                {/* Progression */}
                <section className="space-y-4">
                     <h2 className="text-xl font-bold text-stone-200 border-b border-stone-700 pb-2 flex items-center gap-2">
                        <TrendingUp size={20} className="text-amber-500" /> Progression & Leveling
                    </h2>
                    <div className="bg-stone-800/50 p-4 rounded text-sm text-stone-300 space-y-3 border-l-4 border-amber-600">
                        <p><strong>1. Always push Main Story first.</strong> XP cap and breakthroughs are tied to it.</p>
                        <p><strong>2. Perform breakthroughs immediately</strong> when hitting a level cap.</p>
                        <p><strong>3. Use remaining time</strong> for daily/weekly tasks, exploration, and side quests only after story progress is blocked by current patch limits.</p>
                    </div>
                </section>

                {/* Exchange Codes */}
                <section className="space-y-4">
                     <h2 className="text-xl font-bold text-stone-200 border-b border-stone-700 pb-2 flex items-center gap-2">
                        <Gift size={20} className="text-amber-500" /> Exchange Codes
                    </h2>
                    <p className="text-xs text-stone-500">Input in Settings &gt; Other &gt; Exchange Code</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-emerald-900/20 border border-emerald-800 p-4 rounded">
                            <strong className="text-emerald-400 block mb-2 uppercase text-xs tracking-wider">Ongoing</strong>
                            <ul className="space-y-1 font-mono text-sm text-stone-300">
                                <li>WWMGLyoutube</li>
                                <li>WWMGLtiktok</li>
                                <li>WWM251115</li>
                            </ul>
                        </div>
                        <div className="bg-stone-900/50 border border-stone-800 p-4 rounded opacity-75">
                            <strong className="text-stone-500 block mb-2 uppercase text-xs tracking-wider">Expired</strong>
                            <ul className="space-y-1 font-mono text-sm text-stone-500 line-through">
                                <li>WWMGO1114</li>
                                <li>WWMGO1115</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="space-y-4">
                     <h2 className="text-xl font-bold text-stone-200 border-b border-stone-700 pb-2 flex items-center gap-2">
                        <HelpCircle size={20} className="text-amber-500" /> Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                        <div className="bg-stone-900/30 p-4 rounded border border-stone-800">
                            <p className="font-bold text-stone-200 mb-1">"Why did Hero's Realm attempt not count into the Guild event?"</p>
                            <p className="text-sm text-stone-400">If in a guild, you can do it twice. The second run counts for guild events and gives rewards at the end.</p>
                        </div>
                        <div className="bg-stone-900/30 p-4 rounded border border-stone-800">
                            <p className="font-bold text-stone-200 mb-1">"Where is the 5v5 arena?"</p>
                            <p className="text-sm text-stone-400">As of 25/11/2025, it is not yet released.</p>
                        </div>
                        <div className="bg-stone-900/30 p-4 rounded border border-stone-800">
                            <p className="font-bold text-stone-200 mb-1">"I am dying in PvP / Combat Mastery is low"</p>
                            <p className="text-sm text-stone-400">Focus on ONE martial path (e.g., Bellstrike) to avoid spreading resources too thin.</p>
                        </div>
                         <div className="bg-stone-900/30 p-4 rounded border border-stone-800">
                            <p className="font-bold text-stone-200 mb-1">"Outposts vs Campaign Challenge?"</p>
                            <p className="text-sm text-stone-400">Outposts for resources (Ebon Iron). Campaign for specific set gear.</p>
                        </div>
                         <div className="bg-stone-900/30 p-4 rounded border border-stone-800">
                            <p className="font-bold text-stone-200 mb-1">"20 co-op poses is tiring!"</p>
                            <p className="text-sm text-stone-400">Have a friend stay in a pose. Press F -&gt; Move away -&gt; Repeat x20.</p>
                        </div>
                         <div className="bg-stone-900/30 p-4 rounded border border-stone-800">
                            <p className="font-bold text-stone-200 mb-1">"Clearing Guild Transporter is a pain"</p>
                            <p className="text-sm text-stone-400">Hover over the needed item and click the suggested merchant for instant access.</p>
                        </div>
                    </div>
                </section>

                 <section className="bg-gradient-to-br from-stone-800 to-stone-900 p-6 rounded-xl border border-stone-700 text-center space-y-4">
                    <h2 className="text-xl font-bold text-white">Final Notes - Join our guild ;)</h2>
                    <p className="text-sm text-stone-400 italic">
                        With that being said, this guide is not perfect and was written originally based off the Chinese server, so some of the translation is not perfect.
                    </p>
                    <div className="inline-block bg-indigo-900/50 border border-indigo-500/30 p-4 rounded-lg">
                        <p className="text-indigo-200 font-bold">JOIN OUR GUILD: <span className="text-white text-lg">WeHateitHere</span></p>
                        <p className="text-indigo-300 text-sm mt-1">Discord.gg/weh8</p>
                    </div>
                </section>
            </div>
        );
    }

    // --- PART 1 ---
    if (activeGuide === 'PART1') {
        return (
            <div className="max-w-5xl mx-auto w-full p-4 lg:p-8 space-y-6 animate-in fade-in duration-300 pb-24 text-stone-300" style={{'--emote-size': '20px'} as any}>
                <h1 className="text-2xl font-bold text-amber-500">[Note: This guide is constantly being updated. Please check back often!]</h1>
                <p><strong className="text-white">[UPDATE] GUIDE SPLIT INTO 5 PARTS!</strong></p>
                <p>Due to Reddit's post length limit, I cannot add more updates here. I have split the guide into Four parts to cover everything in detail.</p>
                <p className="text-stone-500/50">---</p>
                <h1 className="text-2xl font-bold mt-6 mb-4 text-stone-200">⚠️ NAVIGATION INDEX</h1>
                {renderNavButtons()}
                <p className="text-stone-500/50 pt-4 border-t border-stone-800 mt-4">---</p>
                <p><em>(Original Post Starts Below)</em></p>
                <h1 className="text-2xl font-bold mt-8 mb-4 text-amber-500 border-b border-stone-700 pb-2">Intro &amp; Reality Check</h1>
                <p>Hi everyone! I play on the CN server. English isn't my first language, so I'm using AI to help translate.</p>
                <p>I have spent some time putting this guide together to cover as many items and mechanics as possible. <strong className="text-white">If you have any questions or if there are specific items you are confused about, please leave a comment.</strong> I will do my best to answer and update the main post with explanations.</p>
                <p><strong className="text-white">Heads up: This is a long and detailed post.</strong></p>
                <p>However, if you really want to understand how the monetization works—whether you aim to be a strict F2P (Free-to-Play) player or want to spend money efficiently without getting ripped off—taking the time to read this carefully will be very helpful.</p>
                <p><strong className="text-amber-400">⚠️ Important Expectation Management:</strong></p>
                <p>I want to be very clear: <strong className="text-white">This game is NOT predatory Pay-to-Win</strong> (spending is entirely restricted to cosmetics).</p>
                <p><strong className="text-white">HOWEVER, it is undeniably still an MMO.</strong></p>
                <p>Even though the graphics and gameplay might look like a single-player action game, the payment structure is "bloated" and complex, typical of Asian MMOs. Even a "Lite" MMO is still an MMO at its core.</p>
                <p><strong className="text-white">Why am I sharing this?</strong></p>
                <p>I know discussing money can be depressing. It often feels like stripping the joy out of a game and reducing it to a cold transaction.</p>
                <p><strong className="text-white">The Goal:</strong> Understanding these mechanics is the only way to spot potential "traps" so you can play with peace of mind.</p>
                <p><strong className="text-white">For F2P Players:</strong> I listed these details so you know exactly what you might "miss" and—more importantly—what you still get. I hope this rebuilds your confidence.</p>
                <p><strong className="text-white">Rest Assured:</strong> Please do not be intimidated. <strong className="text-white">You can experience 100% of the continuous Main Story and Map updates without spending a single penny.</strong> Based on the CN version, I can confirm this content is excellent.</p>
                <p>Sometimes, we need to dive deeper into how a game makes money. This knowledge empowers you to choose <em><strong>how</strong></em> you want to enjoy the game—or calculate exactly how much it costs to meet your expectations—so you can manage your time and wallet wisely.</p>
                <p><em><strong>Disclaimer: Please note that things might differ on Global, so treat this as a reference based on CN experience and always check your own server</strong></em>.</p>
                <h1 className="text-2xl font-bold mt-8 mb-4 text-amber-500 border-b border-stone-700 pb-2">1. The Store &amp; The "50% Off" Trick</h1>
                <figure className="my-6 bg-stone-900 p-2 rounded-lg inline-block w-32">
                    <img src="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-3jrsf41id62g1.png?width=117&amp;format=png&amp;auto=webp&amp;s=a12fe9cabc2a31a0eda46793454a3a03c4f424a2" alt="Coupons" className="mx-auto" />
                </figure>
                <p>For cosmetics sold directly in the store, never pay full price.</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><p><strong className="text-white">The Coupons:</strong> These look like golden rectangular tickets. Each one gives <strong className="text-emerald-400">10% off</strong>.</p></li>
                    <li><p><strong className="text-white">How to get them:</strong></p>
                        <ol className="list-decimal pl-5 mt-2 space-y-1">
                            <li><p><strong className="text-white">Daily Sign-ins (Main Source):</strong> You get these regularly by logging in. (Roughly every 18 days).</p></li>
                            <li><p><strong className="text-white">Resonance Shop (Exchange):</strong> You can verify in the "Resonance Shop". You can usually exchange "Stardust" (points from gacha pulls) for <strong className="text-white">1 extra coupon per month</strong>.</p></li>
                        </ol>
                    </li>
                    <li><p><strong className="text-white">Stacking Strategy:</strong> You can stack up to <strong className="text-white">5 coupons</strong> on a single item. This means you can get a <strong className="text-emerald-400">50% discount</strong>.</p></li>
                    <li><p><strong className="text-white">Missed a day?</strong> If you miss a login, don't worry. You can earn currency from multiplayer modes to "make up" the sign-in, ensuring you get your coupons.</p></li>
                </ul>
                <p><strong className="text-white">PRICE TIERS &amp; MICRO-SPENDING GUIDE:</strong></p>
                <p>The Store features four main price tiers for direct-purchase cosmetics: 6, 68, 128, and 258 Pearls. The developers constantly add new items to these specific price points.</p>
                <p>If you are a "Micro-Spender" or on a tight budget, you will always find fresh options that fit your price range.</p>
                <p>Important: Unlike Limited Banners, old store items do NOT expire. They stay in the shop permanently while new ones are added. This means you can take your time to hoard Discount Coupons (to get that 50% off) and buy them whenever you are ready.</p>
                <p>This applies to more than just outfits. Budget-friendly Weapon Skins, Visual Effects, and Mounts are also updated regularly. So even with low spending, you will consistently find affordable items to enjoy.</p>
                <h1 className="text-2xl font-bold mt-8 mb-4 text-amber-500 border-b border-stone-700 pb-2">2. Echo Jade (Free Currency) - What to Buy vs. Save</h1>
                <figure className="my-6 bg-stone-900 p-2 rounded-lg inline-block w-24">
                    <img src="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-3ug3fvb9d62g1.png?width=79&amp;format=png&amp;auto=webp&amp;s=46b5e5fc2f2bada720cd635d993e2fc490770cea" alt="Echo Jade" className="mx-auto" />
                </figure>
                <p>Jade is the green currency obtained from exploration and gameplay. Note that Jade is <strong className="text-white">NOT purchasable directly with real money</strong> (even the Monthly Pass only accumulates it slowly), so every Jade counts.</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><p><strong className="text-white">Standard Uses:</strong></p>
                        <ul className="list-disc pl-5 mt-2">
                            <li><p><strong className="text-white">Re-customization:</strong> Change your appearance (200 Jade).</p></li>
                        </ul>
                    </li>
                </ul>
                <figure className="my-6 bg-stone-900 p-2 rounded-lg inline-block w-48">
                    <img src="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-pfkgj5fwg62g1.png?width=195&amp;format=png&amp;auto=webp&amp;s=e1678b401b84d8618e19cb360dd5026f13305e6c" alt="Re-customize coupon" className="mx-auto" />
                    <figcaption className="text-center text-xs text-stone-500 mt-2">Re-customize your character coupon</figcaption>
                </figure>
                <ul className="list-disc pl-5 space-y-2">
                    <li><p><strong className="text-white">Skill Books:</strong> Buy from NPCs (~5000 Jade total to buy them all).</p></li>
                </ul>
                <figure className="my-6 bg-stone-900 p-2 rounded-lg inline-block w-56">
                    <img src="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-f03sctzej62g1.png?width=225&amp;format=png&amp;auto=webp&amp;s=813fd3a212a8396c23a3fc907a1f2ea1df1c39fc" alt="Skill book" className="mx-auto" />
                </figure>
                <p>There is a crucial technique called 'Yi Shui Ge'. You must prioritize leveling this skill to maximum rank immediately (ASAP), as it is mandatory for all martial arts builds. You may need to look for it by its icon or translated description if the name differs in the global version, ensuring you can level it up as fast as possible.</p>
                <figure className="my-6 bg-stone-900 p-2 rounded-lg inline-block w-16">
                    <img src="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-jl0qobfobj2g1.png?width=64&amp;format=png&amp;auto=webp&amp;s=4ccd6317e1f3e1780e1c97bb6582b53bb122ff9d" alt="Yi Shui Ge icon" className="mx-auto" />
                </figure>
                <div className="space-y-4">
                  <figure className="my-6 bg-stone-900 p-2 rounded-lg inline-block max-w-sm">
                      <img src="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-us9u1z7pj62g1.png?width=320&format=png&auto=webp&s=abe47f6a42a8899d8152c0807b41364f9a7623de" alt="Merchant in QINGHE" className="mx-auto rounded" />
                      <figcaption className="text-center text-xs text-stone-500 mt-2">Find this merchant here. QINGHE</figcaption>
                  </figure>
                  <figure className="my-6 bg-stone-900 p-2 rounded-lg inline-block max-w-sm">
                      <img src="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-vs8z60d2k62g1.png?width=438&format=png&auto=webp&s=fb0ffd5bcf6ffe37410305cc95c457ae324e8b8f" alt="Merchant in KAIFENG" className="mx-auto rounded" />
                      <figcaption className="text-center text-xs text-stone-500 mt-2">Find this merchant here. KAIFENG</figcaption>
                  </figure>
                  <figure className="my-6 bg-stone-900 p-2 rounded-lg inline-block max-w-sm">
                      <img src="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-kg4q5ct7k62g1.png?width=451&format=png&auto=webp&s=9dbd99efb89d19499d61b8eec0200bdf5317eea8" alt="Another merchant in KaiFeng" className="mx-auto rounded" />
                      <figcaption className="text-center text-xs text-stone-500 mt-2">Find this merchant here. KaiFeng</figcaption>
                  </figure>
                </div>
                <p><strong className="text-white">gacha exchange:</strong> you can swap 160 <strong className="text-white">echo jade</strong> for a standard (blue) pull. you can also swap 200 <strong className="text-white">echo jade</strong> for a <strong className="text-white">celestial echo</strong> (gold) pull, but this is limited to 2 per week (it is not unlimited!).</p>
                <p><strong className="text-white">monthly pass shop (cn feature):</strong> on cn, buying the monthly pass (~$5) unlocks a special privilege shop. there, you can buy a gender change item for 6,400 <strong className="text-white">echo jade</strong>. (note: subject to change on global, but good to know).</p>
                <p><strong className="text-amber-400">⚠️ critical tip:</strong> the "limited echo jade banner". every season usually has a special banner that uses <strong className="text-white">echo jade</strong>, not cash.</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><p><strong className="text-white">don't panic (duration):</strong> on the cn server, developers were quite generous with the time limit. these banners usually lasted a very long time (sometimes even extended into the next season) specifically to allow f2p players enough time to grind the <strong className="text-white">echo jade</strong> needed.</p></li>
                    <li><p><strong className="text-white">advice:</strong> while you don't need 24k <strong className="text-white">echo jade</strong> right now, you should start saving. don't spend <strong className="text-white">echo jade</strong> randomly on <strong className="text-white">solemn echo</strong> banners, or you might regret it when the limited outfit drops.</p></li>
                    <li><p><strong className="text-white">f2p reality check:</strong> you absolutely can save enough <strong className="text-white">echo jade</strong> without buying a monthly pass. however, it requires effort. you will need to be diligent about clearing the map (100% exploration), opening every chest, and not missing events. the monthly pass just makes this process less tiring/stressful.</p></li>
                </ul>
                <p><strong className="text-white">note:</strong> regular (blue) gacha tickets and <strong className="text-white">echo jade</strong> are used for two different types of banners:</p>
                <ol className="list-decimal pl-5 space-y-1">
                    <li><p>the <strong className="text-white">solemn echo</strong> banner (this is permanent and will always exist).</p></li>
                    <li><p>the limited-time <strong className="text-white">echo jade</strong> banner (not released on global yet).</p></li>
                </ol>
                <p><strong className="text-white">important:</strong> the pity/guarantee count is not shared between these two banners. they are calculated completely separately.</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><p>the limited-edition <strong className="text-white">echo jade</strong> banner requires 24,000 <strong className="text-white">echo jade</strong> (or 150 standard pulls) to hit pity and usually lasts for about 3 months.</p></li>
                </ul>
                <p><strong className="text-white">the unlock requirement:</strong> you need to have pulled a total of 200 times on the <strong className="text-white">solemn echo</strong> banner to unlock access to the limited <strong className="text-white">echo jade</strong> banner.</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><p><strong className="text-white">don't worry about "wasted" pulls:</strong> if you are pulling on <strong className="text-white">solemn echo</strong> right now, your progress counts! when the limited <strong className="text-white">echo jade</strong> banner eventually releases, the game will look at your past history. if you have already done 200 pulls by then, the new banner will be unlocked immediately.</p></li>
                    <li><p><strong className="text-white">one-time threshold:</strong> you only need to reach this 200-pull threshold once for your account. once unlocked, all future limited <strong className="text-white">echo jade</strong> banners in later seasons will be automatically unlocked for you. you do not need to pull 200 times on <strong className="text-white">solemn echo</strong> again for every new banner.</p></li>
                </ul>
                <h1 className="text-2xl font-bold mt-8 mb-4 text-amber-500 border-b border-stone-700 pb-2">3. Celestial Echo: The F2P Strategy</h1>
                <p><strong className="text-white">clarification:</strong> this is a completely different pool from the <strong className="text-white">solemn echo</strong> or <strong className="text-white">echo jade</strong> banners mentioned above. you cannot use <strong className="text-white">echo jade</strong> directly here.</p>
                <p>to pull in this pool (<strong className="text-white">celestial echo</strong>), you must use pearls (cash currency) or <strong className="text-white">special echo</strong> (gold tickets).</p>
                <p><strong className="text-white">important:</strong> while <strong className="text-white">special echo</strong> tickets can be bought with pearls, there are several ways to obtain them for free inside the game. you do not strictly need to spend money if you are patient.</p>
                <div className="flex gap-4 items-center">
                  <figure className="my-6 bg-stone-900 p-2 rounded-lg inline-block w-24">
                      <img src="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-s7bljktce62g1.png?width=90&amp;format=png&amp;auto=webp&amp;s=7380faeac48ecca7611b37f56987d4215d688ebc" alt="160 Echo Jade" className="mx-auto" />
                      <figcaption className="text-center text-xs text-stone-500 mt-2">160 Echo Jade</figcaption>
                  </figure>
                  <figure className="my-6 bg-stone-900 p-2 rounded-lg inline-block w-24">
                      <img src="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-h7l2c5vhe62g1.png?width=93&amp;format=png&amp;auto=webp&amp;s=f81caa5ac015f41b2bd07f87113b092a5b7d3bd0" alt="Lingering Melody" className="mx-auto" />
                      <figcaption className="text-center text-xs text-stone-500 mt-2">Lingering Melody</figcaption>
                  </figure>
                </div>
                <p><strong>the celestial echo pool</strong> (limited banner) has a hard pity at 150 pulls. unless you're a whale, do not spend real money here. you can actually grind this for free.</p>
                <p><strong className="text-white">weekly routine (3 pulls total):</strong></p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><p><strong className="text-white">shop:</strong> buy 2 pulls for 200 <strong className="text-white">echo jade</strong> each.</p></li>
                    <li><p><strong className="text-white">season shop:</strong> buy 1 pull. (this is the "no-grind" shop that lets you exchange points from simple weekly activities. rewards you for playing casually without the heavy grind.)</p></li>
                    <li><p><strong className="text-white">monthly:</strong> exchange for 2 pulls in the shop using points from your free pulls.</p></li>
                    <li><p><strong className="text-white">exploration:</strong> some npcs give premium pulls (<strong className="text-white">special echo</strong>) when defeated.</p></li>
                    <li><p><strong className="text-white">events:</strong> always watch out for limited-time events.</p></li>
                </ul>
                <p><strong className="text-white">result:</strong> a f2p player can get ~30 pulls/month. it takes 4-6 months to hit pity for free. patience is key.</p>
                <p><strong className="text-amber-400">⚠️ important mechanics (common misconceptions):</strong></p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><p><strong className="text-white">pity carries over:</strong> if the current <strong className="text-white">celestial echo</strong> banner ends and you haven't hit the 150 guarantee yet, your pull count <strong className="text-white">does not reset</strong>. it carries over to the next limited banner. you can safely "build pity" over several months.</p></li>
                    <li><p><strong className="text-white">separate pools:</strong> the <strong className="text-white">solemn echo</strong> (standard) and <strong className="text-white">celestial echo</strong> (limited) pools are completely independent. building pity on the standard pool does not help your limited pool pity at all.</p></li>
                </ul>
                <figure className="my-6 bg-stone-900 p-2 rounded-lg inline-block max-w-sm">
                    <img src="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-3f3vjxyrh62g1.png?width=447&format=png&auto=webp&s=961e3f775771e3d7478555af47f6c1f79e567aa9" alt="Harmonic Cores" className="mx-auto" />
                    <figcaption className="text-center text-xs text-stone-500 mt-2">Harmonic Cores</figcaption>
                </figure>
                <p><strong className="text-emerald-400">💡 PRO TIP: The "</strong><em><strong>harmonic cores</strong></em><strong>"&amp; Dismantling</strong></p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><p>The "<em>harmonic cores</em>" item you see in the pool is the Universal Exchange Token.</p></li>
                    <li><p>How it works: If you hit Hard Pity (150 pulls) and receive this Token instead of the outfit, you can use it to exchange for items in the banner shop.</p></li>
                    <li><p>The "Regret" Mechanic (Crucial):</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li><p>What if you pulled the Rate-Up Outfit but you actually don't like it? Or maybe you wanted the Weapon Skin instead?</p></li>
                            <li><p>YOU CAN DISMANTLE/DECOMPOSE THE OUTFIT!(Only while it's still in your bag (without clicking to use).)</p></li>
                            <li><p>The Rate: Dismantling the main outfit gives you 2 <em>Eight - Sound Core</em>.</p></li>
                            <li><p>Usage: You can then use these 2 <em>harmonic cores</em> to exchange for other items in the shop (like the Weapon Skin, Hair Dye, or save them). This gives you flexibility if you regret your pull!</p></li>
                        </ul>
                    </li>
                </ul>
                <h1 className="text-2xl font-bold mt-8 mb-4 text-amber-500 border-b border-stone-700 pb-2">how to recycle/exchange items back to harmonic cores</h1>
                <p>just adding a quick section here since this can be kinda tricky. if you wanna swap your gacha items back, here’s the drill:</p>
                <ol className="list-decimal pl-5 space-y-2">
                    <li><p><strong className="text-white">keep it in the bag:</strong> making this super clear—the item must be unused in your <strong className="text-white">bag</strong>. if you have ever clicked "use" on it, it's locked to your character and you can't put it back in the bag to exchange.</p></li>
                    <li><p><strong className="text-white">click exchange:</strong> once you're in the bag interface, just hit the exchange button.</p></li>
                    <li><p><strong className="text-white">no expiration:</strong> <em><strong>harmonic cores</strong></em> don't have a time limit. feel free to stack them up and save them for future banners/pools if you want.</p></li>
                </ol>
                <p>dropping 2 screenshots below so you can see exactly where to click. hope this helps!</p>
                <figure className="my-6 bg-stone-900 p-2 rounded-lg">
                    <img src="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-inrtct9lpp3g1.png?width=1080&crop=smart&auto=webp&s=0ef00de546e1e78c7f1a01c380aee6730f06acf0" alt="Recycle step 1" className="mx-auto rounded" />
                </figure>
                <figure className="my-6 bg-stone-900 p-2 rounded-lg">
                    <img src="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-8x45kcylpp3g1.png?width=1080&crop=smart&auto=webp&s=c7c3d99552624adf07118393f5613d92cf00b657" alt="Recycle step 2" className="mx-auto rounded" />
                </figure>
                <h1 className="text-2xl font-bold mt-8 mb-4 text-amber-500 border-b border-stone-700 pb-2">4. advanced gacha mechanics: the "hidden pity" &amp; duplicates</h1>
                <p>the gacha rules recently got an upgrade on cn. the wording is confusing, so here is the simple breakdown of how the safety net works for the limited echo jade banner (outfits).</p>
                <p className="font-bold text-white">a. the "bad luck" protection (hardest pity) if you are extremely unlucky, the game has a hidden counter to force the outfit to drop.</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><p><strong className="text-white">the trigger:</strong> once you have done 131 pulls in the banner.</p></li>
                    <li><p><strong className="text-white">the mechanism:</strong> after 131 pulls, if you pull a gold drop but it is not the outfit, you gain 20% "wish value".</p></li>
                    <li><p><strong className="text-white">the guarantee:</strong> once this value hits 100% (meaning you pulled a gold drop 5 times in a row without seeing the outfit), your next gold reward is guaranteed to be the outfit set.</p></li>
                    <li><p><strong className="text-white">summary:</strong> basically, even with the worst rng possible, the game eventually stops giving you random items and forces the outfit to appear.</p></li>
                </ul>
                <p className="font-bold text-white mt-4">b. duplicate recycling (purple items) don't be sad if you get duplicate purple (epic) cosmetics.</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><p><strong className="text-white">conversion:</strong> if you pull a purple cosmetic you already own, it converts into a special currency (let's call it echo tokens).</p></li>
                    <li><p><strong className="text-white">what to buy with it:</strong> you can use these tokens to buy high-value items:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li><p><strong className="text-white">premium dye:</strong> used for dyeing hair (including white hair).</p></li>
                            <li><p><strong className="text-white">reroll stone:</strong> used to reroll the stats/colors of your weapon skin.</p></li>
                            <li><p><strong className="text-white">sfx currency:</strong> used to buy special visual effects for your character.</p></li>
                        </ul>
                    </li>
                </ul>
                <figure className="my-6 bg-stone-900 p-2 rounded-lg inline-block max-w-sm">
                    <img src="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-y4gdlr8qf62g1.png?width=463&format=png&auto=webp&s=67ddf8600efeb7231e959316f08688e8d0a1a367" alt="Duplicate exchange shop" className="mx-auto" />
                </figure>
                <h1 className="text-2xl font-bold mt-8 mb-4 text-amber-500 border-b border-stone-700 pb-2">5. The Dye System: F2P vs. Premium &amp; How to Farm</h1>
                <p>Customization is huge in this game. The dye system is split into two tiers: <strong className="text-white">Basic (Low Saturation)</strong> and <strong className="text-white">Premium (High Saturation)</strong>.</p>
                <p className="font-bold text-white mt-4">A. Clothing Dyes (10 powders per dye)</p>
                <figure className="my-6 bg-stone-900 p-2 rounded-lg inline-block w-28">
                    <img src="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-3ido9dqdf62g1.png?width=101&format=png&auto=webp&s=bf12958d70e3e99061c59158c609049bde3bb5e8" alt="Basic Dye" className="mx-auto" />
                    <figcaption className="text-center text-xs text-stone-500 mt-2">Basic Dye</figcaption>
                </figure>
                <p><strong className="text-white">1. Basic Dye (Wooden Box Icon):</strong></p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><p><strong className="text-white">Effect:</strong> Creates soft, low-saturation colors (Morandi colors).</p></li>
                    <li><p><strong className="text-white">Review:</strong> Honestly, this is enough for 90% of outfits. You can find amazing dye presets from other players that only use this free dye.</p></li>
                    <li><p><strong className="text-white">How to Farm (Detailed Sources):</strong> You can get hundreds of these per month. Here is the full list of shops:</p></li>
                </ul>
                <ol className="list-decimal pl-5 mt-2 space-y-2">
                    <li><p><strong className="text-white">Dihua Shop (Standard Gacha Banner Shop):</strong> Cost: 2 Dihua. Limit: 99 per day. (This is the easiest source!).</p></li>
                    <li><p><strong className="text-white">Stardust Shop (Gacha Exchange):</strong> Cost: 2 Stardust. Limit: 99 per day.</p></li>
                    <li><p><strong className="text-white">Battle Pass Shop:</strong> Cost: 1 BP Coin. Limit: 5 per month.</p></li>
                    <li><p><strong className="text-white">Social Shops (Affinity / Sworn / Mentorship):</strong></p>
                        <ul className="list-disc pl-5 mt-1 space-y-1">
                            <li><p>Affinity Shop: Limit 10/month.</p></li>
                            <li><p>Sworn/Brotherhood Shop: Limit 10/month.</p></li>
                            <li><p>Mentorship Shop: Limit 10/month.</p></li>
                            <li><p>(Cost: 100 Social Coins each).</p></li>
                        </ul>
                    </li>
                    <li><p><strong className="text-white">General Merchant (Feng's Brokerage):</strong> Cost: 8000 Coins (Standard currency). Limit: 10/month.</p></li>
                    <li><p><strong className="text-white">Red Name/Jail Area (Sin Forest):</strong> Cost: 200 Sin Leaves. Limit: 10/month.</p></li>
                    <li><p><strong className="text-white">Limited Event Shops:</strong> Usually available for event currency (Limit ~35).</p></li>
                </ol>
                <ul className="list-disc pl-5 mt-2">
                    <li><p><strong className="text-white">Verdict:</strong> You will likely never run out of this dye.</p></li>
                </ul>
                <figure className="my-6 bg-stone-900 p-2 rounded-lg inline-block w-28">
                    <img src="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-hkr78ia0f62g1.png?width=105&format=png&auto=webp&s=7e8b151e1914d3afcb33b1b4b2e6982cc4e946e1" alt="Advanced Dyes" className="mx-auto" />
                    <figcaption className="text-center text-xs text-stone-500 mt-2">Advanced dyes</figcaption>
                </figure>
                <p><strong className="text-white">2. Premium Dye (Green Box Icon - "Cloud Glow"):</strong></p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><p><strong className="text-white">Effect:</strong> Allows for High Saturation colors (Bright Red, Deep Black, Neon, etc.).</p></li>
                    <li><p><strong className="text-white">How to Farm (Detailed Sources):</strong> This is harder to get than the basic dye.</p></li>
                </ul>
                <ol className="list-decimal pl-5 mt-2 space-y-2">
                    <li><p><strong className="text-white">Dihua Shop (Standard Gacha Banner Shop):</strong> Cost: 10 Dihua. Limit: 10 per week. (This is your main steady source).</p></li>
                    <li><p><strong className="text-white">Stardust Shop (Gacha Exchange):</strong> Cost: 10 Stardust. Limit: 99 per week. (Uses currency from pulling).</p></li>
                    <li><p><strong className="text-white">Battle Pass Shop:</strong> Cost: 5 BP Coins. Limit: 5 per month.</p></li>
                    <li><p><strong className="text-white">Limited Event Shops:</strong> Often available in event stores (e.g., Limit ~45 total).</p></li>
                    <li><p><strong className="text-white">General Store (Jianghu Treasures):</strong> Cost: 100 Pearls. (DO NOT BUY, total rip-off).</p></li>
                </ol>
                <ul className="list-disc pl-5 mt-2">
                    <li><p><strong className="text-white">Monthly Estimate:</strong> If you clear the Dihua Shop every week (40) and the Battle Pass (5), an active F2P player can get about 45 powders per month.</p></li>
                </ul>
                <p>Multiple dyeing slots: Open the clothing menu—My Designs. Each outfit allows you to save 3 dyeing schemes for free. To unlock the maximum, you need to spend Jade to unlock an additional 4 slots. Saved dyeing designs are permanent and can be switched between at any time.</p>
                <p><strong className="text-amber-400">⚠️ CRITICAL WARNING: Do Not Buy "Pre-Dyed" Bundles!</strong></p>
                <p>When browsing the Store or viewing other players' presets ("Copying Homework"), you will often see an option to buy the "Outfit + Dye Scheme" together.</p>
                <p>ABSOLUTELY DO NOT CLICK BUY YET.</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><p><strong className="text-white">The Trap:</strong> If you buy it this way, the game charges you Pearls (Cash currency) for the dye costs. This is a huge waste because you can get dyes for free via the Battle Pass and Daily Activities.</p></li>
                    <li><p><strong className="text-white">The Correct Method:</strong></p></li>
                </ul>
                <ol className="list-decimal pl-5 mt-2 space-y-1">
                    <li><p>Always switch the preview back to the "Original Color" first.</p></li>
                    <li><p>Buy the Base Outfit only.</p></li>
                    <li><p>If you liked that specific dye scheme, "Favorite/Save" the preset.</p></li>
                    <li><p>Go to your Dye Menu, apply the saved preset, and pay using your Hoarded Free Dyes.</p></li>
                </ol>
                <ul className="list-disc pl-5 mt-2">
                    <li><p><strong className="text-white">Result:</strong> You get the same look, but you save your Pearls!</p></li>
                </ul>
                <p><strong className="text-white">Pro Tip regarding Dye Slots:</strong></p>
                <p>On the CN server, the <strong className="text-white">Monthly Pass Privilege Shop</strong> allows you to buy the "Dye Slot Expansion Item" for just <strong className="text-white">25 Jade</strong>. (You need 2 items to unlock one new slot).</p>
                <p>Currently on Global, this item is only available in the cash shop for <strong className="text-white">20 Pearls</strong>.</p>
                <p><strong className="text-amber-400">⚠️ Advice:</strong> Do NOT buy it with Pearls right now! It is highly likely that the Monthly Pass shop will be updated in the future. If you buy it with Pearls now, you might regret wasting premium currency when you could have bought it with free Jade later.</p>
                <figure className="my-6 bg-stone-900 p-2 rounded-lg inline-block w-64">
                    <img src="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-hz4oq5yhw82g1.png?width=272&amp;format=png&amp;auto=webp&amp;s=bd669807cbeaae74c6a24ceb029d7eb9d8dbd7ce" alt="Dye slot expansion" className="mx-auto" />
                </figure>
                <p className="font-bold text-white mt-4">B. Hair Dyes (10 pastes per dye)</p>
                <figure className="my-6 bg-stone-900 p-2 rounded-lg inline-block w-32">
                    <img src="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-4lpbz0d1f62g1.png?width=121&format=png&auto=webp&s=4e9ac02b67c8727fab2f8f940cc29f8310c7a414" alt="Basic Hair Dye" className="mx-auto" />
                </figure>
                <p><strong className="text-white">1. Basic Hair Dye (Beige Pot - "Qingsi"):</strong></p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><p><strong className="text-white">Effect:</strong> Creates natural hair colors (Blacks, Browns, etc.).</p></li>
                    <li><p><strong className="text-white">How to Farm (Detailed Sources):</strong></p></li>
                </ul>
                <ol className="list-decimal pl-5 mt-2 space-y-2">
                    <li><p><strong className="text-white">Dihua Shop (Standard Gacha Banner Shop):</strong> Cost: 5 Dihua. Limit: 10 per month. (Best steady source).</p></li>
                    <li><p><strong className="text-white">NPC Shop (Zhao Feiyan's Stash):</strong> Cost: 25,000 Coins (Standard currency). Limit: 5 per month.</p></li>
                    <li><p><strong className="text-white">Limited Event Shops:</strong> Often available in event stores (Limit ~45).</p></li>
                    <li><p><strong className="text-white">General Store (Jianghu Treasures):</strong> Cost: 50 Pearls. (NOT RECOMMENDED, do not waste Pearls on this).</p></li>
                </ol>
                <figure className="my-6 bg-stone-900 p-2 rounded-lg inline-block w-32">
                    <img src="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-0rl7bsi9f62g1.png?width=118&format=png&auto=webp&s=4d21e224cf46773e05caa4f41a45bd19924651eb" alt="Premium Hair Dye" className="mx-auto" />
                </figure>
                <ul className="list-disc pl-5 space-y-2">
                    <li><p><strong className="text-white">2. Premium Hair Dye (Blue Pot - "Ninghua"):</strong></p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li><p><strong className="text-white">Effect:</strong> Required for <strong className="text-white">White/Silver hair</strong> or very bright unnatural colors.</p></li>
                            <li><p><strong className="text-white">Cost:</strong> 1 Dye Job = 10 Pastes.</p></li>
                            <li><p><strong className="text-white">Exchange Rate:</strong> 1 Gacha Token (Echo) = 5 Premium Hair Pastes. So, dyeing once costs <strong className="text-white">2 orb</strong>.</p></li>
                            <li><p><strong className="text-amber-400">⚠️ SMART SAVING TIP (Don't Buy Direct):</strong></p>
                                <ul className="list-disc pl-5 mt-1 space-y-1">
                                    <li><p><strong className="text-white">I do NOT recommend crafting this dye directly.</strong> It is too expensive (Costs 2 orb).</p></li>
                                    <li><p>Instead, <strong className="text-white">wait for Limited Paid Banners</strong>. The game frequently releases special hairstyles that come <strong className="text-white">pre-dyed</strong> in rare colors (e.g., Red, Gold, Platinum).</p></li>
                                    <li><p>These pre-dyed hairs usually cost only <strong className="text-white">1 orb</strong> to exchange.</p></li>
                                    <li><p><em>Verdict:</em> Waiting for the specific hair banner is <strong className="text-emerald-400">50% cheaper</strong> than buying the dye yourself!</p></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
                <p className="font-bold text-white mt-4">C. Important Mechanic: Gender Change Refund</p>
                <p>If you decide to change your character's gender later (using the item mentioned in Section 2):</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><p><strong className="text-white">The Rule:</strong> The game will <strong className="text-white">REFUND</strong> all the dyes you used on your previous gender's outfits.</p></li>
                    <li><p><strong className="text-white">The Catch:</strong> They are refunded as <strong className="text-white">Time-Limited Items</strong>.</p></li>
                    <li><p><strong className="text-white">The Strategy:</strong> Make sure you are ready to re-dye your new outfits immediately after changing gender so you don't waste the refunded materials!</p></li>
                </ul>
                <h1 className="text-2xl font-bold mt-8 mb-4 text-amber-500 border-b border-stone-700 pb-2">Extended Reading: Future Events &amp; Advanced CN Insights</h1>
                <p><em>(The following sections describe events and features that may not be available on the Global server yet. Please treat this as a "Sneak Peek" or a guide on what to save your resources for in the future.)</em></p>
                <h1 className="text-2xl font-bold mt-8 mb-4 text-amber-500 border-b border-stone-700 pb-2">6. Step-Up Spin (Spinning Wheel)</h1>
                <p><em>(Note: Prices calculated in "Pearls"/Cash currency)</em> This is a limited-time event that is usually cheaper than the main Paid Pool, but costs increase per layer.</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><p><strong className="text-white">Structure:</strong> It has <strong className="text-white">4 layers</strong>. You unlock the next layer by clearing the current one or getting lucky with the "Grand Prize" early.</p></li>
                    <li><p><strong className="text-white">Freebies:</strong> First spin is free. You can also swap 900 Jade for 18 spins.</p></li>
                    <li><p><strong className="text-white">Layer 1:</strong> Costs 10 Pearls/spin. (Max cost ~110 Pearls after freebies).</p></li>
                    <li><p><strong className="text-white">Layer 2:</strong> Costs 60 Pearls/spin. (Max cost ~3,600 Pearls).</p></li>
                    <li><p><strong className="text-white">Layer 3:</strong> Costs 120 Pearls/spin. (Max cost ~7,200 Pearls).</p></li>
                </ul>
                <p><strong className="text-white">COST ANALYSIS:</strong></p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><p><strong className="text-white">Worst Case (Hard Pity):</strong> If you have terrible luck and have to clear every item, Layers 1-3 will cost about <strong className="text-white">10,900 Pearls</strong> total.</p></li>
                    <li><p><strong className="text-white">Average Luck:</strong> Realistically, you usually unlock the next layer early without clearing the pot. Most players manage to finish Layer 3 with around <strong className="text-white">5,000 - 6,000 Pearls</strong>.</p></li>
                    <li><p><strong className="text-white">Layer 4 (Warning):</strong> Costs 160 Pearls/spin. Max cost is about <strong className="text-white">57,600 Pearls</strong>. This is extremely expensive.</p></li>
                    <li><p><strong className="text-white">The Strategy:</strong> Layer 4 usually rewards <strong className="text-white">White Hair</strong>. If you don't strictly need it, <strong className="text-white">STOP after Layer 3</strong>. You get all the outfits and animations for the best value.</p></li>
                    <li><p><strong className="text-white">Monthly Pass Tip:</strong> The Monthly Pass usually gives <strong className="text-white">300 Pearls</strong> instantly. I highly recommend <strong className="text-white">saving these Pearls specifically for this Roulette event</strong> rather than spending them on single pulls. Over a few months, this stash can cover a huge chunk of the event cost!</p></li>
                </ul>
                <h1 className="text-2xl font-bold mt-8 mb-4 text-amber-500 border-b border-stone-700 pb-2">7. Special Mini-Game: "Turtle Matching" (Potential Event)</h1>
                <p><em>(Disclaimer: This event appeared once on CN. It is not guaranteed to come to Global, but if it does, here is how it works.)</em></p>
                <p><strong className="text-white">The Rewards (Autumn/Golden Theme):</strong> This event pool features specific cosmetic items, including:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><p><strong className="text-white">Grand Prizes:</strong> A "Golden Wing" Back Accessory (2888 Points) and a "Golden Palace" Background Scene (1888 Points).</p></li>
                    <li><p><strong className="text-white">Accessories:</strong> Bamboo-themed earrings, face veils, headwear, and waist ornaments.</p></li>
                </ul>
                <p><strong className="text-white">How it Works:</strong></p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><p><strong className="text-white">The Game:</strong> It's a 3x3 grid game. You buy "Fortune Bags" to place turtles on the grid.</p></li>
                    <li><p><strong className="text-white">Cost:</strong> <strong className="text-white">10 Pearls</strong> per bag (draw).</p></li>
                    <li><p><strong className="text-white">Refund Mechanics:</strong></p>
                        <ul className="list-disc pl-5 mt-1 space-y-1">
                            <li><p><strong className="text-white">Pair Match:</strong> 2 identical turtles = Points + <strong className="text-white">1 Free Bag</strong>.</p></li>
                            <li><p><strong className="text-white">Line Match:</strong> 3 identical turtles in a line = More Points + <strong className="text-white">3 Free Bags</strong>.</p></li>
                            <li><p><strong className="text-white">All Unique:</strong> If all turtles are different = Max Points + <strong className="text-white">5 Free Bags</strong>.</p></li>
                        </ul>
                    </li>
                </ul>
                <p><strong className="text-white">Cost Analysis (Realistic Budget):</strong> Please be careful with your budget, as "clearing the shop" is expensive.</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><p><strong className="text-white">Cosmetics Only (Wings + Accessories):</strong> Some lucky players cleared this for ~3,000 Pearls, but realistically, you should budget <strong className="text-white">4,000 - 5,000 Pearls</strong> for average luck.</p></li>
                    <li><p><strong className="text-white">Full Clear (Including the Background Scene):</strong> The Background Scene is very expensive (1888 pts). If you want <em>everything</em>, expected cost is <strong className="text-white">6,000+ Pearls</strong>.</p></li>
                </ul>
                <p><strong className="text-amber-400">⚠️ PRO STRATEGY (CRITICAL):</strong> The "Fortune Bags" have a small chance to <strong className="text-white">drop the cosmetic rewards directly</strong>.</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><p><strong className="text-white">DO NOT</strong> spend your points immediately in the event shop.</p></li>
                    <li><p><strong className="text-white">Finish all your draws first.</strong> You might get the expensive Golden Wing or other accessories for free from the bags.</p></li>
                    <li><p><strong className="text-white">Only use points at the very end</strong> to exchange for the specific items you are missing. If you exchange early, you might pull a duplicate later and waste money!</p></li>
                </ul>
                <h1 className="text-2xl font-bold mt-8 mb-4 text-amber-500 border-b border-stone-700 pb-2">Conclusion: Managing Your Expectations</h1>
                <p>I wrote this guide not just to explain the mechanics, but to help you <strong className="text-white">manage your expectations</strong>.</p>
                <p>My goal is to show you clearly what the "Spending Ceiling" looks like for whales and what the "Grind Reality" looks like for F2P players.</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><p>For Spenders: I hope this helps you see where your money actually goes and where to stop.</p></li>
                    <li><p>For F2P: I hope this helps you understand the limits of free play so you don't feel frustrated later.</p></li>
                </ul>
                <p>Gaming is an investment of both time and money. By understanding the economy early, you can decide right now if this game fits your budget and lifestyle, rather than sinking hundreds of hours into it only to be disappointed later.</p>
                <p>Whether you decide to grind hard, play casually, or realize this game isn't for you—I just hope this transparency helps you make the right choice for yourself.</p>
                <p>Thanks for reading, and have fun in the Jianghu!“”</p>
            </div>
        );
    }
    
    const currentGuide = GUIDES.find(g => g.id === activeGuide && g.url);
    if (!currentGuide) return renderNoGuideSelected();


    return (
        <div className="w-full h-full flex flex-col bg-white">
            <div className="bg-stone-900 p-2 px-4 flex items-center justify-between border-b border-stone-800 shrink-0">
                <span className="text-stone-400 text-xs truncate max-w-[60%] flex items-center gap-2">
                    <ExternalLink size={12} />
                    External Content: {currentGuide?.title}
                </span>
                <a 
                    href={currentGuide?.url || '#'} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-1 text-amber-500 hover:text-amber-400 text-xs font-bold px-3 py-1.5 bg-stone-800 rounded hover:bg-stone-700 transition-colors"
                >
                    Open in Browser <ExternalLink size={12} />
                </a>
            </div>
            
            <div className="flex-1 relative w-full h-full bg-stone-100">
                {/* Fallback overlay (visible if iframe loads transparently or fails) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-stone-500 pointer-events-none">
                    <p className="mb-2 font-semibold">Loading content...</p>
                    <p className="text-xs max-w-md">
                        If the page remains blank or refuses to connect, the host (Reddit) likely blocked embedding. 
                        Please use the "Open in Browser" button above.
                    </p>
                </div>

                <iframe 
                    src={currentGuide?.url || ''} 
                    className="w-full h-full border-none relative z-10"
                    title={currentGuide?.title}
                    sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                />
            </div>
        </div>
    );
  };
    
    const renderNoGuideSelected = () => {
        const guide = GUIDES.find(g => g.id === activeGuide);
        switch (guide?.id) {
            case 'PART2': return renderPart2();
            case 'PART3': return renderPart3();
            case 'PART4': return renderPart4();
            default: return <div>Error: Guide not found</div>;
        }
    }

    const renderPart2 = () => (
        <div className="max-w-5xl mx-auto w-full p-4 lg:p-8 space-y-6 animate-in fade-in duration-300 pb-24 text-stone-300">
            <h1 className="text-2xl font-bold text-amber-500">[NAVIGATION] MISSED PART 1?</h1>
            <p>This is <strong>Part 2</strong> of the guide, focusing on Gameplay Loops, UI, and Crafting.</p>
            <p>If you want to know about <strong>Monetization, Gacha Economy, and Spending Tips</strong>, please check Part 1 below:</p>
            <div className="mt-4 p-4 bg-stone-800/50 rounded-lg border border-stone-700">{renderNavButtons()}</div>
            <hr className="border-stone-700" />
            <h1 className="text-2xl font-bold pt-4 text-white">IN THIS POST (PART 2):</h1>
            <ul className="list-disc pl-5 space-y-1">
                <li>Seasonal Resets: Why P2W is impossible (Detailed Breakdown).</li>
                <li>The "No-Grind" Routine: How to finish weekly tasks in 30 mins.</li>
                <li>UI Translation: Full breakdown of the menus based on CN experience.</li>
            </ul>
            <h1 className="text-2xl font-bold mt-8 mb-4 text-amber-500 border-b border-stone-700 pb-2">1. Seasonal Resets: The "No P2W" Structure &amp; Casual Friendliness</h1>
            <p>WWM operates on a Seasonal Model (similar to ARPGs like Diablo or Path of Exile). This is the core reason why Pay-to-Win does not exist for combat power here: Gear must be earned through gameplay.</p>
            <ul className="list-disc pl-5 my-4"><li>Duration: Approx. 3 months per season.</li></ul>
            <h2 className="text-xl font-bold text-white">A. The "Soft Reset" Rules</h2>
            <p>When a new season starts, the Level Cap increases. Here is exactly how your power is affected:</p>
            <div className="space-y-4 my-4">
                <div className="bg-stone-800/50 p-4 rounded-lg border border-emerald-800">
                    <strong className="text-emerald-400 block mb-2">✅ 1. Permanent Progression (What You KEEP):</strong>
                    <ul className="list-disc pl-5 space-y-1">
                        <li><strong>Skills &amp; Techniques:</strong> Your Martial Arts and Inner Skills levels are fully retained.</li>
                        <li><strong>Exploration &amp; Cosmetics:</strong> Map completion percentages and all skins/outfits do NOT reset.</li>
                    </ul>
                </div>
                <div className="bg-stone-800/50 p-4 rounded-lg border border-blue-800">
                    <strong className="text-blue-400 block mb-2">🆕 2. Seasonal Systems (Where Everyone Starts at 0):</strong>
                    <ul className="list-disc pl-5 space-y-1">
                        <li><strong>Seasonal Talent Pool:</strong> Each season introduces a new, separate Talent system. Your old "Base Talents" stay, but the new seasonal tree starts fresh.</li>
                        <li><strong>Boss Talents:</strong> New bosses mean new specific Boss Talents to unlock.</li>
                        <li><strong>Rankings:</strong> Leaderboards are wiped clean.</li>
                    </ul>
                </div>
                <div className="bg-stone-800/50 p-4 rounded-lg border border-red-800">
                    <strong className="text-red-400 block mb-2">⚔️ 3. Equipment (The Great Equalizer):</strong>
                    <ul className="list-disc pl-5 space-y-1">
                        <li><strong>The Reset:</strong> While you keep your skills, your old equipment becomes outdated due to the Level Cap increase.</li>
                        <li><strong>The Grind:</strong> To compete, <strong>EVERYONE</strong> (F2P and Whales alike) must farm new gear for the new level cap.</li>
                        <li><strong>Crucial Fact:</strong> High-end equipment is obtained strictly through gameplay (Dungeons/Raids) and is <strong>NOT</strong> sold in the Cash Shop. You cannot swipe a credit card to generate the best gear; you have to play the game just like everyone else.</li>
                    </ul>
                </div>
            </div>
            <h2 className="text-xl font-bold text-white mt-8">B. The "Catch-Up" Mechanism (Season Shop)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <img src="https://preview.redd.it/guide-part-2-how-to-play-efficiently-ui-breakdown-daily-v0-q8v7lwp3gf2g1.png?width=742&format=png&auto=webp&s=4fbfe17d210fc29feed771ccbfbd88fe78f0775f" alt="Season Shop" className="rounded shadow border border-stone-700 w-full" />
                <img src="https://preview.redd.it/guide-part-2-how-to-play-efficiently-ui-breakdown-daily-v0-curf6ml5gf2g1.png?width=1080&crop=smart&auto=webp&s=8f868013bfbfc282e4bb8f59fc74d6334e632f97" alt="Season Shop UI" className="rounded shadow border border-stone-700 w-full object-cover" />
            </div>
            <ul className="list-disc pl-5 space-y-2">
                <li><strong>The Fear:</strong> "If I start late, will I be behind forever?"</li>
                <li><strong>The Solution:</strong> The Catch-up Shop (CN: "No-Grind Shop").</li>
                <li><strong>How it works:</strong> If you fall behind, you can buy essential upgrade materials cheaply using common currency.</li>
                <li><strong>Summary:</strong> Because gear power effectively resets every 90 days, new players never fall permanently behind veterans. The devs want to ensure that even if you take a break, you can jump back in next season without penalty.</li>
            </ul>
            <h1 className="text-2xl font-bold mt-8 mb-4 text-amber-500 border-b border-stone-700 pb-2">2. NO DAILY QUESTS — Only WEEKLY QUESTS</h1>
            <p>Great News: This game has NO DAILY QUESTS. Instead, it has a system literally called "No-Grind" (BuGan). In the Global UI, this is typically found under the Season tab.</p>
            <ul className="list-disc pl-5 my-4">
                <li>The Rule: You have a Weekly Cap of 22,000 Points.</li>
                <li>Flexibility: You can fill this bar whenever you want. Grind it all on Monday, or spread it out over the weekend. Once you hit 22k, you are done for the week!</li>
            </ul>
            <img src="https://preview.redd.it/guide-part-2-how-to-play-efficiently-ui-breakdown-daily-v0-164g76xjhf2g1.png?width=1080&crop=smart&auto=webp&s=e2f641c5fe27d8a940927f9873fe730a133fd8ad" alt="Weekly Progress Bar" className="rounded shadow border border-stone-700 w-full my-4" />
            <h2 className="text-xl font-bold text-white">HOW TO FILL THE BAR (2 METHODS)</h2>
            <p className="mt-2"><strong className="text-white">METHOD A: THE NATURAL WAY (JUST PLAY)</strong> For most players, the bar fills up automatically as you:</p>
            <ul className="list-disc pl-5 my-2">
                <li>Open Chests &amp; Explore the Map.</li>
                <li>Clear Dungeons.</li>
                <li>Complete Quests.</li>
            </ul>
            <p><strong className="text-white">METHOD B: THE "SPEEDRUN" STRATEGY (~30 MINS)</strong> Busy week? Here are the "Cheat Codes" to max out your limit in under 30 minutes using <strong>Leisure &amp; Profession</strong> mechanics:</p>
            <ol className="list-decimal pl-5 my-2 space-y-2">
                <li><strong>SOCIAL MINIGAMES (FASTEST):</strong> Play Mahjong or <em>Yezi Xi</em> (Card Game) with players/NPCs, or join a Jam Session (Music). These give massive points instantly.</li>
                <li><strong>THE "AFK" CHECKLIST:</strong>
                    <ul className="list-disc pl-5 mt-1">
                        <li><strong>Meditate:</strong> Go to the "Carefree Time" (<em>Wangyou</em>) spot and just AFK for 20 mins.</li>
                        <li><strong>Emotes:</strong> Spam "Dual Interactions" (High-five, hug) with a friend 20 times.</li>
                        <li><strong>Cargo:</strong> Do the "Merchant Cargo" mission 3 times.</li>
                        <li><strong>Burn Stamina:</strong> Quickly craft items to spend 200 Vitality.</li>
                    </ul>
                </li>
            </ol>
            <p className="text-sm italic text-stone-400"><strong>Note:</strong> The <strong>Weekly Discounted Gacha Ticket</strong> (Price: 200 Jade) can only be purchased <em>after</em> you fill this progress bar. The Season Shop also sells critical upgrade materials using these 22,000 points as currency—<strong>buy them all every week!</strong></p>
            <img src="https://preview.redd.it/guide-part-2-how-to-play-efficiently-ui-breakdown-daily-v0-h3ivci6uif2g1.png?width=615&format=png&auto=webp&s=484598c662c9c258a18c449d2685157a7807b94f" alt="Weekly Gacha Ticket" className="rounded shadow border border-stone-700 my-4 max-w-md mx-auto" />
            <h1 className="text-2xl font-bold mt-8 mb-4 text-amber-500 border-b border-stone-700 pb-2">3. Game UI Disassembly (Where to Click)</h1>
            <div className="space-y-4">
                <p><strong>1. Bags (Inventory)</strong></p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Recycle: Use the "Recycle/Dismantle" button often.</li>
                    <li>Pro Tip: In the recycle menu, click the Gear Icon to "Auto-Mark" low-quality gear. Saves hours of clicking.</li>
                    <li>Warning: UI naming can be confusing. "Develop" / "Upgrade" menus for gear are often accessed directly from the Inventory item details.</li>
                </ul>
                <p><strong>2. Develop (Martial Arts)</strong></p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Builds: Manage your Skills and Xinfa (Inner Skills) here.</li>
                    <li>Loadouts: Use "Scheme Management" to save builds (e.g., PvE vs. Exploration).</li>
                    <li>Exchange: Dismantle duplicate Skill Books to buy the specific S-Tier books you need.</li>
                    <li>Exploration Stats: Shows stats like Alcohol Tolerance or Elegance. Raise these by interacting with the world (Drinking, Petting Cats), not fighting.</li>
                </ul>
                <img src="https://preview.redd.it/guide-part-2-how-to-play-efficiently-ui-breakdown-daily-v0-99ty7khujf2g1.png?width=535&format=png&auto=webp&s=8236d95f78474538a6cd7526350d7adb2dfd0106" alt="Exploration Stats" className="rounded shadow border border-stone-700 my-4 max-w-sm mx-auto" />
                <p><strong>3. Appearance</strong></p>
                <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Wardrobe:</strong> Equip Outfits, Weapon Skins, and Mounts.</li>
                    <li><strong>Customize:</strong> Change your "Victory Animation" here.</li>
                    <li><strong>Presets:</strong> Import character faces from other players ("Copying Homework").</li>
                    <li><strong>Hide Weapon:</strong> Toggle this if your weapon clips through your cape.</li>
                </ul>
                <p><strong>4. Profession:</strong> Check your Identity level (Doctor, Scribe, Architect, etc.).</p>
                <p><strong>5. SHOP:</strong> Direct purchase cosmetics (Outfits, Mounts) and <strong>Consumables</strong>. This includes <strong>Gender-Swap</strong> items and appearance reset tokens.</p>
                <p><strong>6. Events:</strong> Check here for Limited-time login rewards and Seasonal events.</p>
                <p><strong>7. Draw (Gacha):</strong> Standard and Limited Character/Weapon Banners.</p>
                <p><strong>8. Battle Pass:</strong> Includes both the Free tier and Paid tier rewards.</p>
                <p><strong>9. Journal</strong></p>
                <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Exploration Progress:</strong> Tracks map completion %.</li>
                    <li><strong>Rewards:</strong> Click here to claim free Jade when you reach milestones.</li>
                </ul>
                <p><strong>10. Quest:</strong> Tracks Main Story and Side Quests. <strong>Note:</strong> Check your "Quest Items" bag often; reading letters/scrolls often unlocks new lore entries.</p>
                <p><strong>11. Compendium (The "Free Jade Bank"):</strong> Collects all lore, items, and discoveries.</p>
                <ul className="list-disc pl-5"><li><strong>Golden Rule:</strong> If you see a <strong>Red Dot</strong> here, <strong>CLICK IT</strong>. It usually gives you free Jade/Currency.</li></ul>
                <p><strong>12. Wandering Paths:</strong> Matchmaking hub for 5-man/10-man Dungeons and PvP modes.</p>
                <p><strong>13. Season (CRITICAL)</strong></p>
                <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Weekly Shop:</strong> The most important shop for F2P.</li>
                    <li><strong>Must Buy:</strong> Use activity points to buy <strong>Gold Gacha Pulls</strong>, Gold Gear Boxes, and Upgrade Materials. Clear this shop every week!</li>
                </ul>
                <p><strong>14. Sects:</strong> Manage your Sect reputation, donate coins, and buy your Sect Uniform here.</p>
                <p><strong>15. Social:</strong> Friends list and Affinity (Partner/Master-Apprentice) management.</p>
                <p><strong>16. Guild</strong></p>
                <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Dividends:</strong> Click here every <strong>Monday</strong> to claim your Weekly Jade Dividend (Salary).</li>
                    <li><strong>Cargo:</strong> Trade open-world materials here.</li>
                </ul>
            </div>
            <h1 className="text-2xl font-bold mt-8 mb-4 text-amber-500 border-b border-stone-700 pb-2">4. The Weekly Routine Cheatsheet</h1>
            <p>(Based on CN End-game loops. NOTE: These tasks are NOT mandatory! You can play at your own pace. Only follow this routine if you want to maximize efficiency and stay at the absolute forefront of progression.)</p>
            <p className="mt-4"><strong className="text-white">[SECTION A] THE "GET RICH" ROUTE (Commercial currency)</strong></p>
            <button onClick={() => setActiveGuide('PART4')} className="text-amber-500 hover:underline font-bold">[CLICK HERE FOR PART 4: The Ultimate Merchant Trading Guide]</button>
            <p className="text-sm italic text-stone-400 mt-2">NOTE: The reason for earning this money is that you can then rent out a house; it cannot be purchased, and you will have to pay rent every month. Of course, if you feel you don't need a house, you can skip this. If you want to live in a luxury house, you need 10,000 business currency, and that's the monthly rent, which you have to pay every month. You can rent a house by going to Feng's Tradehall. If you can't find the option to rent a house, it's not available in the current version, but it will be in the future. Besides, this money can also be used for gambling (like playing mahjong).</p>
            <p className="mt-4"><strong className="text-white">[SECTION B] SHOPPING LIST</strong> <em>(See attached images for visual reference)</em></p>
            <a href="https://files.catbox.moe/24tvzo.jpg" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline block">https://files.catbox.moe/24tvzo.jpg</a>
            <p className="text-sm italic text-stone-400">These are the upgrade materials for your weapons and Mystic Skills. You can choose not to gather them and simply buy them from the season shop without grinding. However, if you want to stay in the top tier and gain an advantage over others in PvP and PvE (obtaining more materials and reaching max level earlier), you'll need to spend time gathering them. This is for those who want to surpass other players in the first day or two after the update.</p>
            <a href="https://files.catbox.moe/3cvd32.jpg" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline block mt-2">https://files.catbox.moe/3cvd32.jpg</a>
            <p className="text-sm italic text-stone-400">This is also a material used for upgrading and breakthroughs, which can be purchased directly from the store. If you're short on in-game currency, then hold off on buying anything. This is primarily for stockpiling upgrade materials to make leveling up and breakthroughs smoother and keep you in the top tier of players. If you don't care about these things, then just rely on the materials sold to you by the season shop.</p>
            <hr className="border-stone-700 my-6" />
            <h1 className="text-2xl font-bold mt-8 mb-4 text-amber-500 border-b border-stone-700 pb-2">⚠️ IMPORTANT NOTE: Respec / Transfer Features</h1>
            <p>Please be aware: The following feature (Level Swap) was added in a later update on the CN server. It is very likely the Global Launch version will not have this immediately. Please treat this as a preview of a future Quality of Life update!</p>
            <h2 className="text-xl font-bold text-white mt-4">BUILD FREEDOM: THE "NO-WASTE" SYSTEM</h2>
            <p>Coming from other MMOs, players often have "Build Anxiety." In WWM, this is solved by:</p>
            <p className="mt-2"><strong>1. Inner Skill Transfer (Future Feature)</strong></p>
            <ul className="list-disc pl-5 space-y-1">
                <li>The Fix: You can directly swap the XP/Level of two skills.</li>
                <li>Example: Swap your Tier 4 Sword Skill with your Tier 1 Fan Skill. The progress instantly transfers. No wasted XP.</li>
            </ul>
            <p className="mt-2"><strong>2. 100% Resource Refund</strong></p>
            <ul className="list-disc pl-5 space-y-1">
                <li>Weapon Cultivation: Resetting a weapon typically refunds 100% of the materials used.</li>
                <li>Weapon = Class: You are not locked into a class. Switching from Tank (Spear) to DPS (Sword) is just a gear swap.</li>
            </ul>
        </div>
    );
    
    const renderPart3 = () => (
        <div className="max-w-5xl mx-auto w-full p-4 lg:p-8 space-y-6 animate-in fade-in duration-300 pb-24 text-stone-300">
            <div className="bg-stone-800/30 p-4 rounded border border-stone-700/50">
                <h1 className="text-2xl font-bold mb-4 text-stone-200">⚠️ NAVIGATION INDEX</h1>
                {renderNavButtons()}
            </div>
            <div className="bg-red-950/30 border border-red-800 p-6 rounded text-center">
                <h1 className="text-3xl font-bold text-red-500 mb-4 animate-pulse">⚠️ STOP! READ THIS FIRST! ⚠️</h1>
                <div className="text-left max-w-2xl mx-auto space-y-4">
                    <p>Before you touch this system, understand three things:</p>
                    <ol className="list-decimal pl-5 space-y-2 font-bold text-stone-200">
                        <li>ZERO COMBAT POWER: Reforging weapon skins gives you 0 Stats. It is 100% cosmetic. It just makes your sword look cool and glow.</li>
                        <li>WHALE TERRITORY: This is the most expensive RNG system in the game.</li>
                        <li>THE DANGER: If you spam clicks without a brain, you will lose hundreds of dollars. If you use my method, you can save 70% of the cost.</li>
                    </ol>
                    <div className="mt-6 bg-stone-900/50 p-4 rounded text-sm font-normal">
                        <strong className="block mb-2 text-white">Target Audience for this Guide:</strong>
                        <ul className="list-none space-y-1">
                            <li>❌ <span className="text-stone-400">F2P Players:</span> Don't try it.</li>
                            <li>✅ <span className="text-emerald-400">Low/Mid Spenders:</span> Unlock the 5 slots and STOP. Do not chase Gold stats. OR, Aim for "3-Gold" or "4-Gold" stats.</li>
                            <li>🐋 <span className="text-amber-400">Whales:</span> Go for "5-Gold" (But read this to save money).</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h1 className="text-2xl font-bold mt-8 mb-4 text-amber-500 border-b border-stone-700 pb-2">🎒 PART 1: THE "SECRET" MECHANIC</h1>
            <p>The game doesn't tell you this, but the Reforging system is NOT completely random. It uses a system we call "Pseudo-RNG".</p>
            <div className="bg-stone-800/50 p-4 rounded mt-4">
                <h2 className="font-bold text-white text-lg">🧠 The "35-Roll" Rule</h2>
                <p>Imagine a hidden counter on EACH of the 5 slots on your weapon.</p>
                <ul className="list-disc pl-5 mt-2 space-y-2 text-sm">
                    <li>On average, a Gold (Legendary) stat appears on a specific slot once every <strong>30 to 40 rolls</strong>.</li>
                    <li>Let's say the average is 35.</li>
                    <li>If you roll Slot #1 30 times and get nothing, the "Gold" is very likely to appear in the next few clicks.</li>
                </ul>
                <p className="mt-2 text-sm italic">This is your only advantage. If you don't count your rolls, you are gambling. If you count your rolls, you are strategizing.</p>
            </div>
            <h1 className="text-2xl font-bold mt-8 mb-4 text-amber-500 border-b border-stone-700 pb-2">📝 PART 2: PREPARATION</h1>
            <h2 className="text-xl font-semibold text-white">1. Get a Notebook 📓</h2>
            <p>I am serious. Get a piece of paper or open Excel. You need to track the "Fail Count" for each slot position (1, 2, 3, 4, 5) separately.</p>
            <div className="bg-stone-900/50 p-3 rounded font-mono text-xs my-2 inline-block"> Slot 1 Fails: 12<br /> Slot 2 Fails: 30 (HOT! 🔥)<br /> Slot 3 Fails: 5 </div>
            <h2 className="text-xl font-semibold text-white mt-4">2. Understand "Schemes" (The Money Saver)</h2>
            <p>The game lets you save different "Schemes" (Loadouts) for the same weapon.</p>
            <ul className="list-disc pl-5 my-2">
                <li><strong>Scheme A:</strong> Your Main Scheme (The one with good stats you want to keep).</li>
                <li><strong>Scheme B:</strong> The "Trash" Scheme (An empty scheme we use to burn bad luck).</li>
            </ul>
            <p className="font-bold text-emerald-400">💰 THE COST DIFFERENCE:</p>
            <ul className="list-disc pl-5 my-1 text-sm">
                <li>Rolling on Scheme B (Nothing locked): Costs <strong>1 Stone</strong> per roll.</li>
                <li>Rolling on Scheme A (With 2 stats Locked): Costs <strong>5+ Stones</strong> per roll.</li>
            </ul>
            <p className="mt-2 text-sm italic">See the logic? We want to burn the "bad rolls" on the cheap Scheme B, and only switch to Scheme A when the Gold stat is guaranteed to drop!</p>
            <h1 className="text-2xl font-bold mt-8 mb-4 text-amber-500 border-b border-stone-700 pb-2">🛠️ PART 3: THE STRATEGY (BATTLE EXAMPLES)</h1>
            <p>Let's simulate a real situation so even a monkey can understand this. 🐒</p>
            <h2 className="text-xl font-bold text-white mt-4">Goal: Getting 3 Golds (The Smart Choice)</h2>
            <div className="space-y-4 my-4">
                <p><strong>Step 1: The Setup</strong><br />You roll normally until you get 2 Gold Stats on your weapon. Let's say Slot 1 and Slot 2 are Gold.</p>
                <ul className="list-disc pl-5">
                    <li>Problem: You want a 3rd Gold on Slot 3.</li>
                    <li>Bad Player Action: Locks Slot 1 &amp; 2 immediately and spams roll.</li>
                    <li className="text-red-400">Result: Each roll costs a fortune. It takes 35 rolls to get the next Gold. You go broke. 💀</li>
                </ul>
                <p><strong>Step 2: Check the Data</strong><br />Look at your notebook. When was the last time Slot 3 saw a Gold stat?</p>
                <ul className="list-disc pl-5">
                    <li>If it just got a Gold 5 rolls ago... DO NOT LOCK. The next Gold is far away.</li>
                    <li>You need to build up "Fails" (Pity) for Slot 3.</li>
                </ul>
                <p><strong>Step 3: The "Trash Swap" Trick (The Secret Sauce)</strong></p>
                <ol className="list-decimal pl-5 space-y-1">
                    <li>Save your good stats (Slot 1 &amp; 2 Gold) in Scheme 1.</li>
                    <li>Switch to Scheme 2 (The Trash Scheme).</li>
                    <li>Start rolling on the Trash Scheme. We don't care about the result. We are just increasing the "Fail Count". Keep marking your notebook for Slot 3. 10 fails... 20 fails... 30 fails...</li>
                    <li>STOP! 🛑</li>
                    <li>Once Slot 3 has failed about 30-35 times on the Trash Scheme, it is now "Prime/Due" for a Gold.</li>
                </ol>
                <p><strong>Step 4: The Snipe</strong></p>
                <ol className="list-decimal pl-5 space-y-1">
                    <li>Switch BACK to Scheme 1 (Your good one).</li>
                    <li>LOCK Slot 1 &amp; 2 (The Golds you saved).</li>
                    <li>Roll.</li>
                    <li>Because Slot 3 is "Prime" (from your work on the trash scheme), the Gold stat should appear within 1-5 rolls.</li>
                    <li>Congratulations! You got a 3-Gold weapon for a fraction of the price. 🎉</li>
                </ol>
            </div>
            <h1 className="text-2xl font-bold mt-8 mb-4 text-amber-500 border-b border-stone-700 pb-2">📊 PART 4: SUMMARY CHECKLIST</h1>
            <ol className="list-decimal pl-5 space-y-2 font-medium">
                <li>Unlock all 5 Slots first. (Costs ~120 Stones).</li>
                <li>Never Lock immediately after getting a Gold. The "Pity" resets, so the next rolls are wasted.</li>
                <li>Use Trash Schemes to build up "Fail Stacks" cheaply.</li>
                <li>Only Lock and Roll on your main scheme when your notebook says a slot is at 30+ Fails.</li>
                <li>Stop at 3 or 4 Golds. 5-Gold requires perfect alignment of all 5 slots and is extremely expensive.</li>
            </ol>
            <h1 className="text-2xl font-bold mt-8 mb-4 text-amber-500 border-b border-stone-700 pb-2">❓ FREQUENTLY ASKED QUESTIONS (FAQ)</h1>
            <div className="space-y-4">
                <p><strong>Q: Do specific colors (Red/Blue/Green) matter?</strong><br/>A: For pure visuals? No. Just aim for the "Gold" rarity icon. The specific stat type doesn't change the glow, only the rarity does.</p>
                <p><strong>Q: I rolled 40 times and no Gold! You lied!</strong><br/>A: It's "Pseudo-RNG", not "Hard Pity". It's an average. Sometimes it comes at 20, sometimes at 50. But 35 is the mathematical sweet spot to start trying.</p>
                <p><strong>Q: Can I sell this weapon later?</strong><br/>A: Yes, it works on the Chinese server, but you must verify on the global server or seek help from other players.</p>
                <p><strong>Q: What happens if I get a Gold on the "Trash Scheme"?</strong><br/>A: Laugh and cry. 😂 It happens. It means you "wasted" your luck on the trash scheme. The counter resets to 0. Start counting again.</p>
            </div>
            <h1 className="text-2xl font-bold mt-8 mb-4 text-amber-500 border-b border-stone-700 pb-2">🖼️ VISUAL GALLERY</h1>
            <p>For players asking "Is it worth it?", here is what the effects actually look like. (Sourced from CN community):</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 my-4">
                {[
                    { url: "https://files.catbox.moe/59mjns.png", label: "Effect Reference 1" },
                    { url: "https://files.catbox.moe/ogzzr6.png", label: "Effect Reference 2" },
                    { url: "https://files.catbox.moe/vc4zyo.png", label: "Effect Reference 3" },
                    { url: "https://files.catbox.moe/l9pykk.png", label: "Effect Reference 4" },
                    { url: "https://files.catbox.moe/bsqkjf.png", label: "Effect Reference 5" },
                ].map((item) => (
                    <a key={item.url} href={item.url} target="_blank" rel="noopener noreferrer" className="block relative group overflow-hidden rounded border border-stone-700">
                        <img src={item.url} className="w-full h-32 object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt={item.label} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-2">
                             <span className="text-white text-xs font-bold drop-shadow-md">{item.label}</span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
    
    const renderPart4 = () => (
        <div className="max-w-5xl mx-auto w-full p-4 lg:p-8 space-y-6 animate-in fade-in duration-300 pb-24 text-stone-300">
            <div className="bg-stone-800/30 p-4 rounded border border-stone-700/50">
                <h1 className="text-2xl font-bold mb-4 text-stone-200">⚠️ NAVIGATION INDEX</h1>
                {renderNavButtons()}
                <p className="text-stone-500 mt-4 border-t border-stone-800 pt-2 text-xs italic">
                    This article is based on CN experience. If there are any changes globally, please refer to the current server for the most up-to-date information.
                </p>
            </div>
            <div className="bg-stone-800/50 p-6 rounded shadow-lg">
                 <h1 className="text-2xl font-bold text-amber-500">The Ultimate Merchant Trading Guide</h1>
                 <p className="mt-2 text-sm">How to Make Serious Money</p>
            </div>
            <p><em><strong>NOTE: The reason for earning this money is that you can then rent out a house; it cannot be purchased, and you will have to pay rent every month. Of course, if you feel you don't need a house, you can skip this. If you want to live in a luxury house, you need 10,000 business currency, and that's the monthly rent, which you have to pay every month, or your house will be repossessed. (There are three levels of housing: 100/month, 1000/month, and 10000/month. If you want to live in a luxury house, you'll have to work hard.) You can rent a house by going to Feng's Tradehall. If you can't find the option to rent a house, it's not available in the current version, but it will be in the future. Besides, this money can also be used for gambling (like playing mahjong). In addition to offering rental properties, Feng's Tradehall also sells furniture and decorative items, all of which must be paid for in commercial currency.（(You can also completely ignore the system, since you can build your own house.)）</strong></em></p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 my-4">
                <figure>
                    <img src="https://preview.redd.it/guide-part-4-where-winds-meet-the-ultimate-merchant-trading-v0-mdhgx0sm3l2g1.jpg?width=1080&format=pjpg&auto=webp&s=8ef4259300fca44a36f7e88cb4a1b39670c2ce95" className="rounded border border-stone-700" alt="Kaifeng luxury mansion 1"/>
                    <figcaption className="text-xs text-stone-500 text-center mt-1">Kaifeng luxury mansion</figcaption>
                </figure>
                <figure>
                    <img src="https://preview.redd.it/guide-part-4-where-winds-meet-the-ultimate-merchant-trading-v0-v0i6ap0v3l2g1.jpg?width=1080&format=pjpg&auto=webp&s=cf081b816119e999755db3e9910c44662233c2e6" className="rounded border border-stone-700" alt="Kaifeng luxury mansion 2"/>
                    <figcaption className="text-xs text-stone-500 text-center mt-1">Kaifeng luxury mansion</figcaption>
                </figure>
                <figure>
                    <img src="https://preview.redd.it/guide-part-4-where-winds-meet-the-ultimate-merchant-trading-v0-3dxwb3a04l2g1.jpg?width=1080&format=pjpg&auto=webp&s=21342bbce533bf60721baf20850a24213546dc9f" className="rounded border border-stone-700" alt="Kaifeng luxury mansion 3"/>
                    <figcaption className="text-xs text-stone-500 text-center mt-1">Kaifeng luxury mansion</figcaption>
                </figure>
            </div>
            <p>Merchant Runs are one of the most important ways to earn Commerce Coins in the game. However, it is not just about buying low and selling high. If you do not prepare your inventory space first, you will miss out on massive profits. Follow this step-by-step guide to maximize your earnings.</p>
            <h1 className="text-2xl font-bold mt-8 mb-4 text-amber-500 border-b border-stone-700 pb-2">Step 1: Preparation (Max Out Your Inventory)</h1>
            <p><strong>➡️➡️➡️➡️➡️➡️First, go here.</strong></p>
            <div className="flex flex-col md:flex-row gap-4 overflow-x-auto my-4">
                 <img src="https://preview.redd.it/guide-part-4-where-winds-meet-the-ultimate-merchant-trading-v0-x5t3prfgx33g1.png?width=1080&crop=smart&auto=webp&s=b170dc490b5117c274fec35c169814550de49b7a" className="max-h-96 rounded shadow border border-stone-700" />
                 <img src="https://preview.redd.it/guide-part-4-where-winds-meet-the-ultimate-merchant-trading-v0-qsq6opeeuk2g1.png?width=1022&format=png&auto=webp&s=48f38053f906afbad67ca920dc7d29fe0b89657b" className="max-h-96 rounded shadow border border-stone-700" />
            </div>
            <p>The default inventory space is not enough. Before buying any goods, you must increase your merchant inventory to 100 slots.</p>
            <div className="space-y-4 my-4">
                <div className="bg-stone-800/50 p-4 rounded-lg">
                    <strong className="text-white">Rent Storage at Fengs Tradehall</strong>
                    <ul className="list-disc pl-5 text-sm mt-1">
                        <li>Find the NPC Feng Cheng (Owner of Fengs Tradehall).</li>
                        <li>Talk to him and select House Rental.</li>
                        <li>Scroll down to the bottom and rent the option that costs 10,000 Commerce Coins.</li>
                    </ul>
                    <p className="text-xs italic text-stone-400 mt-2">Why? The inventory slots from cheaper houses do not stack. Only the most expensive option gives you +60 Slots and lasts for one month. Do not waste money on the cheaper options.</p>
                </div>
                <div className="bg-stone-800/50 p-4 rounded-lg">
                    <strong className="text-white">Upgrade Profession Skills</strong>
                    <ul className="list-disc pl-5 text-sm mt-1">
                        <li>Open your Profession (Guild) menu.</li>
                        <li>Level up the skill "Trade Office Inventory" to Level 6. This grants you +20 Slots.</li>
                        <li>In the same Profession menu, upgrade these two skills to the maximum level: <strong>Sales Bonus</strong> and <strong>Tax Reduction</strong>.</li>
                    </ul>
                </div>
            </div>
            <p>Total Inventory Calculation: Initial 20 slots + Rental 60 slots + Skill 20 slots = <strong>100 Slots Total</strong>.</p>
            <h1 className="text-2xl font-bold mt-8 mb-4 text-amber-500 border-b border-stone-700 pb-2">Step 2: Understanding Market Mechanics</h1>
            <p>Go to the Trade Office and talk to the NPC Zhang Qiyue.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <img src="https://preview.redd.it/guide-part-4-where-winds-meet-the-ultimate-merchant-trading-v0-3nrgj15guk2g1.png?width=1080&crop=smart&auto=webp&s=ad95b65771f28373479d97719e6e8565b6cc2eec" className="rounded shadow w-full" />
                <img src="https://preview.redd.it/guide-part-4-where-winds-meet-the-ultimate-merchant-trading-v0-7jvca5sfuk2g1.png?width=862&format=png&auto=webp&s=7cb9b070ab71cc3a6726f239b44d79c2ae82ccbb" className="rounded shadow w-full" />
            </div>
            <p><strong>Types of Goods:</strong></p>
            <ul className="list-disc pl-5 space-y-2">
                <li><strong>Local Fluctuation:</strong> The price changes within your own world. Be careful, if the price rises by more than 200 percent, the item might go out of stock and you cannot buy it.</li>
                <li><strong>Foreign Fluctuation:</strong> The price does not change in your world. You usually need to visit other players worlds via Co-op to sell these for a high price.</li>
                <li><strong>Stock Limits:</strong> Stock refreshes on Saturday and Monday. You can buy 30 items per refresh. The total weekly limit is 180 items (Buy and Sell combined).</li>
            </ul>
            <h2 className="text-xl font-bold mt-4">You should check the market announcements first to confirm the current price situation before going back to NPC Feng Cheng to buy things!</h2>
            <h1 className="text-2xl font-bold mt-8 mb-4 text-amber-500 border-b border-stone-700 pb-2">Step 3: The Golden Weekly Schedule</h1>
            <p>The trading cycle runs from Saturday 6:00 AM to the next Saturday 6:00 AM. You must sell everything before the reset on Saturday morning, or the goods will expire and you will lose money.</p>
            <div className="bg-stone-800/50 p-6 rounded space-y-4 my-4">
                <p><strong className="text-white">Saturday and Sunday: Hoard Only</strong><br/>The market is technically closed, so prices are low. Action: Visit Zhang Qiyue and buy 90 items. Do not sell them yet.</p>
                <p><strong className="text-white">Monday and Tuesday: Hold</strong><br/>Prices start rising, but they have not reached the peak. Be patient.</p>
                <p><strong className="text-emerald-400">Wednesday: The Payday</strong><br/>Prices hit their peak (up to 300 percent). Action 1: Sell your 90 hoarded items. Action 2: Immediately buy the second batch of 90 items (from the Monday stock refresh). Action 3: Sell that second batch immediately on the same day.</p>
                <p><strong className="text-white">Thursday and Friday: Cleanup</strong><br/>If you missed the Wednesday peak, or if goods were out of stock because prices were too high, use these days to buy whatever is left and sell it to clear your inventory before the Saturday reset.</p>
            </div>
            <h1 className="text-2xl font-bold mt-8 mb-4 text-amber-500 border-b border-stone-700 pb-2">Step 4: The Pro Tip - Profiting Without Travel</h1>
            <p>While traveling to other players worlds can offer high prices for Foreign Goods, selling at home can actually yield more profit if you have the right Profession skills.</p>
            <p><strong>NPC: Cong Bushao</strong><br/>Location: Inside your Guild Base / Residence. Enter the main gate, turn left, and walk to the end.</p>
            <p><strong>Why sell to him?</strong> Your Profession skills give you a 14.5 percent Sales Bonus and a 10 percent Tax Reduction. Selling to a stranger in their world often involves a high tax rate.</p>
            <p><strong>Price Comparison Rule:</strong></p>
            <ul className="list-disc pl-5">
                <li>Selling at Home for 203 is roughly equal to selling to a stranger for 285.</li>
                <li>Selling at Home for 214 is roughly equal to selling to a stranger for 300.</li>
            </ul>
            <p><strong>Conclusion:</strong> Unless the prices in other players worlds are extremely high, selling to Cong Bushao at your own Guild Base is the easiest and most profitable method.</p>
            <h1 className="text-2xl font-bold mt-8 mb-4 text-amber-500 border-b border-stone-700 pb-2">Future Content: The "Lone Summit" Sect &amp; Trading</h1>
            <h2 className="text-xl font-semibold text-white">ℹ️ Did you know? Trading is a Core Sect Mechanic</h2>
            <p>There is a future Sect called Lone Summit (not yet released on Global) that focuses entirely on the Merchant lifestyle. I wanted to share this so you understand why learning this mechanic now is useful!</p>
            <p><strong>The Sect Rule:</strong> Members of Lone Summit must participate in trading every week to maintain their Discipline stats.</p>
            <p><strong>📜 The "Rule" Breakdown:</strong></p>
            <ul className="list-disc pl-5 space-y-1">
                <li>The Goal: You need to earn at least 100 Commerce Coins (Revenue) from the "Peddling" gameplay every week.</li>
                <li>The Reset: The counter resets every Monday at 5:00 AM.</li>
                <li>Note: It counts Revenue, not Profit. As long as you sell items worth 100 coins total, you are safe.</li>
            </ul>
        </div>
    );

  return (
    <div className="flex flex-col lg:flex-row h-full w-full bg-stone-950 overflow-hidden relative">
        
        {/* Mobile Header for Nav */}
        <div className="lg:hidden p-4 bg-stone-900 border-b border-stone-800 flex items-center justify-between shrink-0">
            <span className="font-bold text-amber-500 truncate max-w-[80%]">
                {GUIDES.find(g => g.id === activeGuide)?.title}
            </span>
            <button 
                onClick={() => setShowMobileMenu(!showMobileMenu)} 
                className="p-2 bg-stone-800 rounded text-stone-300 hover:text-white"
            >
                <Menu size={20} />
            </button>
        </div>

        {/* Mobile Menu Overlay */}
        {showMobileMenu && (
            <div className="absolute inset-0 z-50 bg-stone-950/95 backdrop-blur-sm lg:hidden flex flex-col">
                <div className="flex justify-end p-4 border-b border-stone-800">
                    <button onClick={() => setShowMobileMenu(false)} className="text-stone-400 font-bold">Close Menu</button>
                </div>
                <div className="flex-1 overflow-y-auto">
                    {renderSidebar()}
                </div>
            </div>
        )}

        {/* Desktop Sidebar */}
        <div className="hidden lg:block h-full shadow-xl z-20">
            {renderSidebar()}
        </div>

        {/* Main Content */}
        <div className="flex-1 h-full overflow-y-auto bg-stone-900 relative">
            {activeGuide === 'INTERNAL' && renderContent()}
            {activeGuide === 'PART1' && renderContent()}
            {activeGuide !== 'INTERNAL' && activeGuide !== 'PART1' && (GUIDES.find(g => g.id === activeGuide)?.url ? renderContent() : renderNoGuideSelected())}
        </div>
    </div>
  );
};
