"use client";

import React from "react";
import { useStickeeWidget } from "@/hooks/useStickeeWidget";
import Image from "next/image";
import Loader from "@/components/Loader";

// TypeScript declaration for Stickee widget
declare global {
  interface Window {
    stickeeWidgetLoader?: () => void;
  }
}

export default function MobilePhones() {
  useStickeeWidget();

  return (
    <>
      <Image
        src="/mobile-banner.svg"
        alt="Mobile Banner"
        className="w-full h-auto px-6 py-3"
        width={200}
        height={200}
      />
      <div data-stickee-widget-id="check-my-bills-mobile-504">
        <Loader />
      </div>
    </>
  );
}
