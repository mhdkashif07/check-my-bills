import BroadbandPage from "@/components/BroadbandPage";

export default function PlusnetBroadband() {
  return (
    <BroadbandPage
      title="Plusnet Broadband Deals"
      widgetId="checkmybills-503"
      fixedFilters='{"suppliers": [178]}'
    />
  );
}
