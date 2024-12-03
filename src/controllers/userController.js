import { User } from "../models/User.js";
import { createUserSchema, updateUserSchema } from "../schemas/userSchema.js";

export const createUser = async (req, res) => {
  try {
    const validatedData = createUserSchema.parse(req.body);
    const user = await User.create(validatedData);
    res.status(201).json(user);
  } catch (error) {
    if (error.name === "ZodError") {
      return res.status(400).json({ error: error.errors[0].message });
    }
    res.status(500).json({ error: error.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const validatedData = updateUserSchema.parse(req.body);

    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    await user.update(validatedData);

    res.json(user);
  } catch (error) {
    if (error.name === "ZodError") {
      return res.status(400).json({ error: error.errors[0].message });
    }
    res.status(500).json({ error: error.message });
  }
};
