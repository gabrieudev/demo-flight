import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Flight = sequelize.define(
  "flight",
  {
    flight_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    flight_number: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    departure_airport: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    arrival_airport: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    departure_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    arrival_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    aircraft_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "flight",
    timestamps: false,
  }
);
