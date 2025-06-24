"use client";

import React, { useEffect } from "react";

const MobilePage = () => {
  useEffect(() => {
    const scriptId = "stickee-widget-script";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://whitelabels.stickeebroadband.co.uk/js/loader.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        if (window.stickeeWidgetLoader) {
          window.stickeeWidgetLoader();
        }
      };
    } else {
      if (window.stickeeWidgetLoader) {
        window.stickeeWidgetLoader();
      }
    }
  }, []);

  return (
    <main className="max-w-6xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Mobile Deals</h1>
      <div data-stickee-widget-id="checkmybills-504">Loading...</div>
    </main>
  );
};

export default MobilePage;
