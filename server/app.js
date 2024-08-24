import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./src/router/authRoutes.js";
import songRouter from "./src/router/songRoutes.js";
import connectDb from "./src/utils/db.js";
import connectCloudinary from "./src/utils/cloudinary.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json({ limit: '10mb' }));
app.use(cors({ origin: "http://localhost:5173" })); // Corrected origin

// Routes
app.use(router);
app.use("/api", songRouter);

// Connect to DB and Cloudinary, then start server
connectCloudinary();
connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at ${PORT}`);
    });
});
