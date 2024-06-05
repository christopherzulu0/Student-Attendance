
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
  host:process.env.HOST,
  user:process.env.USER,
  database:process.env.DATABASE,
  password:process.env.PASSWORD,
   port:process.env.PORT
});

const db = drizzle(connection);

export{db}