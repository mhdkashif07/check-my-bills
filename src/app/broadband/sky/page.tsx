import BroadbandPage from "@/components/BroadbandPage";

export default function SkyBroadband() {
  return (
    <BroadbandPage
      title="Sky Broadband Deals"
      widgetId="checkmybills-503"
      fixedFilters='{"suppliers": [136]}'
    />
  );
}
