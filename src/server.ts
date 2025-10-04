import express from "express";
import "dotenv/config";
import connectDB from "./configs/db";
import connectCloudinary from "./configs/cloudinary";

const app = express();
const port: number = parseInt(process.env.PORT ?? "4000", 10);

//Middleware Configuration
app.use(express.json());
app.get("/", (_req, res) => res.send("Api is working"));

//IIFE
void (async () => {
  try {
    await connectDB();
    await connectCloudinary();
    console.info("👌 Cloudinary connected successfully");

    app.listen(port, () => {
      console.info(`🌐 Visit: http://localhost:${port}`);
    });
  } catch (error) {
    console.error("❌ Server failed to start:", error);
    process.exit(1);
  }
})();
