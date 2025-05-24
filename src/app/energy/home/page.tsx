"use client";

import { useEffect } from "react";
import { useStickeeWidget } from "@/hooks/useStickeeWidget";

const HomeEnergyPage = () => {
  useStickeeWidget();

  useEffect(() => {
    window.open(
      "https://domestic.checkmybills.tickd.co.uk/",
      "_blank",
      "noopener,noreferrer"
    );
  }, []);

  return (
    <main className="max-w-6xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Home Energy</h1>
      <a
        href="https://domestic.checkmybills.tickd.co.uk/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-emerald-400 underline text-lg"
      >
        Go to Home Energy Comparison
      </a>
    </main>
  );
};

export default HomeEnergyPage;
