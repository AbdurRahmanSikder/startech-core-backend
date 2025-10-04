import mongoose from "mongoose";
import { getErrorMessage } from "../helpers/config.helper";

const connectDB = async (): Promise<void> => {
  try {
    mongoose.connection.on("connected", () => console.info("☁️  Database connected"));
    await mongoose.connect(`${process.env.MONGODB_URI}/Startech-core-backend`);
  } catch (error: unknown) {
    console.error(getErrorMessage(error));
    process.exit(1); // stop server if DB fails
  }
};

export default connectDB;
