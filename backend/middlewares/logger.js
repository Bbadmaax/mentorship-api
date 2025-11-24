
export const logger = (req, res, next)=> {
    const url = req.url
    const method = req.method
    const time = new Date().toLocaleString()
    console.log(`
        
        -------------------
        url: ${url}
        method : ${method}
        time : ${time}
        ---------------------

        `);
        next()
}