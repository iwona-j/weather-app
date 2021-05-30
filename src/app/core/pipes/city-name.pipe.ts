import { Pipe, PipeTransform } from '@angular/core';
import { City } from '../interfaces/city.interface';

@Pipe({
    name: 'cityName'
})
export class CityNamePipe implements PipeTransform {

    transform(city: City): string {
        return city ? `${city.name}, ${city.country}${(city.state ? `, ${city.state}` : '')}` : '';
    }

}
