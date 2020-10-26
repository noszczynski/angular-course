import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      body {
        margin: 0;
        padding: 0;
        font-size: 1rem;
      }

      .content {
        background: #3a3a3a;
        color: #ffffff;
        height: 100%;
        min-height: 100vh;
        width: 100vw;
      }
    `
  ],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  title = 'angular-eduweb-app';
  themeColor = '#138496';

  constructor() { }
}
