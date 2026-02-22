const router = require("express").Router();
const { getUsers, changeRole, deleteUser } = require("../controllers/userController");
const { verifyToken, authorizeRoles } = require("../middleware/authMiddleware");

router.get("/", verifyToken, authorizeRoles("ADMIN"), getUsers);
router.put("/:id/role", verifyToken, authorizeRoles("ADMIN"), changeRole);
router.delete("/:id", verifyToken, authorizeRoles("ADMIN"), deleteUser);

module.exports = router;
