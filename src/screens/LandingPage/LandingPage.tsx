import React, { useRef } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";
import { LandingPageHeader } from "./LandingPageHeader";
import { Footer } from "./Footer";

export const LandingPage = (): JSX.Element => {
  // Navigation items
  const navItems = [
    "Для кого предназначен TrafficGram?",
    "Чем мы уникальны?",
    "Как стать частью системы?",
  ];

  // Refs for sections
  const forWhomSectionRef = useRef<HTMLElement>(null);
  const uniqueSectionRef = useRef<HTMLElement>(null);
  const joinSectionRef = useRef<HTMLElement>(null);

  // Function to scroll to section
  const scrollToSection = (index: number) => {
    const refs = [forWhomSectionRef, uniqueSectionRef, joinSectionRef];
    if (refs[index]?.current) {
      const sectionElement = refs[index]?.current;
      const sectionRect = sectionElement.getBoundingClientRect();
      const sectionHeight = sectionRect.height;
      const windowHeight = window.innerHeight;
      
      // Вычисляем позицию, чтобы раздел был в центре экрана
      const offsetPosition = sectionElement.offsetTop - (windowHeight / 2) + (sectionHeight / 2);
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // For whom section data
  const forWhomCards = [
    {
      title:
        "Владельцы TMA-приложений и ботов, оптимизирующие рекламные продажи",
      bgImage: "/simplification-14.svg",
      decorImage: "/simplification-17.svg",
    },
    {
      title:
        "Рекламодатели из iGaming, fintech, web3 и других секторов, заинтересованные в качественном трафике",
      bgImage: "/2-friends-1.svg",
      decorImage: "/2_user_dark.svg",
    },
    {
      title:
        "Трафик-менеджеры, автоматизирующие процессы и повышающие эффективность сделок",
      bgImage: "/speedometr_bright.svg",
      decorImage: "/simplification-5.svg",
    },
    {
      title: "Партнёры и рефералы, зарабатывающие на рекомендациях",
      bgImage: "/simplification-10.svg",
      decorImage: "/simplification-9.svg",
    },
  ];

  // Unique features data
  const uniqueFeatures = [
    {
      title: "P2P-маркетплейс",
      description:
        "Автоматизация продажи трафика, подключение SDK и рассмотрение предложений",
      icon: "/simplification-16.svg",
    },
    {
      title: "Гарантии (Escrow)",
      description:
        "Средства остаются на промежуточном счёте до полного исполнения рекламного обязательства, защищая от финансовых рисков",
      icon: "/simplification-7.svg",
    },
    {
      title: "Каталог предложений",
      description:
        "Единый доступ ко всем офферам из чатов Telegram, включая закрытые площадки",
      icon: "/simplification-1.svg",
    },
  ];

  // More unique features
  const moreUniqueFeatures = [
    {
      title: "Партнёрская программа",
      description:
        "Если необходимое мини-приложение не представлено, можно пригласить владельцев и получать 5% от их сделок",
      icon: "/simplification-15.svg",
    },
    {
      title: "Таргетинг и наценки",
      description:
        "Подключение таргетинга позволяет продавать трафик по более высокой стоимости",
      icon: "/simplification-12.svg",
    },
    {
      title: "Прогрессивный кэшбэк",
      description:
        "Увеличение кэшбэка на 1% за каждые потраченные $5000, максимум до 5%",
      icon: "/simplification-8.svg",
    },
  ];

  // System participation options
  const participationOptions = [
    {
      title: "Рекламодателем",
      description: "Выбирайте слот и бронируйте размещение",
      icon: "/group-1-1.png",
    },
    {
      title: "Паблишером",
      description:
        "Регистрируйтесь, добавляйте мини-приложения, выставляйте оффер",
      icon: "/simplification-1.svg",
    },
  ];

  return (
    <div className="bg-[#eff1f7] min-h-screen overflow-x-hidden">
      {/* Header/Navigation */}
      <LandingPageHeader />

      {/* Hero Section */}
      <section className="pt-10 pb-20 text-center relative overflow-visible">
        {/* Левый логотип - больше по размеру */}
        <div className="absolute left-0 bottom-[-300px] h-[600px] w-[800px] pointer-events-none z-0 md:block hidden">
          <div className="absolute bottom-0 w-full h-full">
            <img 
              className="absolute bottom-0 left-[-150px] w-[800px] h-auto" 
              alt="Background Logo Left" 
              src="/bacground_for_fade.svg" 
            />
            <div className="absolute bottom-0 w-full h-2/3 bg-gradient-to-t from-[#eff1f7] to-transparent"></div>
          </div>
        </div>

        {/* Правый логотип - меньше по размеру */}
        <div className="absolute right-0 bottom-[-200px] h-full w-[600px] pointer-events-none z-0 md:block hidden">
          <div className="absolute bottom-0 w-full h-full">
            <img 
              className="absolute bottom-0 right-[-100px] w-[600px] h-auto" 
              alt="Background Logo Right" 
              src="/bacground_for_fade.svg" 
            />
            <div className="absolute bottom-0 w-full h-2/3 bg-gradient-to-t from-[#eff1f7] to-transparent"></div>
          </div>
        </div>

        <div className="max-w-[961px] mx-auto relative z-20 px-4">
          <div className="relative w-[86px] h-[95px] mx-auto mb-8">
            <img className="absolute w-[19px] h-[78px] top-[17px] left-[67px]" alt="Logo" src="/group-6.png" />
            <img className="absolute w-[19px] h-[78px] top-0 left-[33px]" alt="Logo" src="/group-7.png" />
            <img className="absolute w-[19px] h-[78px] top-[17px] left-0" alt="Logo" src="/group-8.png" />
          </div>
          
          <h1 className="text-[32px] md:text-[40px] leading-[1.3] font-medium text-[#0C172C] mb-6">
            Первый маркетплейс по покупке рекламы в Telegram Mini Apps
          </h1>
          
          <p className="text-[18px] md:text-[22px] text-[#0C172C] font-normal mb-8">
            Прозрачность вместо хаоса
          </p>

          <Button className="h-[60px] md:h-[75px] px-8 rounded-[18px] bg-[#2A67DC] mx-auto">
            <img className="w-6 h-6 mr-3" alt="Catalog" src="/group-238286.png" />
            <span className="font-medium text-white text-[17px]">
              Каталог приложений
            </span>
          </Button>
        </div>
      </section>

      {/* Stats Banner */}
      <div className="max-w-[1020px] mx-auto h-auto md:h-[140px] bg-[#071019] rounded-[32px] relative mb-20 overflow-hidden z-10 px-6 py-8 md:py-0 mx-4 md:mx-auto">
        <div className="absolute w-[624px] h-[252px] top-[22px] left-[-363px] bg-[#2a67dc99] rounded-[312px/126px] blur-[195.4px]" />
        <div className="absolute w-[624px] h-[252px] top-[-163px] left-[715px] bg-[#2a67dc99] rounded-[312px/126px] blur-[195.4px]" />
        <div className="flex items-center justify-center h-full">
          <p className="text-[24px] md:text-[32px] font-medium text-center">
            <span className="text-white">Более 100 млн. </span>
            <span className="text-[#7B8496]">активных пользователей</span>
            <span className="text-[#EBEEF4] block md:inline"> от</span>
            <span className="text-white"> $0.05</span>
          </p>
        </div>
      </div>

      {/* Info Banner */}
      <div className="w-full bg-[#ffffff66] border-y border-white py-[30px] mb-20 relative z-10 px-4 md:px-0">
        <p className="max-w-[871px] mx-auto text-center text-base font-normal text-[#0C172C] leading-[1.4]">
          TrafficGram — первая биржа рекламы в Telegram Mini Apps, предлагающая различные варианты размещения. Выберите TMA, таргетинг и необходимое количество трафика
        </p>
      </div>

      {/* For Whom Section */}
      <section id="for-whom" className="bg-[#0C172C] py-[80px] md:py-[140px] mb-20 px-4 md:px-0">
        <div className="max-w-[1362px] mx-auto relative">
          <div className="absolute w-[290px] h-80 top-0 left-[166px] opacity-50 md:block hidden">
            <img className="absolute w-[65px] h-[262px] top-[58px] left-[225px]" alt="Decoration" src="/group-9.png" />
            <img className="absolute w-[65px] h-[262px] top-0 left-[113px]" alt="Decoration" src="/group-10.png" />
            <img className="absolute w-[65px] h-[262px] top-[58px] left-0" alt="Decoration" src="/group-11.png" />
          </div>

          <div className="flex flex-col w-full md:w-[545px] items-start gap-[30px] md:absolute md:top-0 md:right-0 mb-10 md:mb-0">
            <h2 className="font-medium text-white text-4xl md:text-5xl leading-[1.2] md:leading-[57.6px]">
              Для кого предназначен TrafficGram?
            </h2>
            <Button className="h-[55px] gap-2 rounded-xl bg-[#2A67DC]">
              <img className="w-[25px] h-[25px]" alt="Join icon" src="/simplification.svg" />
              <span className="font-medium text-white text-[17px]">
                Присоединиться
              </span>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px] md:pt-[339px]">
            {forWhomCards.map((card, index) => (
              <Card key={index} className="w-full md:w-[318px] h-[301px] bg-[#1B263B] rounded-[18px] overflow-hidden border-none">
                <div className="w-full h-[161px] bg-[#111C31] overflow-hidden relative">
                  <img className="absolute w-[81px] h-[81px] top-10 left-5" alt="Icon" src={card.bgImage} />
                  {card.decorImage && (
                    <img 
                      className={`absolute ${
                        index === 1 
                          ? "w-[200px] h-[180px] -top-2 -right-3" 
                          : "w-[220px] h-[200px] -top-4 -right-12"
                      }`} 
                      alt="Decoration" 
                      src={card.decorImage} 
                    />
                  )}
                  <div className="absolute w-full h-36 top-[89px] left-0 bg-[#2A67DC66] rounded-[159.5px/72px] -rotate-180 blur-[125px]" />
                </div>
                <CardContent className="p-5">
                  <p className="font-normal text-[#EAEEF3] text-[17px] leading-[20.4px]">
                    {card.title}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Features Section */}
      <section id="uniqueness" className="max-w-[1360px] mx-auto mb-20 px-4 md:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
          <div>
            <Card className="bg-[#ffffff66] rounded-[32px] border border-solid border-white p-6 md:p-10 mb-[30px]">
              <CardContent className="p-0">
                <h2 className="font-medium text-[#0C172C] text-4xl md:text-5xl leading-[1.2] md:leading-[57.6px]">
                  Чем мы уникальны?
                </h2>
              </CardContent>
            </Card>

            <Card className="bg-[#ffffff66] rounded-[32px] border border-solid border-white p-6 md:p-10">
              {uniqueFeatures.map((feature, index) => (
                <React.Fragment key={index}>
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-[20px] md:gap-[31px]">
                    <div className="w-[106px] h-[106px] md:w-[126px] md:h-[126px] bg-white rounded-[18px] flex items-center justify-center shrink-0">
                      <img className="w-[60px] h-[60px] md:w-[72px] md:h-[72px]" alt={feature.title} src={feature.icon} />
                    </div>
                    <div className="flex flex-col gap-3.5 text-center md:text-left">
                      <h3 className="font-medium text-[#0C172C] text-xl md:text-2xl leading-[1.2] md:leading-[28.8px]">
                        {feature.title}
                      </h3>
                      <p className="font-normal text-[#566A8F] text-base leading-[22.4px]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  {index < uniqueFeatures.length - 1 && (
                    <Separator className="w-full h-[1px] my-8 md:my-10" />
                  )}
                </React.Fragment>
              ))}
            </Card>
          </div>

          <div className="space-y-[30px]">
            <Card className="bg-[#ffffff66] rounded-[32px] border border-solid border-white p-6 md:p-10">
              {moreUniqueFeatures.map((feature, index) => (
                <React.Fragment key={index}>
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-[20px] md:gap-[31px]">
                    <div className="w-[106px] h-[106px] md:w-[126px] md:h-[126px] bg-white rounded-[18px] flex items-center justify-center shrink-0">
                      <img className="w-[60px] h-[60px] md:w-[76px] md:h-[76px]" alt={feature.title} src={feature.icon} />
                    </div>
                    <div className="flex flex-col gap-3.5 text-center md:text-left">
                      <h3 className="font-medium text-[#0C172C] text-xl md:text-2xl leading-[1.2] md:leading-[28.8px]">
                        {feature.title}
                      </h3>
                      <p className="font-normal text-[#566A8F] text-base leading-[22.4px]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  {index < moreUniqueFeatures.length - 1 && (
                    <Separator className="w-full h-[1px] my-8 md:my-10" />
                  )}
                </React.Fragment>
              ))}
            </Card>

            <Card className="bg-[#ffffff66] rounded-[32px] border border-solid border-white p-6 md:p-10 flex items-center justify-center">
              <Button className="w-full h-[55px] gap-2 rounded-xl bg-[#2A67DC]">
                <img className="w-6 h-6" alt="Start icon" src="/simplification-11.svg" />
                <span className="font-medium text-white text-[17px]">
                  Начать работу
                </span>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Join Section */}
      <section id="how-to-join" className="max-w-[1362px] mx-auto mb-20 relative px-4 md:px-0">
        <div className="absolute w-[1567px] h-[842px] top-0 left-[-1091px] bg-[#2A67DC0D] rounded-[783.5px/421px] -rotate-180 blur-[125px]" />

        <h2 className="font-medium text-[#0C172C] text-4xl md:text-5xl leading-[1.2] md:leading-[57.6px] mb-[30px]">
          Как стать частью<br />
          системы?
        </h2>

        <div className="flex flex-col lg:flex-row gap-[30px]">
          <Card className="w-full lg:w-[680px] p-6 md:p-10 bg-[#ffffff66] rounded-[32px] border border-solid border-white backdrop-blur-[23.25px]">
            {participationOptions.map((option, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-[20px] md:gap-[31px]">
                  <div className="w-[106px] h-[106px] md:w-[126px] md:h-[126px] bg-white rounded-[18px] flex items-center justify-center shrink-0">
                    <img className="w-[53px] h-[53px] md:w-[63px] md:h-[63px]" alt={option.title} src={option.icon} />
                  </div>
                  <div className="flex flex-col w-full md:w-[395px] gap-[15px] md:gap-[22px] text-center md:text-left">
                    <h3 className="font-medium text-[#0C172C] text-xl md:text-2xl leading-[1.2] md:leading-[28.8px]">
                      {option.title}
                    </h3>
                    <p className="font-normal text-[#566A8F] text-base leading-[22.4px]">
                      {option.description}
                    </p>
                  </div>
                </div>
                {index < participationOptions.length - 1 && (
                  <Separator className="w-full md:w-[552px] h-[1.5px] my-8 md:my-10 mx-auto md:mx-0" />
                )}
              </React.Fragment>
            ))}
            <Button className="w-full h-[55px] gap-2 mt-8 md:mt-10 rounded-xl bg-[#2A67DC]">
              <img className="w-[25px] h-[25px]" alt="Join icon" src="/simplification.svg" />
              <span className="font-medium text-white text-[17px]">
                Присоединиться
              </span>
            </Button>
          </Card>

          <div className="w-full lg:w-[680px] flex justify-center">
            <img className="w-full md:max-w-[500px] lg:w-full" src="/human.svg" alt="Иллюстрация" />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full bg-white py-[80px] md:py-[140px] mb-20">
        <div className="max-w-[961px] mx-auto flex flex-col items-center gap-8 px-4 md:px-0">
          <div className="flex flex-col items-center gap-6 w-full">
            <div className="relative w-[86px] h-[95px]">
              <img className="absolute w-[19px] h-[78px] top-[17px] left-[67px]" alt="Logo element" src="/group-18.png" />
              <img className="absolute w-[19px] h-[78px] top-0 left-[33px]" alt="Logo element" src="/group-19.png" />
              <img className="absolute w-[19px] h-[78px] top-[17px] left-0" alt="Logo element" src="/group-20.png" />
            </div>
            <h2 className="font-medium text-[28px] md:text-[40px] leading-[1.3] md:leading-[52px] text-center">
              <span className="text-[#2A67DC]">TrafficGram</span>
              <span className="text-[#0C172C]"> — решение для тех, кто предпочитает алгоритмы, рейтинги и точный расчёт традиционным ручным сделкам</span>
            </h2>
          </div>
          <Button className="h-[55px] gap-2 rounded-xl bg-[#2A67DC]">
            <img className="w-6 h-6" alt="Register icon" src="/simplification-2.svg" />
            <span className="font-medium text-white text-[17px]">
              Зарегистрироваться
            </span>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};