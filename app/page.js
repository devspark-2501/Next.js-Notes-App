'use client'

import { useState } from "react";
import { BiSolidMessageSquareAdd } from "react-icons/bi";
import { RiDeleteBackFill } from "react-icons/ri";

export default function Home() {
  const [note, setNote] = useState('');
  const [data, setData] = useState([]);

  async function AddNote() {
    if (note === "") return;

    // Backend
    try {
      const res = await fetch("/api/DataFetch", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ note }) // send as object
      });

      const result = await res.json();
      console.log(result); // checl

    } catch (error) {
      console.log("Error:", error); // check
    }

    // update UI
    setData([...data, note]);
    setNote('');
  }

  return (
    <div className="h-screen bg-gray-100 flex flex-col items-center pt-20 gap-6 text-black">

      <div className="flex gap-3">
        <input 
          placeholder="Enter your note..."
          className="px-5 py-2 rounded-full border border-gray-300 outline-none focus:ring-2 focus:ring-pink-400"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />

        <button
          onClick={AddNote} 
          className="bg-pink-500 text-white p-3 rounded-full hover:bg-pink-600 transition"
        >
          <BiSolidMessageSquareAdd size={22} />
        </button>
      </div>

      <div className="flex flex-col gap-3 w-80">
        {data.map((item, index) => (
          <div 
            key={index} 
            className="bg-white shadow-md rounded-lg px-4 py-2 text-left"
          >
            {item}
            <span 
              onClick={() => {
                setData(data.filter((_, i) => i !== index));
              }}
            >
              <RiDeleteBackFill />
            </span>
          </div>
        ))}
      </div>

    </div>
  )
}