import "./BenefitsCard.scss";

import clsx from "clsx";

interface BenefitsCardProps {
  title: string;
  description: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  index: number;
}

const BenefitsCard = ({
  title,
  description,
  Icon,
  index,
}: BenefitsCardProps) => {
  return (
    <li className="benefits__item">
      <article className={clsx("benefits-card", `benefits-card--${index + 1}`)}>
        <Icon />
        <div className="benefits-card__body">
          <h3 className="benefits-card__title">{title}</h3>
          <p className="benefits-card__description">{description}</p>
        </div>
      </article>
    </li>
  );
};

export default BenefitsCard;
