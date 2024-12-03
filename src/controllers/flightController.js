import { Flight } from "../models/Flight.js";

export const getAllFlights = async (req, res) => {
  const flights = await Flight.findAll();
  res.json(flights);
};

export const getById = async (req, res) => {
  const flight = await Flight.findByPk(req.params.id);
  if (!flight) {
    return res.status(404).send({ error: "Voo não encontrado" });
  }
  res.json(flight);
};
