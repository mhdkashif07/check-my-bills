import React from "react";
import { Facebook, Instagram, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#042e63b3] text-[14px]">
      <div className="mx-auto max-w-6xl px-4 text-white pt-[5.4rem] pb-[6.17rem]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and Company Info */}
            <div className="space-y-4">
              <Link href="/" className="flex items-center">
                <div className="relative">
                  <Image
                    src="/checkbillslogo.svg"
                    alt="SwitchPal"
                    width={225}
                    height={225}
                  />
                </div>
              </Link>
              <p className="text-[14px] mt-5">Email: info@checkmybills.co.uk</p>
              <div className="text-base">
                <p className="">
                  <span className="font-semibold">Checkmybills.co.uk</span>
                  is registered trademark of Platform 101 L company No. 15681880
                  Registe address 27 Old Gloucester Stre London, WC1N 3
                  Checkmybills.co.uk is trading st of Platform 101 Ltd. © 2025
                  Rights Reserved.
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
                  <Link href="/faq" className="hover:text-gray-300">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-gray-300">
                    Privacy Policy
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
                  <Link href="/phones/apple" className="hover:text-gray-300">
                    Apple
                  </Link>
                </li>
                <li>
                  <Link href="/phones/google" className="hover:text-gray-300">
                    Google
                  </Link>
                </li>
                <li>
                  <Link href="/phones/honor" className="hover:text-gray-300">
                    Honor
                  </Link>
                </li>
                <li>
                  <Link href="/phones/motorola" className="hover:text-gray-300">
                    Motorola
                  </Link>
                </li>
                <li>
                  <Link href="/phones/samsung" className="hover:text-gray-300">
                    Samsung
                  </Link>
                </li>
              </ul>
            </div>

            {/* Subscribe Section */}
            <div className="space-y-4">
              <h3 className="text-[24px] mb-6">Subscribe</h3>
              <div className="relative w-full">
                <input
                  type="email"
                  placeholder="Keep in touch"
                  className="bg-[#072125] text-white px-3 py-3 w-full  
              
               focus:border-yellow-500 focus:ring-2 focus:ring-white focus:rounded-sm 
               pr-16   " // pr-12 gives space for the button
                />
                <button className="absolute top-0 right-0 h-full px-4 bg-white">
                  <ArrowRight className="h-6 w-full text-[#fe2d00]" />
                </button>
              </div>
              <p className="mt-4">Our expertise always ready to assist you.</p>
              <div className="flex space-x-4 mt-4 md:justify-start justify-center">
                <Link
                  href="#"
                  aria-label="Facebook"
                  className="hover:text-[#fe2d00] transition-colors duration-500"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  aria-label="Instagram"
                  className="hover:text-[#fe2d00] transition-colors duration-500"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  aria-label="TikTok"
                  className="text-white hover:text-[#fe2d00] transition-colors duration-500"
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
                    <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                    <path d="M15 8a4 4 0 0 0 0 8V8z" />
                    <path d="M15 2v6" />
                    <path d="M15 8h-2" />
                  </svg>
                </Link>
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
