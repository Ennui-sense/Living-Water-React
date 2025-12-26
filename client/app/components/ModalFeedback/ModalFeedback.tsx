import "./ModalFeedback.scss";

import Button from "../Button/Button";
import CrossButton from "../CrossButton/CrossButton";

import type { IInputModalFeedback } from "~/data/ModalsFeedbackData";

import type { ReactNode } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

interface ModalFeedbackProps {
  title: ReactNode;
  description: string;
  buttonText: string;
  inputs: IInputModalFeedback[];
  isOpen: boolean;
  closeModal: () => void;
}

const ModalFeedback = ({
  title,
  description,
  buttonText,
  inputs,
  isOpen,
  closeModal,
}: ModalFeedbackProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="modal-feedback"
    >
      <div className="modal-feedback__inner">
        <div className="modal-feedback__header">
          <p className="modal-feedback__title h2">{title}</p>
          <p className="modal-feedback__description">{description}</p>
        </div>
        <form action="post" className="modal-feedback__form">
          <div className="modal-feedback__inputs">
            {inputs.map((input) => (
              <>
                <label htmlFor={input.id} className="visually-hidden"></label>
                <input
                  type={input.type}
                  className="modal-feedback__input"
                  id={input.id}
                  placeholder={input.placeholder}
                  required
                />
              </>
            ))}
          </div>
          <Button>{buttonText}</Button>
        </form>
      </div>
      <CrossButton top="1.875rem" right="1.5625rem" onCloseButtonClick={closeModal}></CrossButton>
    </Modal>
  );
};

export default ModalFeedback;
