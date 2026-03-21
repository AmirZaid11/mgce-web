"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/images/gallery/gal1.jpeg",
  "/images/gallery/gal2.jpeg",
  "/images/gallery/gal3.jpeg",
  "/images/gallery/gal4.jpeg",
  "/images/gallery/gal5.jpeg",
  "/images/mgce.jpeg",
  "/images/pi10.jpeg",
  "/images/pic1.jpeg"
];

export default function CameraRoll() {
  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <div className="w-full bg-cream py-10 overflow-hidden border-y border-brand/10">
      <div className="container px-4 mb-6">
        <h3 className="text-navy/40 font-bold uppercase tracking-widest text-xs">Our Media Gallery</h3>
      </div>
      
      <div className="relative flex">
        <motion.div
          animate={{ x: [0, -1920] }} // Adjust based on content width
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-4 px-2"
        >
          {duplicatedImages.map((src, index) => (
            <div
              key={index}
              className="relative w-64 h-48 md:w-80 md:h-60 rounded-2xl overflow-hidden shrink-0 shadow-lg border border-brand/5 hover:scale-105 transition-transform duration-500"
            >
              <Image
                src={src}
                alt={`MGCE Gallery Image ${index + 1}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
