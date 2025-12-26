import { useCart } from "~/hooks/useCart";
import CartCard from "../CartCard/CartCard";

const CartList = () => {
  const { cartItems } = useCart();

  return (
    <ul className="cart__filled-list">
      {cartItems.map(({ id, imageSrc, title, price, count }) => (
        <CartCard
          imageSrc={imageSrc}
          title={title}
          price={price}
          count={count}
          id={id}
          key={id}
        />
      ))}
    </ul>
  );
};

export default CartList;
