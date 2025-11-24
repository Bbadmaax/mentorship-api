import jwt from "jsonwebtoken";

export const generatetoken = (userId)=> {
    return jwt.sign(
        {id: userId}, // payload
        process.env.JWT_SECRET,
        {expiresIn : '7d'}
    )
}