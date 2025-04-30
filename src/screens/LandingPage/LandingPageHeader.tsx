import React, { useState, useEffect, useRef } from "react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";

export const LandingPageHeader = (): JSX.Element => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [animating, setAnimating] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  
  // Navigation items
  const navItems = [
    "Для кого предназначен TrafficGram?",
    "Чем мы уникальны?",
    "Как стать частью системы?",
  ];

  // Обрабатываем открытие и закрытие меню с анимацией
  useEffect(() => {
    if (mobileMenuOpen) {
      // Показываем меню сразу и запускаем анимацию
      setMenuVisible(true);
      setAnimating(true);
    } else {
      // Запускаем анимацию закрытия
      setAnimating(false);
      // Задержка перед полным скрытием для анимации
      const timer = setTimeout(() => {
        setMenuVisible(false);
      }, 300); // Время должно совпадать с длительностью анимации
      return () => clearTimeout(timer);
    }
  }, [mobileMenuOpen]);

  // Функция для закрытия меню при клике вне его области
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Блокировка прокрутки страницы при открытом меню
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

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
          <img className="h-10" alt="TrafficGram" src="/header_logo.svg" />
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
          onClick={() => setMobileMenuOpen(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <Button 
          className="hidden md:flex h-12 px-6 rounded-xl bg-[#2A67DC]"
          onClick={() => window.open("https://core-frontend.infra.trafficgram.online/catalog", "_blank")}
        >
          <img className="w-6 h-6 mr-2" alt="Register icon" src="/simplification-2.svg" />
          <span className="font-medium text-white text-[17px]">
            Зарегистрироваться
          </span>
        </Button>
      </div>

      {/* Mobile Navigation Menu с анимацией */}
      {menuVisible && (
        <div 
          className={`md:hidden fixed inset-0 bg-black z-40 flex justify-center items-start pt-24 transition-all duration-300 ease-in-out 
                     ${animating ? 'bg-opacity-50' : 'bg-opacity-0'}`}
          style={{ pointerEvents: animating ? 'auto' : 'none' }}
        >
          <div 
            ref={menuRef}
            className={`bg-white w-[90%] rounded-2xl p-6 shadow-lg relative transition-all duration-300 ease-in-out 
                      ${animating ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
          >
            {/* Кнопка закрытия внутри модального окна */}
            <button 
              className="absolute top-4 right-4 text-[#0c172c] hover:text-[#2A67DC] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <nav className="flex flex-col items-center gap-6 pt-4">
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
                  window.open("https://core-frontend.infra.trafficgram.online/catalog", "_blank");
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