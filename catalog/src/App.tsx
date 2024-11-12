import CartProvider from "seethrough_cart/CartProvider";
import BasicCart from "seethrough_cart/BasicCart";
import CatalogListing from "./listing/CatalogListing";
import CatalogCarousel from "./carousel/CatalogCarousel";

import "./app.css";

function AppHeader() {
  return (
    <header>
      <h1>Catalog</h1>
      <BasicCart />
    </header>
  );
}

function AppContent() {
  return (
    <main>
      <CatalogCarousel />
      <CatalogListing />
    </main>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppHeader />
      <AppContent />
    </CartProvider>
  );
}
