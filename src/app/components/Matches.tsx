import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Trophy, Shield, ChevronRight } from 'lucide-react';
import { useMatchData } from './context/MatchContext'; // Vérifie bien ce chemin selon ton dossier

export const Matches = () => {
  const { matches } = useMatchData();
  const matchHistory = matches.slice(0, 5);

  return (
    <section id="matches" className="py-12 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-10 md:mb-16 gap-6">
          <div>
            <h2 className="text-xs md:text-sm font-black text-red-600 uppercase tracking-widest mb-2 md:mb-4 text-center md:text-left">
              Historique
            </h2>
            <h3 className="text-3xl md:text-5xl font-black text-center md:text-left tracking-tighter uppercase italic">
              Derniers Résultats
            </h3>
          </div>
          <button className="flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-white hover:bg-red-600 hover:text-white transition-all duration-300 rounded-xl md:rounded-2xl font-bold shadow-sm border border-gray-100 group">
            <Calendar className="w-5 h-5 text-red-600 group-hover:text-white" />
            <span className="text-sm md:text-base">Calendrier Complet</span>
          </button>
        </div>

        {/* MATCH LIST */}
        <div className="grid gap-4 md:gap-6">
          {matchHistory.map((match, idx) => (
            <motion.div
              key={match.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] p-5 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-50"
            >
              {/* Conteneur Flexible : Colonne sur mobile, Ligne sur Desktop */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                
                {/* DATE & TYPE (Top sur mobile, Left sur desktop) */}
                <div className="flex flex-row md:flex-col items-center md:items-start justify-between w-full md:w-auto border-b md:border-b-0 border-gray-50 pb-3 md:pb-0">
                  <div>
                    <p className="text-[10px] md:text-xs text-gray-400 font-bold uppercase">{match.date}</p>
                    <p className="text-xs md:text-sm font-black text-red-600">{match.type}</p>
                  </div>
                  <div className="md:hidden">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                      match.status === "Victoire" ? "bg-emerald-100 text-emerald-600" : 
                      match.status === "Nul" ? "bg-amber-100 text-amber-600" : "bg-red-100 text-red-600"
                    }`}>
                      {match.status}
                    </span>
                  </div>
                </div>

                {/* SCOREBOARD (Centre) */}
                <div className="flex items-center justify-center gap-4 md:gap-12 w-full md:w-auto">
                  <div className="flex flex-col items-center gap-2 w-20 md:w-32">
                    <Trophy className="w-6 h-6 md:w-10 md:h-10 text-gray-200" />
                    <p className="font-black text-sm md:text-xl uppercase truncate w-full text-center">AFK</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="text-3xl md:text-6xl font-black tracking-tighter bg-gray-900 text-white px-4 md:px-8 py-2 md:py-4 rounded-2xl md:rounded-[2rem] shadow-lg shadow-gray-200">
                      {match.result}
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-2 w-20 md:w-32">
                    <Shield className="w-6 h-6 md:w-10 md:h-10 text-gray-200" />
                    <p className="font-black text-sm md:text-xl uppercase truncate w-full text-center">{match.opponent}</p>
                  </div>
                </div>

                {/* STATUS & LOCATION (Bottom sur mobile, Right sur desktop) */}
                <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-4 md:gap-8 border-t md:border-t-0 border-gray-50 pt-3 md:pt-0">
                  <div className="hidden md:block">
                    <span className={`px-5 py-2 rounded-xl text-xs font-black uppercase tracking-widest ${
                      match.status === "Victoire" ? "bg-emerald-100 text-emerald-600" : 
                      match.status === "Nul" ? "bg-amber-100 text-amber-600" : "bg-red-100 text-red-600"
                    }`}>
                      {match.status}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-400 font-bold text-[10px] md:text-xs">
                    <MapPin className="w-4 h-4 text-red-500" />
                    {match.home ? "DOMICILE" : "EXTÉRIEUR"}
                  </div>
                  
                  <ChevronRight className="hidden md:block w-5 h-5 text-gray-300" />
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};