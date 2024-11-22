import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server running on port ${process.env.SERVER_PORT}`);
});

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});
