"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import HeroAnimation from "./HeroAnimation";
import Link from "next/link";


export default function Hero() {
  const router = useRouter()


  const createHandle = () => {
    router.push(`/generate?handle=${text}`)
  }
  const [text, settext] = useState("")

  return (
    <section className="bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 text-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-4xl md:text-6xl font-bold">
            Everything you are. In one, simple link.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-4 text-lg md:text-xl">
            Join over <strong className="text-4xl ">50M+</strong> people who use LinkPage to connect their audiences.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-6 flex">
            <input value={text} onChange={(e)=>settext(e.target.value)} type="text" className=" focus:outline-white flex-grow px-4 py-3 rounded-l-md text-black bg-white" placeholder="Enter your handle" />
            <button onClick={() => { createHandle() }} className="bg-white mx-2 text-blue-500 rounded-r-md px-6 font-semibold hover:bg-gray-300">Claim Your linkPage</button>
            
          </motion.div>
        </div>
        <HeroAnimation />
      </div>
    </section>
  );
}