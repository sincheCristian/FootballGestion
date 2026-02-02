import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Users, Calendar, Trophy } from 'lucide-react';
import { toast } from 'sonner';

export const MatchRequestForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast.success("Demande envoyée au capitaine ! Nous vous recontacterons bientôt.", {
        description: "Un email a été envoyé à l'administration d'AFK Club.",
        duration: 5000,
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);


    /////////////////////
    const phoneNumber = "5512757434";
    const whatsappMessage = `
     ****Nouveau défi******
     Équipe : ${teamName}
     Responsable : ${managerName}
     Message :
    ${message}
      `;

      const encodedMessage = encodeURIComponent(whatsappMessage);

      window.open(
        `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
        "_blank"
      );
  };

  const [teamName, setTeamName] = useState("");
  const [managerName, setManagerName] = useState("");
  const [message, setMessage] = useState("");
  


  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-black text-red-600 uppercase tracking-[0.3em] mb-4">Rejoignez l'arène</h2>
            <h3 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tighter leading-tight mb-8">
              VOUS PENSEZ <br />
              POUVOIR NOUS <br />
              <span className="text-red-600">BATTRE ?</span>
            </h3>
            <p className="text-gray-500 text-lg mb-10 max-w-md">
              Remplissez le formulaire pour proposer un match amical ou officiel. Votre demande sera transmise directement au capitaine de l'équipe.
            </p>

            <div className="space-y-6">
              {[
                { icon: Users, title: "Match 11 vs 11", desc: "Format standard sur terrain homologué." },
                { icon: Calendar, title: "Disponibilité", desc: "Principalement les weekends et soirs de semaine." },
                { icon: Trophy, title: "Niveau", desc: "Nous acceptons tous les défis sérieux." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0 border border-gray-100">
                    <item.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

         <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-gray-200 border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">
                    Nom de votre équipe
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="ex: FC Titans"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent focus:border-red-600 focus:bg-white rounded-2xl outline-none transition-all font-bold"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">
                    Nom du responsable
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Jean Dupont"
                    value={managerName}
                    onChange={(e) => setManagerName(e.target.value)}
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent focus:border-red-600 focus:bg-white rounded-2xl outline-none transition-all font-bold"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">
                  Message au capitaine
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Proposez une date, un lieu ou précisez le type de match..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent focus:border-red-600 focus:bg-white rounded-2xl outline-none transition-all font-bold resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-green-600 text-white rounded-2xl font-black uppercase tracking-[0.2em] shadow-xl shadow-green-200 hover:bg-green-700 active:scale-95 transition-all flex items-center justify-center gap-3"
              >
                Envoyer sur WhatsApp
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
