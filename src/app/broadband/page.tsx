"use client";

import React from "react";
import { useStickeeWidget } from "@/hooks/useStickeeWidget";
import Loader from "@/components/Loader";

const BroadBandPage = () => {
  useStickeeWidget();

  return (
    <main className="p-6">
      <div data-stickee-widget-id="checkmybills-503">
        <div className="animate-fade-in">
          <Loader />
        </div>
      </div>
    </main>
  );
};

export default BroadBandPage;
