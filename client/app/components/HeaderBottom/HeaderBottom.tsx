import "./HeaderBottom.scss";

import Logo from "~/components/HeaderLogo/HeaderLogo";
import ButtonSquare from "~/components/ButtonSquare/ButtonSquare";
import HeaderBottomMenu from "../HeaderBottomMenu/HeaderBottomMenu";
import Cart from "~/components/Cart/Cart";

import CartIcon from "~/assets/icons/cart.svg?react";
import CompareIcon from "~/assets/icons/compare.svg?react";
import MenuIcon from "~/assets/icons/menu.svg?react";

import { useState } from "react";

import { useCart } from "~/hooks/useCart";
import { useCompare } from "~/hooks/useCompare";

const HeaderBottom = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { cartItems } = useCart();
  const { compareItems } = useCompare();

  const countCartItems = cartItems.length;
  const countCompareItems = compareItems.length;

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  return (
    <div className="header-bottom">
      <div className="header-bottom__inner container">
        <ButtonSquare title="Открыть меню" desktopHidden>
          <MenuIcon />
        </ButtonSquare>

        <Logo />

        <HeaderBottomMenu />

        <div className="header-bottom__actions">
          <ButtonSquare
            title="Сравнение"
            disabled
            mobileHidden
            countProducts={countCompareItems}
          >
            <CompareIcon></CompareIcon>
          </ButtonSquare>
          <ButtonSquare
            title="Корзина"
            onClick={openModal}
            countProducts={countCartItems}
          >
            <CartIcon></CartIcon>
          </ButtonSquare>

          <Cart isOpen={isOpen} closeModal={closeModal}></Cart>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
