"use client";

import React from "react";
import { useStickeeWidget } from "@/hooks/useStickeeWidget";

// import Image from "next/image";

const BroadBandPage = () => {
  useStickeeWidget();

  return (
    <>
      <main className="p-6">
        <h1 className="text-xl font-semibold mb-4">Check My Bills</h1>
        <div data-stickee-widget-id="checkmybills-503">Loading...</div>
      </main>
    </>
  );
};

export default BroadBandPage;
