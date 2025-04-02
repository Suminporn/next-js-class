import Link from "next/link";

export default function MenuBar() {
  return (
    <nav className="fixed flex bottom-0 left-0 right-0 bg-blue-100 p-[16px] px-[100px] pb-[24px] justify-between shadow-lg [&>a]:hover:text-teal-500 opacity-50">
      <Link href="/" className="text-gray-500">Home</Link>
      <Link href="/about" className="text-gray-500">About</Link>
      <Link href="/contact" className="text-gray-500">Contact</Link>
    </nav>
  )
}