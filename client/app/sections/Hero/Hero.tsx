import "./Hero.scss";

import HeroImageSrc from "~/assets/images/hero-img.jpg";

import Button from "~/components/Button/Button";
// import ModalFeedback from "~/components/ModalFeedback/ModalFeedback";

import { useState } from "react";

// import { modalFeedbackData } from "@/data/modalFeedbackData";

const Hero = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section className="section">
      <div className="section__body hero">
        <div className="hero__inner container">
          <div className="hero__body">
            <h1 className="hero__title">Покупай воду а не бутылки</h1>
            <p className="hero__description">
              Откройте свой бизнес с аппаратами по продаже питьевой воды с
              высоким доходом, свободной нишей и низкими рисками
            </p>
            <Button isLarge onClick={openModal}>
              Скачать бизнес-план
            </Button>
            {/* {modalFeedbackData.map(
              (item) =>
                item.name === "plan" && (
                  <ModalFeedback
                    closeModal={closeModal}
                    isOpen={isOpen}
                    title={item.title}
                    description={item.description}
                    buttonText={item.buttonText}
                    inputsInfo={item.inputsInfo}
                  />
                )
            )} */}
          </div>

          <img
            src={HeroImageSrc}
            alt=""
            width={705}
            height={685}
            loading="lazy"
            className="hero__image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
