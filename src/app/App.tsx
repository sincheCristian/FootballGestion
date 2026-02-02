import React from 'react';
import { Navbar } from '../app/components/Navbar';
import { Hero } from '../app/components/Hero';
import { Squad } from '../app/components/Squad';
import { TacticalField } from '../app/components/TacticalField';
import { Stats } from '../app/components/Stats';
import { Matches } from '../app/components/Matches';
import { MatchAnalysis } from '../app/components/MatchAnalysis';
import { MatchRequestForm } from '../app/components/MatchRequestForm';
import { Toaster } from 'sonner';

import { Instagram, Heart } from 'lucide-react';

const Footer = () => (
  <footer className="bg-zinc-950 text-white pt-24 pb-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 lg:col-span-2">
          <div className="flex items-center gap-2 mb-8">
            <div className="bg-red-600 p-2 rounded-lg">
              <span className="text-white font-black text-xl">AFK</span>
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase">Football Club</span>
          </div>
          <p className="text-zinc-500 max-w-sm mb-8 leading-relaxed">
            L'excellence du football local. Nous formons les talents de demain et relevons les plus grands défis d'aujourd'hui. 
            Rejoignez la famille AFK.
          </p>
          <div className="flex gap-4">
            {[Instagram,].map((Icon, i) => (
              <a key={i} href="#" className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center hover:bg-red-600 transition-colors border border-zinc-800">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-black uppercase tracking-widest mb-8">Navigation</h4>
          <ul className="space-y-4 text-zinc-500 font-bold">
            <li><a href="#squad" className="hover:text-red-500 transition-colors">Effectif</a></li>
            <li><a href="#tactics" className="hover:text-red-500 transition-colors">Tactique</a></li>
            <li><a href="#stats" className="hover:text-red-500 transition-colors">Statistiques</a></li>
            <li><a href="#matches" className="hover:text-red-500 transition-colors">Matchs</a></li>
          </ul>
        </div>
      </div>

      <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-600 font-bold text-xs uppercase tracking-[0.2em]">
        <p>© 2026 AFK FOOTBALL CLUB. TOUS DROITS RÉSERVÉS.</p>
        <div className="flex items-center gap-2">
          <span>MADE WITH</span>
          <Heart className="w-3 h-3 text-red-600 fill-current" />
          <span>BY AFK DEV TEAM</span>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-red-600 selection:text-white">
      
      <Toaster position="top-right" expand={true} richColors />
      <Navbar />
      <main>
        
        <Hero />
        <Squad />
        <TacticalField />
        <Matches />
        <MatchAnalysis />
        <Stats />  
        <MatchRequestForm />
        
      </main>
      <Footer />
    </div>
  );
}
