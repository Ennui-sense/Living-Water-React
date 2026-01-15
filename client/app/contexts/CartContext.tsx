import React, { useState, useEffect } from "react";
import { CartContext } from "~/hooks/useCart";
import type { IProduct } from "~/interfaces/IProduct";

interface ICartContext {
  cartItems: CartProduct[];
  getAmount: () => number;	
  addToCart: (product: CartProduct) => void;
  removeFromCart: (productId: number) => void;
  updateCount: (productId: number, newCount: number) => void;
}

export interface CartProduct extends IProduct {
	count: number
}

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartProduct[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("cart");
      return saved ? JSON.parse(saved) : [];
    }

    return [];
  });

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cartItems));
	}, [cartItems])

  const addToCart = (product: CartProduct) => {
    setCartItems((prev) => {
      const productInCard = prev.find((item) => item.id === product.id);

      if (productInCard) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, count: item.count + product.count }
            : item
        );
      }

      return [...prev, product];
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateCount = (productId: number, newCount: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, count: newCount } : item
      )
    );
  };

  const getAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.count,
      0
    );
  };

  const value: ICartContext = {
    cartItems,
    getAmount,
    addToCart,
    removeFromCart,
    updateCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
