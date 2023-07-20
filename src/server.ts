import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express, { json } from "express";
import http from "http";
import cors from "cors";
import { auth } from "express-oauth2-jwt-bearer";
import axios from "axios";
import { readFileSync } from "fs";
import { resolvers } from "./resolvers.js";
import { Db } from "mongodb";
import { connectDB } from "./db.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const typeDefs = readFileSync("./schema.graphql", "utf-8");
const db = await connectDB();

const verifyJWT = auth({
  audience: process.env.AUTH0_AUDIENCE as string,
  issuerBaseURL: process.env.AUTH0_DOMAIN as string,
});

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

setInterval(async () => {
  const response = await axios.get(
    "https://cse-341-final-project-z6bj.onrender.com/health"
  );
  if (response.status === 200)
    // eslint-disable-next-line no-console
    console.log("Server pinged");
  // eslint-disable-next-line no-console
  else console.log("Unable to ping server");
}, 840_000);

app.use(
  "/graphql",
  cors<cors.CorsRequest>(),
  json(),
  expressMiddleware(server, {
    context: async ({ req, res }) => {
      await verifyJWT(req, res, () => null);

      return {
        dataSources: {
          db,
        },
        isAuthenticated: !!req.auth,
      };
    },
  })
);
app.use(express.static("public"));
app.use(
  "/styles",
  express.static(path.resolve(__dirname + "../public/styles"))
);

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.get("/", (req, res) => {
  const rootDir = path.resolve(__dirname, "..");
  res.sendFile(path.join(rootDir + "/public/index.html"));
});

await new Promise<void>((resolve) =>
  httpServer.listen({ port: process.env.PORT }, resolve)
);

// eslint-disable-next-line no-console
console.log(`🚀 Server ready at http://localhost:${process.env.PORT}/graphql`);
