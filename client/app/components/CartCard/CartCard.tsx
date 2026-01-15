import "./CartCard.scss";

import CartCardActionButton from "../CartCardActionButton/CartCardActionButton";
import CartCardCount from "../CartCardCount/CartCardCount";

import { useCart } from "~/hooks/useCart";
import { useCompare } from "~/hooks/useCompare";
import { useEffect, useState } from "react";

import Notification from "../Notification/Notification";

import { AnimatePresence } from "framer-motion";

import type { CartProduct } from "~/contexts/CartContext";

interface CartCardProps {
  product: CartProduct;
}

const CartCard = ({ product }: CartCardProps) => {
  const { title, id, images, price, count } = product;

  const { removeFromCart } = useCart();
  const { compareItems, addToCompare } = useCompare();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isInCompare, setIsInCompare] = useState<boolean>(false);

  const STRAPI_URL =
    import.meta.env.VITE_STRAPI_API_URL ?? "http://localhost:1337";

  const getStrapiMedia = (url?: string) => {
    if (!url) return "";
    return url.startsWith("http") ? url : `${STRAPI_URL}${url}`;
  };

  const imageSrc = getStrapiMedia(
    images.find((image) => image.url.includes("right"))?.url
  );

  const formatPrice = (price: number) => {
    return price.toLocaleString("ru-Ru");
  };

  const onClickRemoveItem = () => {
    removeFromCart(id);
  };

  if (count === 0) {
    removeFromCart(id);
  }

  const handleClickOnCompareButton = (product: CartProduct) => {
    const exists = compareItems.some((item) => item.id === product.id);
    setIsInCompare(exists);

    if (!exists) {
      addToCompare(product);
    }

    setIsVisible(true);
  };

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  });

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
                <CartCardActionButton
                  variant="compare"
                  onClick={() => handleClickOnCompareButton(product)}
                />
                <AnimatePresence>
                  {isVisible && (
                    <Notification
                      title={title}
                      availabilityInCompare={isInCompare}
                      imageSrc={imageSrc}
                      closeModal={() => setIsVisible(false)}
                    />
                  )}
                </AnimatePresence>

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
