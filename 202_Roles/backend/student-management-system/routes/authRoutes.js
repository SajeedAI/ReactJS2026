const router = require("express").Router();

// ⭐ correct import
const auth = require("../controllers/authController");

router.post("/register", auth.register);
router.post("/login", auth.login);
router.post("/admin-login", auth.adminLogin);   // ⭐ admin login
router.post("/logout", auth.logout);

module.exports = router;