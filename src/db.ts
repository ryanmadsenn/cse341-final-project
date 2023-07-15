import { MongoClient, ObjectId } from "mongodb";
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

interface EventModel {
  _id: ObjectId;
  title: string;
  description: string;
  datetime: string;
  venue: ObjectId;
  vendors: ObjectId[];
  users: ObjectId[];
}

interface VendorModel {
  _id: ObjectId;
  name: string;
  description: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  website: string;
  events: ObjectId[];
}

interface VenueModel {
  _id: ObjectId;
  name: string;
  description: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  website: string;
  events: ObjectId[];
}

interface UserModel {
  _id: ObjectId;
  role: "ADMIN" | "USER";
  fname: string;
  lname: string;
  phone: string;
  email: string;
  password: string;
  events: ObjectId[];
}

export { connectDB, EventModel, VendorModel, VenueModel, UserModel };
