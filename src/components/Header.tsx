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
            <NavItem title="Home" />
            <NavItem title="Energy" />
            <Link href="broadband">Broadband</Link>
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
                <ul className="space-y-1 text-lg">
                  <li>
                    <Link href="#" className="hover:text-emerald-400">
                      Apple
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-emerald-400">
                      Google
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-emerald-400">
                      Honor
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-emerald-400">
                      Motorola
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-emerald-400">
                      Samsung
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-emerald-400">
                      Nokia
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-emerald-400">
                      OnePlus
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-emerald-400">
                      OPPO
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-emerald-400">
                      Xiaomi
                    </Link>
                  </li>
                </ul>
              </div>
              {/* BROADBAND */}
              <div>
                <div className="font-bold mb-2">BROADBAND</div>
                <ul className="space-y-1  text-lg">
                  <li>
                    <Link href="#" className="hover:text-emerald-400">
                      Sky Deals
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-emerald-400">
                      Virgin Media Deals
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-emerald-400">
                      BT Deals
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-emerald-400">
                      Plusnet Deals
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-emerald-400">
                      Talk Talk Deals
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-emerald-400">
                      Deals under £25
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-emerald-400">
                      Deals under £30
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-emerald-400">
                      Sky TV Deals
                    </Link>
                  </li>
                </ul>
              </div>
              {/* BROADBAND TERM */}
              <div>
                <div className="font-bold mb-2">BROADBAND TERM</div>
                <ul className="space-y-1  text-lg">
                  <li>
                    <Link href="#" className="hover:text-emerald-400">
                      12 month contract
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-emerald-400">
                      24 month contract
                    </Link>
                  </li>
                </ul>
              </div>
              {/* ENERGY */}
              <div>
                <div className="font-bold mb-2">ENERGY</div>
                <ul className="space-y-1  text-lg">
                  <li>
                    <Link href="#" className="hover:text-emerald-400">
                      Home Energy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-emerald-400">
                      Business Energy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // if(title === "Broadband"){
  //   return(
  //     <Link></Link>
  //   )
  // }
  // Default dropdown for other items
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
