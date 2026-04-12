import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./src/router/authRoutes.js";
import songRouter from "./src/router/songRoutes.js";
import connectDb from "./src/utils/db.js";
import connectCloudinary from "./src/utils/cloudinary.js";

// Improvements
// we will move to imagekit

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors()); // Corrected origin

// Routes
app.use(router);
app.use("/api/song", songRouter);

// Connect to DB and Cloudinary, then start server
connectCloudinary();
connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at ${PORT}`);
    });
});
