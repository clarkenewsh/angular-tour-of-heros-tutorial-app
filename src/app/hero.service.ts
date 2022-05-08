import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  // Get heros from mock heroes data using 'Hero' interface to define the type (TypeScript)
  getHeroes(): Hero[] {
    return HEROES;
  }
}
