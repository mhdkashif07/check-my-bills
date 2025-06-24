"use client";

import React from "react";
import { useStickeeWidget } from "@/hooks/useStickeeWidget";

declare global {
  interface Window {
    stickeeWidgetLoader?: () => void;
  }
}

export default function MobilePhones() {
  useStickeeWidget();

  return (
    <>
      <main className="p-6">
        <h1 className="text-xl font-semibold mb-4">Check My Bills</h1>
        <div data-stickee-widget-id="check-my-bills-mobile-504">Loading...</div>
      </main>
    </>
  );
}
