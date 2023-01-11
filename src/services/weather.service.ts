import ApiService from '@services/api.service'
import { API_KEY, WHETHER_BASE, WHETHER_ICON_BASE } from '@const/weather.const'

type OpenWeatherMapOptions = {
  params: {
    lat?: number | string
    lon?: number | string
    q?: string
    units?: string
    lang?: string
  };
};

export default class WeatherApiService {
  private apiService = new ApiService({
    base: WHETHER_BASE,
    params: {
      appid: API_KEY,
    },
  })

  constructor(
    private readonly lat: number,
    private readonly lon: number
  ) {}

  async getOpenMeteo() {
    const urlBase = 'https://api.open-meteo.com/v1/forecast'
    if (!this.lat || !this.lon) {
      throw new Error("WeatherService: Не указаны координаты для запроса погоды")
    }
    return fetch(`${urlBase}?latitude=${this.lat}&longitude=${this.lon}&hourly=temperature_2m`)
      .then((response) => response.json())
  }

  async getOpenWeatherMap(cityName?: string): Promise<OpenWeatherMapResponse | null> {
    const options: OpenWeatherMapOptions = {
      params: {
        lat: this.lat,
        lon: this.lon,
        units: 'metric',
        lang: 'ru',
      }
    };

    if (cityName) {
      options.params.q = cityName;
    }

    return this.apiService.fetch('/weather', options)
  }

  public getIcon(code: string): string {
    if (!code) return '';

    return `${WHETHER_ICON_BASE}${code}@2x.png`;
  }
}


export type OpenWeatherMapResponse = {
  weather: Weather[]
  base: string
  main: WeatherMainData
  visibility: number
  wind: Wind
  clouds: Clouds
  dt: number
  sys: WeatherSys
  timezone: number
  id: number
  name: string
  cod: number
}

type Weather = {
  main: string
  description: string
  icon: string
}

type Wind = {
  speed: number
  deg: number
}

type Clouds = {
  all: number
}

type WeatherMainData = {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
}

type WeatherSys = {
  type: number
  id: number
  country: string
  sunrise: number
  sunset: number
}
