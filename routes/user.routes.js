import express from "express";

import {
  createUser,
  getAllUsers,
  getUserInfoByID,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserInfoByID);
router.post("/", createUser);

export default router;
