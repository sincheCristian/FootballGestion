import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const formation = {
  name: "4-3-3 Offensive",
  players: [
    { name: "Jordy", pos: { mobile: { top: "92%", left: "50%" }, desktop: { top: "90%", left: "50%" } }, num: 1 },
    // Défense
    { name: "Salomon", pos: { mobile: { top: "78%", left: "82%" }, desktop: { top: "75%", left: "85%" } }, num: 17 },
    { name: "Splendeur", pos: { mobile: { top: "82%", left: "62%" }, desktop: { top: "80%", left: "62%" } }, num: 99 },
    { name: "Moussa", pos: { mobile: { top: "82%", left: "38%" }, desktop: { top: "80%", left: "38%" } }, num: 13 },
    { name: "Jonhatan", pos: { mobile: { top: "78%", left: "18%" }, desktop: { top: "75%", left: "15%" } }, num: 9 },
    // Milieu (Triangle inversé)
    { name: "Claude", pos: { mobile: { top: "65%", left: "50%" }, desktop: { top: "65%", left: "50%" } }, num: 4 }, // Sentinelle
    { name: "Abou", pos: { mobile: { top: "52%", left: "68%" }, desktop: { top: "50%", left: "65%" } }, num: 10 }, // Relayeur D
    { name: "Christian", pos: { mobile: { top: "52%", left: "32%" }, desktop: { top: "50%", left: "35%" } }, num: 74 }, // Relayeur G
    // Attaque
    { name: "Christophe", pos: { mobile: { top: "30%", left: "82%" }, desktop: { top: "25%", left: "80%" } }, num: 15 }, // AD
    { name: "Nicolas", pos: { mobile: { top: "18%", left: "50%" }, desktop: { top: "15%", left: "50%" } }, num: 10 }, // AC
    { name: "Mohamed", pos: { mobile: { top: "30%", left: "18%" }, desktop: { top: "25%", left: "20%" } }, num: 22 }, // AG
  ]
};

export const TacticalField = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="tactics" className="py-12 md:py-24 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-red-500 font-black uppercase tracking-[0.3em] mb-2 text-[10px] md:text-xs">Vision Tactique</h2>
          <h3 className="text-2xl md:text-5xl font-black text-white tracking-tighter uppercase italic">Notre Onze de Départ</h3>
        </div>

        <div className="relative mx-auto w-full max-w-4xl">
          {/* TERRAIN */}
          <div className="relative aspect-[3/4] md:aspect-[14/10] bg-emerald-800 rounded-xl md:rounded-[2rem] border-[3px] md:border-[8px] border-white/10 shadow-2xl overflow-hidden">
            
            {/* Gazon Patterns */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" 
                 style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 10%, rgba(0,0,0,0.2) 10%, rgba(0,0,0,0.2) 20%)' }} 
            />

            {/* Lignes du terrain */}
            <div className="absolute inset-4 md:inset-6 border border-white/20 pointer-events-none">
              <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/20 -translate-y-1/2" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-40 md:h-40 border border-white/20 rounded-full" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/5 border border-t-0 border-white/20" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1/5 border border-b-0 border-white/20" />
            </div>

            {/* Joueurs */}
            {formation.players.map((player, idx) => {
              const currentPos = isMobile ? player.pos.mobile : player.pos.desktop;
              
              return (
                <motion.div
                  key={player.name}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: idx * 0.03, type: "spring", stiffness: 120 }}
                  className="absolute z-10 flex flex-col items-center"
                  style={{ 
                    top: currentPos.top, 
                    left: currentPos.left,
                    transform: 'translate(-50%, -50%)' 
                  }}
                >
                  {/* Numero */}
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-red-600 rounded-full border-2 border-white shadow-lg flex items-center justify-center font-black text-white text-[10px] md:text-base group-hover:bg-red-500 transition-colors">
                    {player.num}
                  </div>

                  {/* Nom épuré */}
                  <span className="mt-1 text-[8px] md:text-[11px] font-bold text-white uppercase tracking-tighter drop-shadow-md">
                    {player.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* INFO FORMATION */}
        <div className="mt-8 flex justify-center gap-8 md:gap-16">
            <div className="text-center">
                <p className="text-gray-500 text-[9px] font-bold uppercase tracking-widest">Système</p>
                <p className="text-sm md:text-xl font-black text-white italic">{formation.name}</p>
            </div>
            <div className="text-center">
                <p className="text-gray-500 text-[9px] font-bold uppercase tracking-widest">Style</p>
                <p className="text-sm md:text-xl font-black text-red-500 italic uppercase">Offensif</p>
            </div>
        </div>
      </div>
    </section>
  );
};