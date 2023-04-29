import { Router } from "express";
import homeRoute from "./home.js";
import contactsRoute from "./contacts.js";
const router = Router();

router.use("/contacts", contactsRoute);
router.use("/", homeRoute);

export default router;
