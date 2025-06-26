"use client";

import React from "react";
// import { useStickeeWidget } from "@/hooks/useStickeeWidget";

interface BroadbandPageProps {
  title: string;
  widgetId: string;
  fixedFilters?: string;
  filters?: string;
}

const BroadbandPage = ({
  title,
  widgetId,
  fixedFilters,
  filters,
}: BroadbandPageProps) => {
  // useStickeeWidget();

  return (
    <main className="p-6">
      <h1 className="text-xl text-center font-semibold mb-4">{title}</h1>
      <div
        data-stickee-widget-id={widgetId}
        {...(fixedFilters ? { "data-fixed-filters": fixedFilters } : {})}
        {...(filters ? { "data-filters": filters } : {})}
      >
        Loading...
      </div>
    </main>
  );
};

export default BroadbandPage;
