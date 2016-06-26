import { Component, Input } from '@angular/core';

import { Hero } from '../../models/hero';

@Component({
  selector: 'hero-detail',
  template: require('./hero-detail.component.html')
})
export class HeroDetailComponent {
  @Input()
  hero: Hero;
}
