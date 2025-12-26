import "./NewsCard.scss";

interface NewsCardProps {
  imageSrc: string;
  date: string;
  title: string;
}

const NewsCard = ({ imageSrc, date, title }: NewsCardProps) => {
  const formatDateForTime = (date: string) => {
    return date.split("–").reverse().join("-");
  };

  return (
    <article className="news__card news-card">
      <div className="news-card__wrapper-image">
        <img
          src={imageSrc}
          alt=""
          className="news-card__image"
          loading="lazy"
          width={480}
          height={300}
        />
      </div>

      <div className="news-card__content">
        <header className="news-card__header">
          <p className="news-card__date">
            <time dateTime={formatDateForTime(date)}>{date}</time>
          </p>
          <h3 className="news-card__title">{title}</h3>
        </header>

        <a href="/" className="news-card__link">
          <span className="news-card__link-text">Читать подробнее</span>
        </a>
      </div>
    </article>
  );
};

export default NewsCard;
