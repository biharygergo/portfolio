import { HomeClient } from "@/components/HomeClient";
import { fetchAllWindData } from "@/lib/wind";

export default async function Home() {
  const windData = await fetchAllWindData();

  return <HomeClient windData={windData} />;
}
