import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-daily-weather',
    templateUrl: './daily-weather.component.html',
    styleUrls: ['./daily-weather.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DailyWeatherComponent {

    @Input() set dailyWeather(dailyWeather) {
        if (dailyWeather) {
            this.dailyWeatherData = dailyWeather;
            this.setWeatherStats(dailyWeather);
        }
    }

    public dailyWeatherData;
    public minTemp: number;
    public maxTemp: number;
    public meanValue: number;
    public modeValues: number[];

    private setWeatherStats(dailyWeather): void {
        const temperatures = dailyWeather
            .map(dayWeather => dayWeather.temp)
            .reduce((acc, dayTemperatures) => {
                const { morn, day, night } = dayTemperatures;
                acc.min = Math.min(acc.min, morn, day, night);
                acc.max = Math.max(acc.max, morn, day, night);
                acc.sum += morn + day + night;
                acc.values.push(morn, day, night);
                return acc;
            }, { min: Number.MAX_SAFE_INTEGER, max: 0, sum: 0, values: [] });

        this.minTemp = temperatures.min;
        this.maxTemp = temperatures.max;
        this.meanValue = temperatures.sum / temperatures.values.length;
        this.modeValues = this.getModeValue(temperatures.values);
    }

    private getModeValue(valuesArr: number[]): number[] {
        return valuesArr.reduce((acc, curr) => {
            const value = Math.round(curr);
            const counter = (acc.valuesMap[value] || 0) + 1;
            acc.valuesMap[value] = counter;
            if (acc.valuesMap[value] > acc.maxCounter) {
                acc.maxCounter = counter;
                acc.values = [value];
            } else if (counter === acc.maxCounter) {
                acc.values.push(value);
            }
            return acc;
        }, { maxCounter: 0, values: [], valuesMap: {} }).values.sort();
    }
}
