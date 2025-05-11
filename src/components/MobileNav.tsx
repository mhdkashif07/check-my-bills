"use client";

import type React from "react";
import Link from "next/link";
import {
  Menu,
  Zap,
  Building2,
  Home,
  Wifi,
  Droplets,
  Trash2,
  CreditCard,
  ShieldCheck,
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
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[300px] sm:w-[350px] bg-[#0a1128] text-white"
      >
        <div className="flex flex-col gap-6 py-4">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-500 p-2 rounded-full">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold">SwitchPal</span>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <NavAccordionItem icon={<Zap />} title="Energy" />
            <NavAccordionItem icon={<Zap />} title="Solar" />
            <NavAccordionItem icon={<Wifi />} title="Broadband" />
            <NavAccordionItem icon={<Droplets />} title="Water" />
            <NavAccordionItem icon={<Trash2 />} title="Waste" />
            <NavAccordionItem icon={<CreditCard />} title="Card Payments" />
            <NavAccordionItem icon={<ShieldCheck />} title="Insurance" />
          </Accordion>

          <div className="border-t border-gray-800 pt-4">
            <div className="flex items-center gap-2 font-semibold mb-4">
              <Building2 className="h-5 w-5" />
              <span>Business</span>
            </div>
            <div className="space-y-4 pl-7">
              <Link href="#" className="block hover:text-emerald-400">
                Business Energy
              </Link>
              <Link href="#" className="block hover:text-emerald-400">
                Business Solar
              </Link>
              <Link href="#" className="block hover:text-emerald-400">
                Guides & Tools
              </Link>
              <Link href="#" className="block hover:text-emerald-400">
                Sell Your Energy
              </Link>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-4">
            <div className="flex items-center gap-2 font-semibold mb-4">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </div>
            <div className="space-y-4 pl-7">
              <Link href="#" className="block hover:text-emerald-400">
                Home Energy
              </Link>
              <Link href="#" className="block hover:text-emerald-400">
                Home Solar
              </Link>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
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
      className="border-b mr-7 border-gray-800"
    >
      <AccordionTrigger className="hover:text-emerald-400">
        <div className="flex items-center gap-2">
          <span className="text-emerald-500">{icon}</span>
          <span>{title}</span>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <div className="pl-7 space-y-3 py-2">
          <Link href="#" className="block hover:text-emerald-400">
            For Business
          </Link>
          <Link href="#" className="block hover:text-emerald-400">
            For Home
          </Link>
          <Link href="#" className="block hover:text-emerald-400">
            Compare Deals
          </Link>
          <Link href="#" className="block hover:text-emerald-400">
            Guides & Resources
          </Link>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
