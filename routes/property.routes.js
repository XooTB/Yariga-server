import express from "express";
import {
  getAllProperty,
  getPropertyDetail,
  createProperty,
  deleteProperty,
  updateProperty,
} from "../controllers/property.controller.js";

const router = express.Router();

router.get("/", getAllProperty);
router.post("/", createProperty);
router.get("/:id", getPropertyDetail);
router.patch("/:id", updateProperty);
router.delete("/:id", deleteProperty);

export default router;
