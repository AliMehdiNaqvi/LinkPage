"use client"
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // mobile menu icons

export default function Navbar() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="w-full py-4 px-6 bg-white shadow-md sticky top-0 z-50">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href={"/"}>
            <h1 className="text-2xl font-bold text-blue-500">LinkPage</h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 items-center">
            <Link href="#" className="text-gray-600 hover:text-black">Templates</Link>
            <Link href="#" className="text-gray-600 hover:text-black">Marketplace</Link>
            <Link href="#" className="text-gray-600 hover:text-black">Pricing</Link>
            <Link href="#" className="text-gray-600 hover:text-black">Learn</Link>

            {!session && (
              <Link href={"/login"}>
                <button
                  type="button"
                  className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg transition duration-300 px-4 py-2 rounded"
                >
                  Login
                </button>
              </Link>
            )}
            {session && (
              <button
                onClick={() => signOut()}
                type="button"
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg transition duration-300 px-4 py-2 rounded"
              >
                Logout
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="flex flex-col space-y-3 mt-4 md:hidden">
            <Link href="#" className="text-gray-600 hover:text-black">Templates</Link>
            <Link href="#" className="text-gray-600 hover:text-black">Marketplace</Link>
            <Link href="#" className="text-gray-600 hover:text-black">Pricing</Link>
            <Link href="#" className="text-gray-600 hover:text-black">Learn</Link>

            {!session && (
              <Link href={"/login"}>
                <button
                  type="button"
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg transition duration-300 px-4 py-2 rounded"
                >
                  Login
                </button>
              </Link>
            )}
            {session && (
              <button
                onClick={() => signOut()}
                type="button"
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg transition duration-300 px-4 py-2 rounded"
              >
                Logout
              </button>
            )}
          </div>
        )}
      </nav>
    </>
  );
}
