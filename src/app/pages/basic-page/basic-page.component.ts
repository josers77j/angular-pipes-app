import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, LOCALE_ID, signal, ɵFirstAvailable } from '@angular/core';
import { timeout } from 'rxjs';
import { avaliableLocale, LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent {
  localeService = inject(LocaleService);
currentLocale = signal(inject(LOCALE_ID))
  nameLower = signal('Ruben');
  nameUpper = signal('Ruben');
  fullName = signal('ruBeN trEJo');

  customDate = signal(new Date());


  tickingDateEffect = effect((onCleanup) =>{
    const interval = setInterval(() => {
      this.customDate.set(new Date());
      console.log('tick');

    }, 1000);

    onCleanup (() => {
      clearInterval(interval);
    })
  })

  changeLocale(locale: avaliableLocale){
    console.log({locale});
    this.localeService.changeLocale(locale);
      
  }
}
