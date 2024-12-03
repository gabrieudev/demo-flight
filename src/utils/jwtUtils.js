import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET;

export const generateToken = (payload) => {
  return jwt.sign(payload, SECRET, { expiresIn: 300 });
};

export const verifyToken = (token) => {
  return jwt.verify(token, SECRET);
};
