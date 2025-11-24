
export const Authorize = (...roles)=> {
    return (req, res, next )=> {
        if(!roles.includes(req.user.roles)) {
            return res.status(403).json({
                message : "ogolaansho uma haysato "
            })
        }
        next()
    }
}