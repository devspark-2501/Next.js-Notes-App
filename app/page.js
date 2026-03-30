'use client'

import { useState, useEffect } from "react";
import { BiSolidMessageSquareAdd } from "react-icons/bi";
import { RiDeleteBackFill } from "react-icons/ri";

export default function Home() {
  const [note, setNote] = useState('');
  const [data, setData] = useState([]);

  // GET all notes on load
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/DataFetch");
      const result = await res.json();
      setData(result);
    }
    fetchData();
  }, []);

  async function AddNote() {
    // if (note === "") return;

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
      console.log(result); // check

      // update UI
      setData([...data, result.data]);

    } catch (error) {
      console.log("Error:", error); // check
    }

    setNote('');

    // Alert
    if (note === '') {
      alert('field cannot be empty');
    } else {
      return;
    }
  }

  // Delete function
  async function DeleteNote(id) {
    try {
      await fetch("/api/DataFetch", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ id })
      });

      // update UI
      setData(data.filter((item) => item.id !== id));

    } catch (error) {
      console.log("Delete Error:", error);
    }
  }

  return (
    <div className="h-screen bg-gray-100 flex flex-col items-center pt-10 gap-6 text-black">

      <div className="flex gap-3">
        <input 
          placeholder="Enter your task..."
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
            key={item.id} 
            className="bg-white shadow-md rounded-lg px-4 py-2 text-left flex justify-between items-center"
          >
            {item.noteMessage}
            <span 
              onClick={() => DeleteNote(item.id)}
              className="text-red-500 cursor-pointer"
            >
              <RiDeleteBackFill />
            </span>
          </div>
        ))}
      </div>

    </div>
  )
}