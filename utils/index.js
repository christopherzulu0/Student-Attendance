
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
  host: "viaduct.proxy.rlwy.net",
  user: "root",
  database: "railway",
  password:"AYHKDXWrkGMAPcsxaiOYrvkOlAayVQlH",
   port:"56146"
});

const db = drizzle(connection);

export{db}