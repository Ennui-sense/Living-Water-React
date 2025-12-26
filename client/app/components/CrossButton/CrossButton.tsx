import "./CrossButton.scss";

import clsx from "clsx";

import CrossIcon from "~/assets/icons/close.svg?react";

interface CrossButtonProps {
  onCloseButtonClick: () => void;
  top: string;
  right: string;
  isLarge?: boolean;
  hoverEffectSmall?: boolean;
}

const CrossButton = ({
  onCloseButtonClick,
  isLarge,
  top,
  right,
  hoverEffectSmall,
}: CrossButtonProps) => {
  return (
    <button
      className={clsx("cross-button", {
        "cross-button--large": isLarge,
        "cross-button--hover-effect-small": hoverEffectSmall,
      })}
      type="button"
      onClick={onCloseButtonClick}
      style={{ top: top, right: right }}
    >
      <CrossIcon />

      <span className="visually-hidden">Закрыть модальное окно</span>
    </button>
  );
};

export default CrossButton;
