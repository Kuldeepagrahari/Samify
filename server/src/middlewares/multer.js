
import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')

    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});
if(!storage)console.log("multerrrrrrrrrrrrrrrrr");
const uploads = multer({storage});

export default uploads;
