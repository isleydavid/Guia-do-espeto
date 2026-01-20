import React from 'react';
import { Logo } from './Logo.tsx';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
          <div>
            <Logo className="h-8 mb-8" />
            <p className="text-zinc-600 text-sm font-medium italic">
              "O guia low profile dos melhores espetos de João Pessoa. Sem hype. Só brasa."
            </p>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-[10px] mb-6 text-orange-500">Restaurantes em breve 🍢</h4>
            <p className="text-zinc-500 text-xs leading-relaxed">
              A curadoria completa ainda não foi entregue. Estamos finalizando a primeira seleção de espetos em João Pessoa. Acompanhe — em breve os restaurantes entram aqui, com avaliações e animações.
            </p>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-[10px] mb-6 text-orange-500">Especialistas (low profile)</h4>
            <p className="text-zinc-500 text-xs leading-relaxed">
              Guia criado por um grupo composto por Fernando, Gustavo, Hiago e David. Perfil discreto, foco total na experiência e no espeto.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-700 text-[10px] uppercase font-black tracking-[0.3em]">
            © {new Date().getFullYear()} Guia do Espeto JP
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-zinc-700 hover:text-orange-500 transition-colors text-[10px] font-black uppercase tracking-widest">Instagram</a>
            <a href="#" className="text-zinc-700 hover:text-orange-500 transition-colors text-[10px] font-black uppercase tracking-widest">Newsletter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;