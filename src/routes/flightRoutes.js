import { Router } from "express";
import { getAllFlights, getById } from "../controllers/flightController.js";

const router = Router();

/**
 * @swagger
 * /flights:
 *   get:
 *     tags: [Flights]
 *     summary: Listagem de voos
 *     description: Retorna uma lista de voos
 *     security: []
 *     responses:
 *       200:
 *         description: A lista de voos foi retornada com sucesso
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/", getAllFlights);

/**
 * @swagger
 * /flights/{id}:
 *   get:
 *     tags: [Flights]
 *     summary: Obter voo pelo ID
 *     description: Retorna um voo pelo ID
 *     security: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do voo
 *         example: 1
 *     responses:
 *       200:
 *         description: O voo foi retornado com sucesso
 *       404:
 *         description: O voo não foi encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/:id", getById);

export default router;
