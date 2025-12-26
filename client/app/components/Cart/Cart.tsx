import "./Cart.scss";

import Modal from "react-modal";

import { useCart } from "~/hooks/useCart";

import Button from "../Button/Button";
import CrossButton from "../CrossButton/CrossButton";
import CartList from "../CartList/CartList";

Modal.setAppElement("#root");

interface CartProps {
  isOpen: boolean;
  closeModal: () => void;
}

const Cart = ({ isOpen, closeModal }: CartProps) => {
  const { cartItems, getAmount } = useCart();

  const countProducts = cartItems.length;

  const formatPrice = (price: number) => {
    return price.toLocaleString("ru-Ru");
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className={{
        base: "cart",
        afterOpen: "cart--after-open",
        beforeClose: "cart--before-close",
      }}
    >
      {countProducts > 0 ? (
        <div className="cart__filled-inner">
          <span className="cart__filled-header">
            <h2 className="cart__filled-title">Корзина</h2>
            <p className="cart__filled-count">/ {countProducts} шт.</p>
          </span>

          <CartList />

          <div className="cart__filled-footer">
            <div className="cart__filled-total">
              <p className="cart__filled-text">Итого</p>
              <p className="cart__filled-amount">
                {formatPrice(getAmount())}{" "}
                <span className="cart__filled-rubles">₽</span>
              </p>
            </div>

            <Button isDisabled>Оформить заказ</Button>
          </div>
        </div>
      ) : (
        <div className="cart__empty-inner">
          <div className="cart__empty-info">
            <div className="cart__empty-body">
              <h2 className="cart__empty-title">
                В корзине
                <br />
                нет товаров
              </h2>
              <p className="cart__empty-description">
                Посмотрите предложения на главной странице иливоспользуйтесь
                каталогом
              </p>
            </div>
            <div className="cart__empty-buttons">
              <Button href="/products">Каталог товаров</Button>
              <Button href="/" variant="transparent">
                Главная
              </Button>
            </div>
          </div>
        </div>
      )}

      <CrossButton
        onCloseButtonClick={closeModal}
        isLarge
        top="2.5rem"
        right="2.5rem"
        hoverEffectSmall
      />
    </Modal>
  );
};

export default Cart;
