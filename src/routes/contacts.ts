import { Router } from "express";
import { getContacts, getContact } from "../controllers/contactsController";
const contactsRoute = Router();

contactsRoute.get("/", getContacts);
contactsRoute.get("/:id", getContact);

export default contactsRoute;
