
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-black uppercase tracking-[0.3em] bg-white/5 border border-white/10 rounded-full text-orange-500">
            Curadoria Local de João Pessoa
          </span>
          <h1 className="text-6xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
            SEM HYPE.<br />
            SÓ <span className="text-orange-500">BRASA.</span>
          </h1>
          <p className="text-xl text-zinc-400 font-light mb-10 max-w-lg leading-relaxed">
            O guia low profile dos melhores espetos de João Pessoa. Curadoria local, espeto de verdade e sem firulas.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#restaurantes" className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-black font-black uppercase tracking-widest transition-all transform hover:scale-105">
              Ver a Seleção
            </a>
            <a href="#como-funciona" className="px-8 py-4 border border-white/20 hover:border-orange-500 hover:text-orange-500 font-black uppercase tracking-widest transition-all">
              Nosso Critério
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative hidden md:block"
        >
          <div className="aspect-square rounded-2xl bg-zinc-900 border border-white/10 p-8 flex items-center justify-center overflow-hidden">
             <img 
              src="https://picsum.photos/seed/espeto-hero/800/800" 
              alt="Brasa Viva" 
              className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
            <div className="relative z-10 text-center">
               <div className="text-8xl mb-4">🍢</div>
               <div className="text-sm font-black uppercase tracking-widest text-orange-500">Experiência Low Profile</div>
            </div>
          </div>
          {/* Floating Detail */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-2xl hidden lg:block">
            <p className="text-black text-xs font-black uppercase tracking-widest mb-1">Qualidade Testada</p>
            <p className="text-zinc-500 text-[10px] leading-tight max-w-[150px]">Foco total na experiência e na técnica de brasa dos mestres locais.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
