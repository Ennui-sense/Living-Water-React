import "./ReviewsCard.scss";

import type { IReviewsCard } from "~/data/ReviewsCardsData";

interface ReviewsCardProps {
  reviewCard: IReviewsCard;
}

const ReviewsCard = ({ reviewCard }: ReviewsCardProps) => {
  const { text, name, city } = reviewCard;

  return (
    <li className="reviews__item">
      <article className="reviews__card reviews-card">
        <div className="reviews-card__inner">
          <p className="reviews-card__text">{text}</p>

          <div className="reviews-card__info">
						<span className="reviews-card__img"></span>
            <div className="reviews-card__author">
              <p className="reviews-card__name">{name}</p>
              <p className="reviews-card__city">{city}</p>
            </div>
          </div>
        </div>
      </article>
    </li>
  );
};

export default ReviewsCard;
