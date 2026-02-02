import React from 'react';
import { motion } from 'framer-motion';

const formation = {
  name: "4-3-3 Offensive",
  players: [
    { name: "Jordy", pos: { top: "85%", left: "47%" }, num: 1 },
    { name: "Salomon", pos: { top: "70%", left: "75%" }, num: 2 },
    { name: "Splendeur", pos: { top: "75%", left: "55%" }, num: 99 },
    { name: "Moussa", pos: { top: "75%", left: "35%" }, num: 13 },
    { name: "Jonhatan", pos: { top: "70%", left: "15%" }, num: 9 },
    { name: "Abou", pos: { top: "50%", left: "58%" }, num: 10 },
    { name: "Claude", pos: { top: "60%", left: "45%" }, num: 18 },
    { name: "Christian", pos: { top: "50%", left: "30%" }, num: 8 },
    { name: "Christophe", pos: { top: "30%", left: "75%" }, num: 15 },
    { name: "Nicolas", pos: { top: "15%", left: "45%" }, num: 9 },
    { name: "Mohamed", pos: { top: "30%", left: "10%" }, num: 7 },
  ]
};

export const TacticalField = () => {
  return (
    <section id="tactics" className="py-24 bg-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-red-500 font-black uppercase tracking-[0.3em] mb-4 text-sm">Vision Tactique</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">NOTRE ONZE DE DÉPART</h3>
          <p className="text-gray-400 max-w-xl mx-auto">La formation type d'AFK Club. Une structure solide pour une domination totale sur le terrain.</p>
        </div>

        <div className="relative max-w-4xl mx-auto aspect-[3/4] md:aspect-[4/3] bg-emerald-700 rounded-3xl border-8 border-white/20 shadow-2xl overflow-hidden p-8">
          {/* Pitch Markings */}
          <div className="absolute inset-4 border-2 border-white/30 rounded-2xl pointer-events-none">
            {/* Center Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-white/30 rounded-full" />
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/30" />
            
            {/* Penalty Areas */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/6 border-2 border-t-0 border-white/30" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1/6 border-2 border-b-0 border-white/30" />
            
            {/* Goal Boxes */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-24 border-2 border-t-0 border-white/30" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/4 h-24 border-2 border-b-0 border-white/30" />
          </div>

          {/* Grass Pattern */}
          <div className="absolute inset-0 flex flex-col pointer-events-none opacity-20">
            {[...Array(10)].map((_, i) => (
              <div key={i} className={`flex-1 ${i % 2 === 0 ? 'bg-black' : 'bg-transparent'}`} />
            ))}
          </div>

          {/* Players */}
          {formation.players.map((player, idx) => (
            <motion.div
              key={player.name}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: idx * 0.05, type: "spring" }}
              className="absolute group"
              style={{ top: player.pos.top, left: player.pos.left, transform: 'translate(-50%, -50%)' }}
            >
              <div className="relative flex flex-col items-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-red-600 rounded-full border-4 border-white shadow-xl flex items-center justify-center font-black text-white text-lg transition-transform group-hover:scale-110 cursor-pointer">
                  {player.num}
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center border-2 border-red-600">
                    <div className="w-2 h-2 bg-red-600 rounded-full" />
                  </div>
                </div>
                <div className="mt-2 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 whitespace-nowrap">
                  <span className="text-[10px] md:text-xs font-black text-white uppercase tracking-wider">{player.name}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center gap-12">
            <div className="text-center">
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Formation</p>
                <p className="text-2xl font-black text-white">{formation.name}</p>
            </div>
            <div className="text-center">
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Style</p>
                <p className="text-2xl font-black text-white text-red-500">OFFENSIF</p>
            </div>
        </div>
      </div>
    </section>
  );
};
