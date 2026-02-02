import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Trophy, Shield } from 'lucide-react';
import { useMatchData } from '../components/context/matchContext';

export const Matches = () => {
  const { matches } = useMatchData();
  const matchHistory = matches.slice(0, 5);

  return (
    <section id="matches" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between mb-16">
          <div>
            <h2 className="text-sm font-black text-red-600 uppercase mb-4">Historique</h2>
            <h3 className="text-4xl font-black">DERNIERS RÉSULTATS</h3>
          </div>
          <button className="flex items-center gap-2 px-8 py-4 bg-white rounded-2xl font-bold">
            <Calendar className="w-5 h-5 text-red-600" />
            Calendrier Complet
          </button>
        </div>

        <div className="grid gap-6">
          {matchHistory.map((match: any, idx: number) => (
            <motion.div
              key={match.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-8 flex justify-between items-center"
            >
              <div className="flex items-center gap-8">
                <div>
                  <p className="text-xs text-gray-400">{match.date}</p>
                  <p className="text-sm font-bold text-red-600">{match.type}</p>
                </div>

                <div className="flex items-center gap-8">
                  <p className="font-bold">AFK</p>
                  <Trophy />
                  <div className="text-4xl font-black">{match.result}</div>
                  <Shield />
                  <span className="font-bold">{match.opponent}</span>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <span className={`px-4 py-1 rounded-full text-xs font-black ${
                  match.status === "Victoire"
                    ? "bg-emerald-100 text-emerald-600"
                    : match.status === "Nul"
                    ? "bg-amber-100 text-amber-600"
                    : "bg-red-100 text-red-600"
                }`}>
                  {match.status}
                </span>

                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  {match.home ? "DOMICILE" : "EXTÉRIEUR"}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
