'use server'

import { NextResponse } from "next/server"

let NoteData = [];

export async function GET() {
    return NextResponse(NoteData);
}

export async function POST(request) {
    const body = await request.json();

    const NewNoteData = {
        id: Date.now,
        note: body.note
    }

    NoteData.push(NewNoteData);

    return NextResponse.json({
        message: "Note added",
        data: NewNoteData,
  });
}