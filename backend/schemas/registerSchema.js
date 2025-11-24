import {z} from "zod";

export const registerSchema = z.object({
    name : z.string().min(3, "name must be at leat 3 character"),
    email : z.string().email("invalid email address"),
    password : z.string().min(4, 'password must be at leatst 4 character')
})