'use client'

import { useState } from "react";
import { BiSolidMessageSquareAdd } from "react-icons/bi";

// import { IoIosAddCircle } from "react-icons/io";

export default function Home() {
  const [note, setNote] = useState('');
  const [data, setData] = useState([]);

  function AddNote() {
  if (note === "") {
    console.log("note has nothing");
    return;
  }

  const newData = [...data, note]; // create new array
  
  setData(newData); // update state
  setNote(''); // clear input
}

  return (
    <div className="h-screen bg-white text-center">
      <input 
        placeholder="Enter Your Note"
        className="rounded-full px-4 py-2"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <button
        onClick={AddNote} 
        className="p-2 rounded-full">
        <BiSolidMessageSquareAdd size={22} />
      </button>

      {data.map((item, index) => (
        <h1 key={index}>{item}</h1>
      ))}
    </div>
  )
}