import swaggerJSDoc from "swagger-jsdoc";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Task Manager APIs",
      version: "1.0.0",
      description: "API documentation for our task manager backend",
    },
    servers: [
      {
        url: process.env.NODE_ENV === "DEVELOPMENT" ? "http://localhost:5000" : "https://mentorship-api-3.onrender.com"
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },

  // ✔️ FIXED ONLY THIS LINE
  apis: [path.join(__dirname, "../routes/*.js")],
};

export const swaggerSpec = swaggerJSDoc(options);
