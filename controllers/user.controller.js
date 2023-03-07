import User from "../models/user.js";

const getAllUsers = async (req, res, next) => {};

const createUser = async (req, res, next) => {
  const { name, email, avatar } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(200).json(userExists);
    }

    const newUser = await User.create({
      name,
      email,
      avatar,
    });

    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

const getUserInfoByID = async (req, res, next) => {};

export { getAllUsers, createUser, getUserInfoByID };
