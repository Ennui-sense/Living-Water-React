import clsx from "clsx";

import "./CartCardActionButton.scss";

interface CartCardActionButtonProps {
  variant: "delete" | "compare";
	onClick?: () => void
}

const CartCardActionButton = ({ variant, onClick }: CartCardActionButtonProps) => {
  return (
    <button
      className={clsx(
        "cart-card-action-button",
        `cart-card-action-button--${variant}`
      )}
			onClick={onClick}
    >
      {variant === "compare" ? "Сравнить" : "Удалить"}
    </button>
  );
};

export default CartCardActionButton;
