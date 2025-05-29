"use client";

import React from "react";
import { useStickeeWidget } from "@/hooks/useStickeeWidget";

const SimOnlyDeals = () => {
  useStickeeWidget();

  return (
    <>
      <main className="p-6">
        <h1 className="text-xl font-semibold mb-4">Sim Only Deals</h1>
        <div
          data-stickee-widget-id="check-my-bills-mobile-504"
          data-fixed-filters='{"hardware_types":["SIM_ONLY"]}'
        >
          Loading...
        </div>
      </main>
    </>
  );
};

export default SimOnlyDeals;
