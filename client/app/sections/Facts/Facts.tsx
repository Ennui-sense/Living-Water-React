import "./Facts.scss";

import Section from "~/layouts/Section/Section";
import FactsList from "~/components/FactsList/FactsList";

const Facts = () => {
  return (
    <Section sectionName="facts">
      <div className="facts__inner container">
				<FactsList/>
      </div>
    </Section>
  );
};

export default Facts;
