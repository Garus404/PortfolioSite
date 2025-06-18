import React, { useRef } from 'react';
import { Moon, Sun, Globe } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage, Language } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

const Header: React.FC = () => {
  const { theme, toggleTheme, isTransitioning, isAnimating } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const themeButtonRef = useRef<HTMLButtonElement>(null);

  const languages = [
    { code: 'ru', name: 'Русский' },
    { code: 'en', name: 'English' },
    { code: 'de', name: 'Deutsch' },
    { code: 'es', name: 'Español' },
    { code: 'kz', name: 'Қазақша' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleThemeToggle = () => {
    if (themeButtonRef.current && !isAnimating) {
      const rect = themeButtonRef.current.getBoundingClientRect();
      const x = ((rect.left + rect.width / 2) / window.innerWidth) * 100;
      const y = ((rect.top + rect.height / 2) / window.innerHeight) * 100;

      // Устанавливаем CSS переменные для позиции кнопки
      document.documentElement.style.setProperty('--theme-button-x', `${x}%`);
      document.documentElement.style.setProperty('--theme-button-y', `${y}%`);

      toggleTheme();
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold gradient-text">
          {t('hero.name')}
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
          >
            {t('nav.about')}
          </button>
          <button
            onClick={() => scrollToSection('education')}
            className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
          >
            {t('nav.education')}
          </button>
          <button
            onClick={() => scrollToSection('certificates')}
            className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
          >
            {t('nav.certificates')}
          </button>
          <button
            onClick={() => scrollToSection('portfolio')}
            className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
          >
            {t('nav.portfolio')}
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
          >
            {t('nav.contact')}
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="transition-all duration-300 hover:scale-105">
                <Globe className="h-4 w-4 mr-2 transition-transform duration-300" />
                {languages.find(lang => lang.code === language)?.name}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-popover border-border transition-all duration-300">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setLanguage(lang.code as Language)}
                  className="cursor-pointer hover:bg-accent transition-all duration-300"
                >
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            ref={themeButtonRef}
            variant="outline"
            size="sm"
            onClick={handleThemeToggle}
            disabled={isAnimating}
            className={`w-10 h-10 p-0 theme-toggle transition-all duration-400 hover:scale-110 ${
              isAnimating ? 'animating' : ''
            }`}
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4 transition-transform duration-300" />
            ) : (
              <Moon className="h-4 w-4 transition-transform duration-300" />
            )}
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
