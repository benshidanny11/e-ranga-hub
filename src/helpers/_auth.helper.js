import 'regenerator-runtime';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const { JWT_SECRET } = process.env;


export const generateAccessToken = async (payload, expiration = '25y') => {
  const accessToken = await jwt.sign(payload, JWT_SECRET, { expiresIn: expiration });
  return accessToken;
};



export const decodeToken = async (token, callback) => {
  const user = await jwt.verify(token, JWT_SECRET, callback);
  return user;
};

export const decodeJWT = (token, callback) => jwt.verify(token, JWT_SECRET, callback);
