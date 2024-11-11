import CatalogListing from "./listing/CatalogListing";
import CatalogCarousel from "./carousel/CatalogCarousel";

import "./app.css";

export default function App() {
  return (
    <div className="content">
      <h1>Catalog</h1>

      <CatalogCarousel />
      <CatalogListing />
    </div>
  );
}
