import "./CartCardCount.scss";

import PlusIcon from "~/assets/icons/plus.svg?react";
import MinusIcon from "~/assets/icons/minus.svg?react";

import { useCart } from "~/hooks/useCart";

interface CartCardCountProps {
  id: number;
  count: number;
}

const CartCardCount = ({ id, count }: CartCardCountProps) => {
  const { updateCount } = useCart();

  return (
    <div className="cart-card-count">
      <button
        type="button"
        className="cart-card-count__button"
        onClick={() => updateCount(id, count - 1)}
      >
        <MinusIcon />
      </button>

      <p className="cart-card-count__value">{count}</p>

      <button
        type="button"
        className="cart-card-count__button"
        onClick={() => updateCount(id, count + 1)}
      >
        <PlusIcon />
      </button>
    </div>
  );
};

export default CartCardCount;
