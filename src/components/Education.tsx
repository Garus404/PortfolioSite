import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Education: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const educationItems = [
    t('education.info-security'),
    t('education.risk-specialist'),
    t('education.it-manager'),
    t('education.security-auditor'),
  ];

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              {t('education.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {educationItems.map((item, index) => (
              <div
                key={index}
                className={`bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-500 hover:scale-105 ${
                  isVisible ? 'animate-slide-in-left' : ''
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center">
                  <div className="text-primary mr-4">
                    <GraduationCap size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {item}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;