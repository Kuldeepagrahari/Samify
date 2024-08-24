import express from "express"
const router = express.Router()
import authController from "../controllers/authController.js"

router.get("/", (req, res)=>{
    res.send("hey sam router")
    console.log("hey sam router")
})
router.route("/login", authController.register)

export default router