import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";

export const LandingPageHeader = (): JSX.Element => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Navigation items
  const navItems = [
    "Для кого предназначен TrafficGram?",
    "Чем мы уникальны?",
    "Как стать частью системы?",
  ];

  // Function to scroll to section on landing page
  const navigateToSection = (index: number) => {
    navigate('/');
    
    // Закрываем мобильное меню при выборе раздела
    setMobileMenuOpen(false);
    
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
    <header className="w-full z-50 px-4 md:px-6 py-4">
      <div className="max-w-[1896px] mx-auto h-[72px] bg-[#ffffff66] rounded-3xl border border-solid border-white flex items-center justify-between px-4 md:px-6">
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-14">
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

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden block text-[#0c172c]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        <Button 
          className="hidden md:flex h-12 px-6 rounded-xl bg-[#2A67DC]"
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

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-start pt-24">
          <div className="bg-white w-[90%] rounded-2xl p-6 shadow-lg">
            <nav className="flex flex-col items-center gap-6">
              {navItems.map((item, index) => (
                <button 
                  key={index} 
                  className="font-medium text-[#0c172c] text-[17px] hover:text-[#2A67DC] transition-colors py-2"
                  onClick={() => navigateToSection(index)}
                >
                  {item}
                </button>
              ))}
              <Button 
                className="w-full h-12 px-6 rounded-xl bg-[#2A67DC] mt-4"
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate('/');
                  window.scrollTo(0, 0);
                }}
              >
                <img className="w-6 h-6 mr-2" alt="Register icon" src="/simplification-2.svg" />
                <span className="font-medium text-white text-[17px]">
                  Зарегистрироваться
                </span>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}; 