import process from "node:process";

import type { Config, Environment } from "./types.js";

const config: Config = {
  environment: (process.env.NODE_ENVIRONMENT as Environment) ?? "development",

  // Network
  host: process.env.HOST ?? "127.0.0.1",
  port: Number(process.env.PORT) ?? 5000,
};

export default config;
