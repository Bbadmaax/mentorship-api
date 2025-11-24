
import express from "express"
import { loggin, register } from "../controller/AuthController.js"
import { validate } from "../middlewares/validate.js"
import { registerSchema } from "../schemas/registerSchema.js"
import { protect } from "../middlewares/Protect.js"


const router = express.Router()

/**
 * @swagger
 * /Auth/register:
 *   post:
 *     summary: Register new userSSSSS
 *     description: Creates a new user and returns a JWT token.
 *     tags: [registers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 example: Mustafe
 *               email:
 *                 type: string
 *                 example: mustafe@gmail.com
 *               password:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Email already in use
 *       500:
 *         description: Server error
 */
router.post('/register', validate(registerSchema), register)
router.post('/loggin', loggin)


router.get("/profile", protect, (req,res)=> {

    //jalkan hadii loo soo gudbo maxa ku jira protext lasoo dhaafo
     res.json({
       message :  `userka hada loginka ah waa ${req.user}`
     });
})



export default router