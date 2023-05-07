import { Request, Response } from "express";
import { connectDB } from "../db/connect";
import { ObjectId } from "mongodb";

const getContacts = async (req: Request, res: Response) => {
  const db = await connectDB(req, res);

  if (!db) {
    if (!res.headersSent)
      res.status(500).send("Could not connect to database.");
    return;
  }

  const result = await db.collection("contacts").find({}).toArray();
  res.status(200).json(result);
};

const getContact = async (req: Request, res: Response) => {
  const id = req.params.id;
  const db = await connectDB(req, res);

  if (!db) {
    if (!res.headersSent)
      res.status(500).send("Could not connect to database.");
    return;
  }

  const result = await db
    .collection("contacts")
    .findOne({ _id: new ObjectId(id) });
  res.status(200).json(result);
};

const createContact = async (req: Request, res: Response) => {
  const { firstName, lastName, email, favoriteColor, birthday } = req.body;
  const db = await connectDB(req, res);

  if (!db) {
    if (!res.headersSent)
      res.status(500).send("Could not connect to database.");
    return;
  }

  try {
    const result = await db.collection("contacts").insertOne({
      firstName,
      lastName,
      email,
      favoriteColor,
      birthday: new Date(birthday),
    });

    if (result.acknowledged) {
      res.status(201).json(result.insertedId);
      return;
    } else {
      res.status(500).send("Could not create contact.");
      return;
    }
  } catch (error: Error | unknown) {
    /* eslint-disable-next-line */
    console.log(error);
    res.status(500).send("Could not create contact.");
    return;
  }
};

const updateContact = async (req: Request, res: Response) => {
  const id = req.params.id;
  const { firstName, lastName, email, favoriteColor, birthday } = req.body;
  const db = await connectDB(req, res);

  if (!db) {
    if (!res.headersSent)
      res.status(500).send("Could not connect to database.");
    return;
  }

  try {
    const result = await db.collection("contacts").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          firstName,
          lastName,
          email,
          favoriteColor,
          birthday: new Date(birthday),
        },
      }
    );

    if (result.acknowledged) {
      res.status(204).send("Contact updated.");
      return;
    } else {
      res.status(500).send("Could not update contact.");
      return;
    }
  } catch (error: Error | unknown) {
    /* eslint-disable-next-line */
    console.log(error);
    res.status(500).send("Could not update contact.");
    return;
  }
};

const deleteContact = async (req: Request, res: Response) => {
  const id = req.params.id;
  const db = await connectDB(req, res);

  if (!db) {
    if (!res.headersSent)
      res.status(500).send("Could not connect to database.");
    return;
  }

  try {
    const result = await db.collection("contacts").deleteOne({
      _id: new ObjectId(id),
    });

    if (result.acknowledged) {
      res.status(200).send("Contact deleted.");
      return;
    } else {
      res.status(500).send("Could not delete contact.");
      return;
    }
  } catch (error: Error | unknown) {
    /* eslint-disable-next-line */
    console.log(error);
    res.status(500).send("Could not delete contact.");
    return;
  }
};

export { getContacts, getContact, createContact, updateContact, deleteContact };
