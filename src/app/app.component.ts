import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-eduweb-app';
  counter = 0;

  timer = (): void  => {
    this.counter += 1;
  }

  startInterval = (): void => {
    setInterval(this.timer, 500);
  }

  constructor() {
    this.startInterval();
  }

}
