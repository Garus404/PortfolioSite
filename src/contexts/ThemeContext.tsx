import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isTransitioning: boolean;
  isAnimating: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setIsTransitioning(true);

    // Добавляем класс для начала анимации всасывания
    document.body.classList.add('theme-sucking');

    setTimeout(() => {
      // Меняем тему в середине анимации
      setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');

      // Переключаем на анимацию выливания
      document.body.classList.remove('theme-sucking');
      document.body.classList.add('theme-pouring');
    }, 400);

    setTimeout(() => {
      // Завершаем анимацию
      document.body.classList.remove('theme-pouring');
      setIsTransitioning(false);
      setIsAnimating(false);
    }, 800);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isTransitioning, isAnimating }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
