"use client"
import Link from "next/link";
import { useSession,signOut } from "next-auth/react";

export default function Navbar() {
 const { data: session } = useSession()

  return (
    <>
     <nav className="w-full py-4 px-6 bg-white shadow-md sticky top-0 z-50 flex justify-between items-center">
      <Link href={"/"}><h1 className="text-2xl font-bold text-blue-500">LinkPage</h1></Link>
      <div className="space-x-4">
        <Link href="#" className="text-gray-600 hover:text-black">Templates</Link>
        <Link href="#" className="text-gray-600 hover:text-black">Marketplace</Link>
        <Link href="#" className="text-gray-600 hover:text-black">Pricing</Link>
        <Link href="#" className="text-gray-600 hover:text-black">Learn</Link>

        { !session && <Link href={"/login"}><button type="button" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg transition duration-300  px-4 py-2 rounded">Login</button></Link>}
        { session && <button onClick={()=>signOut()} type="button" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg transition duration-300  px-4 py-2 rounded">Logout</button>}
      </div>
      
    </nav>
    </>
  );
}