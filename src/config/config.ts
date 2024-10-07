import { config as conf } from "dotenv";
conf();

const _config = {
  port: process.env.PORT,
  mongodb_url: process.env.MONGODB_URL,
  env: process.env.NODE_ENV,
  jwt_secret_key: process.env.JWT_SECRET_KEY,
};

export const config = Object.freeze(_config);
