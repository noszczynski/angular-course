import { Component, ViewEncapsulation } from '@angular/core';

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
                color: #000000;
                height: 100%;
                min-height: 100vh;
                width: 100%;
            }
        `,
    ],
    encapsulation: ViewEncapsulation.None, // styles above are global
})
export class AppComponent {
    constructor() {}

    title = 'angular-app';
    themeColor = '#138496';
    body: 'grant_type=client_credentials';
}
