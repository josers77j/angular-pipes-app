import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import localEs from '@angular/common/locales/es-SV';
import localFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { LocaleService } from './services/locale.service';

registerLocaleData(localEs, 'es')
registerLocaleData(localFr, 'fr')

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    {
      provide: LOCALE_ID,
      deps: [LocaleService],
      useFactory: (localeService: LocaleService) => localeService.getLocale(),
    }
  ]
};
