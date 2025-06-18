import React from 'react';
import { LanguageProvider } from '../contexts/LanguageContext';
import { ThemeProvider } from '../contexts/ThemeContext';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Stats from '../components/Stats';
import Education from '../components/Education';
import Certificates from '../components/Certificates';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Header />
          <main>
            <Hero />
            <About />
            <Stats />
            <Education />
            <Certificates />
            <Portfolio />
            <Contact />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;
