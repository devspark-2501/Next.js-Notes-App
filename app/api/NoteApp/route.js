'use server'

import { NextResponse } from "next/server"

export async function GET() {
    return NextResponse.json([
        {
            fullName: "Tanush Mathur",
            age: 16,
            city: "Bhopal"
        },
        {
            fullName: "John Doe",
            age: 24,
            city: "London"
        }
    ])
}