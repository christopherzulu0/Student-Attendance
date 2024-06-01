import { STUDENTS } from "@/utils/schema";
import { NextResponse } from "next/server";
import {db} from "@/utils"
export async function POST(req,res){
    const data = await res.json();

    const result = await db.insert(STUDENTS)
    .VALUES({
        name:data?.name,
        grade:data?.grade,
        address:data?.address,
        contact:data?.contact
    })

    return NextResponse.json(result);
}