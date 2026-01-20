import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen.tsx';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import HowItWorks from './components/HowItWorks.tsx';
import RestaurantSection from './components/RestaurantSection.tsx';
import TeamSection from './components/TeamSection.tsx';
import Footer from './components/Footer.tsx';
import { AppState } from './types.ts';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.LOADING);

  const handleLoadingFinish = () => {
    setAppState(AppState.HOME);
  };

  if (appState === AppState.LOADING) {
    return <LoadingScreen onFinished={handleLoadingFinish} />;
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col selection:bg-orange-500 selection:text-black">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <RestaurantSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;