import { Router } from "express";
import {
  getAllPassengers,
  getById,
} from "../controllers/passengerController.js";

const router = Router();

/**
 * @swagger
 * /passengers:
 *   get:
 *     tags: [Passengers]
 *     summary: Retorna uma lista de passageiros
 *     security: []
 *     responses:
 *       200:
 *         description: A lista de passageiros foi retornada com sucesso
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/", getAllPassengers);

/**
 * @swagger
 * /passengers/{id}:
 *   get:
 *     tags: [Passengers]
 *     summary: Retorna um passageiro pelo ID
 *     security: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do passageiro
 *         example: 1
 *     responses:
 *       200:
 *         description: O passageiro foi retornado com sucesso
 *       404:
 *         description: O passageiro não foi encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/:id", getById);

export default router;
