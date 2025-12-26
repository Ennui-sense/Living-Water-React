import "./Steps.scss";

import Section from "~/layouts/Section/Section";
import StepsCard from "~/components/StepsCard/StepsCard";
import StepsList from "~/components/StepsList/StepsList";

import { StepsCardsData } from "~/data/StepsCardsData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import "swiper/swiper-bundle.css";

const Steps = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(min-width: 768px)").matches);
    };

    checkMobile();

    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleResize = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <Section sectionName="steps" isGray={true}>
      <div className="steps__inner container">
        {isMobile ? (
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 4000,
            }}
            slidesPerView={1}
            spaceBetween={40}
            className="steps__list"
          >
            {StepsCardsData.map(
              ({ title, description, imageSrc, id }, index) => (
                <SwiperSlide key={id}>
                  <StepsCard
                    title={title}
                    description={description}
                    imageSrc={imageSrc}
                    index={index}
                  />
                </SwiperSlide>
              )
            )}
          </Swiper>
        ) : (
          <StepsList />
        )}
      </div>
    </Section>
  );
};

export default Steps;
