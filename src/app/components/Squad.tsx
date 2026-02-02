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

  const filteredPlayers =
    filter === "Tous"
      ? players
      : players.filter(player => player.pos === filter);

  return (
    <section id="squad" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-black text-red-600 uppercase tracking-[0.3em] mb-4">
              Notre Effectif
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tighter leading-tight">
              LES GUERRIERS DE{" "}
              <span className="text-red-600 underline decoration-4 underline-offset-8">
                AFK CLUB
              </span>
            </h3>
          </div>

          {/* FILTERS */}
          <div className="flex flex-wrap gap-4">
            <button onClick={() => setFilter("Gardien")} className="px-4 py-2 sm:px-6 sm:py-3 bg-white border-2 border-gray-200 rounded-xl font-bold hover:border-red-600">
              Gardiens
            </button>
            <button onClick={() => setFilter("Milieu")} className="px-4 py-2 sm:px-6 sm:py-3 bg-white border-2 border-gray-200 rounded-xl font-bold hover:border-red-600">
              Milieux
            </button>
            <button onClick={() => setFilter("Attaquant")} className="px-4 py-2 sm:px-6 sm:py-3 bg-white border-2 border-gray-200 rounded-xl font-bold hover:border-red-600">
              Attaquants
            </button>
            <button onClick={() => setFilter("Défenseur")} className="px-4 py-2 sm:px-6 sm:py-3 bg-white border-2 border-gray-200 rounded-xl font-bold hover:border-red-600">
              Défenseurs
            </button>
            <button onClick={() => setFilter("Tous")} className="px-4 py-2 sm:px-6 sm:py-3 bg-red-600 text-white rounded-xl font-bold">
              Tous
            </button>
          </div>
        </div>

        {/* PLAYERS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPlayers.map((player, index) => (
            <motion.div
              key={player.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gray-100"
            >
              {/* PLAYER IMAGE */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <ImageWithFallback
                  src={player.img}
                  alt={player.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl text-red-600">
                  {player.num}
                </div>
              </div>

              {/* PLAYER INFO */}
              <div className="p-6 sm:p-8">
                <div className="flex justify-between mb-4">
                  <div>
                    <p className="text-red-600 text-xs font-bold uppercase">{player.pos}</p>
                    <h4 className="text-2xl font-black">{player.name}</h4>
                  </div>
                  <Shield className="text-gray-200 w-8 h-8" />
                </div>

                {/* STATS */}
                {player.pos === "Gardien" ? (
                  <div className="grid grid-cols-4 gap-4 pt-6 border-t">
                    <div />
                    <div className="text-center">
                      <p className="text-[10px] uppercase text-gray-400 font-bold">Clean sheets</p>
                      <p className="font-black">{player.stats.cleanSheet}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[10px] uppercase text-gray-400 font-bold">Buts encaissés</p>
                      <p className="font-black">{player.stats.conceded}</p>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-4 gap-4 pt-6 border-t">
                    <div />
                    <div className="text-center">
                      <p className="text-[10px] uppercase text-gray-400 font-bold">Buts</p>
                      <p className="font-black">{player.stats.goals || 0}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[10px] uppercase text-gray-400 font-bold">Passes</p>
                      <p className="font-black">{player.stats.assists || 0}</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
