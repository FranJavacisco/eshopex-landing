import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <Features />
      <RegistrationForm />
      <Footer />
    </div>
  );
}

export default App;