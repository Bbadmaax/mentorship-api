import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
  try {
    // 1. Get token from header
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    // 2. Verify token
    const decode = jwt.verify(token, process.env.JWT_SECRET);

    // 3. Find user & remove password
    req.user = await User.findById(decode.id).select("-password");

    if (!req.user) {
      return res.status(401).json({ message: "User not found" });
    }

    // 4. Continue controller
    next();

  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};































//  import jwt from "jsonwebtoken";
// import User from "../models/User.js";


// export const protect= async (req,res,next)=> {

//       const token = req.headers.authorization?.split(" ")[1];

//       if(!token) 
//         return res.status(401).json({message : "no token provides"})
// }

// try {
//     const decode = jwt.verify(token, process.env.JWT_SECRET)

//     req.user = await User.findById(decode.id).select("-password")
//     next()
  
    
// } catch (error) {
//     res.status(401).json({message : "invalid or expire token"})
// }