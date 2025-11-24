import {z} from "zod";

export const taskschema = z.object({
    title : z.string().min(1, 'title is required'),
    description : z.string().optional,
    status : z.enum(['pending', 'in progress', 'complted']),
    dueDate : z.string().optional()
})