import mongoose from "mongoose"


const connectDb = async() => {
    try
    {
      const connect = await mongoose.connect(process.env.MONGO_URI)
      if(connect) {
        console.log("Connected to MongoDB")
      }else{
        console.log('error in uri')
      }
       
    }catch(err){
        console.error(err.message);
    }
}

export default connectDb