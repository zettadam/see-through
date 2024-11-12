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
      remotes: {
        seethrough_cart:
          "seethrough_cart@http://localhost:3002/mf-manifest.json",
      },
      shared: ["react", "react-dom", "@tanstack/react-query"],
    }),
  ],
  server: {
    port: 3001,
  },
});
