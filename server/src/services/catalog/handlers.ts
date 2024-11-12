import type { FastifyRequest as Request, FastifyReply as Reply } from "fastify";

import data from "../../data/catalog.json" with { type: "json" };

export function readAll(req: Request, res: Reply) {
  res.send(data);
}

export function readOne(req: Request<{ Params: { id: string } }>, res: Reply) {
  const { id } = req.params;

  const article = data.find((a) => a.id === id);
  res.send(article ?? []);
}
