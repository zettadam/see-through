import * as React from "react";

import type { Cart } from "./types";

export const CartContext = React.createContext<Cart>({
  items: [],
  totalItems: 0,
  totalPrice: 0.0,
  totalSalesTax: 0.0,
});

export default function useCart(): Cart {
  return React.useContext(CartContext);
}
