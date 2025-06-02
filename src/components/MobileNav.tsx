"use client";

import type React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  Zap,
  Wifi,
  ShieldCheck,
  Home,
  BookOpen,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="md:hidden bg-[#0a1128] text-white hover:bg-[#0f1c3f] border-gray-800"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[300px] sm:w-[350px] bg-[#0a1128] text-white border-r border-gray-800 overflow-y-auto"
      >
        <div className="flex flex-col gap-6 py-4 px-3">
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

          <TopNavLink icon={<Home />} title="Home" href="/" />
          <TopNavLink icon={<BookOpen />} title="Guides" href="/guides" />
          <TopNavLink icon={<Wifi />} title="Broadband" href="/broadband" />
          <TopNavLink
            icon={<Smartphone />}
            title="Mobile Phones"
            href="/mobile-phones"
          />

          <Accordion type="single" collapsible className="w-full">
            <NavAccordionItem icon={<Zap />} title="Energy" />
            <NavAccordionItem icon={<Wifi />} title="Broadband" />
            <NavAccordionItem icon={<ShieldCheck />} title="Insurance" />
            <NavAccordionItem icon={<Zap />} title="Deals" />
          </Accordion>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function TopNavLink({
  icon,
  title,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 py-2 border-b border-gray-800 hover:text-emerald-400 transition-colors"
    >
      <span className="text-emerald-500">{icon}</span>
      <span>{title}</span>
    </Link>
  );
}

function NavAccordionItem({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <AccordionItem
      value={title.toLowerCase()}
      className="border-b border-gray-800"
    >
      <AccordionTrigger className="hover:text-emerald-400">
        <div className="flex items-center gap-2">
          <span className="text-emerald-500">{icon}</span>
          <span>{title}</span>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <div className="pl-7 space-y-3 py-2">
          {title === "Energy" && (
            <>
              <Link
                href="https://domestic.checkmybills.tickd.co.uk/"
                target="_blank"
                className="block hover:text-emerald-400"
              >
                Home Energy
              </Link>
              <Link
                href="https://checkmybills.tickd.co.uk"
                target="_blank"
                className="block hover:text-emerald-400"
              >
                Business Energy
              </Link>
            </>
          )}
          {title === "Broadband" && (
            <>
              <Link href="/broadband" className="block hover:text-emerald-400">
                Compare Deals
              </Link>
              <Link
                href="/broadband/sky"
                className="block hover:text-emerald-400"
              >
                Sky Deals
              </Link>
              <Link
                href="/broadband/virgin-media"
                className="block hover:text-emerald-400"
              >
                Virgin Media Deals
              </Link>
              <Link
                href="/broadband/bt"
                className="block hover:text-emerald-400"
              >
                BT Deals
              </Link>
              <Link
                href="/broadband/plusnet"
                className="block hover:text-emerald-400"
              >
                Plusnet Deals
              </Link>
              <Link
                href="/broadband/talktalk"
                className="block hover:text-emerald-400"
              >
                Talk Talk Deals
              </Link>
              <Link
                href="/broadband/under-25"
                className="block hover:text-emerald-400"
              >
                Deals under £25
              </Link>
              <Link
                href="/broadband/under-30"
                className="block hover:text-emerald-400"
              >
                Deals under £30
              </Link>
              <Link
                href="/broadband/sky-tv"
                className="block hover:text-emerald-400"
              >
                Sky TV Deals
              </Link>
            </>
          )}
          {title === "Insurance" && (
            <>
              <Link
                href="https://www.quotezone.co.uk/SetAffiliate.php?aid=B2S9J9-001&type=car"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-emerald-400"
              >
                Car Insurance
              </Link>
              <Link
                href="https://www.quotezone.co.uk/SetAffiliate.php?aid=B2S9J9-004&type=home"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-emerald-400"
              >
                Home Insurance
              </Link>
              <Link
                href="https://www.quotezone.co.uk/SetAffiliate.php?aid=B2S9J9-009&type=pet"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-emerald-400"
              >
                Pet Insurance
              </Link>
              <Link
                href="https://www.quotezone.co.uk/SetAffiliate.php?aid=B2S9J9-002&type=van"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-emerald-400"
              >
                Van Insurance
              </Link>
              <Link
                href="https://www.quotezone.co.uk/SetAffiliate.php?aid=B2S9J9-006&type=travel"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-emerald-400"
              >
                Travel Insurance
              </Link>
            </>
          )}
          {title === "Deals" && (
            <>
              <div className="font-bold mt-2 mb-1">MOBILE PHONES</div>
              <Link
                href="/mobile-phones/apple"
                className="block hover:text-emerald-400"
              >
                Apple
              </Link>
              <Link
                href="/mobile-phones/google"
                className="block hover:text-emerald-400"
              >
                Google
              </Link>
              <Link
                href="/mobile-phones/honor"
                className="block hover:text-emerald-400"
              >
                Honor
              </Link>
              <Link
                href="/mobile-phones/motorola"
                className="block hover:text-emerald-400"
              >
                Motorola
              </Link>
              <Link
                href="/mobile-phones/samsung"
                className="block hover:text-emerald-400"
              >
                Samsung
              </Link>
              <Link
                href="/mobile-phones/nokia"
                className="block hover:text-emerald-400"
              >
                Nokia
              </Link>
              <Link
                href="/mobile-phones/oneplus"
                className="block hover:text-emerald-400"
              >
                OnePlus
              </Link>
              <Link
                href="/mobile-phones/oppo"
                className="block hover:text-emerald-400"
              >
                OPPO
              </Link>
              <Link
                href="/mobile-phones/xiaomi"
                className="block hover:text-emerald-400"
              >
                Xiaomi
              </Link>

              <div className="font-bold mt-4 mb-1">BROADBAND</div>
              <Link
                href="/broadband/sky"
                className="block hover:text-emerald-400"
              >
                Sky Deals
              </Link>
              <Link
                href="/broadband/virgin-media"
                className="block hover:text-emerald-400"
              >
                Virgin Media Deals
              </Link>
              <Link
                href="/broadband/bt"
                className="block hover:text-emerald-400"
              >
                BT Deals
              </Link>
              <Link
                href="/broadband/plusnet"
                className="block hover:text-emerald-400"
              >
                Plusnet Deals
              </Link>
              <Link
                href="/broadband/talktalk"
                className="block hover:text-emerald-400"
              >
                Talk Talk Deals
              </Link>
              <Link
                href="/broadband/under-25"
                className="block hover:text-emerald-400"
              >
                Deals under £25
              </Link>
              <Link
                href="/broadband/under-30"
                className="block hover:text-emerald-400"
              >
                Deals under £30
              </Link>
              <Link
                href="/broadband/sky-tv"
                className="block hover:text-emerald-400"
              >
                Sky TV Deals
              </Link>

              <div className="font-bold mt-4 mb-1">BROADBAND TERM</div>
              <Link
                href="/broadband/type/12-month-contract"
                className="block hover:text-emerald-400"
              >
                12 month contract
              </Link>
              <Link
                href="/broadband/type/24-month-contract"
                className="block hover:text-emerald-400"
              >
                24 month contract
              </Link>
            </>
          )}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
