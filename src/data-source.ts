import "reflect-metadata"
import { DataSource } from "typeorm"
import dotenv from "dotenv"
import path from "path";
dotenv.config();

// export const AppDataSource = new DataSource({
//     type: "postgres",
//     url: process.env.DATABASE_URL, 
//     synchronize: true,
//     entities: ["src/model/*.ts"],
//     migrations: ["src/migrations/*.ts"],
//     ssl: {
//         rejectUnauthorized: false
//     }
// });

const isProd = process.env.NODE_ENV === "production";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: true,
  entities: [
    isProd
      ? path.join(__dirname, "model", "**", "*.js")    // usa o dist/**/*.js
      : path.join(__dirname, "..", "src", "model", "**", "*.ts")
  ],
  migrations: [
    isProd
      ? path.join(__dirname, "migrations", "**", "*.js")
      : path.join(__dirname, "..", "src", "migrations", "**", "*.ts")
  ],
  ssl: {
    rejectUnauthorized: false
  }
});
