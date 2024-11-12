import CartProvider from "seethrough_cart/CartProvider";
import BasicCart from "seethrough_cart/BasicCart";
import CatalogCarousel from "seethrough_catalog/CatalogCarousel";
import CatalogListing from "seethrough_catalog/CatalogListing";

import "./app.css";

function AppHeader() {
  return (
    <header>
      <h1>See-through App</h1>
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

function AppFooter() {
  return (
    <footer>
      <p>Copyright &copy; 2024 See-through Ltd.</p>
    </footer>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppHeader />
      <AppContent />
      <AppFooter />
    </CartProvider>
  );
}
