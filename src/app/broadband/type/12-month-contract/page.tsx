"use client";

import React from "react";
import { useStickeeWidget } from "@/hooks/useStickeeWidget";
import Loader from "@/components/Loader";

const TwelveMonthContractPage = () => {
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
        <div
          data-stickee-widget-id="checkmybills-503"
          data-filters='{"contract_lengths": [12]}'
        >
          <div className="animate-fade-in">
            <Loader />
          </div>
        </div>
      </main>
    </>
  );
};

export default TwelveMonthContractPage;
