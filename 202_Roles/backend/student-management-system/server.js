const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const createAdmin = require("./adminSeeder");

dotenv.config();
const app = express();
const cors = require("cors");   // ⭐ Must import
app.use(cors());
app.use(express.json());

// Serve uploaded images
app.use("/uploads", express.static("uploads"));

// DB + Seeder
connectDB().then(() => createAdmin());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/students", require("./routes/studentRoutes"));

app.get("/test", (req, res) => res.send("API WORKING"));



app.listen(5050, () => console.log("🚀 Server running on 5050"));
