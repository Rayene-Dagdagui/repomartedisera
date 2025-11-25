import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Minimal mock result used when Mock mode is enabled
const SAMPLE_MOCK_RESULTS = [
  {
    id: 1,
    city: 'Rome',
    country: 'Italy',
    temperature: 21.3,
    windspeed: 3.4,
    weathercode: 0,
    time: '2025-11-25T12:00:00Z',
  },
];

@Component({
  selector: 'app-freetogame-explorer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './freetogame-explorer.component.html',
  styleUrls: ['./freetogame-explorer.component.css'],
})
export class FreetoGameExplorerComponent implements OnInit {
  // UI state
  searchTitle = '';
  loading = false;
  error: string | null = null;
  mockMode = false;

  // The simple results array (1 or more locations with current weather)
  results: Array<any> = [];

  ngOnInit(): void {
    // no-op
  }

  private async geocodeCity(city: string): Promise<any | null> {
    try {
      const q = encodeURIComponent(city.trim());
      const url = `https://geocoding-api.open-meteo.com/v1/search?name=${q}&count=5&language=en&format=json`;
      const res = await fetch(url);
      if (!res.ok) return null;
      const json = await res.json();
      if (!json || !Array.isArray(json.results) || json.results.length === 0) return null;
      return json.results[0];
    } catch (e) {
      return null;
    }
  }

  private async fetchCurrentWeather(lat: number, lon: number): Promise<any | null> {
    try {
      // Request current weather plus hourly temperature and windspeed (for next hours)
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m,windspeed_10m&timezone=auto`;
      const res = await fetch(url);
      if (!res.ok) return null;
      const json = await res.json();
      // Return both current and hourly data
      return {
        current: json?.current_weather || null,
        hourly: json?.hourly || null,
      };
    } catch (e) {
      return null;
    }
  }

  async fetchWeather(options: any = {}): Promise<any | null> {
    const { forceMock = false } = options;
    this.error = null;

    if (forceMock || this.mockMode) {
      this.results = SAMPLE_MOCK_RESULTS;
      return this.results;
    }

    const q = this.searchTitle?.trim();
    if (!q) {
      this.error = 'Please enter a city name.';
      return null;
    }

    this.loading = true;
    try {
      const geo = await this.geocodeCity(q);
      if (!geo) {
        this.error = 'City not found.';
        this.results = [];
        return null;
      }

      const weatherResp = await this.fetchCurrentWeather(geo.latitude, geo.longitude);
      if (!weatherResp || !weatherResp.current) {
        this.error = 'Impossibile recuperare il meteo.';
        this.results = [];
        return null;
      }

      // Build hourly forecast (next 12 entries) if available
      const hourly: Array<any> = [];
      if (weatherResp.hourly && Array.isArray(weatherResp.hourly.time)) {
        const times = weatherResp.hourly.time;
        const temps = weatherResp.hourly.temperature_2m || [];
        const winds = weatherResp.hourly.windspeed_10m || [];
        for (let i = 0; i < Math.min(times.length, 24); i++) {
          hourly.push({ time: times[i], temperature: temps[i], windspeed: winds[i] });
        }
      }

      const cur = weatherResp.current;
      this.results = [
        {
          id: Number(geo.id || Math.floor(Math.random() * 1e6)),
          city: geo.name,
          country: geo.country,
          temperature: cur.temperature,
          windspeed: cur.windspeed,
          weathercode: cur.weathercode,
          time: cur.time,
          hourlyForecast: hourly,
        },
      ];
      return this.results;
    } catch (e: any) {
      this.error = String(e?.message || e);
      this.results = [];
      return null;
    } finally {
      this.loading = false;
    }
  }

  reset(): void {
    this.searchTitle = '';
    this.results = [];
    this.error = null;
    this.loading = false;
    this.mockMode = false;
  }

  // Map Open-Meteo weather codes to a simple emoji/icon for quick UI
  weatherCodeToEmoji(code: number | null | undefined): string {
    if (code === null || code === undefined) return '❓';
    // Based on WMO weather interpretation codes (simplified)
    const c = Number(code);
    if (c === 0) return '☀️'; // Clear sky
    if (c === 1 || c === 2 || c === 3) return '⛅'; // Mainly clear / partly cloudy
    if (c === 45 || c === 48) return '🌫️'; // Fog
    if (c === 51 || c === 53 || c === 55) return '🌦️'; // Drizzle
    if (c === 61 || c === 63 || c === 65) return '🌧️'; // Rain
    if (c === 71 || c === 73 || c === 75 || c === 77) return '🌨️'; // Snow
    if (c === 80 || c === 81 || c === 82) return '🌧️';
    if (c === 95 || c === 96 || c === 99) return '⛈️'; // Thunderstorm
    return '🌥️';
  }
}
