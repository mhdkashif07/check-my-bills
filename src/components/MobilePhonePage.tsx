"use client";

import React from "react";
import { useStickeeWidget } from "@/hooks/useStickeeWidget";
import Loader from "@/components/Loader";

interface MobilePhonePageProps {
  title: string;
  widgetId: string;
  filters?: string;
}

const MobilePhonePage = ({ widgetId, filters }: MobilePhonePageProps) => {
  useStickeeWidget();

  return (
    <>
      <div
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
      ></div>
      <main className="p-6">
        <div
          data-stickee-widget-id={widgetId}
          {...(filters ? { "data-filters": filters } : {})}
        >
          <div className="animate-fade-in">
            <Loader />
          </div>
        </div>
      </main>
    </>
  );
};

export default MobilePhonePage;
