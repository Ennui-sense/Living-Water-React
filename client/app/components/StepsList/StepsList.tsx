import { StepsCardsData } from "~/data/StepsCardsData";
import StepsCard from "../StepsCard/StepsCard";

const StepsList = () => {
  return (
    <ul className="steps__list">
      {StepsCardsData.map(({ title, description, imageSrc, id }, index) => (
        <li className="steps__item" key={id}>
          <StepsCard
            title={title}
            description={description}
            imageSrc={imageSrc}
            index={index}
          />
        </li>
      ))}
    </ul>
  );
};

export default StepsList;
