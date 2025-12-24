import { FactsCardsData } from "~/data/FactsCardsData";

import FactsCard from "../FactsCard/FactsCard";

const FactsList = () => {
  return (
    <ul className="facts__list">
      {FactsCardsData.map(({id, digits, text}) => (
        <FactsCard digits={digits} text={text} key={id}></FactsCard>
      ))}
    </ul>
  );
};

export default FactsList;
