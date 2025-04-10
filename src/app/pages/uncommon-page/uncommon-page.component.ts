
import { Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { interval, tap } from 'rxjs';

const client1 = {
  name: 'Ruben',
  gender: 'male',
  age: 25,
  address: 'San miguel el salvador'
}

const client2 = {
  name: 'vanessa',
  gender: 'female',
  age: 32,
  address: 'San miguel el salvador'
}
@Component({
  selector: 'app-uncommon-page',
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, UpperCasePipe, KeyValuePipe, TitleCasePipe, AsyncPipe],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  };


  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }
    this.client.set(client1);
  }
  clientsMap = signal({
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    other: 'tenemos # clientes esperando',
  })
  clients = signal([
    'Ruben',
    'vanessa',
    'Fernando',
    'María',
    'Javier',
    'Jorge',
    'José',
    'Luis',
  ])

  deleteClient() {
    this.clients.update((prev) => prev.slice(1));
  }

  profile = {
    name: 'Ruben',
    age: 25,
    address: 'San miguel el salvador',
    country: 'El Salvador',
    city: 'San Miguel',
  }

  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('este es el valor de la promesa');
      console.log('imprimiendo el valor de la promesa');

    }, 3000);
  })

  myObservableTimer = interval(2000).pipe(
    tap((value)=> console.log('imprimiendo el valor del observable', value))
  );
}
