import React from "react";
import { useNavigate } from "react-router-dom";

export const Footer = (): JSX.Element => {
  const navigate = useNavigate();
  
  // Navigation items
  const navItems = [
    "Для кого предназначен TrafficGram?",
    "Чем мы уникальны?",
    "Как стать частью системы?",
  ];

  // Function to scroll to section on landing page
  const navigateToSection = (index: number) => {
    navigate('/');
    
    // Используем setTimeout чтобы дать время для загрузки LandingPage
    setTimeout(() => {
      const sectionIds = ['for-whom', 'uniqueness', 'how-to-join'];
      const section = document.getElementById(sectionIds[index]);
      
      if (section) {
        const sectionRect = section.getBoundingClientRect();
        const sectionHeight = sectionRect.height;
        const windowHeight = window.innerHeight;
        
        // Вычисляем позицию, чтобы раздел был в центре экрана
        const offsetPosition = section.offsetTop - (windowHeight / 2) + (sectionHeight / 2);
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <footer className="w-full h-auto bg-[#0C172C] px-4 md:px-0">
      <div className="max-w-[1846px] mx-auto py-8 border-b border-[#1B263B]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          <div className="flex items-center">
            <img className="h-16" alt="TrafficGram" src="/footer_logo.svg" />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-[58px]">
            {navItems.map((item, index) => (
              <button 
                key={index} 
                className="font-normal text-white text-[15px] text-center whitespace-nowrap hover:text-[#2A67DC] transition-colors py-2 md:py-0"
                onClick={() => navigateToSection(index)}
              >
                {item}
              </button>
            ))}
            <button 
              className="font-normal text-white text-[15px] text-center whitespace-nowrap hover:text-[#2A67DC] transition-colors py-2 md:py-0"
              onClick={() => {
                navigate('/terms');
                window.scrollTo(0, 0);
              }}
            >
              Политика конфиденциальности
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}; 