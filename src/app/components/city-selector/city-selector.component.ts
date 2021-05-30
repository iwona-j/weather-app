import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { City } from '../../core/interfaces/city.interface';

@Component({
    selector: 'app-city-selector',
    templateUrl: './city-selector.component.html',
    styleUrls: ['./city-selector.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitySelectorComponent {
    @Input() cityList;
    @Output() chooseCity: EventEmitter<City> = new EventEmitter<City>();
}
