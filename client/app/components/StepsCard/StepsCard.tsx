import "./StepsCard.scss";

interface StepsCardProps {
  title: string;
  description: string;
  imageSrc: string;
  index: number;
}

const StepsCard = ({ title, description, imageSrc, index }: StepsCardProps) => {
  return (
    <article className="steps__card steps-card">
      <img
        src={imageSrc}
        alt=""
        width={630}
        height={540}
        loading="lazy"
        className="steps-card__image"
      />
      <div className="steps-card__body">
        <div className="steps-card__number">{index + 1}</div>
        <h3 className="steps-card__title">{title}</h3>
        <p className="steps-card__description">{description}</p>
      </div>
    </article>
  );
};

export default StepsCard;
