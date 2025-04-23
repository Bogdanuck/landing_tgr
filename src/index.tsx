import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { LandingPage } from "./screens/LandingPage";
import { TermsPage } from "./screens/TermsPage";
import { AnimatePresence, motion } from "framer-motion";

// Вариант анимации
const pageVariants = {
  initial: {
    opacity: 0,
    y: 10
  },
  in: {
    opacity: 1,
    y: 0
  },
  out: {
    opacity: 0,
    y: -10
  }
};

// Настройки перехода
const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.3
};

// Компонент-обертка для анимации
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <LandingPage />
          </motion.div>
        } />
        <Route path="/terms" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <TermsPage />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
};

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  </StrictMode>,
);
