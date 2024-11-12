import * as React from "react";

import useCart from "st_cart/useCart";
import type { Product } from "../types";

export default function FormAddToCart({ product }: { product: Product }) {
  const { placeInCart } = useCart();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const data = new FormData(e.target as HTMLFormElement);
    const q = data.get("quantity");
    const n = q ? parseInt(q as string, 10) : 1;
    placeInCart(product, n);
  };

  return (
    <form method="post" action="." onSubmit={handleSubmit}>
      <input
        type="number"
        name="quantity"
        defaultValue={1}
        min={1}
        max={100}
        step={1}
      />
      <button type="submit" className="btn-add">
        Add to cart
      </button>
    </form>
  );
}
