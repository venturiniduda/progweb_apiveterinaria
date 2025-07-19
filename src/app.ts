import express, {Request, Response, NextFunction} from "express"
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './docs/swagger.json';
import routers from './routers';
import dotenv from "dotenv"
import cors from 'cors';
dotenv.config();

import { AppDataSource } from "./data-source";

import { loggerMiddleware } from './middlewares/logger.middleware';

AppDataSource.initialize() 
    .then(() => {
        console.log('🎉 Database connection established successfully!');
    })
    .catch((err) => {
        console.error('❌ Error connecting to the database:', err);
        process.exit(1);
    });

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1", loggerMiddleware,  routers);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((req: Request, res: Response, next: NextFunction) => {
    res.send("Hello me, it's me again...");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server is running at https://progweb-apiveterinaria.onrender.com`);
    console.log(`✨ API is ready to use!`);
    console.log(`📚 API Documentation: https://progweb-apiveterinaria.onrender.com/docs`);
});