import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navigation',
    template: `
        <div class="nav">
            <div class="nav__box">
                <a routerLink="/">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Angular_one_color_inverse_logo.svg/1200px-Angular_one_color_inverse_logo.svg.png"
                        class="nav__logo"
                        alt="angular logo"
                    />
                </a>
            </div>
            <div class="nav__box">
                <ul class="nav__list">
                    <li class="btn nav__list__item" routerLinkActive="active">
                        <a routerLink="/music">Search music</a>
                    </li>
                    <li class="btn nav__list__item" routerLinkActive="active">
                        <a routerLink="/playlists">Your playlists</a>
                    </li>
                </ul>
            </div>
        </div>
    `,
    styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
