import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState("fadeIn");
  
  useEffect(() => {
    // Запускаем анимацию при изменении пути
    setTransitionStage("fadeOut");
      
    // После завершения анимации fadeOut, обновляем содержимое и запускаем fadeIn
    const timeout = setTimeout(() => {
      setDisplayChildren(children);
      setTransitionStage("fadeIn");
    }, 300); // Длительность анимации fadeOut
    
    return () => clearTimeout(timeout);
  }, [location.pathname, children]);
  
  return (
    <div className={`transition-opacity duration-300 ${transitionStage === "fadeIn" ? "opacity-100" : "opacity-0"}`}>
      {displayChildren}
    </div>
  );
}; 