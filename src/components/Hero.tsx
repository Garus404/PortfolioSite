import React, { useEffect, useState } from 'react';
import { ChevronDown, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ParticleBackground from './ParticleBackground';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <ParticleBackground />
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />

      <div className={`container mx-auto px-4 text-center relative z-10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="max-w-5xl mx-auto">
          {/* Основной заголовок */}
          <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="block gradient-text text-5xl md:text-8xl mb-4">
              {t('hero.name')}
            </span>
            <span className="block text-2xl md:text-4xl text-foreground/90 mb-4">
              {t('hero.title1')}
            </span>
            <span className="block text-2xl md:text-4xl gradient-text">
              {t('hero.title2')}
            </span>
            <span className="block text-xl md:text-3xl mt-4 text-foreground/70">
              {t('hero.title3')} • {t('hero.title4')}
            </span>
          </h1>

          {/* Описание */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed animate-on-scroll visible stagger-2">
            {t('hero.description')}
          </p>

          {/* Дополнительная информация */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="p-4 glass-effect rounded-lg animate-on-scroll visible stagger-3">
              <div className="text-primary text-2xl font-bold">8+</div>
              <div className="text-sm text-muted-foreground">{t('hero.experience')}</div>
            </div>
            <div className="p-4 glass-effect rounded-lg animate-on-scroll visible stagger-4">
              <div className="text-primary text-2xl font-bold">50+</div>
              <div className="text-sm text-muted-foreground">{t('hero.projects')}</div>
            </div>
            <div className="p-4 glass-effect rounded-lg animate-on-scroll visible stagger-5">
              <div className="text-primary text-2xl font-bold">11</div>
              <div className="text-sm text-muted-foreground">{t('hero.certificates')}</div>
            </div>
          </div>

          {/* Кнопки действий */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() => scrollToSection('portfolio')}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg btn-glow transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <span>{t('hero.viewPortfolio')}</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border border-border text-foreground rounded-lg glass-effect hover:bg-accent transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <Mail size={18} />
              <span>{t('hero.contact')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Стрелка вниз */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full glass-effect"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;