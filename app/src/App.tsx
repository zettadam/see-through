import CartProvider from "st_cart/CartProvider";
import BasicCart from "st_cart/BasicCart";
import CatalogCarousel from "st_catalog/CatalogCarousel";
import CatalogListing from "st_catalog/CatalogListing";

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
