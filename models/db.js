import mongoose from "mongoose";

export async function connectDB() {
  await mongoose.connect(process.env.MONGO_URI);
}

// Schema + Model
const NoteSchema = new mongoose.Schema({
  noteMessage: String,
});

export const Note =
  mongoose.models.Note || mongoose.model("Note", NoteSchema);