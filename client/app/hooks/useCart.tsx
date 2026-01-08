import { createContext, useContext } from "react";
import type { IProduct } from "~/interfaces/IProduct";

interface ICartContext {
  cartItems: CartProduct[];
  getAmount: () => number;
  addToCart: (product: CartProduct) => void;
  removeFromCart: (productId: number) => void;
	updateCount: (productId: number, newCount: number) => void
}

interface CartProduct extends IProduct {
	count: number
}

export const CartContext = createContext<ICartContext | undefined>(undefined)

export const useCart = () => {
	const context = useContext(CartContext)
	if (context === undefined) {
		throw new Error("useCart может быть использован только вместе с CartProvider")
	}

	return context
}
