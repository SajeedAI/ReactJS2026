const User = require("../models/User");

exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

exports.changeRole = async (req, res) => {
  const { role } = req.body;

  const user = await User.findByIdAndUpdate(
    req.params.id,
    { role },
    { new: true }
  );

  res.json(user);
};

exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json("User Deleted");
};