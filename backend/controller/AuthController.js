import User from "../models/User.js";
import { generatetoken} from "../utils/generateToken.js"
import bcrypt from "bcryptjs";


export const register = async (req,res , next)=> {
    try {
        let {name, email, password, roles}= req.body;

        const exist = await User.findOne({email: email.toLowerCase()})
        if(exist) {
            return res.status(400).json({
                message : "email already to use"
            })
        }

        const user = await User.create({
            name,
            email,
            password,
            roles
        })

      const token = generatetoken(user._id)     

        res.status(201).json({
            message :"user register succesfully",
            token
        })
        
    } catch (error) {
        next(error)
    }
}


export const loggin = async (req, res, next)=> {
    try {
        let {email, password} = req.body;

        if(!email || !password) {
            return res.status(400).json({
                message : "email an password are required"
            })
        }

         const user = await User.findOne({email : email.toLowerCase()})
         if(!user) {
            return res.status(400).json({
                message : "invalid email or password"
            })
         }

         const ismatch = await bcrypt.compare(password, user.password)
         if(!ismatch){
            return res.status(400).json({
                message : "invalid email or password"
            })
         }

         const token = generatetoken(user._id)

         res.status(200).json({
            message : "succss login",
            token
         })

    } catch (error) {
        next(error)
    }
}