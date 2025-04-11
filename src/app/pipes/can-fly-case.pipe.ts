import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFlyCase',
})
export class CanFlyCase implements PipeTransform {

  transform(value: boolean): string {
    return value ? 'Puede volar' : 'No puede volar';
  }

}
