import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
  host: "roundhouse.proxy.rlwy.net",
  user: "root",
  database: "railway",
  password:"JrGHxiTpjnucngrTBudVliFkZafUAQgB",
   port:"43041"
});

const db = drizzle(connection);