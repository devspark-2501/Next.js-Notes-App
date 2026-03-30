import Link from "next/link"

export default function NavBar() {
    return (
        <div className="bg-gray-100 p-4 flex gap-4">
            <Link 
                href="/api/NoteApp"
                className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition"
            >
                ToDo App
            </Link>

            <Link 
                href="/api/DataFetch"
                className="px-4 py-2 rounded-full bg-green-100 text-green-700 hover:bg-green-200 transition"
            >
                DataFetch
            </Link>

            <Link
                href="/NoteApp"
                className="px-4 py-2 rounded-full bg-red-100 text-red-700 hover:bg-red-200 transition"    
            >   
                Notes
            </Link>
        </div>
    )
}