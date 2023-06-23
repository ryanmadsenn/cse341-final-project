import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express, { json } from "express";
import http from "http";
import cors from "cors";
import { auth } from "express-oauth2-jwt-bearer";
import { readFileSync } from "fs";
import { resolvers } from "./resolvers.js";
import { Db } from "mongodb";
import { connectDB } from "./connect.js";

const typeDefs = readFileSync("./schema.graphql", "utf-8");
const db = await connectDB();

// const verifyJWT = auth({
//   audience: process.env.AUTH0_AUDIENCE as string,
//   issuerBaseURL: process.env.AUTH0_DOMAIN as string,
// });
export interface Context {
  dataSources: {
    db: Db;
  };
  isAuthenticated: boolean;
}

const app = express();
const httpServer = http.createServer(app);
const server = new ApolloServer<Context>({
  typeDefs,
  resolvers,
  introspection: true,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
await server.start();

app.use(
  "/graphql",
  cors<cors.CorsRequest>(),
  json(),
  expressMiddleware(server, {
    context: async ({ req, res }) => {
      // await verifyJWT(req, res, (err) => {
      //   if (err) {
      //     console.error(err);
      //   }
      // });

      return {
        dataSources: {
          db,
        },
        isAuthenticated: !!req.auth,
      };
    },
  })
);

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.get("/", (req, res) => {
  res.redirect("/graphql");
});

await new Promise<void>((resolve) =>
  httpServer.listen({ port: process.env.PORT }, resolve)
);

// eslint-disable-next-line no-console
console.log(`🚀 Server ready at http://localhost:${process.env.PORT}/graphql`);
