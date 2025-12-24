import type { ReactNode } from "react";

import "./ButtonSquare.scss";

import clsx from "clsx";

interface ButtonSquareProps {
  children: ReactNode;
  title: string;
  disabled?: boolean;
  desktopHidden?: boolean;
  mobileHidden?: boolean;
  isLarge?: boolean;
  onClick?: () => void;
  countProducts?: number;
}

const ButtonSquare = ({
  children,
  title,
  disabled = false,
  desktopHidden = false,
  mobileHidden = false,
  isLarge = false,
  onClick,
  countProducts,
}: ButtonSquareProps) => {
  const buttonSquareClasses = clsx("button-square", {
    "button-square--disabled": disabled,
    "button-square--desktop-hidden": desktopHidden,
    "button-square--mobile-hidden": mobileHidden,
    "button-square--large": isLarge,
  });

  return (
    <button
      type="button"
      className={buttonSquareClasses}
      disabled={disabled}
      onClick={onClick}
    >
      {children}

      <span className="visually-hidden">{title}</span>

      {typeof countProducts === "number" && countProducts >= 1 && (
        <span className="button-square__badge">
          <span className="button-square__products-count">{countProducts}</span>
        </span>
      )}
    </button>
  );
};

export default ButtonSquare;
