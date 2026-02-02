import React, { useState, useEffect } from 'react';
import { Menu, X, Trophy, Users, Calendar, BarChart3, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Effectif', href: '#squad', icon: Users },
    { name: 'Tactique', href: '#tactics', icon: Trophy },
    { name: 'Stats', href: '#stats', icon: BarChart3 },
    { name: 'Matchs', href: '#matches', icon: Calendar },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-red-600 p-2 rounded-lg">
              <Trophy className="text-white w-6 h-6" />
            </div>
            <span className={`text-2xl font-black tracking-tighter ${scrolled ? 'text-gray-900' : 'text-white'}`}>AFK CLUB</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-bold uppercase tracking-widest hover:text-red-600 transition-colors ${scrolled ? 'text-gray-700' : 'text-white/90'}`}
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="bg-red-600 text-white px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-red-700 transition-all shadow-lg hover:shadow-red-500/30">
              Defiez-Nous
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={scrolled ? 'text-gray-900' : 'text-white'}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 px-3 py-4 text-base font-bold text-gray-700 border-b border-gray-50 hover:bg-gray-50"
                >
                  <link.icon className="w-5 h-5 text-red-600" />
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-3">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-red-600 text-white px-6 py-3 rounded-xl font-bold uppercase tracking-widest"
                >
                  Postuler pour un match
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
