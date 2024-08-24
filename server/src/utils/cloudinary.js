import { v2 as cloudinary } from "cloudinary";

const connectCloudianry = async () => {
  try {
    await cloudinary.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      secret_key: process.env.CLOUDINARY_SECRET_KEY,
    });
  } catch (err) {
    console.log(err);
  }
};

export default connectCloudianry;
