"use client";
import { motion } from "framer-motion";

export default function HeroAnimation() {
  const images = ["/hero-card1.png"];
  return (
    <div className="relative w-full h-64 md:h-96">
      {images.map((src, i) => (
        <motion.img
          key={i}
          src={src}
          alt="hero card"
          className="absolute top-0 left-0 w-full h-full object-contain rounded-2xl shadow-xl"
          initial={{ opacity: 0, scale: 1.1, x: (i - 1) * 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.3 + i * 0.2 }}
          whileHover={{ scale: 1.05, rotate: (i - 1) * 2 }}
        />
      ))}
    </div>
  );
}