import BroadbandPage from "@/components/BroadbandPage";

export default function SkyTVBroadband() {
  return (
    <BroadbandPage
      title="Sky TV Broadband Deals"
      widgetId="checkmybills-503"
      fixedFilters='{"suppliers": [136]}'
      filters='{"package_types": ["BROADBAND_PHONE_TV"]}'
    />
  );
}
