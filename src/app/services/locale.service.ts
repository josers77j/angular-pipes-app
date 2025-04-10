import { Injectable, signal } from '@angular/core';

export type avaliableLocale = 'es' | 'fr' | 'en';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {

 private currentLocale = signal<avaliableLocale>('es');

constructor(){
  this.currentLocale.set(
    localStorage.getItem('locale') as avaliableLocale ?? 'en'
  )
}

 get getLocale(){
  return this.currentLocale;
 }

 changeLocale(locale: avaliableLocale){
  localStorage.setItem('locale', locale);
  this.currentLocale.set(locale);
  window.location.reload();
 }
}
