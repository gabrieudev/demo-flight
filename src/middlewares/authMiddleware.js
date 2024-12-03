import { verifyToken } from "../utils/jwtUtils.js";
import { User } from "../models/User.js";

export const protect = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "Token não encontrado" });
  }

  try {
    const decoded = verifyToken(token);
    const user = await User.findByPk(decoded.id);

    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Token inválido" });
  }
};

export const restrictTo = (...user_types) => {
  return (req, res, next) => {
    if (!user_types.includes(req.user.user_type)) {
      return res
        .status(403)
        .json({ error: "Você não tem permissão para realizar esta ação" });
    }
    next();
  };
};
