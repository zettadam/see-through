import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

export default defineConfig({
  dev: {
    // It is necessary to configure assetPrefix, and in the production build, you need to configure output.assetPrefix
    assetPrefix: "http://localhost:3002",
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
      name: "st_cart",
      exposes: {
        "./useCart": "./src/cart/context.ts",
        "./CartProvider": "./src/cart/CartProvider.tsx",
        "./BasicCart": "./src/cart/BasicCart.tsx",
        "./FullCart": "./src/cart/FullCart.tsx",
      },
      shared: ["react", "react-dom", "@tanstack/react-query"],
    }),
  ],
  server: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    port: 3002,
  },
});
