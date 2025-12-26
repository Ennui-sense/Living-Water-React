import "./News.scss";

import Section from "~/layouts/Section/Section";
import NewsCard from "~/components/NewsCard/NewsCard";
import NewsList from "~/components/NewsList/NewsList";

import { NewsCardsData } from "~/data/NewsCardsData";

import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import "swiper/swiper-bundle.css";

const News = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const checkMobile = () => {
      setIsMobile(mediaQuery.matches);
    };

    checkMobile();

    const handleQuery = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handleQuery);

    return () => {
      mediaQuery.removeEventListener("change", handleQuery);
    };
  }, []);

  return (
    <Section sectionName="news" isOther={true}>
      <div className="news__inner">
        {isMobile ? (
          <Swiper slidesPerView={1.1} spaceBetween={15} className="news__list">
            {NewsCardsData.map(({ title, date, imageSrc, id }) => (
              <SwiperSlide key={id}>
                <NewsCard date={date} title={title} imageSrc={imageSrc} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <NewsList />
        )}
      </div>
    </Section>
  );
};

export default News;
