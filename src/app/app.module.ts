import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CitySelectorComponent } from './components/city-selector/city-selector.component';
import { DailyWeatherTileComponent } from './components/daily-weather-tile/daily-weather-tile.component';
import { DailyWeatherComponent } from './components/daily-weather/daily-weather.component';
import { SearchComponent } from './components/search/search.component';
import { WeatherStatsComponent } from './components/weather-stats/weather-stats.component';
import { WeatherComponent } from './components/weather/weather.component';
import { CityNamePipe } from './core/pipes/city-name.pipe';
import { TemperaturePipe } from './core/pipes/temperature.pipe';

@NgModule({
    declarations: [
        AppComponent,
        DailyWeatherTileComponent,
        DailyWeatherComponent,
        WeatherStatsComponent,
        TemperaturePipe,
        SearchComponent,
        WeatherComponent,
        CitySelectorComponent,
        CityNamePipe,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
