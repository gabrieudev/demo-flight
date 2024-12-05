import { getQuery } from "../controllers/consultaController.js";
import { Router } from "express";

const router = Router();

/**
 * @swagger
 * /query:
 *   get:
 *     tags: [Queries]
 *     summary: Retorna o resultado da consulta como um arquivo JSON para download na interface Swagger
 *     security: []
 *     responses:
 *       200:
 *         description: O arquivo JSON contendo os dados foi gerado
 *         content:
 *           application/octet-stream:
 *             schema:
 *               type: string
 *               format: binary
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/", getQuery);

export default router;
