import express from "express"
import { create, deleteuser, getuseronly, getusers, updateuser } from "../controller/userController.js"

const router = express.Router()

router.post("/create", create)
router.get("/", getusers)
router.get("/:id", getuseronly)
router.put("/:id", updateuser)
router.delete("/:id", deleteuser)


export default router