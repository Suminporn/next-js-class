import Link from "next/link";

export default function MenuBar() {
  return (
    <nav className="bg-blue-300 shadow-md p-4 flex justify-center space-x-10">
      <Link href="/" className="text-gray-500 hover:underline">Home</Link>
      <Link href="/about" className="text-gray-500 hover:underline">About</Link>
      <Link href="/contact" className="text-gray-500 hover:underline">Contact</Link>
    </nav>
  )
}