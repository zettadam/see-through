import useCart from "./context";

export default function BasicCart() {
  const cart = useCart();
  return (
    <div>
      <p>Basic cart: {cart.totalItems} items</p>
    </div>
  );
}
