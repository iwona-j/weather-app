import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
    @Input() cityName: string;
    @Output() searchForCity: EventEmitter<string> = new EventEmitter<string>();

    public search(searchValue: string): void {
        this.searchForCity.emit(searchValue);
    }
}
