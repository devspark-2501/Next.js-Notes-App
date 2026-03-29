import Link from "next/link"

export default function NavBar() {
    return (
        <div>
            <Link href="/api/NoteApp">
                NoteApp
            </Link>

            <Link href="/api/DataFetch">
                DataFetch
            </Link>
        </div>
    )
}