import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../interfaces/city.interface';

const API_KEY = '2cbeeeefbd8c44aaef713f8286d0fbb1';

@Injectable({
    providedIn: 'root'
})
export class WeatherApiService {
    private baseUrl = 'http://api.openweathermap.org';

    constructor(private httpClient: HttpClient) {
    }

    public getCityByCoordinates(lat: number, lon: number): Observable<City[]> {
        return this.httpClient.get<City[]>(`${this.baseUrl}/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
    }

    public getCityByName(cityName: string): Observable<City[]> {
        return this.httpClient.get<City[]>(`${this.baseUrl}/geo/1.0/direct?q=${cityName}&limit=100&appid=${API_KEY}`);
    }

    public getWeatherByCoordinates(lat: number, lon: number): Observable<any> {
        return this.httpClient.get(`${this.baseUrl}/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);
    }
}
