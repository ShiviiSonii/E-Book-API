import dotenv from "dotenv";
dotenv.config();

const _config = {
  port: process.env.PORT,
  mongodb_url: process.env.MONGODB_URL,
  env: process.env.NODE_ENV,
  jwt_secret_key: process.env.JWT_SECRET_KEY,
  cloud_name: process.env.CLOUD_NAME,
  cloudinary_api_key: process.env.CLOUDINARY_API_KEY,
  cloudinary_api_secret: process.env.CLOUDINARY_API_SECRET,
};

export const config = Object.freeze(_config);
