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
  {
    question: "6. Can I switch or buy insurance through CheckMyBills?",
    answer: (
      <>
        <p className="mt-5">
          Yes! For <strong>insurance products</strong>, you’ll be redirected to
          our affiliate partners to finalise your purchase safely and securely.
        </p>
      </>
    ),
  },
  {
    question: "7. What types of insurance can I compare on CheckMyBills?",
    answer: (
      <>
        <p className="mt-5">
          We partner with trusted providers to offer comparisons for:
        </p>

        <ul className=" list-disc py-2 pl-10 space-y-2">
          <li>
            <strong>Car Insurance</strong>: Save on comprehensive, third-party,
            or multi-car policies.
          </li>
          <li>
            <b> Home Insurance</b>: Find affordable building, contents, or
            combined cover.
          </li>
          <li>
            <b>Travel Insurance</b>: Protect your trips with flexible and
            affordable options.
          </li>
        </ul>

        <p>More products may be added soon – stay tuned!</p>
      </>
    ),
  },
  {
    question: "8. How do I know if the insurance providers are trustworthy?",
    answer: (
      <>
        <p className="mt-5">
          We only work with{" "}
          <strong> regulated and well-reviewed UK providers</strong> to ensure
          you’re in safe hands. Each provider is vetted for reliability,
          customer service, and competitive pricing.
        </p>
      </>
    ),
  },
  {
    question: "9. Can businesses use CheckMyBills?",
    answer: (
      <>
        <p className="mt-5">
          Our platform currently caters to residential customers for utilities
          and insurance. Businesses can contact us at
          <Link href="/" className="text-[#fe2d00]">
            {" "}
            info@checkmybills.co.uk
          </Link>{" "}
          to inquire about custom solutions.
        </p>
      </>
    ),
  },
  {
    question: "10. Does CheckMyBills cover all service providers in the UK?",
    answer: (
      <>
        <p className="mt-5">
          We strive to include as many providers as possible, from{" "}
          <b> big brands</b> to <b> specialist suppliers</b>. However, smaller
          providers might not always be listed.
        </p>
      </>
    ),
  },
  {
    question:
      "11. What happens if I change my mind after signing up for a deal?",
    answer: (
      <>
        <p className="mt-5">
          Most utilities and insurance providers offer a{" "}
          <b> 14-day cooling-off period</b>. You can cancel without penalties
          during this time.{" "}
        </p>
      </>
    ),
  },
  {
    question: "12. Is there a mobile app for CheckMyBills?",
    answer: (
      <>
        <p className="mt-5">
          Not yet, but our website is <b>mobile-optimized</b>, so you can easily
          compare and save on the go.
        </p>
      </>
    ),
  },
  {
    question: "13. How often should I compare my bills and insurance?",
    answer: (
      <>
        <p className="mt-5">
          For utilities: <b> Every 12 months</b> or when your contract ends.
        </p>
        <p className="mt-1">
          For insurance: <b>Annually</b> before your policy renews to avoid
          automatic increases in premiums.
        </p>
      </>
    ),
  },
  {
    question: "14. Can I compare multi-policy insurance bundles?",
    answer: (
      <>
        <p className="mt-5">
          Yes! Some providers offer <b> multi-policy discounts</b>, such as
          bundling car and home insurance. Check our partner deals to see how
          much you can save.
        </p>
      </>
    ),
  },
  {
    question: "15. Do I need to cancel my current insurance before switching?",
    answer: (
      <>
        <p className="mt-5">
          You can start a new policy in advance, but remember to cancel your old
          one before it auto-renews. For energy or broadband, we’ll guide you
          through switching without disruptions
        </p>
      </>
    ),
  },
  {
    question:
      "16. How do I make a claim for insurance purchased through CheckMyBills?",
    answer: (
      <>
        <p className="mt-5">
          Claims are handled directly by the insurance provider. Once you’ve
          signed up, your provider will provide all the necessary contact
          details for filing a claim.
        </p>
      </>
    ),
  },
  // Add more FAQ objects here
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const [showAll, setShowAll] = useState(false);
  const visibleFaqs = showAll ? faqs : faqs.slice(0, 5);

  return (
    <section className="bg-gray-200 py-16 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-12 text-black">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-4 px-4">
        {visibleFaqs.map((faq, idx) => (
          <div
            key={faq.question}
            className="bg-white rounded-2xl shadow-md  p-8 flex items-center justify-between gap-2"
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
              className="ml-6 flex-shrink-0 bg-[#231942] rounded-lg w-14 h-13 flex items-center justify-center text-white text-3xl focus:outline-none"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              aria-label={openIndex === idx ? "Collapse" : "Expand"}
            >
              {openIndex === idx ? <Minus size={32} /> : <Plus size={32} />}
            </button>
          </div>
        ))}

        {/* See More / See Less Button  */}
        {faqs.length > 5 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-white px-4 py-2 rounded-md"
              style={{ backgroundColor: "rgb(254, 45, 0)" }}
            >
              {showAll ? "Show Less" : "See More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}