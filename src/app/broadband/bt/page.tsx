import BroadbandPage from "@/components/BroadbandPage";

export default function BTBroadband() {
  return (
    <BroadbandPage
      title="BT Broadband Deals"
      widgetId="checkmybills-503"
      fixedFilters='{"suppliers": [135]}'
    />
  );
}
