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

  const SkewerIcon = () => (
    <svg viewBox="0 0 100 100" className="h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Skewer Stick */}
      <path d="M50 10V90" stroke={colors.primary} strokeWidth="5" strokeLinecap="round" />
      {/* Meat Cubes */}
      <rect x="30" y="25" width="40" height="15" rx="3" fill={colors.accent} />
      <rect x="30" y="45" width="40" height="15" rx="3" fill={colors.accent} />
      <rect x="30" y="65" width="40" height="15" rx="3" fill={colors.accent} />
    </svg>
  );

  if (variant === 'icon') {
    return <div className={className}><SkewerIcon /></div>;
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="h-full py-1">
        <SkewerIcon />
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-xl font-black tracking-tighter uppercase leading-none" style={{ color: colors.primary }}>
          Guia do Espeto
        </span>
        <span className="text-[10px] font-black tracking-[0.3em] uppercase leading-none mt-1" style={{ color: colors.accent }}>
          João Pessoa
        </span>
      </div>
    </div>
  );
};