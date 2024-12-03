import { Router } from "express";
import { login } from "../controllers/authController.js";

const router = Router();

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login
 *     tags: [Auth]
 *     security: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               login_email:
 *                 type: string
 *                 description: Email do usuário
 *               password:
 *                 type: string
 *                 description: Senha do usuário
 *             required:
 *               - login_email
 *               - password
 *     responses:
 *       200:
 *         description: Usuários obtidos com sucesso
 *       400:
 *         description: Erro de validação
 *       401:
 *         description: Credenciais inválidas
 *       500:
 *         description: Erro do servidor
 */
router.post("/login", login);

export default router;
