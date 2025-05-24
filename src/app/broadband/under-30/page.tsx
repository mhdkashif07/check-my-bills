import BroadbandPage from "@/components/BroadbandPage";

export default function Under30Broadband() {
  return (
    <BroadbandPage
      title="Broadband Deals Under £30"
      widgetId="checkmybills-503"
      filters='{"monthly_price": {"min":0, "max":30}}'
    />
  );
}
