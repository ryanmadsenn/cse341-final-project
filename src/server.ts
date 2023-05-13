import express from "express";
import env from "dotenv";
import bodyParser from "body-parser";
import router from "./routes";
env.config();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", router);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`🚀 Server is running on port ${PORT}`);
});
