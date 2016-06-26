import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Hero } from '../../models/hero';

import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'hero-detail',
  template: require('./hero-detail.component.html'),
  styles: [require('./hero-detail.component.css')]
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private heroService: HeroService,
    private routeParams: RouteParams
  ) { }

  goBack() {
    window.history.back();
  }

  ngOnInit() {
    let id = +this.routeParams.get('id');
    this.heroService.getHero(id).then(hero => this.hero = hero);
  }
}
