import {Schema, model} from "mongoose"

const AlbumSchema = new Schema({
    name:{type:String, required:true},
    desc:{type:String, required:true},
    bgColour:{type:String, required:true},
    image:{type:String, required:true},
   
   
    
})

const Album = new model("Album", AlbumSchema)
export default Album