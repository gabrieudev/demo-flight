import { Router } from "express";
import {
  getAllBoardingPasses,
  getById,
} from "../controllers/boardingPassController.js";

const router = Router();

router.get("/", getAllBoardingPasses);
router.get("/:id", getById);

export default router;
