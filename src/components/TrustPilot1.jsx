// import Image from "next/image";
import { div } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Trustpilot1 = () => {
  return (
    <div className="bg-gray-100">
      <section className="py-10 px-18 max-w-7xl mx-auto ">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 mt-1">
          Our Customer Reviews
        </h2>
        {/* <div className="flex flex-col  items-center p-6 shadow-md w-full max-w-xs  mx-auto text-center bg- gray-100 rounded-b-sm"> */}
        <div className="flex flex-col  items-center p-6 shadow- md w-full max-w-xs  mx-auto text-center ">
          <h2 className="text-2xl font-semibold text-gray-800">Excellent</h2>

          {/* <div className="mt-2 mb-2 flex justify-center">
            <Image
              src="/stars-4.5.svg"
              alt="4.5 stars"
              //   className="w-32 h-auto mx-auto"
              width={170}
              height={32}
            />
          </div> */}
          <div className="mt-2 mb-2 flex justify-center md:px-8">
            <Image
              src="/stars-4.5.svg"
              alt="4.5 stars"
              className="w-24 sm:w-32 md:w-40 h-auto"
              width={170}
              height={32}
            />
          </div>

          <p className="text-sm text-gray-900">
            Based on{" "}
            <Link
              href="https://www.trustpilot.com/review/checkmybills.co.uk"
              className="underline"
            >
              Client reviews
            </Link>
          </p>

          <div className="mt-3">
            <Image
              src="/trustpilot-1.svg"
              alt="4.5 stars"
              width={120}
              height={32}
            />
            {/* <div className="font-semibold text-lg text-black ml-2">
            Trustpilot
          </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trustpilot1;
