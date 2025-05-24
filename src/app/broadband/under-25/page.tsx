import BroadbandPage from "@/components/BroadbandPage";

export default function Under25Broadband() {
  return (
    <BroadbandPage
      title="Broadband Deals Under £25"
      widgetId="checkmybills-503"
      filters='{"monthly_price": {"min":0, "max":25}}'
    />
  );
}
