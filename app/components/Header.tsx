import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-black bg-opacity-50 text-white p-4">
      <nav className="flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Orion Inspired
        </Link>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/whitepaper">Whitepaper</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  )
}

