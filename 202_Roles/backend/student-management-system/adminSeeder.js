const User = require("./models/User");
const bcrypt = require("bcryptjs");

const createAdmin = async () => {
  const exist = await User.findOne({ role: "ADMIN" });

  if (!exist) {
    const hash = await bcrypt.hash("123456", 10);

    await User.create({
      name: "Super Admin",
      email: "admin@gmail.com",
      password: hash,
      role: "ADMIN"
    });

    console.log("✅ Default admin created");
  }
};

module.exports = createAdmin;