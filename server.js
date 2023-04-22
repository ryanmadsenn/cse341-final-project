import express from "express";
import env from "dotenv";
env.config();
const app = express();

app.get("/", (req, res) => {
  res.send("Ryan Madsen");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
