import useCart from "st_cart/useCart";

import getCatalogListing from "./services/getCatalogListing";
import FormAddToCart from "../form-add-to-cart/FormAddToCart";

import "./carousel-listing.css";
import { Product } from "../types";

type CartProduct = Product & { quantity: number };

function qtyInCart(cart: CartProduct[], item: CartProduct) {
  const x: CartProduct | undefined = cart.find((i) => i.id === item.id);

  return x ? x.quantity : 0;
}

export default function CatalogListing() {
  const { data, error, status } = getCatalogListing();
  const { items } = useCart();

  return (
    <div className="st-catalog-listing">
      <h2>Catalog listing</h2>
      {"pending" === status && <p>loading catalog...</p>}
      {"error" === status && error && <p>Error loading catalog</p>}
      {"success" === status && Array.isArray(data) ? (
        data.length ? (
          <>
            <div className="header">
              <span>Cover</span>
              <span>Details</span>
              <span>
                <span>Geek rating</span>
                <span>Average rating</span>
                <span>No. of voters</span>
              </span>
            </div>
            {data.map((a) => {
              const q = qtyInCart(items as unknown as CartProduct[], a);
              return (
                <article key={a.id}>
                  <figure>
                    <img
                      src={`/images/catalog/${a.smallImage}`}
                      alt={`${a.name} (Cover image)`}
                    />
                  </figure>
                  <div>
                    <h3>{a.name}</h3>
                    <p>{a.description}</p>
                    <p>
                      Price: <b>${a.price}</b>
                    </p>
                    <span className="add2cart">
                      <FormAddToCart product={a} />
                      {q > 0 && <b>{q} in cart</b>}
                    </span>
                  </div>
                  <ul>
                    <li>{a.geekRating}</li>
                    <li>{a.averageRating}</li>
                    <li>{a.voterCount}</li>
                  </ul>
                </article>
              );
            })}
          </>
        ) : (
          <p>Catalog items will be listed here.</p>
        )
      ) : null}
    </div>
  );
}
