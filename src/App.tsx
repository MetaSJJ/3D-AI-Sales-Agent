import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Hero />
      <Features />
      <Benefits />
      <CTA />
    </div>
  );
}

export default App;