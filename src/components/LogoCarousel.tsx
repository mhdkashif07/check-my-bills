"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LogoCarousel() {
 const logos = [
  { name: "Scottish Power", src: "/33.png" },
  { name: "Octopus Energy", src: "/444.jpg" },
  { name: "British Gas", src: "/22images.png" },
  { name: "EDF", src: "/edf-2-logo-png-transparent.png" },
  { name: "OPL Energy", src: "/555.jpg" },
  { name: "E.ON", src: "/Energy Ombudsman Core Logo-RGB.png" },
  { name: "Bulb", src: "/ICO logo.png" },
];

  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }

    const handleResize = () => {
      if (carousel.current) {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div ref={carousel} className="overflow-hidden cursor-grab">
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="flex gap-8"
        animate={{
          x: [-width, 0],
          transition: {
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          },
        }}
      >
         {logos.map((logo, index) => (
          <motion.div
            key={index}
            className="min-w-[240px] h-[250px] flex items-center justify-center "
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Image
              src={logo.src || "/placeholder.svg"}
              alt={logo.name}
              width={180}
              height={230}
              className="object-contain	"
            />
          </motion.div>
        ))}
        {/* Duplicate logos for seamless looping */}
        {logos.map((logo, index) => (
          <motion.div
            key={`duplicate-${index}`}
            className="min-w-[240px] h-[250px] flex items-center justify-center "
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Image
              src={logo.src || "/placeholder.svg"}
              alt={logo.name}
              width={180}
              height={230}
              className="object-contain"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
