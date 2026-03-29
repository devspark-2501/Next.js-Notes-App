'use server'

import { NextResponse } from "next/server"

let NoteData = [];

export async function GET() {
    return NextResponse.json(NoteData);
}

export async function POST(request) {
    const body = await request.json();

    const NewNoteData = {
        id: Date.now(),
        noteMessage: body.note
    }

    NoteData.push(NewNoteData);
    console.log("Note Added");

    return NextResponse.json({
        message: "Note Added", 
        data: NewNoteData,
    })

    // if (message === "Note Added") {
    //     console.log("Note Added");
    // }

}