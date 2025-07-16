import "reflect-metadata"
import { DataSource } from "typeorm"
import dotenv from "dotenv"
dotenv.config();

// export const AppDataSource = new DataSource({
//     type: "postgres",
//     host: process.env.DATABASE_HOST,
//     port: Number(process.env.DATABASE_PORT),
//     username: process.env.DATABASE_USER,
//     password: process.env.DATABASE_PASS,
//     database: process.env.DATABASE_NAME,
//     synchronize: true,
//     entities: ["src/model/*.ts"],
//     migrations: ["src/migrations/*.ts"]
// });

export const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL, 
    synchronize: true,
    entities: ["src/model/*.ts"],
    migrations: ["src/migrations/*.ts"],
    ssl: {
        rejectUnauthorized: false
    }
});