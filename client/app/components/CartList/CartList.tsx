import { useCart } from "~/hooks/useCart";
import CartCard from "../CartCard/CartCard";

const CartList = () => {
  const { cartItems } = useCart();

  return (
    <ul className="cart__filled-list">
      {cartItems.map((product) => (
        <CartCard
          product={product}
          key={product.id}
        />
      ))}
    </ul>
  );
};

export default CartList;
