// components/TrustedByCreators.jsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TrustedByCreators() {
  return (
    <section className="bg-gradient-to-b from-white to-purple-100 py-20 px-6 md:px-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
          Trusted by Top Content Creators Worldwide
        </h2>
        <p className="text-lg text-gray-500 mt-4 ">
          Join millions who are monetizing their content with <span className="text-blue-600 font-bold">LinkPage</span>
        </p>
      </div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {["creator1.jfif", "creator2.jpg", "creator3.jpg", "creator4.jpg","creator5.jpg","creator6.jfif","creator7.jpg","creator8.webp"].map(
          (img, i) => (
            <Image
              key={i}
              src={`/${img}`}
              alt={`Creator ${i + 1}`}
              width={120}
              height={120}
              className="rounded-full mx-auto shadow-lg hover:scale-105 transition duration-300"
            />
          )
        )}
      </motion.div>
    </section>
  );
}
