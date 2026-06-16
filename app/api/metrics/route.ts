import { NextResponse } from "next/server";
import { register, collectDefaultMetrics } from "prom-client";

// Ensure default metrics are collected
try {
  collectDefaultMetrics();
} catch (e) {
  // Ignore errors if it's already registered
}

export async function GET() {
  try {
    const metrics = await register.metrics();
    return new NextResponse(metrics, {
      status: 200,
      headers: {
        "Content-Type": register.contentType,
      },
    });
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
