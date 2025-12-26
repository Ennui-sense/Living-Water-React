import "./Section.scss";

import Button from "~/components/Button/Button";
import ButtonSquare from "~/components/ButtonSquare/ButtonSquare";
import ModalFeedback from "~/components/ModalFeedback/ModalFeedback";

import { SectionsData } from "~/data/SectionsData";
import { ModalsFeedbackData } from "~/data/ModalsFeedbackData";

import type { ReactNode } from "react";
import { useState } from "react";
import clsx from "clsx";

import NewsSectionButtonSquareIcon from "~/assets/icons/mail.svg?react";

interface SectionProps {
  sectionName: string;
  isGray?: boolean;
  isOther?: boolean;
  children: ReactNode;
  mobileCenter?: boolean;
}

const Section = ({
  sectionName,
  isGray = false,
  isOther = false,
  children,
  mobileCenter,
}: SectionProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const currentSection = SectionsData.find(
    (section) => section.name === sectionName
  );

  const mailingModal = ModalsFeedbackData.find(
    (modal) => modal.modalType === "mailing"
  );

  if (!mailingModal || !currentSection) {
    return null;
  }

	if (!currentSection) {
		return null
	}

  const { title, description, button, buttonSquareInner } = currentSection;

  return (
    <section
      className={clsx("section", {
        "section--gray": isGray,
        "section--other container": isOther,
      })}
      key={sectionName}
    >
      <header
        className={clsx("section__header", {
          container: !isOther,
          "section__header--mobile-center": mobileCenter,
        })}
      >
        <h2 className="section__title">{title}</h2>

        <div className="section__info">
          {description && <p className="section__description">{description}</p>}
          <div className="section__buttons">
            {button?.buttonText && (
              <Button
                isDisabled={button.isDisabled}
                href={button.href}
              >
                {button.buttonText}
              </Button>
            )}
            {buttonSquareInner && (
              <ButtonSquare
                isLarge
                title="Подписка на новости"
                onClick={openModal}
              >
                {<NewsSectionButtonSquareIcon />}
              </ButtonSquare>
            )}

            <ModalFeedback
              isOpen={isOpen}
              closeModal={closeModal}
              title={mailingModal.title}
              description={mailingModal.description}
              inputs={mailingModal.inputs}
              buttonText={mailingModal.buttonText}
            />
          </div>
        </div>
      </header>

      <div className={clsx("section__body", sectionName)}>{children}</div>
    </section>
  );
};

export default Section;
