const Student = require("../models/Student");

// CREATE
exports.createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.json(student);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// GET ALL
exports.getStudents = async (req, res) => {
  const students = await Student.find();
  res.json(students);
};

// GET ONE
exports.getStudent = async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.json(student);
};

// UPDATE
exports.updateStudent = async (req, res) => {
  const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(student);
};

// DELETE
exports.deleteStudent = async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: "Student Deleted" });
};
