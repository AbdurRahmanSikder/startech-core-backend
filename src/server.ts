import express from "express";
import "dotenv/config";
import connectDB from "./configs/db";
import connectCloudinary from "./configs/cloudinary";

const app = express();
const port = process.env.PORT || 4000;

//Middleware Configuration
app.use(express.json());
app.get("/", (req, res) => res.send("Api is working"));

//IIFE
(async () => {
  try {
    await connectDB();
    await connectCloudinary();
    console.log("👌 Cloudinary connected successfully");

    app.listen(port, () => {
      console.log(`🌐 Visit: http://localhost:${port}`);
    });
  } catch (error) {
    console.error("❌ Server failed to start:", error);
    process.exit(1);
  }
})();
