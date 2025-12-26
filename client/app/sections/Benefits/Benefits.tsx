import "./Benefits.scss";

import Section from "~/layouts/Section/Section";
import BenefitsList from "~/components/BenefitsList/BenefitsList";

const Benefits = () => {
  return (
    <Section sectionName="benefits">
      <div className="benefits__inner container">
        <BenefitsList />
      </div>
    </Section>
  );
};

export default Benefits;
