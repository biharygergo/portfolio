import { NextResponse } from "next/server";

// Mapping of sailing spots to their coordinates
const SAILING_SPOTS: Record<string, { lat: number; lon: number; typicalWind: number }> = {
  Balaton: { lat: 46.8527, lon: 17.8731, typicalWind: 12 }, // Balatonföldvár, Hungary
  Prasonisi: { lat: 35.8872, lon: 27.7583, typicalWind: 18 }, // Rhodes, Greece - known for consistent wind
  "Riva del Garda": { lat: 45.8850, lon: 10.8414, typicalWind: 15 }, // Lake Garda, Italy
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const location = searchParams.get("location");

  if (!location || !SAILING_SPOTS[location]) {
    return NextResponse.json(
      { error: "Invalid location" },
      { status: 400 }
    );
  }

  // Use typical wind for location with small random variation
  const fallbackSpeed = SAILING_SPOTS[location].typicalWind + Math.floor(Math.random() * 5) - 2; // ±2 kts variation

  try {
    const { lat, lon } = SAILING_SPOTS[location];
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=wind_speed_10m&wind_speed_unit=kn`;
    
    console.log(`[Wind API] Fetching data for ${location} from ${url}`);
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout (reduced for production)
    
    const response = await fetch(url, { 
      next: { revalidate: 3600 }, // Cache for 1 hour
      signal: controller.signal,
      headers: {
        'Accept': 'application/json',
      },
    });
    
    clearTimeout(timeoutId);

    console.log(`[Wind API] Response status for ${location}: ${response.status}`);

    if (!response.ok) {
      console.error(`[Wind API] API returned ${response.status} for ${location}`);
      return NextResponse.json({ windSpeed: fallbackSpeed, location });
    }

    const data = await response.json();
    console.log(`[Wind API] Response data for ${location}:`, JSON.stringify(data, null, 2));
    
    const windSpeed = data?.current?.wind_speed_10m;
    
    if (typeof windSpeed !== 'number') {
      console.error(`[Wind API] Invalid wind data structure for ${location}:`, data);
      return NextResponse.json({ windSpeed: fallbackSpeed, location });
    }

    const windSpeedKnots = Math.round(windSpeed);
    console.log(`[Wind API] Success for ${location}: ${windSpeedKnots} kts`);

    return NextResponse.json({
      windSpeed: windSpeedKnots,
      location,
    });
  } catch (error) {
    if (error instanceof Error) {
      const isTimeout = error.name === 'AbortError' || error.message.includes('ETIMEDOUT');
      console.error(`[Wind API] ${isTimeout ? 'Timeout' : 'Error'} fetching data for ${location}:`, {
        message: error.message,
        name: error.name,
        cause: (error as any).cause,
      });
      if (isTimeout) {
        console.log(`[Wind API] Using fallback speed ${fallbackSpeed} kts for ${location} due to timeout`);
      }
    } else {
      console.error(`[Wind API] Unknown error for ${location}:`, error);
    }
    
    console.log(`[Wind API] Returning fallback: ${fallbackSpeed} kts for ${location}`);
    return NextResponse.json({ windSpeed: fallbackSpeed, location });
  }
}
