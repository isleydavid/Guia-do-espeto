
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'horizontal' | 'icon';
  monochrome?: 'light' | 'dark' | 'none';
}

export const Logo: React.FC<LogoProps> = ({ className = "h-12", variant = 'horizontal', monochrome = 'none' }) => {
  const getColors = () => {
    if (monochrome === 'light') return { primary: '#FFFFFF', accent: '#FFFFFF' };
    if (monochrome === 'dark') return { primary: '#000000', accent: '#000000' };
    return { primary: '#FFFFFF', accent: '#F97316' }; // Tailwind Orange-500
  };

  const colors = getColors();

  if (variant === 'icon') {
    return (
      <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 10V90" stroke={colors.primary} strokeWidth="4" strokeLinecap="round" />
        <rect x="35" y="25" width="30" height="15" rx="2" fill={colors.accent} />
        <rect x="35" y="45" width="30" height="15" rx="2" fill={colors.accent} />
        <rect x="35" y="65" width="30" height="15" rx="2" fill={colors.accent} />
      </svg>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 100 100" className="h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 10V90" stroke={colors.primary} strokeWidth="6" strokeLinecap="round" />
        <rect x="30" y="25" width="40" height="15" rx="3" fill={colors.accent} />
        <rect x="30" y="45" width="40" height="15" rx="3" fill={colors.accent} />
        <rect x="30" y="65" width="40" height="15" rx="3" fill={colors.accent} />
      </svg>
      <div className="flex flex-col justify-center">
        <span className="text-xl font-black tracking-tighter uppercase leading-none" style={{ color: colors.primary }}>
          Guia do Espeto
        </span>
        <span className="text-sm font-bold tracking-widest uppercase opacity-80" style={{ color: colors.accent }}>
          João Pessoa
        </span>
      </div>
    </div>
  );
};
