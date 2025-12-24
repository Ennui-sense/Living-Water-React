import "./Button.scss";

import type { ReactNode } from "react";

import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  isLarge?: boolean;
  isBadge?: boolean;
  isDisabled?: boolean;
  href?: string;
  onClick?: () => void;
  variant?: "transparent";
}

const Button = ({
  children,
  isLarge,
  isBadge,
  isDisabled,
  href,
  onClick,
  variant,
}: ButtonProps) => {
  const classes = clsx(
    "button",
    {
      "button--badge": isBadge,
      "button--large": isLarge,
      "button--disabled": isDisabled,
    },
    variant && `button--${variant}`
  );

  if (isBadge) {
    return <span className={classes}>{children}</span>;
  }

  if (href) {
    return (
      <a href={href} className={classes} aria-disabled={isDisabled}>
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
