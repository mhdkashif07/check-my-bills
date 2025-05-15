import Image from "next/image";
import React from "react";
import { MobileNav } from "./MobileNav";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full py-4 text-white bg-[#0a1128]">
      <div className=" mx-auto max-w-6xl px-4">
        <nav className="flex items-center justify-between ">
          <div className="flex items-center gap-2">
            <Image
              src="/checkbillslogo.svg"
              alt="SwitchPal"
              width={200}
              height={200}
            />
          </div>

          <div className="hidden md:flex items-center gap-6">
            <NavItem title="Home" />
            <NavItem title="Energy" />
            <NavItem title="Broadband" />
            <NavItem title="Mobile Phones" />
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
              <Link
                href="#"
                className="block px-4 py-2 hover:bg-[#182952] cursor-pointer"
              >
                For Business
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 hover:bg-[#182952] cursor-pointer"
              >
                For Home
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 hover:bg-[#182952] cursor-pointer"
              >
                Compare Deals
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 hover:bg-[#182952] cursor-pointer"
              >
                Guides & Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
