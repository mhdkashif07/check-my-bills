"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    StickeeWidgetLoader?: {
      init?: () => void;
    };
  }
}

const CheckMyBillsPage = () => {
  useEffect(() => {
    const scriptId = "stickee-loader";

    // Remove if already injected
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    // Reset widget container content
    const container = document.querySelector("[data-stickee-widget-id]");
    if (container) {
      container.innerHTML = "Loading...";
    }

    // Inject fresh script
    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://whitelabels.stickeebroadband.co.uk/js/loader.js";
    script.async = true;
    document.body.appendChild(script);

    // Retry widget init in case it's not auto-run
    const fallbackTimeout = setTimeout(() => {
      window.StickeeWidgetLoader?.init?.();
    }, 1500);

    return () => {
      clearTimeout(fallbackTimeout);
    };
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-xl font-semibold mb-4">Check My Bills</h1>
      <div data-stickee-widget-id="checkmybills-503">Loading...</div>
    </main>
  );
};

export default CheckMyBillsPage;
