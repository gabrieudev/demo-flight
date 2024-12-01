import { Router } from "express";
import {
  createUser,
  getAllUsers,
  updateUser,
} from "../controllers/userController.js";

const router = Router();

router.post("/", createUser);
router.get("/", getAllUsers);
router.put("/:id", updateUser);

export default router;
