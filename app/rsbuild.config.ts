import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: "seethrough_app",
      remotes: {
        seethrough_catalog:
          "seethrough_catalog@http://localhost:3001/mf-manifest.json",
        seethrough_cart:
          "seethrough_cart@http://localhost:3002/mf-manifest.json",
      },
      shared: ["react", "react-dom", "solid-js", "@tanstack/react-query"],
    }),
  ],
  server: {
    port: 3000,
  },
});
