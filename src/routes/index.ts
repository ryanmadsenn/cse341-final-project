import { Router } from "express";
import swaggerUI from "swagger-ui-express";
import swaggerDocument from "../swagger.json";
import homeRoute from "./home.js";
import contactsRoute from "./contacts.js";
const router = Router();

router.use("/", homeRoute);
router.use("/contacts", contactsRoute);
router.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

export default router;
