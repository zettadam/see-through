import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

export default defineConfig({
  dev: {
    // It is necessary to configure assetPrefix, and in the production build, you need to configure output.assetPrefix
    assetPrefix: "http://localhost:3001",
  },
  output: {
    distPath: {
      js: "",
      css: "",
    },
  },
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: "st_catalog",
      exposes: {
        "./CatalogCarousel": "./src/carousel/CatalogCarousel.tsx",
        "./CatalogDetails": "./src/details/CatalogDetails.tsx",
        "./CatalogListing": "./src/listing/CatalogListing.tsx",
      },
      remotes: {
        st_cart: "st_cart@http://localhost:3002/mf-manifest.json",
      },
      shared: ["react", "react-dom", "@tanstack/react-query"],
    }),
  ],
  server: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    port: 3001,
  },
});
