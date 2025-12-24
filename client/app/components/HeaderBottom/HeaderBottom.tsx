import "./HeaderBottom.scss";

import Logo from "~/components/Logo/Logo";
import ButtonSquare from "~/components/ButtonSquare/ButtonSquare";
import HeaderBottomMenu from "../HeaderBottomMenu/HeaderBottomMenu";
// import Cart from "~/components/Cart/Cart";

import CartIcon from "~/assets/icons/cart.svg?react";
import CompareIcon from "~/assets/icons/compare.svg?react";
import MenuIcon from "~/assets/icons/menu.svg?react";

import { useRef, useState } from "react";

// import { useCart } from "@/hooks/useCart";

const HeaderBottom = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const buttonRef = useRef<HTMLAnchorElement | null>(null);

  // const { cartItems } = useCart();

  // const countCartItems = cartItems.length;

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
          <ButtonSquare title="Сравнение" disabled mobileHidden>
            <CompareIcon></CompareIcon>
          </ButtonSquare>
          <ButtonSquare
            title="Корзина"
            onClick={openModal}
            // countProducts={countCartItems}
          >
            <CartIcon></CartIcon>
          </ButtonSquare>

          {/* <Cart isOpen={isOpen} closeModal={closeModal}></Cart> */}
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
