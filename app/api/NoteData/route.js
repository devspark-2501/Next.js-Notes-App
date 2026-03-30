'use server'

import { connectDB, Note } from "@/models/db"
import { NextResponse } from "next/server";

// GET
export async function GET() {
    await connectDB();

    const notes = await Note.find();

    return NextResponse.json(notes);
}

// POST
export async function POST(request) {
    await connectDB();

    const body = await request.json();

    const newNote = await Note.create({
        noteMessage: body.note
    });

    return NextResponse.json({
        message: "Note Added",
        data: newNote
    });
}

// DELETE
export async function DELETE(request) {
    await connectDB();

    const body = await request.json();

    await Note.findByIdAndDelete(body.id);

    return NextResponse.json({
        message: "Note Deleted"
    });
}