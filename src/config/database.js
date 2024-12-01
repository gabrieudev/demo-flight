import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const serverName = process.env.DB_HOST.replace("\\", "\\\\");

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: serverName,
    port: process.env.DB_PORT,
    dialect: "mssql",
    dialectOptions: {
      options: {
        encrypt: true,
        trustServerCertificate: true,
        instanceName: "MSSQL2016",
        connectTimeout: 30000,
      },
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    logging: false,
  }
);
