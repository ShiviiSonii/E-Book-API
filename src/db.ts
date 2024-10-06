import mongoose from "mongoose";
import { config } from "./config/config";

//IIFE
export async function connectDB() {
  try {
    mongoose.connection.on("connected", () => {
      console.log("DB connected successfully");
    });

    mongoose.connection.on("error", (err) => {
      console.log("Error occurred on db connection", err);
    });

    await mongoose.connect(config.mongodb_url as string);
  } catch (error) {
    console.log("Error while connecting to DB", error);
    process.exit(1);
  }
}
