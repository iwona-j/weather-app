import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-daily-weather-tile',
    templateUrl: './daily-weather-tile.component.html',
    styleUrls: ['./daily-weather-tile.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DailyWeatherTileComponent {
    @Input() dayWeather;
}
