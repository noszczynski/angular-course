import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: [],
    encapsulation: ViewEncapsulation.None, // styles above are global
})
export class AppComponent {
    constructor() {}

    title = 'angular-app';
    themeColor = '#138496';
    body: 'grant_type=client_credentials';
}
