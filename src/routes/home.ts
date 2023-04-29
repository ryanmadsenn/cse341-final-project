import { Router } from "express";
const homeRoute = Router();

homeRoute.get("/", (req, res) => {
  res.send("Ryan Madsen");
});

export default homeRoute;
