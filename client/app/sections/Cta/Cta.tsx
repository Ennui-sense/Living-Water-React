import "./Cta.scss";

import Button from "~/components/Button/Button";
import ModalFeedback from "~/components/ModalFeedback/ModalFeedback";

import { ModalsFeedbackData } from "~/data/ModalsFeedbackData";

import { useState } from "react";

const Cta = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <section className="section container">
      <div className="section__body cta">
        <div className="cta__inner">
          <p className="cta__title">
            Начни бизнес
            <br />с Живой водой
          </p>
          <Button onClick={openModal}>Начать бизнес</Button>
          {ModalsFeedbackData.map(
            (modal) =>
              modal.modalType === "plan" && (
                <ModalFeedback
                  title={modal.title}
                  description={modal.description}
                  buttonText={modal.buttonText}
                  isOpen={isOpen}
                  closeModal={closeModal}
                  inputs={modal.inputs}
									key={modal.id}
                />
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default Cta;
