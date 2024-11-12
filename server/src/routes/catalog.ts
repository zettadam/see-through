import type { FastifyInstance, FastifyPluginOptions } from "fastify";

import * as h from "../services/catalog/handlers.js";

export default function (
  f: FastifyInstance,
  _: FastifyPluginOptions,
  next: (error?: Error) => void,
): void {
  f.get("/:id", {}, h.readOne);
  f.get("/", {}, h.readAll);

  next();
}
