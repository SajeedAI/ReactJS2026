const router = require("express").Router();
const { createStudent, getMyStudent, getAllStudents } = require("../controllers/studentController");
const { verifyToken, authorizeRoles } = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

// USER create profile with image upload
router.post("/", verifyToken, upload.single("studentImage"), createStudent);

// USER own profile
router.get("/me", verifyToken, getMyStudent);

// STAFF + ADMIN → view all students
router.get("/", verifyToken, authorizeRoles("STAFF", "ADMIN"), getAllStudents);

module.exports = router;
