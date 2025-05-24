import { useEffect } from "react";

// TypeScript declaration for Stickee widget
declare global {
  interface Window {
    stickeeWidgetLoader?: () => void;
  }
}

// Detect if this is a client-side navigation vs. a full page load
let isFirstLoad = true;

export const useStickeeWidget = () => {
  useEffect(() => {
    // If this is a client-side navigation, try to load the widget first
    // If it fails to load, then force a reload
    if (!isFirstLoad) {
      console.log("Client-side navigation detected, attempting widget load...");

      // Try to load the widget and check if it loads successfully
      const checkWidgetLoad = () => {
        const widgetContainer = document.querySelector(
          '[data-stickee-widget-id="checkmybills-503"]'
        );

        // Check if widget has been populated (not just "Loading...")
        const isLoaded =
          widgetContainer &&
          widgetContainer.innerHTML !== "Loading..." &&
          widgetContainer.innerHTML.trim().length > 10;

        console.log("Widget loaded:", isLoaded);
        return isLoaded;
      };

      // Wait for the widget to potentially load
      let checkCount = 0;
      const maxChecks = 5; // Check for 7.5 seconds (15 * 500ms)

      const checkInterval = setInterval(() => {
        checkCount++;

        if (checkWidgetLoad()) {
          console.log("Widget loaded successfully, no reload needed");
          clearInterval(checkInterval);
          return;
        }

        if (checkCount >= maxChecks) {
          console.log("Widget failed to load, forcing page reload");
          clearInterval(checkInterval);
          window.location.href = window.location.pathname;
          return;
        }

        console.log(`Checking widget load... (${checkCount}/${maxChecks})`);
      }, 500);

      // Also try to reinitialize the widget if the loader is available
      setTimeout(() => {
        if (typeof window.stickeeWidgetLoader === "function") {
          console.log("Attempting to reinitialize widget");
          window.stickeeWidgetLoader();
        }
      }, 100);

      return () => {
        clearInterval(checkInterval);
      };
    }

    // Mark that we've loaded this component once
    isFirstLoad = false;

    // Load the Stickee widget script (original logic for first load)
    const loadScript = () => {
      // Remove any existing script to avoid conflicts
      const scriptId = "stickee-widget-script";
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }

      // Add the script to the document
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://whitelabels.stickeebroadband.co.uk/js/loader.js";
      script.async = true;
      document.body.appendChild(script);

      console.log("Stickee script added to DOM");
    };

    // Load the script with a slight delay to ensure DOM is ready
    setTimeout(loadScript, 100);

    // Also create a backup initialization timeout
    const backupInit = setTimeout(() => {
      if (typeof window.stickeeWidgetLoader === "function") {
        console.log("Backup initialization triggered");
        window.stickeeWidgetLoader();
      }
    }, 2000);

    return () => {
      clearTimeout(backupInit);
    };
  }, []);
};
