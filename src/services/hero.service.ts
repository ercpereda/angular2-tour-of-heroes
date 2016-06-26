import { Injectable } from '@angular/core';

import { Hero } from '../models/hero';

import { HEROES } from '../mocks/mock-heroes';

@Injectable()
export class HeroService {
  getHero(id: number) {
    return this.getHeroes()
      .then(heroes => heroes.filter(hero => hero.id === id)[0]);
  }

  getHeroes() {
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly() {
    return new Promise<Hero[]>(resolve =>
      setTimeout(() => resolve(HEROES), 2000)
    );
  }
}
