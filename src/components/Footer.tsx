import React from "react";
import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#012348] text-[14px]">
      <div className="mx-auto max-w-6xl px-4 text-white pt-[6.6rem] pb-[6.9rem]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and Company Info */}
            <div className="space-y-4">
              <Link href="/" className="flex items-center">
                <div className="relative">
                  <Image
                    src="/checkbillslogo.svg"
                    alt="Checkmybills"
                    width={225}
                    height={225}
                  />
                </div>
              </Link>
              <p className="text-[14px] mt-5">Email: info@checkmybills.co.uk</p>
              <div className="text-base">
                <p className="">
                  <span className="font-semibold">Checkmybills.co.uk</span> is
                  registered trademark of Platform 101 Ltd, company No. 15681880
                  Registered address 27 Old Gloucester Street, London, WC1N 3AX.
                  Checkmybills.co.uk is trading style of Platform 101 Ltd. ©
                  2025 All Rights Reserved.
                </p>
              </div>
            </div>

            {/* About Us Links */}
            <div className="">
              <h3 className="text-[24px] mb-7">About Us</h3>
              <ul className="space-y-5 text-base mb-2">
                <li>
                  <Link href="/about" className="hover:text-gray-300">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/faqs" className="hover:text-gray-300">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-gray-300">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/complaints-policy"
                    className="hover:text-gray-300"
                  >
                    Complaints Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-use" className="hover:text-gray-300">
                    Terms Of Use
                  </Link>
                </li>
                <li>
                  <Link href="/copyright" className="hover:text-gray-300">
                    Copyright
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-gray-300">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Popular Phones Links */}
            <div className="space-y-6">
              <h3 className="text-[24px] mb-7">Popular Phones</h3>
              <ul className="space-y-5 text-base mb-2">
                <li>
                  <a
                    href="/mobile-phones/apple"
                    className="hover:text-gray-300"
                  >
                    Apple
                  </a>
                </li>
                <li>
                  <a
                    href="/mobile-phones/google"
                    className="hover:text-gray-300"
                  >
                    Google
                  </a>
                </li>
                <li>
                  <a
                    href="/mobile-phones/honor"
                    className="hover:text-gray-300"
                  >
                    Honor
                  </a>
                </li>
                <li>
                  <a
                    href="/mobile-phones/motorola"
                    className="hover:text-gray-300"
                  >
                    Motorola
                  </a>
                </li>
                <li>
                  <a
                    href="/mobile-phones/samsung"
                    className="hover:text-gray-300"
                  >
                    Samsung
                  </a>
                </li>
              </ul>
            </div>

            {/* Subscribe Section */}
            <div className="space-y-4">
              <h3 className="text-[24px] mb-6">Subscribe</h3>

              <p className="mt-4">Our expertise always ready to assist you.</p>
              <div className="flex gap-4 mt-4">
                <Link
                  href="https://www.facebook.com/checkmybills.co.uk"
                  aria-label="Instagram"
                  className="hover:text-[#fe2d00] transition-colors duration-500"
                >
                  <Facebook className="h-5 w-5" />
                </Link>

                <Link
                  href="https://www.instagram.com/checkmybills/"
                  aria-label="Instagram"
                  className="hover:text-[#fe2d00] transition-colors duration-500"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.youtube.com/@checkmybills-co-uk/"
                  aria-label="YouTube"
                  className="hover:text-[#fe2d00] transition-colors duration-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                  </svg>
                </Link>
              </div>
              <div className="flex justify-start pt-0 md:pt-3 w-full">
                <Image
                  src="/Energy Ombudsman Core Logo-RGB.png"
                  width={180}
                  height={200}
                  alt=""
                />
                <Image
                  src="/download-ICO-logo.png"
                  width={100}
                  height={200}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#061c20] text-gray-400 px-2 py-[1.91rem] text-center text-sm">
        Copyright © {currentYear}{" "}
        <Link href="/" className="text-[#fe2d00]">
          checkmybills.co.uk
        </Link>{" "}
        All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
