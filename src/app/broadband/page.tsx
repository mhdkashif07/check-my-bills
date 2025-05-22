// "use client";

import StickeeWidget from "./CSR";

// import React, { useEffect } from "react";
// import { usePathname } from "next/navigation";

// const BroadbandPage = () => {
//   const pathname = usePathname();

//   useEffect(() => {
//     const scriptId = "stickee-widget-script";

//     function loadWidget() {
//       if (!document.getElementById(scriptId)) {
//         const script = document.createElement("script");
//         script.id = scriptId;
//         script.src = "https://whitelabels.stickeebroadband.co.uk/js/loader.js";
//         script.async = true;
//         document.body.appendChild(script);

//         script.onload = () => {
//           if (window.stickeeWidgetLoader) {
//             window.stickeeWidgetLoader();
//           }
//         };
//       } else {
//         if (window.stickeeWidgetLoader) {
//           window.stickeeWidgetLoader();
//         }
//       }
//     }

//     // Clear widget content before loading (optional, but helps with re-initialization)
//     const widgetDiv = document.querySelector(
//       '[data-stickee-widget-id="checkmybills-503"]'
//     );
//     if (widgetDiv) widgetDiv.innerHTML = "Loading...";

//     setTimeout(loadWidget, 0);

//     // Optional: Clean up on unmount
//     return () => {
//       if (widgetDiv) widgetDiv.innerHTML = "Loading...";
//     };
//   }, [pathname]);

//   return (
//     <main className="max-w-6xl mx-auto py-8 px-4">
//       <div data-stickee-widget-id="checkmybills-503">Loading...</div>
//     </main>
//   );
// };

// export default BroadbandPage;

const BroadBandPage = () => {
  return (
    <>
      <div
        className="brands-banner dark-background responsive-image"
        data-aos="fade"
        // style={{ backgroundImage: "url(/img/page-title-bg.webp)" }}
      ></div>
      <div
        className="brands-banner dark-background responsive-image-sm"
        data-aos="fade"
        // style={{
        //   backgroundImage: "url(/img/Banner-Mobile-03.jpg)",
        //   height: "480px",
        // }}
      ></div>
      <StickeeWidget />
    </>
  );
};

export default BroadBandPage;
