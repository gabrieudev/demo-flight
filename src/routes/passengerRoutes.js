import { Router } from "express";
import {
  getAllPassengers,
  getById,
} from "../controllers/passengerController.js";

const router = Router();

router.get("/", getAllPassengers);
router.get("/:id", getById);

export default router;
