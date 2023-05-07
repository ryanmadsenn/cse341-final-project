import { Request, Response } from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async (req: Request, res: Response) => {
  try {
    const client = new MongoClient(process.env.DATABASE_URI as string);
    const response = await client.connect();
    if (!response) throw new Error("Could not connect to client.");
    const database = client.db("cse341");
    if (!database) throw new Error("Could not connect to database.");
    return database;
  } catch (error: Error | unknown) {
    /* eslint-disable-next-line */
    console.log(error);
    res.status(500).send("Could not connect to database.");
    return;
  }
};

export { connectDB };
