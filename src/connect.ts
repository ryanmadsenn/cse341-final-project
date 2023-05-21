import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    const client = new MongoClient(process.env.DATABASE_URI as string);
    const response = await client.connect();
    if (!response) throw new Error("Could not connect to client.");
    const db = client.db(process.env.DATABASE_NAME);
    if (!db) throw new Error("Could not connect to database.");
    // eslint-disable-next-line no-console
    console.log("✅ Connected to database");
    return db;
  } catch (error: Error | unknown) {
    /* eslint-disable-next-line */
    throw new Error(error as string);
  }
};

export { connectDB };
