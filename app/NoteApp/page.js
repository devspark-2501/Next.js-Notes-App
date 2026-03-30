'use client'

import { useEffect, useState } from "react"

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
            console.log(result) // check

            //update UI
            setData([...data, result]);
            
        } catch(error) {
            console.log("Error:", error); // check
        }

        setInput('');
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 gap-8">

            <div className="flex gap-3 w-full max-w-xl">
                <input 
                    placeholder="Write something..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 px-4 py-2 text-lg rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />

                <button
                    onClick={CreateNote}
                    className="bg-yellow-400 hover:bg-yellow-500 px-6 py-2 rounded-xl text-lg font-semibold shadow-md transition"
                >
                    Add
                </button>
            </div>

            <div className="w-full max-w-xl flex flex-col gap-5">
                {data.map((item) => (
                    <div 
                        key={item._id}
                        className="bg-white p-6 rounded-2xl shadow-md text-xl leading-relaxed"
                    >
                        {item.noteMessage}
                    </div>
                ))}
            </div>

        </div>
    )
}