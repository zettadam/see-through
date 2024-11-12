import * as React from "react";

import { CartContext } from "./context";
import type { Product } from "./types";

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [items, setItems] = React.useState<Product[]>([]);
  const [quantities, setQuantities] = React.useState<Record<string, number>>(
    {},
  );

  const placeInCart = (product: Product, quantity: number = 1) => {
    let nextItems: Product[];
    let item: Product | undefined;

    const index: number = items.findIndex((i) => i.id === product.id);
    item = index >= 0 ? items[index] : undefined;

    if (item) {
      setQuantities({
        ...quantities,
        [item.id]: quantities[item.id] + quantity,
      });
    } else {
      nextItems = [...items];
      nextItems.push({ ...product });
      setItems(nextItems);
      setQuantities({ ...quantities, [product.id]: quantity });
    }
  };

  const removeFromCart = (id: string) => {
    const index: number = items.findIndex((i) => i.id === id);
    const item = index >= 0 ? items[index] : undefined;

    if (item) {
      const nextItems = [...items];
      nextItems.splice(index, 1);
      setItems(nextItems);
      const nextQuantities = { ...quantities };
      delete nextQuantities[item.id];
      setQuantities(nextQuantities);
    }
  };

  const changeQuantity = (id: string, quantity: number) => {
    if (id && quantity) {
      const nextQuantities = { ...quantities };
      nextQuantities[id] = quantity;
      setQuantities(nextQuantities);
    }
  };

  const totalItems = Object.values(quantities).reduce((acc, i) => acc + i, 0);

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * quantities[item.id],
    0,
  );

  const totalSalesTax = items.reduce(
    (acc, item) => acc + item.salesTaxRate * item.price * quantities[item.id],
    0,
  );

  return (
    <CartContext.Provider
      value={{
        items,
        changeQuantity,
        quantities,
        placeInCart,
        removeFromCart,
        totalItems,
        totalPrice,
        totalSalesTax,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
