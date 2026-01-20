import React from 'react';
import { motion } from 'framer-motion';

const RestaurantSection: React.FC = () => {
  return (
    <section id="restaurantes" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-orange-500 mb-4">Restaurantes em breve 🍢</h2>
            <p className="text-4xl md:text-5xl font-black tracking-tight mb-6">A curadoria completa ainda não foi entregue.</p>
            <p className="text-zinc-500 font-light leading-relaxed">
              Estamos finalizando a primeira seleção de espetos em João Pessoa. 
              Acompanhe — em breve os restaurantes entram aqui, com avaliações e animações.
            </p>
          </div>
          <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-zinc-700">
            <span className="w-12 h-[1px] bg-zinc-800" />
            Curadoria em Progresso
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group aspect-[4/5] bg-zinc-950 border border-white/5 overflow-hidden"
            >
              <img 
                src={`https://picsum.photos/seed/espeto-jp-${i}/600/800`} 
                alt="Breve" 
                className="w-full h-full object-cover opacity-20 grayscale group-hover:scale-105 transition-transform duration-700"
              />
              
              <div className="absolute inset-0 flex items-center justify-center p-6">
                 <div className="border border-white/10 bg-black/60 backdrop-blur-md px-6 py-4 transform -rotate-2 group-hover:rotate-0 transition-transform">
                   <p className="text-white font-black uppercase tracking-widest text-xs text-center leading-tight">Curadoria em Andamento</p>
                 </div>
              </div>

              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="h-5 w-2/3 bg-zinc-900 rounded-sm mb-4" />
                <div className="h-3 w-1/3 bg-zinc-900/50 rounded-sm" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 shadow-[0_0_20px_#f97316]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestaurantSection;