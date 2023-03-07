import mongoose from "mongoose";
import Property from "../models/property.js";
import User from "../models/user.js";

import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

const getAllProperty = async (req, res, next) => {
  try {
    const properties = await Property.find({}).limit(req.query._end);
    res.status(200).json(properties);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

const getPropertyDetail = async (req, res, next) => {};

const createProperty = async (req, res, next) => {
  const { title, description, propertyType, location, price, photo, email } =
    req.body;

  try {
    const session = await mongoose.startSession();
    session.startTransaction();

    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("User not found");
    }

    const photoUrl = await cloudinary.uploader.upload(photo);

    const newProperty = await Property.create({
      title,
      description,
      propertyType,
      location,
      price,
      photo: photoUrl.url,
      creator: user._id,
    });

    user.allProperties.push(newProperty._id);
    await user.save({ session });

    await session.commitTransaction();

    res.status(200).json({
      message: "Property created successfully.",
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

const updateProperty = async (req, res, next) => {};

const deleteProperty = async (req, res, next) => {};

export {
  getAllProperty,
  getPropertyDetail,
  createProperty,
  updateProperty,
  deleteProperty,
};
