import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: "seethrough_catalog",
      exposes: {
        "./CatalogCarousel": "./src/carousel/CatalogCarousel.tsx",
        "./CatalogDetails": "./src/details/CatalogDetails.tsx",
        "./CatalogListing": "./src/listing/CatalogListing.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 3001,
  },
});
