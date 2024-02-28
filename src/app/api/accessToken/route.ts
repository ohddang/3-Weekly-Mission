import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  if (!request.body) {
    return NextResponse.json({ status: 400, message: "Missing request body" });
  }

  const body = await request.json();

  if (!body.accessToken) {
    return NextResponse.json({ status: 400, message: "Missing accessToken in request body" });
  }
  // set cookies
  cookies().set("accessToken", body.accessToken);

  return NextResponse.json({ status: 200 });
}
