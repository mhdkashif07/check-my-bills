"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  X,
  MoveRight,
  PoundSterlingIcon as Pound,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import LogoCarousel from "@/components/LogoCarousel";

export default function ComparisonFlow() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cards = [
    {
      title: "Compare",
      icon: (
        <div className="flex flex-col items-center gap-2">
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full border-2 border-[#2d1a45] flex items-center justify-center">
              <Check className="h-5 w-5 text-[#2d1a45]" />
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-[#2d1a45] flex items-center justify-center">
              <X className="h-5 w-5 text-[#2d1a45]" />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col gap-1">
              <div className="w-8 h-1 bg-[#2d1a45] rounded"></div>
              <div className="w-8 h-1 bg-[#2d1a45] rounded"></div>
              <div className="w-8 h-1 bg-[#2d1a45] rounded"></div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="w-8 h-1 bg-[#2d1a45] rounded"></div>
              <div className="w-8 h-1 bg-[#2d1a45] rounded"></div>
              <div className="w-8 h-1 bg-[#2d1a45] rounded"></div>
            </div>
          </div>
        </div>
      ),
      description: "Compare multiple providers across the UK market",
    },
    // {
    //   title: "Switch",
    //   icon: (
    //     <svg
    //       width="70"
    //       height="70"
    //       viewBox="0 0 70 70"
    //       fill="none"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <path
    //         d="M35 10C22.85 10 13 19.85 13 32C13 44.15 22.85 54 35 54C47.15 54 57 44.15 57 32"
    //         stroke="#2d1a45"
    //         strokeWidth="4"
    //         strokeLinecap="round"
    //       />
    //       <path
    //         d="M35 10L45 20M35 10L25 20"
    //         stroke="#2d1a45"
    //         strokeWidth="4"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //       />
    //     </svg>
    //   ),
    //   description: "We help you choose the right deal and switch",
    // },
    {
      title: "Save",
      icon: (
        <div className="w-16 h-16 rounded-full border-4 border-[#2d1a45] flex items-center justify-center relative">
          <Pound className="h-8 w-8 text-[#2d1a45]" />
          <div className="absolute -bottom-1 w-full">
            <div className="flex justify-center gap-1">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-2 bg-[#2d1a45] rounded-full"
                ></div>
              ))}
            </div>
          </div>
        </div>
      ),
      description: "Stop overpaying. Be smart and save money",
    },
  ];

  return (
<div className="flex flex-wrap justify-center items-center gap-6 px-4 md:px-8 max-w-6xl mx-auto">
  {cards.map((card, index) => (
    <div key={index} className="flex items-center gap-4">
      {/* Card */}
      <motion.div
        className="w-[280px] sm:w-[300px]"
        onHoverStart={() => setHoveredCard(index)}
        onHoverEnd={() => setHoveredCard(null)}
        whileHover={{
          y: -10,
          boxShadow:
            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          transition: { type: "spring", stiffness: 400, damping: 10 },
        }}
      >
        <Card className="h-full border-2 transition-all duration-300 hover:border-[#2d1a45]">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-xl font-bold text-[#2d1a45]">
              {card.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-4">
            <motion.div
              animate={
                hoveredCard === index
                  ? {
                      scale: 1.1,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 10,
                      },
                    }
                  : { scale: 1 }
              }
            >
              {card.icon}
            </motion.div>
            <p className="text-center text-sm text-[#2d1a45]">
              {card.description}
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Arrow – only show between cards */}
      {index < cards.length - 1 && (
        <div className="hidden sm:flex justify-center items-center h-full">
          <ArrowRight className="text-[#2d1a45] w-6 h-6" />
        </div>
      )}
    </div>
  ))}
</div>


  );
}