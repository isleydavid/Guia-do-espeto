
import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      title: "Garimpagem",
      desc: "Rodamos os bairros de João Pessoa buscando os espetinhos de esquina até os de alto padrão.",
      icon: "🔍"
    },
    {
      title: "O Teste da Brasa",
      desc: "Avaliamos ponto da carne, tempero artesanal e o acompanhamento que faz a diferença.",
      icon: "🔥"
    },
    {
      title: "Veredito Low Profile",
      desc: "Só entra no guia o que realmente entrega valor sem depender de marketing exagerado.",
      icon: "✅"
    }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-black uppercase tracking-[0.4em] text-orange-500 mb-4">Como funciona</h2>
          <p className="text-4xl md:text-5xl font-black tracking-tight">Nosso processo de curadoria</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="p-8 bg-[#0a0a0a] border border-white/5 hover:border-orange-500/30 transition-all group"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">
                {step.icon}
              </div>
              <h3 className="text-xl font-black uppercase mb-4 tracking-tight">{step.title}</h3>
              <p className="text-zinc-400 font-light leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
