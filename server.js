const express = require("express");
const data = require("./data/data");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("APi is Running");
});

app.get("/api/chats", (req, res) => {
  res.send(data);
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
