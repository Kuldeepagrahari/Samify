import {Schema, model} from "mongoose"

const SongSchema = new Schema({
    name:{type:String, required:true},
    desc:{type:String, required:true},
    album:{type:String, required:true},
    image:{type:String, required:true},
    file:{type:String, required:true},
    duration:{type:String, required:true},
    
})

const Song = new model("Songs", SongSchema)
export default Song