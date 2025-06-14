"use client";

import React from "react";
import { useStickeeWidget } from "@/hooks/useStickeeWidget";
import Loader from "@/components/Loader";
// import Image from "next/image";

const BroadBandPage = () => {
  useStickeeWidget();

  return (
    <>
      {/* <Image
        src="/broadband-banner.svg"
        alt="Broadband Banner"
        className="w-full h-auto px-6 py-3"
        width={200}
        height={200}
      /> */}

      <main className="p-6">
        <div data-stickee-widget-id="checkmybills-503">
          <div className="animate-fade-in">
            <Loader />
          </div>
        </div>
      </main>
    </>
  );
};

export default BroadBandPage;
