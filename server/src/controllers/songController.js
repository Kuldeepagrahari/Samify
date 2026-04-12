import Song from '../models/Song.js';
import { v2 as cloudinary } from 'cloudinary';

const AddSong = async (req, res) => {
    try {
        const { name, desc, album } = req.body;
        const image = req.files.image[0]
        const audio = req.files.audio[0]
        console.log('Files:', req.files); // Debugging
        console.log('Fields:', req.body);

        if (!image || !audio) {
            return res.status(400).json({ error: "Image and audio files are required." });
        }

        // Upload files to Cloudinary
        const imageUpload = await cloudinary.uploader.upload(image.path, { resource_type: 'image' });
        const audioUpload = await cloudinary.uploader.upload(audio.path, { resource_type: 'video' });
        res.status(200).json(audioUpload, imageUpload);
        // Create a new song document
        const songData = {
            name,
            desc,
            album,
            image: imageUpload.secure_url,
            file: audioUpload.secure_url,
            duration:"1:28"
        };

        const newSong = new Song(songData);
        await newSong.save();

        res.status(200).json({ message: 'Song added successfully', song: newSong });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const AddAlbum = () => {
    // Implement the AddAlbum logic if needed
};

export { AddSong, AddAlbum };
