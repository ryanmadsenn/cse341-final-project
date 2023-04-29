import { MongoClient } from "mongodb";

const connectDB = async () => {
  const client = new MongoClient(process.env.DATABASE_URI as string);
  const response = await client.connect();
  if (!response) throw new Error("Could not connect to client.");
  const database = client.db("cse341");
  if (!database) throw new Error("Could not connect to database.");
  return database;
};

export { connectDB };
