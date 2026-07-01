import { NextRequest, NextResponse } from "next/server";

export async function GET(req : NextRequest) {
    return NextResponse.json({
        message: "API is working",
        name: "Vaibhav",
        age: 22,
    })
}