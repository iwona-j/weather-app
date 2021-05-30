import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-weather-stats',
    templateUrl: './weather-stats.component.html',
    styleUrls: ['./weather-stats.components.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherStatsComponent {
    @Input() minTemp;
    @Input() maxTemp;
    @Input() meanTemp;
    @Input() modeTemps;
}
