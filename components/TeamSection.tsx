import React from 'react';
import { motion } from 'framer-motion';

const TeamSection: React.FC = () => {
  const members = ["Fernando", "Gustavo", "Hiago", "David"];

  return (
    <section id="sobre" className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-orange-500 mb-4">Quem está por trás</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-8">Especialistas (low profile)</h3>
            <p className="text-xl text-zinc-400 font-light leading-relaxed mb-8">
              Guia criado por um grupo composto por Fernando, Gustavo, Hiago e David. Perfil discreto, foco total na experiência e no espeto.
            </p>
            <div className="flex flex-wrap gap-4">
              {members.map((member) => (
                <div key={member} className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-zinc-300 text-sm font-bold uppercase tracking-widest">
                  {member}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
               <div className="aspect-square bg-zinc-900 rounded-2xl overflow-hidden grayscale">
                 <img src="https://picsum.photos/seed/team1/400/400" alt="Equipe" className="w-full h-full object-cover opacity-40" />
               </div>
               <div className="aspect-[3/4] bg-zinc-900 rounded-2xl overflow-hidden grayscale translate-x-4">
                 <img src="https://picsum.photos/seed/team2/400/533" alt="Equipe" className="w-full h-full object-cover opacity-40" />
               </div>
            </div>
            <div className="space-y-4 pt-8">
               <div className="aspect-[3/4] bg-zinc-900 rounded-2xl overflow-hidden grayscale">
                 <img src="https://picsum.photos/seed/team3/400/533" alt="Equipe" className="w-full h-full object-cover opacity-40" />
               </div>
               <div className="aspect-square bg-zinc-900 rounded-2xl overflow-hidden grayscale -translate-x-4">
                 <img src="https://picsum.photos/seed/team4/400/400" alt="Equipe" className="w-full h-full object-cover opacity-40" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;