import { Router } from "express";
import { getAllAircrafts, getById } from "../controllers/aircraftController.js";

const router = Router();

/**
 * @swagger
 * /aircrafts:
 *   get:
 *     tags: [Aircrafts]
 *     security: []
 *     summary: Retorna uma lista de aeronaves
 *     responses:
 *       200:
 *         description: A lista de aeronaves foi retornada com sucesso
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/", getAllAircrafts);

/**
 * @swagger
 * /aircrafts/{id}:
 *   get:
 *     tags: [Aircrafts]
 *     summary: Retorna uma aeronave pelo ID
 *     security: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da aeronave
 *         example: 1
 *     responses:
 *       200:
 *         description: A aeronave foi retornada com sucesso
 *       404:
 *         description: A aeronave não foi encontrada
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/:id", getById);

export default router;
