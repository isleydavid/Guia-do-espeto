
import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import RestaurantSection from './components/RestaurantSection';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';
import { AppState } from './types';

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
