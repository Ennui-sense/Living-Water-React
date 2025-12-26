import "./Reviews.scss";

import Section from "~/layouts/Section/Section";
import ReviewsCard from "~/components/ReviewsCard/ReviewsCard";
import ReviewsVideo from "~/components/ReviewsVideo/ReviewsVideo";

import { ReviewsCardsData } from "~/data/ReviewsCardsData";
import { ReviewsVideosData } from "~/data/ReviewsVideosData";

import type { IReviewsCard } from "~/data/ReviewsCardsData";
import type { IReviewsVideo } from "~/data/ReviewsVideosData";

import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

import "swiper/swiper-bundle.css";

const Reviews = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  type ReviewItem =
    | {
        type: "card";
        data: IReviewsCard;
      }
    | {
        type: "video";
        data: IReviewsVideo;
      };

  const getOrderedItems = () => {
    const orderedItems: ReviewItem[] = [];

    const allItems: ReviewItem[] = [
      ...ReviewsCardsData.map<ReviewItem>((item) => ({ type: "card", data: item })),
      ...ReviewsVideosData.map<ReviewItem>((item) => ({ type: "video", data: item })),
    ];

    const orderIndexes: number[] = [0, 4, 5, 1, 2, 3, 6];

    orderIndexes.forEach((index) => {
      orderedItems.push(allItems[index]);
    });

    return orderedItems;
  };

  const orderedReviews = getOrderedItems();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const checkMobile = () => {
      setIsMobile(mediaQuery.matches);
    };

    checkMobile();

    const handleResize = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  const renderReviewItem = (item: ReviewItem) => {
    if (item.type === "card") return <ReviewsCard reviewCard={item.data}/>;

    return <ReviewsVideo reviewVideo={item.data} />;
  };

  return (
    <Section sectionName="reviews">
      <div className="reviews__inner container">
        {isMobile ? (
          <Swiper
            slidesPerView={1.1}
            spaceBetween={15}
            className="reviews_list"
          >
            {orderedReviews.map((item, index) => (
              <SwiperSlide key={item.type + index}>
                {renderReviewItem(item)} 
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <ul className="reviews__list">
            {orderedReviews.map((item, index) => (
              <li className="reviews__item" key={item.type + index}>{renderReviewItem(item)}</li>
            ))}
          </ul>
        )}
      </div>
    </Section>
  );
};

export default Reviews;
