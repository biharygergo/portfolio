// Server-side wind data fetching utility

const SAILING_SPOTS: Record<string, { lat: number; lon: number }> = {
  Balaton: { lat: 46.8527, lon: 17.8731 },
  Prasonisi: { lat: 35.8872, lon: 27.7583 },
  "Riva del Garda": { lat: 45.8850, lon: 10.8414 },
};

export async function fetchWindData(location: string): Promise<number | null> {
  const spot = SAILING_SPOTS[location];
  if (!spot) return null;

  try {
    const { lat, lon } = spot;
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=wind_speed_10m&wind_speed_unit=kn`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );

    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }

    const data = await response.json();
    return Math.round(data.current.wind_speed_10m);
  } catch (error) {
    console.error(`Error fetching wind data for ${location}:`, error);
    return null;
  }
}

export async function fetchAllWindData(): Promise<
  Record<string, number | null>
> {
  const locations = Object.keys(SAILING_SPOTS);
  const results = await Promise.all(
    locations.map(async (location) => ({
      location,
      windSpeed: await fetchWindData(location),
    }))
  );

  return results.reduce(
    (acc, { location, windSpeed }) => {
      acc[location] = windSpeed;
      return acc;
    },
    {} as Record<string, number | null>
  );
}
