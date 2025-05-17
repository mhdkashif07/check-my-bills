"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LogoCarousel() {
  const logos = [
    { name: "Scottish Power", src: "/placeholder.svg?height=60&width=150" },
    { name: "Octopus Energy", src: "/placeholder.svg?height=60&width=150" },
    { name: "British Gas", src: "/placeholder.svg?height=60&width=150" },
    { name: "EDF", src: "/placeholder.svg?height=60&width=150" },
    { name: "OPL Energy", src: "/placeholder.svg?height=60&width=150" },
    { name: "E.ON", src: "/placeholder.svg?height=60&width=150" },
    { name: "Bulb", src: "/placeholder.svg?height=60&width=150" },
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
            className="min-w-[150px] h-[60px] flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Image
              src={logo.src || "/placeholder.svg"}
              alt={logo.name}
              width={150}
              height={60}
              className="object-contain"
            />
          </motion.div>
        ))}

        {/* Duplicate logos for seamless looping */}
        {logos.map((logo, index) => (
          <motion.div
            key={`duplicate-${index}`}
            className="min-w-[150px] h-[60px] flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Image
              src={logo.src || "/placeholder.svg"}
              alt={logo.name}
              width={150}
              height={60}
              className="object-contain"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
