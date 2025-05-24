"use client";

import React from "react";
import { useStickeeWidget } from "@/hooks/useStickeeWidget";

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
      <div data-stickee-widget-id="check-my-bills-mobile-504">Loading...</div>
    </>
  );
}
