import Song from "../models/Song.js";
import { v2 as cloudinary } from "cloudinary";

const AddSong = async (req, res) => {
    try {
        const { name, desc, album } = req.body;
        const { image, audio } = req.files;

        if (!image || !audio) {
            return res.status(400).json({ error: "Image and audio files are required." });
        }

        // Upload files to Cloudinary
        const imageUpload = await cloudinary.uploader.upload(image[0].path, { resource_type: "image" });
        const audioUpload = await cloudinary.uploader.upload(audio[0].path, { resource_type: "video" });

        // Create a new song document
        const songData = {
            name,
            desc,
            album,
            image: imageUpload.secure_url,
            file: audioUpload.secure_url,
            duration: "1:1" // Replace with actual duration if you calculate it
        };

        const newSong = new Song(songData);
        await newSong.save();

        res.status(200).json({ message: "Song added successfully", song: newSong });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const AddAlbum = () => {
    // Implement the AddAlbum logic if needed
};

export { AddSong, AddAlbum };
