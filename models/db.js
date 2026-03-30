import mongoose from "mongoose";

// connect db via string
export async function connectDB() {
    if (mongoose.connection.readyState >= 1) return;

    await mongoose.connect(process.env.MONGO_URI);
}

// schema
const NoteSchema = new mongoose.Schema({
    noteMessage: String,
});

// model
export const Note = mongoose.models.Note || mongoose.model("Note", NoteSchema);