"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const faqs = [
  {
    question: "1. What services does CheckMyBills offer?",
    answer: (
      <>
        <p className="mt-5">
          <Link href="/" className="text-[#fe2d00]">
            CheckMyBills.co.uk
          </Link>{" "}
          provides a free, independent, and impartial comparison service to help
          you save on:
        </p>
        <ul className="list-disc pt-3 pl-8 space-y-2">
          <li>
            <b>Energy:</b> Compare electricity and gas suppliers for the best
            rates.
          </li>
          <li>
            <b>Broadband:</b> Find affordable, high-speed internet deals.
          </li>
          <li>
            <b>Mobile Phones and SIM-only Plans:</b> Choose from top deals
            tailored to your needs.
          </li>
          <li>
            <b>Insurance Products:</b> Discover and compare deals for car
            insurance, home insurance, Pet insurance, and more – in partnership
            with trusted UK providers.
          </li>
        </ul>
        <p className="mt-4">
          We make it easy to save time and money by finding deals that fit your
          lifestyle
        </p>
      </>
    ),
  },
  {
    question: "2. How does the comparison process work?",
    answer: (
      <>
        <p className="mt-5">It’s quick and hassle-free!</p>

        <ul className=" list-disc py-4 pl-8 space-y-2 font-semibold">
          <li>
            {" "}
            Provide a few details, like your postcode or current provider.:
          </li>
          <li> View deals from top UK providers.:</li>
          <li> Switch or sign up online with our guidance.:</li>
        </ul>

        <p>
          For insurance products, you’ll be directed to our{" "}
          <b> trusted affiliate</b> partners for final sign-up.
        </p>
      </>
    ),
  },
  {
    question: "3. Is CheckMyBills affiliated with any providers?",
    answer: (
      <>
        <p className="mt-5">
          We are <strong>independent</strong> for utilities like energy,
          broadband, and mobile services. For <b>insurance products</b> , we
          partner with reliable UK-based <b>independent</b> provider to bring
          you exclusive deals. These partnerships allow us to provide
          competitive offers while maintaining transparency.
        </p>
      </>
    ),
  },
  {
    question: "4. How much does it cost to use CheckMyBills?",
    answer: (
      <>
        <p className="mt-5">
          It’s <b> free to use!</b> Whether you’re comparing utilities or
          insurance products, there’s no charge for using our service.
        </p>
      </>
    ),
  },
  {
    question: "5. How accurate are the deals shown on CheckMyBills?",
    answer: (
      <>
        <p className="mt-5">
          We source deals directly from providers and update them regularly. For
          insurance comparisons, we work with <b> trusted partners</b> to ensure
          you get the most accurate and competitive quotes.
        </p>
      </>
    ),
  },
  // Add more FAQ objects here
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-gray-200 py-16 min-h-screen">
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
