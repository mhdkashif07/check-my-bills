"use client";

import React from "react";

const TwentyFourMonthContractPage = () => {
  return (
    <>
      {/* <div
        className="brands-banner dark-background responsive-image"
        data-aos="fade"
      ></div>
      <div
        className="brands-banner dark-background responsive-image-sm"
        data-aos="fade"
      ></div> */}

      <main className="p-6">
        <h1 className="text-2xl text-center font-semibold mb-4">
          24 Month Contract Deals
        </h1>
        <div
          data-stickee-widget-id="checkmybills-503"
          data-filters='{"contract_lengths": [24]}'
        >
          Loading...
        </div>
      </main>
    </>
  );
};

export default TwentyFourMonthContractPage;
