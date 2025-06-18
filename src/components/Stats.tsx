import React, { useEffect, useRef, useState } from 'react';
import { Shield, Code, Award, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Stats: React.FC = () => {
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

  const stats = [
    {
      icon: <Shield className="h-8 w-8" />,
      number: 50,
      suffix: '+',
      label: 'Проектов по безопасности',
      color: 'text-emerald-400',
    },
    {
      icon: <Code className="h-8 w-8" />,
      number: 8,
      suffix: '',
      label: 'Лет опыта',
      color: 'text-blue-400',
    },
    {
      icon: <Award className="h-8 w-8" />,
      number: 11,
      suffix: '',
      label: 'Сертификатов',
      color: 'text-purple-400',
    },
    {
      icon: <Users className="h-8 w-8" />,
      number: 100,
      suffix: '+',
      label: 'Довольных клиентов',
      color: 'text-orange-400',
    },
  ];

  const CountUpNumber: React.FC<{ target: number; isVisible: boolean; delay: number }> = ({ target, isVisible, delay }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const timer = setTimeout(() => {
        let current = 0;
        const increment = target / 50;
        const interval = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(interval);
          }
          setCount(Math.floor(current));
        }, 30);
      }, delay);

      return () => clearTimeout(timer);
    }, [isVisible, target, delay]);

    return <span>{count}</span>;
  };

  return (
    <section ref={sectionRef} className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5" />
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-6 rounded-xl glass-effect card-hover animate-on-scroll ${
                isVisible ? 'visible' : ''
              } stagger-${index + 1}`}
            >
              <div className={`${stat.color} mb-4 flex justify-center icon-float`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">
                <CountUpNumber target={stat.number} isVisible={isVisible} delay={index * 200} />
                {stat.suffix}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;