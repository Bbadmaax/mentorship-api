import User from "../models/User.js"

export const getusers = async (req,res)=> {
 try {
    const user = await User.find();
    res.status(200).json(user)

 } catch (err) {
    res.status(500).json({err : err.message })
 }
};

export const getuseronly = async (req,res)=> {
    try {
        const user=  await User.findById(req.params.id)
        if(!user) {
         return   res.status(400).json({message: "user we canot found"})
        }

        res.status(200).json(user)
        
    } catch (err) {
        res.status(500).json({message : "server error"})
    }
}


export const create = async (req,res)=> {
    try {
        const user = await User.create(req.body);
        res.status(200).json(user)
        
    } catch (err) {
        res.status(500).json({err: err.message})
    }
}

export const updateuser = async (req,res)=> {
try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {new : true})

    if(!user) {
        return res.status(400).json({messsage : "user not found"})
    }
    res.status(200).json(user)
    
} catch (err) {
    res.status(500).json({err : err.message})
}
}


export const deleteuser = async (req,res)=> {
    try {
        const deleteuser = await User.findByIdAndDelete(req.params.id);

        if(!deleteuser){
            return res.status(400).json({message : "user not found"})
        }
        res.status(200).json({message : "user deleted "})
    } catch (err) {
        res.status(500).json({err: err.message})
    }
}