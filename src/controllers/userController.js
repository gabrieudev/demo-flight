import { User } from "../models/User.js";
import { updateUserSchema, createUserSchema } from "../schemas/userSchema.js";

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }
    if (user.id !== req.user.id && req.user.user_type !== "admin") {
      return res
        .status(403)
        .json({ error: "Você não tem permissão para deletar este usuário" });
    }

    await user.destroy();
    res.json({ message: "Usuário deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }
    if (user.id !== req.user.id && req.user.user_type !== "admin") {
      return res
        .status(403)
        .json({ error: "Você não tem permissão para deletar este usuário" });
    }

    res.json(user);
  } catch (error) {
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
    if (user.id !== req.user.id && req.user.user_type !== "admin") {
      return res
        .status(403)
        .json({ error: "Você não tem permissão para deletar este usuário" });
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
