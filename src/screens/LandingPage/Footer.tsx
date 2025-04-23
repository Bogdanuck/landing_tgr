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
    <footer className="w-full h-auto bg-[#0C172C]">
      <div className="max-w-[1846px] mx-auto px-[34px] py-8 border-b border-[#1B263B]">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-[59px] h-[65px] relative">
              <img className="absolute w-[13px] h-[53px] top-3 left-[46px]" alt="Logo element" src="/group-3.png" />
              <img className="absolute w-[13px] h-[53px] top-0 left-[23px]" alt="Logo element" src="/group-4.png" />
              <img className="absolute w-[13px] h-[53px] top-3 left-0" alt="Logo element" src="/group-5.png" />
            </div>
            <img className="w-56 h-[30px] ml-6" alt="TrafficGram" src="/group-238160-1.png" />
          </div>
          <div className="flex items-center gap-[58px]">
            {navItems.map((item, index) => (
              <button 
                key={index} 
                className="font-normal text-white text-[15px] text-center whitespace-nowrap hover:text-[#2A67DC] transition-colors"
                onClick={() => navigateToSection(index)}
              >
                {item}
              </button>
            ))}
            <button 
              className="font-normal text-white text-[15px] text-center whitespace-nowrap hover:text-[#2A67DC] transition-colors"
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