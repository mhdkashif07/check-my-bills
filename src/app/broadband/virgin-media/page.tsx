import BroadbandPage from "@/components/BroadbandPage";

export default function VirginMedia() {
  return (
    <BroadbandPage
      title="Virgin Media Deals"
      widgetId="checkmybills-503"
      fixedFilters='{"suppliers": [152]}'
    />
  );
}
