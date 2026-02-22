const Student = require("../models/Student");

// CREATE STUDENT PROFILE
// exports.createStudent = async (req, res) => {
//   const student = await Student.create({
//     userId: req.user.id,
//     ...req.body
//   });

//   res.json(student);
// };

exports.createStudent = async (req, res) => {
  try {
    const studentData = {
      userId: req.user.id,
      studentName: req.body.studentName,
      studentParentsName: req.body.studentParentsName,
      studentParentContact: req.body.studentParentContact,
      studentAddress: req.body.studentAddress,
      studentClass: req.body.studentClass,
      studentImage: req.file ? `/uploads/${req.file.filename}` : undefined,
    };

    const student = await Student.create(studentData);
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllStudents = async (req, res) => {
  const students = await Student.find().populate("userId", "name email role");
  res.json(students);
};

exports.getMyStudent = async (req, res) => {
  const student = await Student.findOne({ userId: req.user.id });
  if (!student) return res.status(404).json("Profile not found");
  res.json(student);
};

// USER → own profile
// USER → own profile with user info
exports.getMyStudent = async (req, res) => {
  try {
    const student = await Student.findOne({ userId: req.user.id }).populate(
      "userId",
      "name email role"
    ); // populate user info

    if (!student) return res.status(404).json({ message: "Profile not found" });

    res.json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ⭐ STAFF & ADMIN → all students
exports.getAllStudents = async (req, res) => {
  const students = await Student.find().populate("userId", "name email role");
  res.json(students);
};

// USER PROFILE
exports.getMyProfile = async (req, res) => {
  const student = await Student.findOne({ userId: req.user.id });

  if (!student) return res.status(404).json("Profile not found");

  res.json(student);
};