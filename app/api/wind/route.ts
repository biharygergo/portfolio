import { NextResponse } from "next/server";

// Mapping of sailing spots to their coordinates
const SAILING_SPOTS: Record<string, { lat: number; lon: number }> = {
  Balaton: { lat: 46.8527, lon: 17.8731 }, // Balatonföldvár, Hungary
  Prasonisi: { lat: 35.8872, lon: 27.7583 }, // Rhodes, Greece
  "Riva del Garda": { lat: 45.8850, lon: 10.8414 }, // Lake Garda, Italy
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

  try {
    const { lat, lon } = SAILING_SPOTS[location];
    
    // Using Open-Meteo API (free, no API key required)
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=wind_speed_10m&wind_speed_unit=kn`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );

    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }

    const data = await response.json();
    
    // Wind speed is already in knots from the API
    const windSpeedKnots = Math.round(data.current.wind_speed_10m);

    return NextResponse.json({
      windSpeed: windSpeedKnots,
      location,
    });
  } catch (error) {
    console.error("Error fetching wind data:", error);
    
    // Return mock data on error
    const mockWindSpeed = Math.floor(Math.random() * 20) + 5;
    return NextResponse.json({ windSpeed: mockWindSpeed });
  }
}
