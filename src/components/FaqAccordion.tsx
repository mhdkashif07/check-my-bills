"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Why should I use SwitchPal?",
    answer: (
      <>
        <p>
          SwitchPal partners with leading suppliers to find the best deal for
          you, saving you time and money when searching for products or
          services.
        </p>
        <p className="mt-4">
          We allow you to compare prices, features, and reviews from multiple
          providers in one place. This makes it easier to find the best deals
          and make informed decisions about what you want to purchase.
        </p>
      </>
    ),
  },
  {
    question: "How does SwitchPal work?",
    answer: (
      <>
        <p>
          SwitchPal works by aggregating offers from a wide range of trusted
          suppliers. You simply enter your preferences, and we present you with
          the best available options tailored to your needs.
        </p>
      </>
    ),
  },
  // Add more FAQ objects here
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-gray-100 py-16 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-12 text-black">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-4 px-4">
        {faqs.map((faq, idx) => (
          <div
            key={faq.question}
            className="bg-white rounded-2xl shadow-md  p-8 flex items-center justify-between gap-6"
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-[#231942]">
                {faq.question}
              </h3>
              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden text-[#231942] text-base leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button
              className="ml-6 flex-shrink-0 bg-[#231942] rounded-lg w-14 h-14 flex items-center justify-center text-white text-3xl focus:outline-none"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              aria-label={openIndex === idx ? "Collapse" : "Expand"}
            >
              {openIndex === idx ? <Minus size={32} /> : <Plus size={32} />}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
