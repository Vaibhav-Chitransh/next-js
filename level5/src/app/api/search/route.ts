import { NextRequest, NextResponse } from "next/server";

export async function GET(req : NextRequest) {
    const query = await req.nextUrl.searchParams.get("q");
    return NextResponse.json({
        queryValue: query
    })
}