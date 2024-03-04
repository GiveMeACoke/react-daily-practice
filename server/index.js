import Fastify from "fastify";

const fastify = Fastify({
  logger: true
});

fastify.get("/", () => {
  return {
    data: "hello fastify"
  };
});

fastify.listen({
  port: 3000
});
