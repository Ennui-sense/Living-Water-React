import "./FactsCard.scss";

interface FactsCardProps {
  digits: string;
  text: string;
}

const FactsCard = ({ digits, text }: FactsCardProps) => {
  return (
    <li className="facts__item">
      <article className="facts-card">
        <h3 className="facts-card__title">
          <span className="facts-card__title-accent">{digits}</span>{" "}
          <span className="facts-card__title-simple">{text}</span>
        </h3>
      </article>
    </li>
  );
};

export default FactsCard;
