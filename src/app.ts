import express, {Response} from "express"
import dotenv from "dotenv"
dotenv.config();

import router from "./routers";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./docs/swagger.json";
import { AppDataSource } from "./data-source";

AppDataSource.initialize() 
    .then(() => {
        console.log('🎉 Database connection established successfully!');
    })
    .catch((err) => {
        console.error('❌ Error connecting to the database:', err);
        // process.exit(1);
    });

const app = express();
app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api", router);

// app.use((req, res: Response) => {
//     res.send("Hello me, it's me again...");
// });

const PORT = process.env.PORT || 12345

app.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
    console.log(`✨ API is ready to use!`);
});