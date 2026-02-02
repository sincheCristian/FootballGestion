import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, Zap } from 'lucide-react';

const scorers = [
  { name: "Nicolas", goals: 4, match: 2, ratio: 1.25 },
  { name: "Mohammed", goals: 1, match: 2, ratio: 0.8 },
];

const assists = [
  { name: "Christian", assists: 1, match: 2 },
  { name: "Abou", assists: 1, match: 2 },
  { name: "Jonathan", assists: 1, match: 2 },
];

export const Stats = () => {
  return (
    <section id="stats" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
            <TrendingUp className="text-red-600 w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter mb-4">TABLEAU DES LEADERS</h2>
          <p className="text-gray-500 max-w-xl uppercase font-bold tracking-[0.2em] text-sm">Saison 2025/2026</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Top Scorers */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-[2.5rem] p-10 border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-200">
                <Target className="text-white w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 tracking-tight">Meilleurs Buteurs</h3>
            </div>

            <div className="space-y-6">
              {scorers.map((player, idx) => (
                <div key={player.name} className="flex items-center justify-between group">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-black text-gray-300 w-6 italic">#{idx + 1}</span>
                    <div>
                      <h4 className="font-bold text-gray-900 group-hover:text-red-600 transition-colors">{player.name}</h4>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">{player.match} MATCHS</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-8">
                    <div className="text-right">
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Ratio</p>
                      <p className="text-sm font-black text-gray-600">{player.ratio}</p>
                    </div>
                    <div className="bg-white w-16 h-16 rounded-2xl flex flex-col items-center justify-center shadow-md border border-gray-100">
                      <span className="text-2xl font-black text-red-600 leading-none">{player.goals}</span>
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">BUTS</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Top Assists */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-[2.5rem] p-10 shadow-2xl shadow-gray-200"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Zap className="text-white w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-white tracking-tight">Meilleurs Passeurs</h3>
            </div>

            <div className="space-y-6">
              {assists.map((player, idx) => (
                <div key={player.name} className="flex items-center justify-between group">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-black text-zinc-700 w-6 italic">#{idx + 1}</span>
                    <div>
                      <h4 className="font-bold text-white group-hover:text-blue-400 transition-colors">{player.name}</h4>
                      <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest">{player.match} MATCHS</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-8">
                    <div className="bg-zinc-800 w-16 h-16 rounded-2xl flex flex-col items-center justify-center border border-zinc-700">
                      <span className="text-2xl font-black text-blue-400 leading-none">{player.assists}</span>
                      <span className="text-[10px] font-black text-zinc-500 uppercase tracking-tighter">PASSES</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
