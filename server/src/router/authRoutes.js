import express from "express"
const router = express.Router()

router.get("/", (req, res)=>{
    res.send("hey sam router")
    console.log("hey sam router")
})


export default router