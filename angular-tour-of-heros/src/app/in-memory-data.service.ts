import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './heros/hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heros = [
      { id: 1, name: 'Lancelot' },
      { id: 2, name: 'Gusion' },
      { id: 3, name: 'Kufra' },
      { id: 4, name: 'Franco' },
      // { id: 5, name: 'Jhonson'},
      // { id: 6, name: 'Miya'},
      // { id: 7, name: 'Leomord'}
      ];
    return {heros};
  }


  genId(heros: Hero[]): number {
    return heros.length > 0 ? Math.max(...heros.map(hero => hero.id)) + 1 : 1;
  }
}
