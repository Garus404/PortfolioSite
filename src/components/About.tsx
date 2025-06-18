import React, { useEffect, useRef, useState } from 'react';
import { Shield, Code, Palette, Brain, Server, Database } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import SkillBar from './SkillBar';

const About: React.FC = () => {
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

  const skills = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Кибербезопасность',
      description: 'Pentesting, Incident Response, Risk Assessment, SIEM, Vulnerability Management',
      items: ['OWASP Top 10', 'Network Security', 'Malware Analysis', 'Forensics']
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Разработка',
      description: 'Full-stack разработка с фокусом на безопасность и производительность',
      items: ['React/TypeScript', 'Node.js/Python', 'API Security', 'Cloud Native']
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'UX/UI Дизайн',
      description: 'Создание интуитивных и безопасных пользовательских интерфейсов',
      items: ['User Research', 'Prototyping', 'Design Systems', 'Accessibility']
    }
  ];

  const technicalSkills = [
    { name: 'Penetration Testing', percentage: 95 },
    { name: 'React/TypeScript', percentage: 90 },
    { name: 'Python/Scripting', percentage: 88 },
    { name: 'Network Security', percentage: 92 },
    { name: 'Cloud Security (AWS)', percentage: 85 },
    { name: 'UX/UI Design', percentage: 80 },
  ];

  const certifications = [
    'CompTIA Security+', 'CEH', 'CISSP', 'OSCP',
    'AWS Developer', 'PCAP', 'CKA', 'Azure Developer'
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-card/20 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-7xl mx-auto">
          {/* Заголовок секции */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Обо мне
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Более 8 лет занимаюсь кибербезопасностью и разработкой.
              Начал изучать программирование в 15 лет, получил профессиональное образование и сертификации.
            </p>
          </div>

          {/* Основные навыки */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`skill-card bg-card border border-border rounded-xl p-8 text-center card-hover animate-on-scroll ${
                  isVisible ? 'visible' : ''
                } stagger-${index + 1}`}
              >
                <div className="text-primary mb-6 flex justify-center icon-glow">
                  {skill.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skill.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Технические навыки */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className={`animate-on-scroll ${isVisible ? 'visible' : ''} stagger-4`}>
              <h3 className="text-2xl font-bold mb-8 text-foreground">Технические навыки</h3>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    percentage={skill.percentage}
                    delay={index * 200}
                  />
                ))}
              </div>
            </div>

            <div className={`animate-on-scroll ${isVisible ? 'visible' : ''} stagger-5`}>
              <h3 className="text-2xl font-bold mb-8 text-foreground">Сертификации</h3>
              <div className="grid grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div
                    key={cert}
                    className="p-3 bg-card border border-border rounded-lg text-center hover:border-primary/50 transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="text-sm font-medium text-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Дополнительная информация */}
          <div className={`bg-card border border-border rounded-xl p-8 glass-effect animate-on-scroll ${
            isVisible ? 'visible' : ''
          } stagger-6`}>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Brain className="h-12 w-12 text-primary mx-auto mb-4 icon-float" />
                <h4 className="text-lg font-semibold mb-2">Аналитическое мышление</h4>
                <p className="text-muted-foreground text-sm">
                  Системный подход к решению сложных задач безопасности
                </p>
              </div>
              <div>
                <Server className="h-12 w-12 text-primary mx-auto mb-4 icon-float" />
                <h4 className="text-lg font-semibold mb-2">Инфраструктура</h4>
                <p className="text-muted-foreground text-sm">
                  Опыт работы с облачными платформами и контейнеризацией
                </p>
              </div>
              <div>
                <Database className="h-12 w-12 text-primary mx-auto mb-4 icon-float" />
                <h4 className="text-lg font-semibold mb-2">Данные и ИИ</h4>
                <p className="text-muted-foreground text-sm">
                  Машинное обучение для задач кибербезопасности
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
