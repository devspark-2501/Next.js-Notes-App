I
import { mongoose } from "mongoose"

// connects to db via string
export async function ConnectDB() {
    await mongoose.connect(process.env.MONGO_URI);
}

const NoteSchema = new mongoose.schema({
    NoteMessage: String,
});

export const Note = mongoose.models.Note || mongoose.models("Note", NoteSchema)



II
import { mongoose } from "mongoose"

// connects to db via string
export async function ConnectDB() {
    await mongoose.connect(process.env.MONGO_URI);
}

const NoteSchema = new mongoose.schema({
    NoteMessage: String,
}),

export const Note = mongoose.models.Note || mongoose.models("Note", NoteSchema)