import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { City } from '../../core/interfaces/city.interface';
import { WeatherApiService } from '../../core/services/weather-api.service';

const DAILY_WEATHER_DAYS = 5;

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherComponent implements OnInit {
    public dailyWeather;
    public city: City;
    public cityList: City[];
    public error: string;

    constructor(
        private changeDetector: ChangeDetectorRef,
        private weatherApiService: WeatherApiService,
    ) {
    }

    public ngOnInit(): void {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getWeatherByUserCoordinates.bind(this));
        }
    }

    public getWeatherByUserCoordinates(position): void {
        const { coords: { latitude, longitude } } = position;
        this.weatherApiService.getCityByCoordinates(latitude, longitude)
            .subscribe(
                cityData => {
                    this.searchWeatherByCoordinates(cityData[0]);
                },
                err => this.handleError(err.error.message)
            );
    }

    public searchWeatherByCoordinates(city: City): void {
        this.cityList = null;

        this.weatherApiService.getWeatherByCoordinates(city.lat, city.lon)
            .subscribe(
                weather => {
                    this.city = city;
                    this.dailyWeather = weather.daily.slice(0, DAILY_WEATHER_DAYS);
                    this.changeDetector.markForCheck();
                },
                err => this.handleError(err.error.message)
            );
    }

    public searchCityByName(cityName: string): void {
        this.dailyWeather = null;
        this.error = null;

        this.weatherApiService.getCityByName(cityName)
            .subscribe(
                cityList => {
                    if (cityList.length === 0) {
                        this.handleError('Given city not found');
                    } else if (cityList.length === 1) {
                        this.searchWeatherByCoordinates(cityList[0]);
                    } else {
                        this.cityList = cityList;
                    }
                    this.changeDetector.markForCheck();
                },
                err => this.handleError(err.error.message)
            );
    }

    private handleError(err: string): void {
        this.error = err;
        this.changeDetector.markForCheck();
    }
}
