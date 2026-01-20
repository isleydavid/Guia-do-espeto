
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onFinished: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinished }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (step < 4) {
        setStep(prev => prev + 1);
      } else {
        setTimeout(onFinished, 1000);
      }
    }, 600);
    return () => clearTimeout(timer);
  }, [step, onFinished]);

  return (
    <div className="fixed inset-0 bg-[#0a0a0a] flex flex-col items-center justify-center z-[100]">
      <div className="relative h-64 w-32 flex flex-col items-center">
        {/* The Skewer Stick */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: '100%' }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-1 bg-zinc-800 rounded-full absolute top-0"
        />

        {/* Meat Cubes */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 py-8">
          {[1, 2, 3].map((id, index) => (
            <motion.div
              key={id}
              initial={{ scale: 0, opacity: 0 }}
              animate={step > index ? { 
                scale: 1, 
                opacity: 1,
                boxShadow: step > index ? "0 0 20px rgba(249, 115, 22, 0.4)" : "none",
                backgroundColor: step > index ? "#f97316" : "#2a2a2a"
              } : {}}
              transition={{ duration: 0.4 }}
              className="w-12 h-10 rounded-md bg-zinc-700 relative overflow-hidden"
            >
              {/* Internal Heat Effect */}
              {step > index && (
                <motion.div
                  animate={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="absolute inset-0 bg-gradient-to-t from-red-600 to-transparent opacity-50"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Smoke Effect */}
        <AnimatePresence>
          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: [0, 0.4, 0], y: -80, x: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="absolute top-0 w-8 h-8 bg-white/10 blur-xl rounded-full"
            />
          )}
        </AnimatePresence>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-center"
      >
        <h2 className="text-zinc-500 uppercase tracking-[0.3em] text-xs font-bold">Iniciando Brasa</h2>
        <div className="mt-4 flex gap-1 justify-center">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              animate={{ opacity: step >= i ? 1 : 0.2 }}
              className="w-1.5 h-1.5 rounded-full bg-orange-500"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
