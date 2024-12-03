import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const BoardingPass = sequelize.define(
  "boarding_pass",
  {
    boarding_pass_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    seat_number: {
      type: DataTypes.STRING(5),
      allowNull: false,
    },
    passenger_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    flight_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    issue_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "boarding_pass",
    timestamps: false,
  }
);
