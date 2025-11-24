import {z} from "zod";

export const logginSchema = z.object({
    email : z.string().email("invalid email address"),
    password : z.string().min(4, 'password must be atleast 4 character')
})