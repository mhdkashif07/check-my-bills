"use client";

import React, { useEffect } from "react";

const AppleMobileDealsPage = () => {
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
      <div
        data-stickee-widget-id="check-my-bills-mobile-504"
        data-filters='{"brands":[19]}'
      >
        Loading...
      </div>
    </main>
  );
};

export default AppleMobileDealsPage;
