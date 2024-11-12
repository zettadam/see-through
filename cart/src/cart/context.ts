import { createContext, useContext } from "react";

import type { Cart } from "./types";

export const CartContext = createContext<Cart>({
  changeQuantity: () => null,
  items: [],
  quantities: {},
  placeInCart: () => null,
  removeFromCart: () => null,
  totalItems: 0,
  totalPrice: 0.0,
  totalSalesTax: 0.0,
});

export default function useCart(): Cart {
  return useContext(CartContext);
}
