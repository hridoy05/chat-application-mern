const express = require("express");
const data = require("./data/data");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const app = express();
app.use(express.json());
dotenv.config();

app.get("/", (req, res) => {
  res.send("APi is Running");
});

app.get("/api/chats", (req, res) => {
  res.send(data);
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  connectDB();
  console.log(`server started on port ${PORT}`);
});
