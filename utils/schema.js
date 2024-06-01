import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const GRADES = mysqlTable('grades',{
    id:int('id').primaryKey(),
    grade:varchar('grade',{length:10}).notNull()
});

export const STUDENTS = mysqlTable('student',{
    id:int('id').autoincrement().primaryKey(),
    name:varchar('name',{length:20}).notNull(),
    grade:varchar('grade',{length:10}).notNull(),
    address:varchar('address',{length:500}).notNull(),
   contact:varchar('contact',{length:15}).notNull()
})