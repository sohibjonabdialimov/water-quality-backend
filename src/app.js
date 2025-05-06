const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const errorHandler = require("./middlewares/errorHandler");
// Routes
const rootRoutes = require("./routes/rootRoutes");
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


app.use(errorHandler);

// Routes
app.get("/", (_, res) => res.send("ok"));
app.use("/api/root", rootRoutes);

// 404 Error
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

module.exports = app;
