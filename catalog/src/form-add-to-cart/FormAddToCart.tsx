import * as React from "react";

import useCart from "seethrough_cart/useCart";
import type { Product } from "../types";

export default function FormAddToCart({ product }: { product: Product }) {
  const formRef = React.useRef<React.ElementRef<"form">>(null);
  const { placeInCart } = useCart();

  const handleAdd2Cart: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (formRef.current) {
      const data = new FormData(formRef.current);

      console.log("formData", data);
      console.log("quantity", data.get("quantity"));

      console.log("product", product);

      const q = data.get("quantity");
      const n = q ? parseInt(q as string, 10) : 1;
      placeInCart(product, n);
    }
  };

  return (
    <form method="post" action="." onSubmit={handleAdd2Cart} ref={formRef}>
      <input
        type="number"
        name="quantity"
        defaultValue={1}
        min={1}
        max={100}
        step={1}
      />
      <button type="submit">Add to cart</button>
    </form>
  );
}
