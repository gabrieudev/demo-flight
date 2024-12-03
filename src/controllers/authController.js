import { loginSchema } from "../schemas/loginSchema.js";
import { User } from "../models/User.js";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const validatedData = loginSchema.parse(req.body);
    const user = await User.findOne({
      where: {
        login_email: validatedData.login_email,
        password: validatedData.password,
      },
    });
    if (user) {
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: 300,
      });
      return res.json({ token });
    }
    res.status(401).json({ error: "Credenciais inválidas" });
  } catch (error) {
    if (error.name === "ZodError") {
      return res.status(400).json({ error: error.errors[0].message });
    }
    res.status(500).json({ error: error.message });
  }
};
