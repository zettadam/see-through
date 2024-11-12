import "dotenv/config";
import Fastify from "fastify";
import cors from "@fastify/cors";

import catalog from "./routes/catalog.js";

import type { Config } from "./types.js";

const envToLogger = {
  development: {
    transport: {
      target: "pino-pretty",
      options: {
        translateTime: "HH:MM:ss Z",
        ignore: "pid,hostname",
      },
    },
  },
  production: true,
  test: false,
};

export default function buildServer(config: Config) {
  const server = Fastify({
    logger: envToLogger[config.environment] ?? true,
  });

  server.register(cors, {});

  server.register(catalog, { prefix: "/v1/catalog" });

  server.get("/v1", (_, res) => {
    res.code(200).send({ message: "Version 1" });
  });

  server.get("/", (_, res) => {
    res.code(200).send({ mesage: "Hello!" });
  });

  server.log.info("Fastify server is starting up");

  return server;
}
