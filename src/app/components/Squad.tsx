import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

// Vérifie bien que ces chemins et noms de fichiers sont EXACTS (Majuscules/Minuscules)
import christianImg from "../../img/christian.png";
import christopheImg from "../../img/christophe.png";
import none from "../../img/none.png";

const players = [
  { id: 1, name: "Claude", pos: "Milieu", num: "4", img: none, stats: { goals: 0, assists: 0 } },
  { id: 2, name: "Christian", pos: "Milieu", num: "74", img: christianImg, stats: { goals: 0, assists: 1 } },
  { id: 3, name: "Nicolas", pos: "Attaquant", num: "10", img: none, stats: { goals: 3, assists: 0 } },
  { id: 4, name: "Njoya", pos: "Défenseur", num: "13", img: none, stats: { goals: 0, assists: 0 } },
  { id: 5, name: "Splendeur", pos: "Défenseur", num: "99", img: none, stats: { goals: 0, assists: 0 } },
  { id: 6, name: "Louis", pos: "Milieu", num: "6", img: none, stats: { goals: 0, assists: 0 } },
  { id: 7, name: "Abou", pos: "Milieu", num: "11", img: none, stats: { goals: 0, assists: 0 } },
  { id: 8, name: "Mohammed", pos: "Attaquant", num: "22", img: none, stats: { goals: 1, assists: 0 } },
  { id: 9, name: "Daniel", pos: "Milieu", num: "8", img: none, stats: { goals: 0, assists: 0 } },
  { id: 10, name: "Jonathan", pos: "Défenseur", num: "9", img: none, stats: { goals: 0, assists: 0 } },
  { id: 11, name: "Jordy", pos: "Gardien", num: "1", img: none, stats: { cleanSheet: 1, conceded: 0 } },
  { id: 12, name: "Zain", pos: "Gardien", num: "14", img: none, stats: { cleanSheet: 0, conceded: 2 } },
  { id: 13, name: "Christophe", pos: "Attaquant", num: "15", img: christopheImg, stats: { goals: 0, assists: 0 } },
  { id: 14, name: "Salomon", pos: "Défenseur", num: "17", img: none, stats: { goals: 0, assists: 0 } },
  { id: 15, name: "Forlan", pos: "Attaquant", num: "21", img: none, stats: { goals: 0, assists: 0 } },
  { id: 16, name: "Clement", pos: "Défenseur", num: "30", img: none, stats: { goals: 0, assists: 0 } },
];

export const Squad = () => {
  const [filter, setFilter] = useState("Tous");

  const categories = ["Tous", "Gardien", "Défenseur", "Milieu", "Attaquant"];

  const filteredPlayers =
    filter === "Tous"
      ? players
      : players.filter(player => player.pos === filter);

  return (
    <section id="squad" className="py-12 sm:py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-16 gap-8">
          <div className="max-w-2xl text-left">
            <h2 className="text-xs sm:text-sm font-black text-red-600 uppercase tracking-[0.3em] mb-3">
              Notre Effectif
            </h2>
            <h3 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tighter leading-[1.1]">
              LES GUERRIERS DE{" "}
              <span className="inline-block text-red-600 underline decoration-4 underline-offset-8">
                AFK CLUB
              </span>
            </h3>
          </div>

          {/* FILTERS - Scrollable horizontalement sur mobile */}
          <div className="flex overflow-x-auto pb-4 lg:pb-0 gap-3 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`flex-shrink-0 px-5 py-2.5 rounded-xl font-bold transition-all duration-300 border-2 ${
                  filter === cat
                    ? "bg-red-600 border-red-600 text-white shadow-lg shadow-red-200"
                    : "bg-white border-gray-100 text-gray-600 hover:border-red-600"
                }`}
              >
                {cat === "Tous" ? "Tous" : cat + "s"}
              </button>
            ))}
          </div>
        </div>

        {/* PLAYERS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredPlayers.map((player, index) => (
            <motion.div
              key={player.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* PLAYER IMAGE */}
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-200">
                <ImageWithFallback
                  src={player.img}
                  alt={player.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl text-red-600 shadow-sm">
                  {player.num}
                </div>
              </div>

              {/* PLAYER INFO */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-red-600 text-[10px] font-black uppercase tracking-widest mb-1">
                      {player.pos}
                    </p>
                    <h4 className="text-2xl font-black text-gray-900 uppercase italic">
                      {player.name}
                    </h4>
                  </div>
                  <Shield className="text-gray-100 w-10 h-10 -mt-1" />
                </div>

                {/* STATS - Optimisées en 2 colonnes pour mobile */}
                <div className="grid grid-cols-2 gap-4 pt-5 border-t border-gray-50">
                  {player.pos === "Gardien" ? (
                    <>
                      <div className="text-center">
                        <p className="text-[9px] uppercase text-gray-400 font-extrabold tracking-tighter">Clean Sheets</p>
                        <p className="text-lg font-black text-gray-900">{player.stats.cleanSheet}</p>
                      </div>
                      <div className="text-center border-l border-gray-50">
                        <p className="text-[9px] uppercase text-gray-400 font-extrabold tracking-tighter">Encaissés</p>
                        <p className="text-lg font-black text-gray-900">{player.stats.conceded}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-center">
                        <p className="text-[9px] uppercase text-gray-400 font-extrabold tracking-tighter">Buts</p>
                        <p className="text-xl font-black text-gray-900">{player.stats.goals || 0}</p>
                      </div>
                      <div className="text-center border-l border-gray-50">
                        <p className="text-[9px] uppercase text-gray-400 font-extrabold tracking-tighter">Passes</p>
                        <p className="text-xl font-black text-gray-900">{player.stats.assists || 0}</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};