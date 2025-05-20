"use client";

import React, { useEffect } from "react";

const TravelInsurancePage = () => {
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
      <h1 className="text-3xl font-bold mb-6">Travel Insurance</h1>
      <a
        href="https://www.quotezone.co.uk/SetAffiliate.php?aid=B2S9J9-006&type=travel"
        target="_blank"
        rel="noopener noreferrer"
        className="text-emerald-400 underline text-lg"
      >
        Get Travel Insurance Quote
      </a>
    </main>
  );
};

export default TravelInsurancePage;
