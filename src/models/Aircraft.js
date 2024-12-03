import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Aircraft = sequelize.define(
  "aircraft",
  {
    aircraft_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    model: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    manufacturer: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "aircraft",
    timestamps: false,
  }
);
