import React from "react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";

export const LandingPageHeader = (): JSX.Element => {
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
    <header className="w-full z-50 px-6 py-4">
      <div className="max-w-[1896px] mx-auto h-[72px] bg-[#ffffff66] rounded-3xl border border-solid border-white flex items-center justify-between px-6">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => {
            navigate('/');
            window.scrollTo(0, 0);
          }}
        >
          <div className="w-9 h-10 relative">
            <img className="absolute w-2 h-8 top-[7px] left-7" alt="Group" src="/group.png" />
            <img className="absolute w-2 h-8 top-0 left-3.5" alt="Group" src="/group-1.png" />
            <img className="absolute w-2 h-8 top-[7px] left-0" alt="Group" src="/group-2.png" />
          </div>
          <img className="h-[18px]" alt="TrafficGram" src="/group-238160.png" />
        </div>

        <nav className="flex items-center gap-14">
          {navItems.map((item, index) => (
            <button 
              key={index} 
              className="font-medium text-[#0c172c] text-[17px] hover:text-[#2A67DC] transition-colors"
              onClick={() => navigateToSection(index)}
            >
              {item}
            </button>
          ))}
        </nav>

        <Button 
          className="h-12 px-6 rounded-xl bg-[#2A67DC]"
          onClick={() => {
            navigate('/');
            window.scrollTo(0, 0);
          }}
        >
          <img className="w-6 h-6 mr-2" alt="Register icon" src="/simplification-2.svg" />
          <span className="font-medium text-white text-[17px]">
            Зарегистрироваться
          </span>
        </Button>
      </div>
    </header>
  );
}; 