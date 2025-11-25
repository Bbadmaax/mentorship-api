import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import morgan from "morgan"
import helmet from "helmet";


// import routes 
import userRoutes from "./routes/userRoutes.js"
import AuthRoutes from "./routes/AuthRoutes.js"
import adminRoutes from './routes/admin.js'
import taskRoutes from './routes/taskRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'

// import custom middlewares
import {logger} from "./middlewares/logger.js"
import { notFound } from "./middlewares/notFound.js";
import {globalHandler} from "./middlewares/globalHandler.js"
import { limiter } from "./middlewares/rateLimitter.js";

import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './utils/swagger.js';


//load env files
dotenv.config();

const app = express();
const PORT =process.env.PORT || 5000

//  custom middleware
app.use(logger)
app.use(morgan('dev'))



//MIDDLEWARE
app.use(express.json());
app.use(helmet())
app.use(limiter)


app.use('/docs',swaggerUi.serve, swaggerUi.setup(swaggerSpec))

//routes
app.use('/users',userRoutes)
app.use('/Auth', AuthRoutes )
app.use("/admin",  adminRoutes )
app.use("/tasks",  taskRoutes)
app.use('/upload',  uploadRoutes)



// test express router
app.get("/", (req,res)=> {
    res.send("hello express FROM BADMAAX ")
})

// lat middleare
app.use(notFound)

// globalmiddleware
app.use(globalHandler)

mongoose.connect(process.env.NODE_ENV == 'development' ? process.env.MONGO_URL_DEV : process.env.MONGO_URL_PRO)
.then(()=> console.log('connected mongoose ✅'))
.catch(()=> console.log("not connected mongoose ❌"))

app.listen(PORT, ()=> {
    console.log(`SERVER IS RUNNING http://localhost:${PORT}`)
})