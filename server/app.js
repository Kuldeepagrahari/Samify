import express from "express"
const app = express()
import dotenv from "dotenv"
dotenv.config()
import router from "./src/router/authRoutes.js"
const PORT = process.env.PORT || 5000
import connectDb from "./src/utils/db.js"
// app.get("/",(req, res)=>{
//     res.send("hey sam")
// })
app.use(express.json())
app.use(router)
connectDb().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`server is running at ${PORT}`)
    })
})
