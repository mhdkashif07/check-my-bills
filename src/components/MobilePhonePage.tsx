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
