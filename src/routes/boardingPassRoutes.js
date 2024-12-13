import { Router } from "express";
import {
  getAllBoardingPasses,
  getById,
} from "../controllers/boardingPassController.js";

const router = Router();

/**
 * @swagger
 * /boarding-passes:
 *   get:
 *     tags: [Boarding Passes]
 *     security: []
 *     summary: Listagem de cartões de embarque
 *     description: Retorna uma lista de cartões de embarque
 *     responses:
 *       200:
 *         description: A lista de cartões de embarque foi retornada com sucesso
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/", getAllBoardingPasses);

/**
 * @swagger
 * /boarding-passes/{id}:
 *   get:
 *     tags: [Boarding Passes]
 *     summary: Obter cartão de embarque pelo ID
 *     description: Retorna um cartão de embarque pelo ID
 *     security: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do cartão de embarque
 *         example: 1
 *     responses:
 *       200:
 *         description: O cartão de embarque foi retornado com sucesso
 *       404:
 *         description: O cartão de embarque não foi encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/:id", getById);

export default router;
