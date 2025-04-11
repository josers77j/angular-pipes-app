import { Pipe, type PipeTransform } from '@angular/core';
import { Creator } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroCreatorCase',
})
export class HeroCreatorCase implements PipeTransform {

  transform(value: number): string {
    return Creator[value];
  }

}
