import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { sequelize } from "./config/database.js";
import userRoutes from "./routes/userRoutes.js";
import corsOptions from "./config/cors.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/users", userRoutes);

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o banco de dados estabelecida com sucesso.");

    app.listen(port, () => {
      console.log(`Servidor está rodando na porta ${port}`);
    });
  } catch (error) {
    console.error("Não foi possível conectar ao banco de dados:", error);
  }
}

startServer();
