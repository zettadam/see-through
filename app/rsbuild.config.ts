import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  dev: {
    // It is necessary to configure assetPrefix, and in the production build, you need to configure output.assetPrefix
    assetPrefix: "http://localhost:3000",
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
      name: "st_app",
      remotes: {
        st_catalog: "st_catalog@http://localhost:3001/mf-manifest.json",
        st_cart: "st_cart@http://localhost:3002/mf-manifest.json",
      },
      shared: ["react", "react-dom", "@tanstack/react-query"],
    }),
  ],
  server: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    port: 3000,
  },
});
