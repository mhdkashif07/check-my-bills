"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  X,
  // MoveRight,
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
      <div className="flex flex-col items-center gap-2 sm:gap-3 ">
        {/* Top Row – Check & X */}
        <div className="flex gap-2 sm:gap-4">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#2d1a45] flex items-center justify-center">
            <Check className="h-4 w-4 sm:h-5 sm:w-5 text-[#2d1a45]" />
          </div>
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#2d1a45] flex items-center justify-center">
            <X className="h-4 w-4 sm:h-5 sm:w-5 text-[#2d1a45]" />
          </div>
        </div>

        {/* Bottom Row – Bars */}
        <div className="flex gap-2 sm:gap-4">
          <div className="flex flex-col gap-[2px] sm:gap-1">
            <div className="w-6 h-[3px] sm:w-8 sm:h-[4px] bg-[#2d1a45] rounded" />
            <div className="w-6 h-[3px] sm:w-8 sm:h-[4px] bg-[#2d1a45] rounded" />
            <div className="w-6 h-[3px] sm:w-8 sm:h-[4px] bg-[#2d1a45] rounded" />
          </div>
          <div className="flex flex-col gap-[2px] sm:gap-1">
            <div className="w-6 h-[3px] sm:w-8 sm:h-[4px] bg-[#2d1a45] rounded" />
            <div className="w-6 h-[3px] sm:w-8 sm:h-[4px] bg-[#2d1a45] rounded" />
            <div className="w-6 h-[3px] sm:w-8 sm:h-[4px] bg-[#2d1a45] rounded" />
          </div>
        </div>
      </div>
    ),
    description: "Compare multiple providers across the UK market",
  },

    {
  title: "Save",
  icon: (
    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-4 border-[#2d1a45] flex items-center justify-center relative">
      <Pound className="w-6 h-6 sm:w-8 sm:h-8 text-[#2d1a45]" />
      <div className="absolute -bottom-1 w-full">
        <div className="flex justify-center gap-[2px] sm:gap-1">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="w-[3px] h-[6px] sm:w-1 sm:h-2 bg-[#2d1a45] rounded-full"
            ></div>
          ))}
        </div>
      </div>
    </div>
  ),
  description: "Stop overpaying. Be smart and save money",
}

  ];

return (
  <div className="flex flex-wrap rounded-lg justify-center items-center gap-6 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
    {cards.map((card, index) => (
      <div
        key={index}
        className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
      >
        {/* Card */}
        <motion.div
          className="w-full max-w-[280px] sm:max-w-[300px]"
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
              <CardTitle className="text-base sm:text-lg md:text-xl font-bold text-[#2d1a45]">
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
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
              >
                {card.icon}
              </motion.div>
              <p className="text-center text-xs sm:text-sm md:text-base text-[#2d1a45]">
                {card.description}
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Arrow – hide on small, show on md+ */}
        {index < cards.length - 1 && (
          <div className="hidden md:flex justify-center items-center h-full">
            <ArrowRight className="text-[#2d1a45] w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        )}
      </div>
    ))}
  </div>
);

}
