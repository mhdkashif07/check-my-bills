"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { MobileNav } from "./MobileNav";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

declare global {
  interface Window {
    stickeeWidgetLoader?: () => void;
    stickeeBroadbandLoader?: () => void;
  }
}

const Header = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.stickeeWidgetLoader) {
      window.stickeeWidgetLoader();
    }
  }, []);

  return (
    <header className="w-full py-4 text-white bg-[#0a1128]">
      <div className=" mx-auto max-w-6xl px-4">
        <nav className="flex items-center justify-between ">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image
                src="/checkbillslogo.svg"
                alt="SwitchPal"
                width={200}
                height={200}
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/">Home</Link>
            <NavItem title="Energy" />
            <Link href="/guides">Guides</Link>
            <Link href="/broadband">Broadband</Link>
            <Link href="/mobile-phones">Mobile Phones</Link>
            <NavItem title="Insurance" />
            <NavItem title="Deals" />
          </div>

          <MobileNav />
        </nav>
      </div>
    </header>
  );
};

export default Header;

function NavItem({ title }: { title: string }) {
  // Custom dropdown for Deals
  if (title === "Deals") {
    return (
      <div className="relative group">
        <div className="flex items-center gap-1 cursor-pointer hover:text-emerald-400 transition-colors py-2">
          <span>{title}</span>
          <ChevronDown className="h-4 w-4" />
        </div>
        <div className="absolute right-0 top-full w-[700px] invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 z-50">
          <div className="pt-2">
            <div className="bg-[#0f1c3f] text-white border border-gray-800 rounded-md shadow-lg overflow-hidden p-6 flex gap-12 min-w-max">
              {/* MOBILE PHONES */}
              <div>
                <div className="font-bold mb-2">MOBILE PHONES</div>
                <ul className="space-y-3 text-base">
                  <li>
                    <Link
                      href="/mobile-phones/apple"
                      className="hover:text-emerald-400"
                    >
                      Apple
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/mobile-phones/google"
                      className="hover:text-emerald-400"
                    >
                      Google
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/mobile-phones/honor"
                      className="hover:text-emerald-400"
                    >
                      Honor
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/mobile-phones/motorola"
                      className="hover:text-emerald-400"
                    >
                      Motorola
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/mobile-phones/samsung"
                      className="hover:text-emerald-400"
                    >
                      Samsung
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/mobile-phones/nokia"
                      className="hover:text-emerald-400"
                    >
                      Nokia
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/mobile-phones/oneplus"
                      className="hover:text-emerald-400"
                    >
                      OnePlus
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/mobile-phones/oppo"
                      className="hover:text-emerald-400"
                    >
                      OPPO
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/mobile-phones/xiaomi"
                      className="hover:text-emerald-400"
                    >
                      Xiaomi
                    </Link>
                  </li>
                </ul>
              </div>
              {/* BROADBAND */}
              <div>
                <div className="font-bold mb-2">BROADBAND</div>
                <ul className="space-y-3 text-base">
                  <li>
                    <Link
                      href="/broadband/sky"
                      className="hover:text-emerald-400"
                    >
                      Sky Deals
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/broadband/virgin-media"
                      className="hover:text-emerald-400"
                    >
                      Virgin Media Deals
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/broadband/bt"
                      className="hover:text-emerald-400"
                    >
                      BT Deals
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/broadband/plusnet"
                      className="hover:text-emerald-400"
                    >
                      Plusnet Deals
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/broadband/talktalk"
                      className="hover:text-emerald-400"
                    >
                      Talk Talk Deals
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/broadband/under-25"
                      className="hover:text-emerald-400"
                    >
                      Deals under £25
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/broadband/under-30"
                      className="hover:text-emerald-400"
                    >
                      Deals under £30
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/broadband/sky-tv"
                      className="hover:text-emerald-400"
                    >
                      Sky TV Deals
                    </Link>
                  </li>
                </ul>
              </div>
              {/* BROADBAND TERM */}
              <div>
                <div className="font-bold mb-2">BROADBAND TERM</div>
                <ul className="space-y-3 text-base">
                  <li>
                    <Link
                      href="/broadband/type/12-month-contract"
                      className="hover:text-emerald-400"
                    >
                      12 month contract
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/broadband/type/24-month-contract"
                      className="hover:text-emerald-400"
                    >
                      24 month contract
                    </Link>
                  </li>
                </ul>
              </div>
              {/* ENERGY */}
              <div>
                <div className="font-bold mb-2">ENERGY</div>
                <ul className="space-y-3 text-base">
                  <li>
                    <Link
                      href="https://domestic.checkmybills.tickd.co.uk/"
                      target="_blank"
                      className="hover:text-emerald-400"
                    >
                      Home Energy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://checkmybills.tickd.co.uk"
                      target="_blank"
                      className="hover:text-emerald-400"
                    >
                      Business Energy
                    </Link>
                  </li>
                </ul>
              </div>
              {/* INSURANCE */}
              {/* <div>
                <div className="font-bold mb-2">INSURANCE</div>
                <ul className="space-y-3 text-base">
                  <li>
                    <Link
                      href="/insurance/car"
                      className="hover:text-emerald-400"
                    >
                      Car Insurance
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/insurance/home"
                      className="hover:text-emerald-400"
                    >
                      Home Insurance
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/insurance/pet"
                      className="hover:text-emerald-400"
                    >
                      Pet Insurance
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/insurance/van"
                      className="hover:text-emerald-400"
                    >
                      Van Insurance
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/insurance/travel"
                      className="hover:text-emerald-400"
                    >
                      Travel Insurance
                    </Link>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (title === "Energy") {
    return (
      <div className="relative group">
        <div className="flex items-center gap-1 cursor-pointer hover:text-emerald-400 transition-colors py-2">
          <span>{title}</span>
          <ChevronDown className="h-4 w-4" />
        </div>
        <div className="absolute -right-4 top-full w-48 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 z-50">
          <div className="pt-2">
            <div className="bg-[#0f1c3f] text-white border border-gray-800 rounded-md shadow-lg overflow-hidden">
              <div className="py-1">
                <Link
                  href="https://domestic.checkmybills.tickd.co.uk/"
                  target="_blank"
                  className="block px-4 py-2 hover:bg-[#182952] cursor-pointer"
                >
                  Home Energy
                </Link>
                <Link
                  href="https://checkmybills.tickd.co.uk"
                  target="_blank"
                  className="block px-4 py-2 hover:bg-[#182952] cursor-pointer"
                >
                  Business Energy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="relative group">
      <div className="flex items-center gap-1 cursor-pointer hover:text-emerald-400 transition-colors py-2">
        <span>{title}</span>
        {title === "Home" ? null : <ChevronDown className="h-4 w-4" />}
      </div>
      <div className="absolute -right-4 top-full w-48 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 z-50">
        <div className="pt-2">
          <div className="bg-[#0f1c3f] text-white border border-gray-800 rounded-md shadow-lg overflow-hidden">
            <div className="py-1">
              <a
                href="https://www.quotezone.co.uk/SetAffiliate.php?aid=B2S9J9-001&type=car"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 hover:bg-[#182952]"
              >
                Car Insurance
              </a>
              <a
                href="https://www.quotezone.co.uk/SetAffiliate.php?aid=B2S9J9-004&type=home"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 hover:bg-[#182952]"
              >
                Home Insurance
              </a>
              <a
                href="https://www.quotezone.co.uk/SetAffiliate.php?aid=B2S9J9-009&type=pet"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 hover:bg-[#182952]"
              >
                Pet Insurance
              </a>
              <a
                href="https://www.quotezone.co.uk/SetAffiliate.php?aid=B2S9J9-002&type=van"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 hover:bg-[#182952]"
              >
                Van Insurance
              </a>
              <a
                href="https://www.quotezone.co.uk/SetAffiliate.php?aid=B2S9J9-006&type=travel"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 hover:bg-[#182952]"
              >
                Travel Insurance
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
