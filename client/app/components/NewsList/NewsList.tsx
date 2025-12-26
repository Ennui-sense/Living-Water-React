import NewsCard from "../NewsCard/NewsCard";

import { NewsCardsData } from "~/data/NewsCardsData";

const NewsList = () => {
  return (
    <ul className="news__list">
      {NewsCardsData.map(({ id, date, title, imageSrc }) => (
        <NewsCard key={id} date={date} title={title} imageSrc={imageSrc} />
      ))}
    </ul>
  );
};

export default NewsList;
