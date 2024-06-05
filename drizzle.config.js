import { defineConfig } from "drizzle-kit";
export default defineConfig({
  schema: "./utils/schema.js",
  out: "./drizzle",
  driver: 'mysql2',
  dialect:'mysql',
  dbCredentials: {
    host:process.env.HOST,
    user:process.env.USER,
    database:process.env.DATABASE,
    password:process.env.PASSWORD,
     port:process.env.PORT
  }
});