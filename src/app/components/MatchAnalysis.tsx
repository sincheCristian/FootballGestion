import React from 'react';
import { motion } from 'framer-motion';
import {
  PieChart, Pie, Cell, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, Tooltip
} from 'recharts';
import { Activity, Target, ShieldCheck, Flame } from 'lucide-react';
import { useMatchData } from './context/MatchContext';
import { calculateTeamStats } from '../components/utils/Stats';

const AnalysisCard = ({ title, value, unit, icon: Icon, description }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/50"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-red-600">
        <Icon size={24} />
      </div>
      <div>
        <p className="text-xs font-black text-gray-400 uppercase tracking-widest">{title}</p>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-black text-gray-900">{value}</span>
          <span className="text-sm font-bold text-gray-500">{unit}</span>
        </div>
      </div>
    </div>
    <p className="text-sm text-gray-500 font-medium leading-relaxed">{description}</p>
  </motion.div>
);

export const MatchAnalysis = () => {
  const { matches } = useMatchData();
  const stats = calculateTeamStats(matches);

  /* 🔢 CALCULS RESULTATS — AU BON ENDROIT */
  const totalMatches = matches.length || 1;

  const wins = matches.filter(m => m.goalsFor > m.goalsAgainst).length;
  const draws = matches.filter(m => m.goalsFor === m.goalsAgainst).length;
  const losses = matches.filter(m => m.goalsFor < m.goalsAgainst).length;

  const winRate = Math.round((wins / totalMatches) * 100);
  const drawRate = Math.round((draws / totalMatches) * 100);
  const lossRate = Math.round((losses / totalMatches) * 100);

  /* 📊 DATA GRAPHIQUES */
  const teamPerformanceData = [
    { name: 'AFK Club', value: stats.possession, color: '#dc2626' },
    { name: 'Adversaire', value: 100 - stats.possession, color: '#e5e7eb' },
  ];

  const matchStats = [
    { name: 'Buts / Match', team: Number(stats.goalsPerMatch), league: 1.4 },
    { name: 'Tirs Cadre', team: Number(stats.shotsOnTarget), league: 4.1 },
    { name: 'Passes %', team: stats.passAccuracy, league: 72 },
    { name: 'Défense', team: Number(stats.concededPerMatch), league: 1.2 },
  ];

  return (
    <section id="analysis" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TITRE */}
        <div className="mb-16">
          <h2 className="text-sm font-black text-red-600 uppercase tracking-[0.3em] mb-4">
            Analyse de Performance
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter">
            DATA & <span className="text-red-600">INSIGHTS</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">

          {/* CHARTS */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* PIE */}
            <div className="bg-gray-50 rounded-[2.5rem] p-8 border border-gray-100">
              <h4 className="text-lg font-black mb-6 flex items-center gap-2">
                <Target className="text-red-600 w-5 h-5" />
                Domination Moyenne
              </h4>

              <div className="h-64 relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={teamPerformanceData} dataKey="value" innerRadius={60} outerRadius={80}>
                      {teamPerformanceData.map((e, i) => (
                        <Cell key={i} fill={e.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-black">{stats.possession}%</span>
                  <span className="text-[10px] font-black text-gray-400 uppercase">Possession</span>
                </div>
              </div>
            </div>

            {/* BAR */}
            <div className="bg-gray-50 rounded-[2.5rem] p-8 border border-gray-100">
              <h4 className="text-lg font-black mb-6 flex items-center gap-2">
                <Activity className="text-red-600 w-5 h-5" />
                Vs Moyenne Ligue
              </h4>

              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={matchStats} layout="vertical">
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" width={90} />
                  <Tooltip />
                  <Bar dataKey="team" fill="#dc2626" radius={[0, 4, 4, 0]} />
                  <Bar dataKey="league" fill="#94a3b8" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* METRICS */}
          <div className="space-y-6">
            <AnalysisCard
              title="Taux de Victoire"
              value={winRate}
              unit="%"
              icon={Flame}
              description={`Basé sur ${totalMatches} matchs joués.`}
            />

            <AnalysisCard
              title="Clean Sheets"
              value={stats.cleanSheets}
              unit="M"
              icon={ShieldCheck}
              description="Matchs sans encaisser de but."
            />
          </div>
        </div>

        {/* 🔥 REPARTITION DES RESULTATS */}
        <div className="mt-20 bg-gray-50 rounded-[3rem] p-8 md:p-12 border border-gray-100">
          <h4 className="text-xl font-black mb-8 uppercase tracking-tight">
            Répartition des Résultats
          </h4>

          <div className="space-y-6">
            {[
              { label: 'Victoire', value: winRate, color: 'bg-emerald-500' },
              { label: 'Match Nul', value: drawRate, color: 'bg-amber-500' },
              { label: 'Défaite', value: lossRate, color: 'bg-red-600' },
            ].map(item => (
              <div key={item.label}>
                <div className="flex justify-between mb-2">
                  <span className="text-xs font-black uppercase tracking-widest text-gray-500">
                    {item.label}
                  </span>
                  <span className="text-sm font-black">{item.value}%</span>
                </div>

                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className={`h-full rounded-full ${item.color}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
