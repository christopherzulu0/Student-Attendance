import { ATTENDANCE, STUDENTS } from "@/utils/schema";
import { eq, sql, and, desc } from "drizzle-orm"; // Import desc() function
import { NextResponse } from "next/server";
import { db } from '@/utils';

export async function GET(req) {
    const searchParams = req.nextUrl.searchParams;
    const date = searchParams.get('date');
    const grade = searchParams.get('grade');

    const result = await db.select({
        day: ATTENDANCE.day,
        presentCount: sql`COUNT(${ATTENDANCE.day})` // Use COUNT() properly
    }).from(ATTENDANCE)
    .leftJoin(STUDENTS, and(
        eq(ATTENDANCE.studentId, STUDENTS.id),
        eq(ATTENDANCE.date, date)
    ))
    .groupBy(ATTENDANCE.day)
    .where(eq(STUDENTS.grade, grade))
    .orderBy(desc(ATTENDANCE.day)) // Sort by day in descending order
    .limit(7);

    return NextResponse.json(result);
}
