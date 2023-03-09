import User from "../models/user.js";

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({}).limit(req.query._end);

    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

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

const getUserInfoByID = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({ _id: id }).populate("allProperties");

    if (user) {
      res.status(200).json(user);
    }

    if (!user) {
      res.status(404).json({
        message: "User not found!",
      });
    }
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
  }
};

export { getAllUsers, createUser, getUserInfoByID };
