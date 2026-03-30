'use server'

import { NextResponse } from "next/server"

let NoteData = []; // temporary Data

// GET
export async function GET() {
    return NextResponse.json(NoteData);
}


// POST
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

// Delete
export async function DELETE(request) {
  const { id } = await request.json(); // get id from frontend

  NoteData = NoteData.filter((item) => item.id !== id);

  console.log("Note Deleted"); // check

  return NextResponse.json({
    message: "Note Deleted"
  });
}