import { Component } from '@angular/core';

import '../../public/css/styles.css';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')]
})
export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}
