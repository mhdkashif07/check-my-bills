"use client";

import React from "react";
import { useStickeeWidget } from "@/hooks/useStickeeWidget";
import Loader from "@/components/Loader";

interface BroadbandPageProps {
  title: string;
  widgetId: string;
  fixedFilters?: string;
  filters?: string;
}

const BroadbandPage = ({
  widgetId,
  fixedFilters,
  filters,
}: BroadbandPageProps) => {
  useStickeeWidget();

  return (
    <main className="p-6">
      <div
        data-stickee-widget-id={widgetId}
        {...(fixedFilters ? { "data-fixed-filters": fixedFilters } : {})}
        {...(filters ? { "data-filters": filters } : {})}
      >
        <div className="animate-fade-in">
          <Loader />
        </div>
      </div>
    </main>
  );
};

export default BroadbandPage;
