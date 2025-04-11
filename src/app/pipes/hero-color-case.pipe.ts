import { Pipe, type PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroColorCase',
})
export class HeroColorCase implements PipeTransform {

  transform(value: Color): string {
    return Color[value];
  }

}
