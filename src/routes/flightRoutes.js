import { Router } from "express";
import { getAllFlights, getById } from "../controllers/flightController.js";

const router = Router();

router.get("/", getAllFlights);
router.get("/:id", getById);

export default router;
