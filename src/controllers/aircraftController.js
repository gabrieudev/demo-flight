import { Aircraft } from "../models/Aircraft.js";

export const getAllAircrafts = async (req, res) => {
  const aircrafts = await Aircraft.findAll();
  res.json(aircrafts);
};

export const getById = async (req, res) => {
  const aircraft = await Aircraft.findByPk(req.params.id);
  if (!aircraft) {
    return res.status(404).send({ error: "Aeronave não encontrada" });
  }
  res.json(aircraft);
};
