import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { readFileSync } from "fs";
import { resolvers } from "./resolvers.js";
import { Db } from "mongodb";
import { connectDB } from "./connect.js";
const typeDefs = readFileSync("./schema.graphql", "utf-8");
const db = await connectDB();

export interface Context {
  dataSources: {
    db: Db;
  };
}

const server = new ApolloServer<Context>({
  typeDefs,
  resolvers,
  introspection: true,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async () => {
    return { dataSources: { db } };
  },
});
// eslint-disable-next-line no-console
console.log(`🚀 Server ready at ${url}`);
