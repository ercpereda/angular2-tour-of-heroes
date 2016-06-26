import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Hero } from '../../models/hero';

import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'heroes',
  template: require('./heroes.component.html'),
  styles: [require('./heroes.component.css')],
  directives: [HeroDetailComponent],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService) { }

  getHeroes() {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  gotoDetail() {
    this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
