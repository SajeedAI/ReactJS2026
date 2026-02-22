// addDefaultImages.js
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Student = require("./models/Student"); // adjust path if needed

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));

async function addDefaultImages() {
  await Student.updateMany(
    { studentImage: { $exists: false } },
    { $set: { studentImage: "https://via.placeholder.com/150" } }
  );
  console.log("Default images added to all students without image.");
}

addDefaultImages()
  .then(() => mongoose.disconnect())  // disconnect after done
  .catch((err) => console.error(err));
