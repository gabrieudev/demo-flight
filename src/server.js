import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { sequelize } from "./config/database.js";
import userRoutes from "./routes/userRoutes.js";
import aircraftRoutes from "./routes/aircraftRoutes.js";
import flightRoutes from "./routes/flightRoutes.js";
import passengerRoutes from "./routes/passengerRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import boardingPassRoutes from "./routes/boardingPassRoutes.js";
import queryRoutes from "./routes/queryRoutes.js";
import corsOptions from "./config/cors.js";
import swaggerSpec from "./config/swagger.js";
import swaggerUi from "swagger-ui-express";
import compression from "compression";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(compression());
app.use(cors(corsOptions));
app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/aircrafts", aircraftRoutes);
app.use("/flights", flightRoutes);
app.use("/boarding-passes", boardingPassRoutes);
app.use("/passengers", passengerRoutes);
app.use("/query", queryRoutes);

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
