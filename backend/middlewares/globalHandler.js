
export const globalHandler = (err, req, res, next )=> {
    const status = err.stausCode || 500;
    res.status(status).json({
        succses : false,
        message : err.message,
        status
    })
}