import { BenefitsCardsData } from "~/data/BenefitsCardsData";

import BenefitsCard from "../BenefitsCard/BenefitsCard";

const BenefitsList = () => {
  return (
    <ul className="benefits__list">
      {BenefitsCardsData.map(({ id, title, description, Icon }, index) => (
        <BenefitsCard
          title={title}
          description={description}
          Icon={Icon}
          key={id}
          index={index}
        />
      ))}
    </ul>
  );
};

export default BenefitsList;
