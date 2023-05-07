import { Router } from "express";
import {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
} from "../controllers/contactsController";
const contactsRoute = Router();

contactsRoute.get("/", getContacts);
contactsRoute.get("/:id", getContact);
contactsRoute.post("/", createContact);
contactsRoute.put("/:id", updateContact);
contactsRoute.delete("/:id", deleteContact);

export default contactsRoute;
