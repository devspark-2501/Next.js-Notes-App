'use client'

import { useEffect, useState } from "react"
import { RiDeleteBin6Line } from "react-icons/ri";

export default function NoteApp() {
    const [input, setInput] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("/api/NoteData");
            const result = await res.json();
            setData(result);
        }
        fetchData();
    }, []);

    async function CreateNote() {
        if (input === '') {
            alert('field cannot be empty');
            return;
        } else {
            // continue
        }

        try {
            const res = await fetch("/api/NoteData" , {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({ note: input })
            });

            const result = await res.json();
            console.log(result)

            //update UI
            setData([result.data, ...data]); // new note on top
            
        } catch(error) {
            console.log("Error:", error);
        }

        setInput('');
    }

    async function DeleteNote(id) {
        try {
            await fetch("/api/NoteData", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ id })
            });

            // update UI
            setData(data.filter((item) => item._id !== id));

        } catch (error) {
            console.log("Delete Error:", error);
        }
    }

    return (
        <div className="min-h-screen bg-neutral-100 flex flex-col items-center py-12 gap-10">

            {/* Input Section */}
            <div className="flex gap-3 w-full max-w-2xl">
                <input 
                    placeholder="Write your thoughts..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 px-6 py-4 text-xl rounded-2xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-black text-black"
                />

                <button
                    onClick={CreateNote}
                    className="bg-black text-white px-6 py-4 rounded-2xl text-lg font-semibold shadow-md hover:scale-105 active:scale-95 transition"
                >
                    Add
                </button>
            </div>

            {/* Notes Section */}
            <div className="w-full max-w-2xl flex flex-col gap-6 text-black">

                {data.map((item) => (
                    <div 
                        key={item._id}
                        className="bg-white p-6 rounded-3xl shadow-lg text-2xl leading-relaxed flex justify-between items-start group"
                    >
                        {/* Note Text */}
                        <p className="flex-1 pr-4 break-words">
                            {item.noteMessage}
                        </p>

                        {/* Delete Button */}
                        <button
                            onClick={() => DeleteNote(item._id)}
                            className="opacity-0 group-hover:opacity-100 transition text-red-500 hover:scale-110"
                        >
                            <RiDeleteBin6Line size={24} />
                        </button>
                    </div>
                ))}

            </div>

        </div>
    )
}