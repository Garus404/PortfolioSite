import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'ru' | 'en' | 'de' | 'es' | 'kz';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ru: {
    'nav.about': 'Обо мне',
    'nav.education': 'Образование',
    'nav.certificates': 'Сертификаты',
    'nav.portfolio': 'Портфолио',
    'nav.contact': 'Контакты',
    'hero.name': 'Вальдемар',
    'hero.title1': 'Специалист по',
    'hero.title2': 'Кибербезопасности',
    'hero.title3': 'Фронтенд-разработчик',
    'hero.title4': 'UX/UI дизайнер',
    'hero.description': 'Занимаюсь программированием сайтов и кибербезопасностью с 15 лет. Изучал всё это ещё в юношестве, получил нужные сертификаты и образование. Двигаюсь в сфере кибербезопасности.',
    'hero.experience': 'Лет опыта',
    'hero.projects': 'Проектов',
    'hero.certificates': 'Сертификатов',
    'hero.viewPortfolio': 'Посмотреть портфолио',
    'hero.contact': 'Связаться',
    'about.title': 'Обо мне',
    'education.title': 'Образование',
    'education.info-security': 'Специалист по информационной безопасности',
    'education.risk-specialist': 'Специалист по рискам в области информационной безопасности',
    'education.it-manager': 'IT-менеджер',
    'education.security-auditor': 'Аудитор информационной безопасности',
    'certificates.title': 'Сертификаты',
    'portfolio.title': 'Портфолио',
    'contact.title': 'Контакты',
    'portfolio.project1.title': 'Система анализа уязвимостей веб-приложений',
    'portfolio.project1.desc': 'Разработка комплексной системы для автоматического сканирования и анализа уязвимостей в веб-приложениях с интеграцией OWASP методологий.',
    'portfolio.project2.title': 'Платформа мониторинга сетевой безопасности',
    'portfolio.project2.desc': 'Создание real-time системы мониторинга сетевого трафика с машинным обучением для обнаружения аномалий и потенциальных угроз.',
    'portfolio.project3.title': 'Защищенный корпоративный портал',
    'portfolio.project3.desc': 'Разработка защищенного корпоративного портала с многофакторной аутентификацией, шифрованием данных и системой управления доступом.',
  },
  en: {
    'nav.about': 'About',
    'nav.education': 'Education',
    'nav.certificates': 'Certificates',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    'hero.name': 'Waldemar',
    'hero.title1': 'Cybersecurity',
    'hero.title2': 'Specialist',
    'hero.title3': 'Frontend Developer',
    'hero.title4': 'UX/UI Designer',
    'hero.description': 'I have been programming websites and working in cybersecurity since I was 15. I studied all this in my youth, obtained the necessary certificates and education. Moving forward in the field of cybersecurity.',
    'hero.experience': 'Years of Experience',
    'hero.projects': 'Projects',
    'hero.certificates': 'Certificates',
    'hero.viewPortfolio': 'View Portfolio',
    'hero.contact': 'Contact',
    'about.title': 'About Me',
    'education.title': 'Education',
    'education.info-security': 'Information Security Specialist',
    'education.risk-specialist': 'Information Security Risk Specialist',
    'education.it-manager': 'IT Manager',
    'education.security-auditor': 'Information Security Auditor',
    'certificates.title': 'Certificates',
    'portfolio.title': 'Portfolio',
    'contact.title': 'Contact',
    'portfolio.project1.title': 'Web Application Vulnerability Analysis System',
    'portfolio.project1.desc': 'Development of a comprehensive system for automatic scanning and analysis of vulnerabilities in web applications with OWASP methodology integration.',
    'portfolio.project2.title': 'Network Security Monitoring Platform',
    'portfolio.project2.desc': 'Creation of a real-time network traffic monitoring system with machine learning for anomaly detection and potential threat identification.',
    'portfolio.project3.title': 'Secure Corporate Portal',
    'portfolio.project3.desc': 'Development of a secure corporate portal with multi-factor authentication, data encryption, and access control system.',
  },
  de: {
    'nav.about': 'Über mich',
    'nav.education': 'Bildung',
    'nav.certificates': 'Zertifikate',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Kontakt',
    'hero.name': 'Waldemar',
    'hero.title1': 'Cybersicherheits',
    'hero.title2': 'Spezialist',
    'hero.title3': 'Frontend-Entwickler',
    'hero.title4': 'UX/UI Designer',
    'hero.description': 'Ich programmiere Websites und arbeite seit meinem 15. Lebensjahr in der Cybersicherheit. Ich habe all dies in meiner Jugend studiert, die notwendigen Zertifikate und Ausbildung erhalten. Ich bewege mich im Bereich der Cybersicherheit vorwärts.',
    'hero.experience': 'Jahre Erfahrung',
    'hero.projects': 'Projekte',
    'hero.certificates': 'Zertifikate',
    'hero.viewPortfolio': 'Portfolio anzeigen',
    'hero.contact': 'Kontakt',
    'about.title': 'Über mich',
    'education.title': 'Bildung',
    'education.info-security': 'Informationssicherheitsspezialist',
    'education.risk-specialist': 'Risikospezialist für Informationssicherheit',
    'education.it-manager': 'IT-Manager',
    'education.security-auditor': 'Informationssicherheitsauditor',
    'certificates.title': 'Zertifikate',
    'portfolio.title': 'Portfolio',
    'contact.title': 'Kontakt',
    'portfolio.project1.title': 'Webanwendungs-Schwachstellenanalysesystem',
    'portfolio.project1.desc': 'Entwicklung eines umfassenden Systems für automatisches Scannen und Analysieren von Schwachstellen in Webanwendungen mit OWASP-Methodologie-Integration.',
    'portfolio.project2.title': 'Netzwerksicherheits-Überwachungsplattform',
    'portfolio.project2.desc': 'Erstellung eines Echtzeit-Netzwerkverkehr-Überwachungssystems mit maschinellem Lernen für Anomalieerkennung und potentielle Bedrohungsidentifikation.',
    'portfolio.project3.title': 'Sicheres Unternehmensportal',
    'portfolio.project3.desc': 'Entwicklung eines sicheren Unternehmensportals mit Multi-Faktor-Authentifizierung, Datenverschlüsselung und Zugriffskontrollsystem.',
  },
  es: {
    'nav.about': 'Acerca de',
    'nav.education': 'Educación',
    'nav.certificates': 'Certificados',
    'nav.portfolio': 'Portafolio',
    'nav.contact': 'Contacto',
    'hero.name': 'Waldemar',
    'hero.title1': 'Especialista en',
    'hero.title2': 'Ciberseguridad',
    'hero.title3': 'Desarrollador Frontend',
    'hero.title4': 'Diseñador UX/UI',
    'hero.description': 'He estado programando sitios web y trabajando en ciberseguridad desde los 15 años. Estudié todo esto en mi juventud, obtuve los certificados y educación necesarios. Avanzando en el campo de la ciberseguridad.',
    'hero.experience': 'Años de Experiencia',
    'hero.projects': 'Proyectos',
    'hero.certificates': 'Certificados',
    'hero.viewPortfolio': 'Ver Portafolio',
    'hero.contact': 'Contacto',
    'about.title': 'Acerca de mí',
    'education.title': 'Educación',
    'education.info-security': 'Especialista en Seguridad de la Información',
    'education.risk-specialist': 'Especialista en Riesgos de Seguridad de la Información',
    'education.it-manager': 'Gerente de TI',
    'education.security-auditor': 'Auditor de Seguridad de la Información',
    'certificates.title': 'Certificados',
    'portfolio.title': 'Portafolio',
    'contact.title': 'Contacto',
    'portfolio.project1.title': 'Sistema de Análisis de Vulnerabilidades de Aplicaciones Web',
    'portfolio.project1.desc': 'Desarrollo de un sistema integral para escaneo automático y análisis de vulnerabilidades en aplicaciones web con integración de metodologías OWASP.',
    'portfolio.project2.title': 'Plataforma de Monitoreo de Seguridad de Red',
    'portfolio.project2.desc': 'Creación de un sistema de monitoreo de tráfico de red en tiempo real con aprendizaje automático para detección de anomalías e identificación de amenazas potenciales.',
    'portfolio.project3.title': 'Portal Corporativo Seguro',
    'portfolio.project3.desc': 'Desarrollo de un portal corporativo seguro con autenticación multifactor, cifrado de datos y sistema de control de acceso.',
  },
  kz: {
    'nav.about': 'Мен туралы',
    'nav.education': 'Білім',
    'nav.certificates': 'Сертификаттар',
    'nav.portfolio': 'Портфолио',
    'nav.contact': 'Байланыс',
    'hero.name': 'Вальдемар',
    'hero.title1': 'Киберқауіпсіздік',
    'hero.title2': 'маманы',
    'hero.title3': 'Frontend әзірлеуші',
    'hero.title4': 'UX/UI дизайнер',
    'hero.description': '15 жасымнан бастап веб-сайттарды бағдарламалау және киберқауіпсіздікпен айналысамын. Мұның бәрін жастайымда үйрендім, қажетті сертификаттар мен білім алдым. Киберқауіпсіздік саласында дамып келемін.',
    'hero.experience': 'Жыл тәжірибе',
    'hero.projects': 'Жобалар',
    'hero.certificates': 'Сертификаттар',
    'hero.viewPortfolio': 'Портфолионы көру',
    'hero.contact': 'Байланыс',
    'about.title': 'Мен туралы',
    'education.title': 'Білім',
    'education.info-security': 'Ақпараттық қауіпсіздік маманы',
    'education.risk-specialist': 'Ақпараттық қауіпсіздік тәуекелдері маманы',
    'education.it-manager': 'IT менеджер',
    'education.security-auditor': 'Ақпараттық қауіпсіздік аудиторы',
    'certificates.title': 'Сертификаттар',
    'portfolio.title': 'Портфолио',
    'contact.title': 'Байланыс',
    'portfolio.project1.title': 'Веб-қосымшалар осалдықтарын талдау жүйесі',
    'portfolio.project1.desc': 'OWASP әдістемелерін интеграциялап, веб-қосымшалардағы осалдықтарды автоматты сканерлеу және талдау үшін кешенді жүйе әзірлеу.',
    'portfolio.project2.title': 'Желілік қауіпсіздікті мониторинг платформасы',
    'portfolio.project2.desc': 'Аномалияларды анықтау және ықтимал қауіптерді табу үшін машиналық үйренумен нақты уақыттағы желілік трафикті мониторинг жүйесін құру.',
    'portfolio.project3.title': 'Қорғалған корпоративтік портал',
    'portfolio.project3.desc': 'Көпфакторлы аутентификация, деректерді шифрлау және қол жетімділікті басқару жүйесімен қорғалған корпоративтік портал әзірлеу.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ru');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};