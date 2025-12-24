import "./About.scss";

import Section from "~/layouts/Section/Section";

import AboutImage from "~/assets/images/about-img.jpg";

const About = () => {
  return (
    <Section sectionName="about">
      <div className="about__inner container">
        <img
          src={AboutImage}
          alt="Наша команда. Они показывают класс..."
          loading="lazy"
          width={1290}
          height={500}
          className="about__image"
        />
      </div>
    </Section>
  );
};

export default About;
