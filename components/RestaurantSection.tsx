
import React from 'react';
import { motion } from 'framer-motion';

const RestaurantSection: React.FC = () => {
  return (
    <section id="restaurantes" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-orange-500 mb-4">A Seleção</h2>
            <p className="text-4xl md:text-5xl font-black tracking-tight mb-6">Restaurantes em breve 🍢</p>
            <p className="text-xl text-zinc-500 font-light leading-relaxed">
              Estamos finalizando a primeira seleção de espetos em João Pessoa. Acompanhe — em breve os restaurantes entram aqui, com avaliações e animações.
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-zinc-500">
            <span className="w-12 h-[1px] bg-zinc-800" />
            Curadoria em Progresso
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 opacity-40 grayscale">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="relative group aspect-[4/5] bg-zinc-900 overflow-hidden border border-white/5"
            >
              <img 
                src={`https://picsum.photos/seed/espeto-${i}/600/800`} 
                alt="Placeholder" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="bg-black/80 backdrop-blur-sm px-6 py-3 border border-white/10 transform -rotate-12">
                   <p className="text-white font-black uppercase tracking-[0.2em] text-sm">Bloqueado</p>
                 </div>
              </div>

              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="h-4 w-3/4 bg-zinc-800 rounded mb-3 animate-pulse" />
                <div className="h-3 w-1/2 bg-zinc-800/50 rounded animate-pulse" />
              </div>

              {/* Brasa Hover Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent shadow-[0_0_20px_rgba(249,115,22,0.8)]" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-zinc-950 border-2 border-dashed border-zinc-900 text-center">
          <p className="text-zinc-600 font-bold uppercase tracking-widest text-sm max-w-xl mx-auto leading-relaxed">
            “A curadoria completa ainda não foi entregue. Estamos finalizando a primeira seleção de espetos em João Pessoa. Acompanhe — em breve os restaurantes entram aqui, com avaliações e animações.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default RestaurantSection;
