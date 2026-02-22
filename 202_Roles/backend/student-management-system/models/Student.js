const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    studentName: String,
    studentParentsName: String,
    studentParentContact: String,
    studentAddress: String,
    studentClass: String,
    studentImage: String, // store path to uploaded image
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);