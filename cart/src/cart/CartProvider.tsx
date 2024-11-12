import * as React from "react";

import { CartContext } from "./context";
import type { Product } from "./types";

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = React.useState<Product[]>([]);

  const placeInCart = (product: Product, quantity: number = 1) => {
    let nextItems: Product[];
    let item: Product | undefined;

    const index: number = cart.findIndex((i) => i.id === product.id);
    item = index >= 0 ? cart[index] : undefined;

    if (item) {
      if (quantity > 0) {
        nextItems = cart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i,
        );
      } else {
        nextItems = [...cart];
        nextItems.splice(index, 1);
      }
      setCart(nextItems);
    } else {
      nextItems = [...cart];
      nextItems.push({ ...product, quantity });
      setCart(nextItems);
    }
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const totalSalesTax = cart.reduce(
    (acc, item) => acc + (item.salesTaxRate / 100) * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        items: cart,
        placeInCart,
        totalItems,
        totalPrice,
        totalSalesTax,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
