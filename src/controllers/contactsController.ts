import { Request, Response } from "express";
import { connectDB } from "../db/connect";
import { ObjectId } from "mongodb";

const getContacts = async (req: Request, res: Response) => {
  const db = await connectDB();
  const result = await db.collection("contacts").find({}).toArray();
  res.json(result);
};

const getContact = async (req: Request, res: Response) => {
  const id = req.params.id;
  const db = await connectDB();
  const result = await db
    .collection("contacts")
    .findOne({ _id: new ObjectId(id) });
  res.json(result);
};

export { getContacts, getContact };
