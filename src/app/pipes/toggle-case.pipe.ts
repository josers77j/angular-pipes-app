import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase'
})

export class toggleCase implements PipeTransform {
  transform(value: string, state: boolean): string {
    return state === true ? value.toUpperCase() : value.toLocaleLowerCase()
  }
}
