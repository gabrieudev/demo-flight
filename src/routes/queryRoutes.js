import { getQuery } from "../controllers/consultaController.js";
import { Router } from "express";

const router = Router();

/**
 * @swagger
 * /query:
 *   get:
 *     tags: [Queries]
 *     summary: Teste de carga
 *     description: Consulta de teste de carga adaptada para a documentação Swagger devido ao seu limite de dados no corpo da resposta. O endpoint retorna um arquivo JSON para download com os dados gerados. Caso a consulta seja realizada através de um client HTTP, o corpo da resposta irá conter os dados em formato JSON.
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
