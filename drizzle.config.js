import { defineConfig } from "drizzle-kit";
export default defineConfig({
  schema: "./utils/schema.js",
  out: "./drizzle",
  driver: 'mysql2',
  // dialect:'mysql',
  dbCredentials: {
url:"mysql://root:AYHKDXWrkGMAPcsxaiOYrvkOlAayVQlH@viaduct.proxy.rlwy.net:56146/railway"
  }
});