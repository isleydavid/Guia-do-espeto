
import React from 'react';
import { Logo } from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <Logo className="h-8 mb-8" />
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs italic">
              "Curadoria local, espeto de verdade."
            </p>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6">Restaurantes em breve 🍢</h4>
            <p className="text-zinc-500 text-xs leading-relaxed">
              “A curadoria completa ainda não foi entregue. Estamos finalizando a primeira seleção de espetos em João Pessoa. Acompanhe — em breve os restaurantes entram aqui, com avaliações e animações.”
            </p>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6">Especialistas (low profile)</h4>
            <p className="text-zinc-500 text-xs leading-relaxed">
              “Guia criado por um grupo composto por Fernando, Gustavo, Hiago e David. Perfil discreto, foco total na experiência e no espeto.”
            </p>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6">Contato & Local</h4>
            <p className="text-zinc-500 text-xs leading-relaxed mb-4">
              João Pessoa, Paraíba<br />
              Brasil
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-zinc-500 hover:text-orange-500 transition-colors">Instagram</a>
              <a href="#" className="text-zinc-500 hover:text-orange-500 transition-colors">X (Twitter)</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-[10px] uppercase font-bold tracking-[0.2em]">
            © {new Date().getFullYear()} Guia do Espeto JP. Todos os direitos reservados.
          </p>
          <p className="text-zinc-600 text-[10px] uppercase font-bold tracking-[0.2em]">
            Feito para quem entende de brasa.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
