import { defineConfig } from "drizzle-kit";
export default defineConfig({
  schema: "./utils/schema.js",
  out: "./drizzle",
  driver: 'mysql2',
  dialect:'mysql',
  dbCredentials: {
    host: "localhost",
    user: "root",
    database: "attendance",
  
     port:"3306"
  }
});