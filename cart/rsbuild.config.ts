import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: "seethrough_cart",
      exposes: {
        "./useCart": "./src/cart/context",
        "./CartProvider": "./src/cart/CartProvider",
        "./BasicCart": "./src/cart/BasicCart.tsx",
        "./FullCart": "./src/cart/FullCart.tsx",
      },
      shared: ["react", "react-dom", "@tanstact/react-query"],
    }),
  ],
  server: {
    port: 3002,
  },
});
