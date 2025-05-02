const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const errorHandler = require("./middlewares/errorHandler");
// Routes
const cityRoutes = require("./routes/cityRoutes");
const tourismRoutes = require("./routes/tourismRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// upload images
app.use("/uploads", express.static("uploads"));
app.use(errorHandler);

// Routes
app.get("/", (_, res) => res.send("ok"));
app.use("/api/cities", cityRoutes);
app.use("/api/tourism", tourismRoutes);
app.use("/api/feedback", feedbackRoutes);

// 404 Error
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

module.exports = app;
