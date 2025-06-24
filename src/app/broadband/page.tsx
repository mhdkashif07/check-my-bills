"use client";

import React from "react";
import { useStickeeWidget } from "@/hooks/useStickeeWidget";

const BroadBandPage = () => {
  useStickeeWidget();

  return (
    <>
      <div
        className="brands-banner dark-background responsive-image"
        data-aos="fade"
      ></div>
      <div
        className="brands-banner dark-background responsive-image-sm"
        data-aos="fade"
      ></div>

      <main className="p-6">
        <h1 className="text-xl font-semibold mb-4">Check My Bills</h1>
        <div data-stickee-widget-id="checkmybills-503">Loading...</div>
      </main>
    </>
  );
};

export default BroadBandPage;
