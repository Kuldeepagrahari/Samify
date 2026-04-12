import express from "express";
import { AddSong, AddAlbum } from "../controllers/songController.js";
import uploads from "../middlewares/multer.js";

const songRouter = express.Router();

// Route for adding a song with image and audio file
// songRouter.post("/add",
//     uploads.fields([{ name:"image", maxCount:1 }, { name:"audio", maxCount:1 }]),
//     AddSong
// );
songRouter.post("/add",
    uploads.fields([{name:'image',maxCount:1},{name:"audio",maxCount:1}]),
    // (req, res, next) => {
    //     console.log(req.files); // This should show both 'image' and 'audio' fields
    //     next();
    // },
    AddSong
);

export default songRouter;
