import useCart from "./context";

import "./basic-cart.css";

export default function BasicCart() {
  const {
    changeQuantity,
    items,
    quantities,
    removeFromCart,
    totalItems,
    totalPrice,
    totalSalesTax,
  } = useCart();
  return (
    <div className="cart-basic">
      <p>
        Cart:{" "}
        {totalItems ? (
          <button type="button">
            {totalItems === 1 ? "1 item" : `${totalItems} items`}
          </button>
        ) : (
          "0 items"
        )}
      </p>
      {items.length ? (
        <div>
          <ul>
            {items.map((i) => (
              <li key={i.id}>
                <span className="details">
                  {i.smallImage && (
                    <img
                      src={`/images/catalog/${i.smallImage}`}
                      alt={`Cover of ${i.name}`}
                    />
                  )}
                  <span className="name">
                    <b>{i.name}</b>
                    <span>
                      Qty:{" "}
                      <input
                        type="number"
                        value={quantities[i.id]}
                        min={0}
                        max={100}
                        step={1}
                        onChange={(e) => {
                          const value = parseInt(e.target.value, 10);
                          if (!isNaN(value)) changeQuantity(i.id, value);
                        }}
                      />{" "}
                      or{" "}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          removeFromCart(i.id);
                        }}
                      >
                        Delete
                      </button>
                    </span>
                  </span>
                </span>
                <span className="price">
                  ${(quantities[i.id] * i.price).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
          <p>
            Total price: <b>${totalPrice.toFixed(2)}</b>
          </p>
          <p>
            Total sales tax: <b>${totalSalesTax.toFixed(2)}</b>
          </p>
          <p>
            Total to pay: <b>${(totalPrice + totalSalesTax).toFixed(2)}</b>
          </p>
        </div>
      ) : null}
    </div>
  );
}
