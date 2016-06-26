import { Component, OnInit } from '@angular/core';

import '../../../public/css/styles.css';

import { Hero } from '../../models/hero';

import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')],
  directives: [HeroDetailComponent],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  title = 'Tour of Heroes';

  constructor(private heroService: HeroService) { }

  getHeroes() {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
