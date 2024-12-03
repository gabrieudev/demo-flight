import { Router } from "express";
import {
  getAllUsers,
  updateUser,
  getUserById,
  deleteUser,
  createUser,
} from "../controllers/userController.js";
import { protect, restrictTo } from "../middlewares/authMiddleware.js";

const router = Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obter todos usuários
 *     tags: [Users]
 *     security:
 *       - ApiKeyAuth: []
 *     responses:
 *       200:
 *         description: Usuários obtidos com sucesso
 *       401:
 *         description: Token inválido ou expirado
 *       403:
 *         description: Você não tem permissão para realizar esta ação
 *       500:
 *         description: Erro do servidor
 */
router.get("/", protect, restrictTo("admin"), getAllUsers);

router.post("/", protect, restrictTo("admin"), createUser);

router.get("/:id", protect, restrictTo("admin", "regular"), getUserById);

router.put("/:id", protect, restrictTo("admin", "regular"), updateUser);

router.delete("/:id", protect, restrictTo("admin", "regular"), deleteUser);

export default router;
