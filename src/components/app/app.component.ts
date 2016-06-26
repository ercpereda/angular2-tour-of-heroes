import { Component } from '@angular/core';

import '../../../public/css/styles.css';

import { Hero } from '../../models/hero';

import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')],
  directives: [HeroDetailComponent]
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
