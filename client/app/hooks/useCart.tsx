import { createContext, useContext } from "react";

interface ICartContext {
  cartItems: Product[];
  getAmount: () => number;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
	updateCount: (productId: number, newCount: number) => void
}

interface Product {
  id: number;
  title: string;
  price: number;
  imageSrc: string;
  count: number;
}

export const CartContext = createContext<ICartContext | undefined>(undefined)

export const useCart = () => {
	const context = useContext(CartContext)
	if (context === undefined) {
		throw new Error("useCart может быть использован только вместе с CartProvider")
	}

	return context
}
