"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LogoCarousel() {
  const logos = [
    { name: "Scottish Power", src: "/33.png" },
    { name: "Octopus Energy", src: "/444.png" },
    { name: "British Gas", src: "/22images.png" },
    { name: "EDF", src: "/edf-2-logo-png-transparent.png" },
    { name: "OPL Energy", src: "/555.png" },
    // { name: "E.ON", src: "/Energy Ombudsman Core Logo-RGB.png" },
    // { name: "Bulb", src: "/ICO logo.png" },
    { name: "Bulb", src: "/66.png" },
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
    <motion.div
      ref={carousel}
      className="overflow-hidden cursor-grab w-full px-2 sm:px-4 md:px-4 "
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="flex gap-11"
        animate={{
          x: [-width, 0],
          transition: {
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          },
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <motion.div
            key={index}
            className="min-w-[90px] sm:min-w-[100px] md:min-w-[110px] h-[90px] sm:h-[100px] md:h-[110px] flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Image
              src={logo.src || "/placeholder.svg"}
              alt={logo.name}
              width={90}
              height={100}
              className="object-contain sm:w-[90px] sm:h-[100px] md:w-[100px] md:h-[110px]"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
