"use client"
import { motion } from "framer-motion";

export default function LinkButton({ label, href }) {
  return (
    <motion.a
      href={href}
      className="block w-full max-w-md text-center py-4 px-6 bg-white text-black rounded-xl shadow hover:bg-gray-100"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
    >
      {label}
    </motion.a>
  );
}