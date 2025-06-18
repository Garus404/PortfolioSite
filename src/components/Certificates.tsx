
import React, { useEffect, useRef, useState } from 'react';
import { Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Certificates: React.FC = () => {
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

  const certificates = [
    'CompTIA Security+',
    'CEH',
    'CISSP',
    'OSCP',
    'PCEP / PCAP',
    'AWS Certified Developer – Associate',
    'ISTQB',
    'Microsoft Certified: Azure Developer Associate',
    'TensorFlow Developer',
    'Docker Certified Associate',
    'Certified Kubernetes Administrator (CKA)',
  ];

  return (
    <section
      id="certificates"
      ref={sectionRef}
      className="py-20 bg-card/50"
    >
      <div className="container mx-auto px-4">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              {t('certificates.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className={`bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-500 hover:scale-105 ${
                  isVisible ? 'animate-fade-in' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-primary mb-4 flex justify-center">
                  <Award size={32} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {cert}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
