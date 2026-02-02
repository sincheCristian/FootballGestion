import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Play } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1767729790212-661953ecaa90?q=80&w=2000"
          alt="Stadium"
          className="w-full h-full object-cover opacity-60 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="w-12 h-[2px] bg-red-600" />
            <span className="text-red-500 font-black uppercase tracking-[0.3em] text-sm">Plus qu'un club</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white leading-none mb-8 tracking-tighter">
            AFK <br />
            <span className="text-red-600">FOOTBALL</span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-lg leading-relaxed font-medium">
            Découvrez l'élite du football local. Performance, passion et ambition. Rejoignez l'aventure AFK et défiez notre équipe.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-4 bg-red-600 text-white rounded-full font-black uppercase tracking-widest flex items-center justify-center gap-2 shadow-2xl shadow-red-600/40"
            >
              Défier l'équipe
              <ChevronRight className="w-5 h-5" />
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white/20 transition-all"
            >
              <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">
                <Play className="w-4 h-4 text-white fill-current ml-1" />
              </div>
              Highlights
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
