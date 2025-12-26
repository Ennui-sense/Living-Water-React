import "./CartCard.scss";

import CartCardActionButton from "../CartCardActionButton/CartCardActionButton";
import CartCardCount from "../CartCardCount/CartCardCount";

import { useCart } from "~/hooks/useCart";

interface CartCardProps {
  title: string;
  imageSrc: string;
  price: number;
  id: number;
  count: number;
}

const CartCard = ({ title, id, imageSrc, price, count  }: CartCardProps) => {
  const { removeFromCart } = useCart();

  const formatPrice = (price: number) => {
    return price.toLocaleString("ru-Ru");
  };

  const onClickRemoveItem = () => {
    removeFromCart(id);
  };

  if (count === 0) {
    removeFromCart(id);
  }

  return (
    <li className="cart__item">
      <article className="cart-card">
        <header className="cart-card__header">
          <div className="cart-card__left">
            <div className="cart-card__wrapper-image">
              <img
                src={imageSrc}
                alt=""
                className="cart-card__image"
                width={75}
                height={75}
              />
            </div>

            <div className="cart-card__info">
              <h3 className="cart-card__title">{title}</h3>

              <div className="cart-card__buttons">
                <CartCardActionButton variant="compare" />
                <CartCardActionButton
                  variant="delete"
                  onClick={onClickRemoveItem}
                />
              </div>
            </div>
          </div>

          <div className="cart-card__right">
            <CartCardCount id={id} count={count} />

            <p className="cart-card__price">
              {formatPrice(price * count)}{" "}
              <span className="cart-card__ruble">₽</span>
            </p>
          </div>
        </header>
      </article>
    </li>
  );
};

export default CartCard;
