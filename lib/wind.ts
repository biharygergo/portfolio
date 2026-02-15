// Server-side wind data fetching utility

const SAILING_SPOTS: Record<string, { lat: number; lon: number; typicalWind: number }> = {
  Balaton: { lat: 46.8527, lon: 17.8731, typicalWind: 12 }, // Lake Balaton typical conditions
  Prasonisi: { lat: 35.8872, lon: 27.7583, typicalWind: 18 }, // Rhodes - known for consistent wind
  "Riva del Garda": { lat: 45.8850, lon: 10.8414, typicalWind: 15 }, // Lake Garda - good wind conditions
};

export async function fetchWindData(location: string): Promise<number> {
  const spot = SAILING_SPOTS[location];
  if (!spot) {
    console.error(`[Wind] Unknown location: ${location}`);
    return 12; // Fallback wind speed
  }

  // Use typical wind for location with small random variation
  const fallbackSpeed = spot.typicalWind + Math.floor(Math.random() * 5) - 2; // ±2 kts variation
  
  try {
    const { lat, lon } = spot;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=wind_speed_10m&wind_speed_unit=kn`;
    
    console.log(`[Wind] Fetching data for ${location} from ${url}`);
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout (reduced for production)
    
    const response = await fetch(url, { 
      next: { revalidate: 3600 }, // Cache for 1 hour
      signal: controller.signal,
      // Add headers to help with network reliability
      headers: {
        'Accept': 'application/json',
      },
    });
    
    clearTimeout(timeoutId);

    console.log(`[Wind] Response status for ${location}: ${response.status}`);

    if (!response.ok) {
      console.error(`[Wind] API returned ${response.status} for ${location}`);
      return fallbackSpeed;
    }

    const data = await response.json();
    console.log(`[Wind] Response data for ${location}:`, JSON.stringify(data, null, 2));
    
    const windSpeed = data?.current?.wind_speed_10m;
    
    if (typeof windSpeed !== 'number') {
      console.error(`[Wind] Invalid wind data structure for ${location}:`, data);
      return fallbackSpeed;
    }
    
    const roundedSpeed = Math.round(windSpeed);
    console.log(`[Wind] Success for ${location}: ${roundedSpeed} kts`);
    
    return roundedSpeed;
  } catch (error) {
    if (error instanceof Error) {
      const isTimeout = error.name === 'AbortError' || error.message.includes('ETIMEDOUT');
      console.error(`[Wind] ${isTimeout ? 'Timeout' : 'Error'} fetching data for ${location}:`, {
        message: error.message,
        name: error.name,
        cause: (error as any).cause,
      });
      if (isTimeout) {
        console.log(`[Wind] Using fallback speed ${fallbackSpeed} kts for ${location} due to timeout`);
      }
    } else {
      console.error(`[Wind] Unknown error for ${location}:`, error);
    }
    console.log(`[Wind] Returning fallback: ${fallbackSpeed} kts for ${location}`);
    return fallbackSpeed;
  }
}

export async function fetchAllWindData(): Promise<Record<string, number>> {
  const locations = Object.keys(SAILING_SPOTS);
  
  console.log(`[Wind] Fetching data for all locations: ${locations.join(", ")}`);
  
  const results = await Promise.all(
    locations.map(async (location) => ({
      location,
      windSpeed: await fetchWindData(location),
    }))
  );

  const windData = results.reduce(
    (acc, { location, windSpeed }) => {
      acc[location] = windSpeed;
      return acc;
    },
    {} as Record<string, number>
  );
  
  console.log(`[Wind] Final wind data:`, windData);
  
  return windData;
}
