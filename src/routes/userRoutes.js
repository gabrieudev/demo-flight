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
 *     summary: Listagem de usuários
 *     description: Retorna uma lista de usuários
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

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Registrar um novo usuário
 *     description: Cria um novo usuário
 *     tags: [Users]
 *     security:
 *       - ApiKeyAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nome do usuário
 *               login_email:
 *                 type: string
 *                 description: Email do usuário
 *               password:
 *                 type: string
 *                 description: Senha do usuário
 *               user_type:
 *                 type: string
 *                 enum: [admin, regular]
 *                 description: Tipo de usuário
 *     responses:
 *       200:
 *         description: Usuário criado com sucesso
 *       401:
 *         description: Token inválido ou expirado
 *       403:
 *         description: Você não tem permissão para realizar esta ação
 *       500:
 *         description: Erro do servidor
 */
router.post("/", protect, restrictTo("admin"), createUser);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Obter um usuário pelo ID
 *     description: Retorna um usuário pelo ID
 *     tags: [Users]
 *     security:
 *       - ApiKeyAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Usuário obtido com sucesso
 *       401:
 *         description: Token inválido ou expirado
 *       403:
 *         description: Você não tem permissão para realizar esta ação
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro do servidor
 */
router.get("/:id", protect, restrictTo("admin", "regular"), getUserById);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Atualizar um usuário pelo ID
 *     description: Atualiza um usuário pelo ID
 *     tags: [Users]
 *     security:
 *       - ApiKeyAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nome do usuário
 *               login_email:
 *                 type: string
 *                 description: Email do usuário
 *               password:
 *                 type: string
 *                 description: Senha do usuário
 *               user_type:
 *                 type: string
 *                 enum: [admin, regular]
 *                 description: Tipo de usuário
 *             required:
 *               - name
 *               - login_email
 *               - password
 *               - user_type
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *       401:
 *         description: Token inválido ou expirado
 *       403:
 *         description: Você não tem permissão para realizar esta ação
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro do servidor
 */
router.put("/:id", protect, restrictTo("admin", "regular"), updateUser);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Deletar um usuário pelo ID
 *     description: Deleta um usuário pelo ID
 *     tags: [Users]
 *     security:
 *       - ApiKeyAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Usuário deletado com sucesso
 *       401:
 *         description: Token inválido ou expirado
 *       403:
 *         description: Você não tem permissão para realizar esta ação
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro do servidor
 */
router.delete("/:id", protect, restrictTo("admin", "regular"), deleteUser);

export default router;
