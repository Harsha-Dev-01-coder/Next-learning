import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b p-4">
      <Link
        href="/"
        className="text-xl font-bold"
      >
        MyApp
      </Link>

      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}