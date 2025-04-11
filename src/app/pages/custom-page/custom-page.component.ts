import { Component, signal } from '@angular/core';
import { toggleCase } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../Data/hero.data';
import { Hero } from '../../interfaces/hero.interface';
import { CanFlyCase} from '../../pipes/can-fly-case.pipe';
import { HeroColorCase } from '../../pipes/hero-color-case.pipe';
import { HeroTextColorCase } from '../../pipes/hero-text-color.pipe';
import { TitleCasePipe } from '@angular/common';
import { HeroCreatorCase } from '../../pipes/hero-creator.pipe';
import { HeroSortByPipe } from '../../pipes/hero-sort-by.pipe';
import { heroFilterPipe } from '../../pipes/hero-filter.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [toggleCase, CanFlyCase, HeroColorCase, HeroTextColorCase, TitleCasePipe, HeroCreatorCase, HeroSortByPipe, heroFilterPipe],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {
  fullName = signal<string>('Ruben Trejo');

  upperCaseState = signal<boolean>(true);

  onUpperCase(){
    if(this.upperCaseState() === true){
       this.upperCaseState.set(false);
       return;
    }

     this.upperCaseState.set(true);
  }

  sortBy = signal<keyof Hero | null>(null);

  heroes = signal<Hero[]>(heroes);

  searchQuery = signal<string>('')

}
