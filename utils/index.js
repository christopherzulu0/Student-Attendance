
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
  host: "roundhouse.proxy.rlwy.net",
  user: "root",
  database: "railway",
   port:"43041",
   password:"JrGHxiTpjnucngrTBudVliFkZafUAQgB"
});

const db = drizzle(connection);

export{db}