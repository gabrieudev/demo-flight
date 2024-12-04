import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Passenger = sequelize.define(
  "passenger",
  {
    passenger_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    birth_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    passport_number: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "passenger",
    timestamps: false,
  }
);
