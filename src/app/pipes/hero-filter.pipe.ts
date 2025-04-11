import { Pipe, type PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroFilter',
})
export class heroFilterPipe implements PipeTransform {

  transform(value: Hero[], search:string): Hero[] {
    if(!search) return value;

    search = search.toLocaleLowerCase();

    return value.filter(
      hero => hero.name.toLocaleLowerCase().includes(search)
    )
  }

}
