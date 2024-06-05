import { db } from "@/utils";
import { NextResponse } from "next/server";

export async function GET(req){
    const result = await db.select().from(GRADES);

    return NextResponse.json(result)
}