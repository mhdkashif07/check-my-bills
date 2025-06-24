"use client";

import React from "react";
import { useStickeeWidget } from "@/hooks/useStickeeWidget";

interface MobilePhonePageProps {
  title: string;
  widgetId: string;
  filters?: string;
}

const MobilePhonePage = ({
  title,
  widgetId,
  filters,
}: MobilePhonePageProps) => {
  useStickeeWidget();

  return (
    <>
      {/* <div
        className="brands-banner dark-background responsive-image"
        data-aos="fade"
        style={{ backgroundImage: "url(/img/mobile-banner.webp)" }}
      ></div>
      <div
        className="brands-banner dark-background responsive-image-sm"
        data-aos="fade"
        style={{
          backgroundImage: "url(/img/Banner-Mobile-02.jpg)",
          height: "480px",
        }}
      ></div> */}
      <main className="p-6">
        <h1 className="text-xl font-semibold mb-4">{title}</h1>
        <div
          data-stickee-widget-id={widgetId}
          {...(filters ? { "data-filters": filters } : {})}
        >
          Loading...
        </div>
      </main>
    </>
  );
};

export default MobilePhonePage;
