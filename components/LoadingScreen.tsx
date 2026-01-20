import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onFinished: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinished }) => {
  const [ignitedCubes, setIgnitedCubes] = useState(0);

  useEffect(() => {
    // Sequência de ignição dos cubos
    const interval = setInterval(() => {
      setIgnitedCubes(prev => {
        if (prev >= 4) {
          clearInterval(interval);
          setTimeout(onFinished, 1200); // Finaliza após a última ignição
          return prev;
        }
        return prev + 1;
      });
    }, 600);

    return () => clearInterval(interval);
  }, [onFinished]);

  return (
    <div className="fixed inset-0 bg-[#0a0a0a] flex flex-col items-center justify-center z-[100] overflow-hidden">
      <div className="relative h-[350px] w-32 flex flex-col items-center">
        
        {/* Espeto (Skewer Stick) entra verticalmente */}
        <motion.div
          initial={{ y: 400, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="absolute w-1.5 h-full bg-gradient-to-b from-zinc-400 via-zinc-700 to-zinc-900 rounded-full z-0"
        />

        {/* Cubos de Carne */}
        <div className="absolute inset-0 flex flex-col items-center justify-start pt-12 gap-6 z-10">
          {[0, 1, 2, 3].map((index) => (
            <motion.div
              key={index}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                backgroundColor: ignitedCubes > index ? "#f97316" : "#2a2a2a",
                boxShadow: ignitedCubes > index ? "0 0 30px rgba(249, 115, 22, 0.6)" : "0 0 0px transparent"
              }}
              transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 20,
                backgroundColor: { duration: 0.3 }
              }}
              className="w-16 h-12 rounded-lg relative overflow-hidden border border-white/5"
            >
              {/* Efeito de Brasa Interna */}
              <AnimatePresence>
                {ignitedCubes > index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                    exit={{ opacity: 0 }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute inset-0 bg-gradient-to-tr from-red-600 via-orange-500 to-yellow-400 opacity-60"
                  />
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Fumaça (aparece após o segundo cubo acender) */}
        <AnimatePresence>
          {ignitedCubes >= 2 && (
            <div className="absolute top-0 w-full flex justify-center">
              {[1, 2, 3].map((s) => (
                <motion.div
                  key={s}
                  initial={{ opacity: 0, y: 0, x: 0, scale: 0.5 }}
                  animate={{ 
                    opacity: [0, 0.4, 0], 
                    y: -150, 
                    x: s % 2 === 0 ? 20 : -20,
                    scale: [1, 2, 3] 
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 3 + s, 
                    delay: s * 0.5,
                    ease: "linear"
                  }}
                  className="absolute w-12 h-12 bg-zinc-500/10 blur-2xl rounded-full"
                />
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Texto de Identidade */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-12 text-center"
      >
        <span className="block text-zinc-600 text-[10px] font-black uppercase tracking-[0.5em] mb-2">
          Preparando a Brasa
        </span>
        <div className="flex gap-2 justify-center">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              animate={ignitedCubes > i ? { scale: [1, 1.2, 1], opacity: 1 } : { opacity: 0.2 }}
              className="w-2 h-2 rounded-full bg-orange-500"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;