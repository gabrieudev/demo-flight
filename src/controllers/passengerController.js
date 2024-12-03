import { Passenger } from "../models/Passenger.js";

export const getAllPassengers = async (req, res) => {
  const passengers = await Passenger.findAll();
  res.json(passengers);
};

export const getById = async (req, res) => {
  const passenger = await Passenger.findByPk(req.params.id);
  if (!passenger) {
    return res.status(404).send({ error: "Passageiro não encontrado" });
  }
  res.json(passenger);
};
