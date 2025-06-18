import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Shield, Code, Eye, Lock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Portfolio: React.FC = () => {
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

  const projects = [
    {
      title: 'SecureWebApp Scanner',
      description: 'Автоматизированная система сканирования веб-приложений на уязвимости OWASP Top 10. Интеграция с CI/CD pipeline для continuous security testing.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
      tags: ['Python', 'React', 'OWASP', 'CI/CD', 'Docker'],
      category: 'Security',
      icon: <Shield className="h-5 w-5" />,
      features: ['Automated OWASP scanning', 'Real-time reporting', 'CI/CD integration'],
      status: 'Production'
    },
    {
      title: 'AI Network Intrusion Detection',
      description: 'Система обнаружения вторжений на основе машинного обучения. Анализ сетевого трафика в реальном времени с точностью 97.5%.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
      tags: ['Python', 'TensorFlow', 'Network Security', 'ML', 'Kafka'],
      category: 'AI/Security',
      icon: <Eye className="h-5 w-5" />,
      features: ['Real-time analysis', '97.5% accuracy', 'ML-powered detection'],
      status: 'Beta'
    },
    {
      title: 'Enterprise IAM Dashboard',
      description: 'Современная панель управления доступом и идентификацией для корпоративных систем. Multi-factor authentication и SSO интеграция.',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop',
      tags: ['React', 'TypeScript', 'OAuth', 'SAML', 'MFA'],
      category: 'Development',
      icon: <Lock className="h-5 w-5" />,
      features: ['SSO integration', 'MFA support', 'Role-based access'],
      status: 'Production'
    },
    {
      title: 'Security Training Platform',
      description: 'Интерактивная платформа для обучения сотрудников основам кибербезопасности. Gamification и система прогресса.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
      tags: ['React', 'Node.js', 'Gamification', 'LMS', 'Analytics'],
      category: 'Education',
      icon: <Code className="h-5 w-5" />,
      features: ['Interactive lessons', 'Progress tracking', 'Certification system'],
      status: 'Development'
    },
    {
      title: 'Vulnerability Management System',
      description: 'Комплексная система управления уязвимостями с автоматическим сканированием, приоритизацией и отчетностью.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tags: ['Python', 'PostgreSQL', 'OpenVAS', 'Reporting', 'API'],
      category: 'Security',
      icon: <Shield className="h-5 w-5" />,
      features: ['Automated scanning', 'Risk prioritization', 'Executive reporting'],
      status: 'Production'
    },
    {
      title: 'Secure Code Review Tool',
      description: 'Инструмент для автоматического анализа кода на предмет уязвимостей безопасности с поддержкой множества языков.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
      tags: ['Static Analysis', 'Multi-language', 'DevSecOps', 'IDE Plugin'],
      category: 'Development',
      icon: <Code className="h-5 w-5" />,
      features: ['Multi-language support', 'IDE integration', 'Custom rules'],
      status: 'Beta'
    }
  ];

  const categories = ['All', 'Security', 'AI/Security', 'Development', 'Education'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Production': return 'bg-green-500/20 text-green-400';
      case 'Beta': return 'bg-yellow-500/20 text-yellow-400';
      case 'Development': return 'bg-blue-500/20 text-blue-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-24 relative"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Заголовок */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Портфолио проектов
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Избранные проекты в области кибербезопасности, разработки и дизайна
            </p>
          </div>

          {/* Фильтры категорий */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card border border-border text-foreground hover:border-primary/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Сетка проектов */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className={`group bg-card border border-border rounded-xl overflow-hidden card-hover animate-on-scroll ${
                  isVisible ? 'visible' : ''
                } stagger-${(index % 6) + 1}`}
              >
                {/* Изображение проекта */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Статус проекта */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Кнопки действий */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors">
                      <ExternalLink size={16} />
                    </button>
                    <button className="p-2 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/90 transition-colors">
                      <Github size={16} />
                    </button>
                  </div>
                </div>

                {/* Контент карточки */}
                <div className="p-6">
                  {/* Заголовок с иконкой */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="text-primary">
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Описание */}
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Ключевые особенности */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">
                      Особенности:
                    </h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Теги технологий */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA секция */}
          <div className="text-center mt-16">
            <div className="bg-card border border-border rounded-xl p-8 glass-effect">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Заинтересованы в сотрудничестве?
              </h3>
              <p className="text-muted-foreground mb-6">
                Готов помочь с вашими проектами в области кибербезопасности и разработки
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg btn-glow transition-all duration-300 hover:scale-105"
              >
                Связаться со мной
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
