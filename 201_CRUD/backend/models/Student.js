const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  studentId: { type: String, unique: true},
  studentName: { type: String, required: true, trim: true },
  studentEmail: { type: String, trim: true, lowercase: true, default: null },
  studentClass: { type: String, required: true },
  parentName: { type: String, required: true },
  parentContactNumber: { type: String, required: true },
  address: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("Student", studentSchema);
