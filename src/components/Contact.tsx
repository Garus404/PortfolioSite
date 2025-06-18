import React, { useEffect, useRef, useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
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

  const contacts = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: 'Email',
      value: 'morozbalkon@gmail.com',
      href: 'mailto:morozbalkon@gmail.com',
    },
    {
      icon: <Send className="h-6 w-6" />,
      label: 'Telegram',
      value: '@Pakemonx',
      href: 'https://t.me/Pakemonx',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-card/50"
    >
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              {t('contact.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {contacts.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-500 hover:scale-105 block ${
                  isVisible ? 'animate-fade-in' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-primary mb-4 flex justify-center">
                  {contact.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {contact.label}
                </h3>
                <p className="text-muted-foreground">
                  {contact.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
