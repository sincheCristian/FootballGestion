import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

import christianImg from "../../img/christian.png";
import christopheImg from "../../img/christophe.png";
import none from "../../img/none.png";

const players = [
  { id: 1, name: "Claude", pos: "Milieu", num: "4", img: none, stats: { goals: 0, assists: 0 } },
  { id: 2, name: "Christian", pos: "Milieu", num: "74", img: christianImg, stats: { goals: 0, assists: 1 } },
  { id: 3, name: "Nicolas", pos: "Attaquant", num: "10", img: none, stats: { goals: 4, assists: 0 } },
  { id: 4, name: "Njoya", pos: "Défenseur", num: "13", img: none, stats: { goals: 0, assists: 0 } },
  { id: 5, name: "Splendeur", pos: "Défenseur", num: "99", img: none, stats: { goals: 0, assists: 0 } },
  { id: 6, name: "Louis", pos: "Milieu", num: "6", img: none, stats: { goals: 0, assists: 0 } },
  { id: 7, name: "Abou", pos: "Milieu", num: "11", img: none, stats: { goals: 0, assists: 1 } },
  { id: 8, name: "Mohammed", pos: "Attaquant", num: "22", img: none, stats: { goals: 1, assists: 0 } },
  { id: 9, name: "Daniel", pos: "Milieu", num: "8", img: none, stats: { goals: 0, assists: 0 } },
  { id: 10, name: "Jonathan", pos: "Défenseur", num: "9", img: none, stats: { goals: 0, assists: 1 } },
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
    <section id="squad" className="py-10 sm:py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <h2 className="text-[10px] sm:text-sm font-black text-red-600 uppercase tracking-[0.2em] mb-2">
              Notre Effectif
            </h2>
            <h3 className="text-2xl sm:text-5xl font-black text-gray-900 tracking-tighter leading-tight">
              LES GUERRIERS DE{" "}
              <span className="inline-block text-red-600 underline decoration-2 sm:decoration-4 underline-offset-4 sm:underline-offset-8">
                AFK CLUB
              </span>
            </h3>
          </div>

          {/* FILTERS */}
          <div className="flex overflow-x-auto pb-2 lg:pb-0 gap-2 no-scrollbar -mx-3 px-3 sm:mx-0 sm:px-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`flex-shrink-0 px-4 py-2 rounded-lg text-xs sm:text-base font-bold transition-all border-2 ${
                  filter === cat
                    ? "bg-red-600 border-red-600 text-white shadow-md"
                    : "bg-white border-gray-100 text-gray-600"
                }`}
              >
                {cat === "Tous" ? "Tous" : cat + "s"}
              </button>
            ))}
          </div>
        </div>

        {/* PLAYERS GRID - 2 COLUMNS ON MOBILE */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
          {filteredPlayers.map((player, index) => (
            <motion.div
              key={player.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              className="group bg-white rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 border border-gray-100"
            >
              {/* PLAYER IMAGE */}
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={player.img}
                  alt={player.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 sm:top-5 sm:left-5 bg-white/90 backdrop-blur-sm w-7 h-7 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl flex items-center justify-center font-black text-xs sm:text-xl text-red-600 shadow-sm">
                  {player.num}
                </div>
              </div>

              {/* PLAYER INFO */}
              <div className="p-3 sm:p-6">
                <div className="flex justify-between items-start mb-2 sm:mb-6">
                  <div className="min-w-0">
                    <p className="text-red-600 text-[8px] sm:text-[10px] font-black uppercase tracking-widest mb-0.5 sm:mb-1">
                      {player.pos}
                    </p>
                    <h4 className="text-sm sm:text-2xl font-black text-gray-900 uppercase italic truncate">
                      {player.name}
                    </h4>
                  </div>
                  <Shield className="text-gray-100 w-5 h-5 sm:w-10 sm:h-10 shrink-0" />
                </div>

                {/* STATS */}
                <div className="grid grid-cols-2 gap-2 pt-2 sm:pt-5 border-t border-gray-50">
                  {player.pos === "Gardien" ? (
                    <>
                      <div className="text-center">
                        <p className="text-[7px] sm:text-[9px] uppercase text-gray-400 font-extrabold">CS</p>
                        <p className="text-xs sm:text-lg font-black text-gray-900">{player.stats.cleanSheet}</p>
                      </div>
                      <div className="text-center border-l border-gray-50">
                        <p className="text-[7px] sm:text-[9px] uppercase text-gray-400 font-extrabold">BUTS</p>
                        <p className="text-xs sm:text-lg font-black text-gray-900">{player.stats.conceded}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-center">
                        <p className="text-[7px] sm:text-[9px] uppercase text-gray-400 font-extrabold">Buts</p>
                        <p className="text-xs sm:text-xl font-black text-gray-900">{player.stats.goals || 0}</p>
                      </div>
                      <div className="text-center border-l border-gray-50">
                        <p className="text-[7px] sm:text-[9px] uppercase text-gray-400 font-extrabold">Passes</p>
                        <p className="text-xs sm:text-xl font-black text-gray-900">{player.stats.assists || 0}</p>
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