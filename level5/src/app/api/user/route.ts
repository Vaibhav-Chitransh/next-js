import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        name: "vaibhav",
        age: 22,
    })
}

export async function POST(req : NextRequest) {
    const {name, age} = await req.json();
    return NextResponse.json({
        name,
        age
    })
}