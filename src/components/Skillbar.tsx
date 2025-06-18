
import React, { useEffect, useState } from 'react';

interface SkillBarProps {
  name: string;
  percentage: number;
  delay?: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, percentage, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPercentage, setCurrentPercentage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Анимируем рост прогресса
      let current = 0;
      const increment = percentage / 50;
      const interval = setInterval(() => {
        current += increment;
        if (current >= percentage) {
          current = percentage;
          clearInterval(interval);
        }
        setCurrentPercentage(current);
      }, 20);
    }, delay);

    return () => clearTimeout(timer);
  }, [percentage, delay]);

  return (
    <div className={`skill-bar-container transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-sm text-muted-foreground">{Math.round(currentPercentage)}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
        <div 
          className="progress-bar h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${currentPercentage}%` }}
        />
      </div>
    </div>
  );
};

export default SkillBar;