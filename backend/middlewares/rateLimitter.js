import rateLimit from "express-rate-limit"

export const limiter = rateLimit({
    window : 15 * 60 * 1000,
    max : 100,
    message : "roo many request stopped"
})