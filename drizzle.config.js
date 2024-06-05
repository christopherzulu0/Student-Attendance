import { defineConfig } from "drizzle-kit";
export default defineConfig({
  schema: "./utils/schema.js",
  out: "./drizzle",
  driver: 'mysql2',
  dialect:'mysql',
  dbCredentials: {
    host: "viaduct.proxy.rlwy.net",
    user: "root",
    database: "railway",
    password:"AYHKDXWrkGMAPcsxaiOYrvkOlAayVQlH",
     port:"56146"
  }
});