import CatalogCarousel from "seethrough_catalog/CatalogCarousel";
import CatalogListing from "seethrough_catalog/CatalogListing";

import "./app.css";

export default function App() {
  return (
    <div className="content">
      <h1>App</h1>

      <CatalogCarousel />
      <CatalogListing />
    </div>
  );
}
