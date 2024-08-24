import express from "express";
import { AddSong, AddAlbum } from "../controllers/songController.js";
import uploads from "../middlewares/multer.js";

const songRouter = express.Router();

// Route for adding a song with image and audio file
songRouter.route("/addSong").post(
    uploads.fields([{ name: "image", maxCount: 1 }, { name: "audio", maxCount: 1 }]),
    AddSong
);

export default songRouter;
