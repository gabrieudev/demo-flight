import { BoardingPass } from "../models/BoardingPass.js";

export const getAllBoardingPasses = async (req, res) => {
  const boardingPasses = await BoardingPass.findAll();
  res.json(boardingPasses);
};

export const getById = async (req, res) => {
  const boardingPass = await BoardingPass.findByPk(req.params.id);
  if (!boardingPass) {
    return res.status(404).send({ error: "Cartão de embarque não encontrado" });
  }
  res.json(boardingPass);
};
