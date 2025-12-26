import "./Hero.scss";

import HeroImageSrc from "~/assets/images/hero-img.jpg";

import Button from "~/components/Button/Button";
import ModalFeedback from "~/components/ModalFeedback/ModalFeedback";

import { useState } from "react";

import { ModalsFeedbackData } from "~/data/ModalsFeedbackData";

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
            {ModalsFeedbackData.map(
              (modal) =>
                modal.modalType === "plan" && (
                  <ModalFeedback
                    closeModal={closeModal}
                    isOpen={isOpen}
                    title={modal.title}
                    description={modal.description}
                    buttonText={modal.buttonText}
                    inputs={modal.inputs}
                  />
                )
            )}
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
