import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-album-list',
    template: `
        <div class="p-3">
            <h2 class="text-white">Albums</h2>
        </div>
        <div class="cards">
            <app-album-card
                *ngFor="let album of albums"
                [album]="album"
            ></app-album-card>
        </div>
    `,
    styleUrls: ['./album-list.component.scss'],
})
export class AlbumListComponent implements OnInit {
    constructor() {}

    albums = [
        {
            id: 1,
            name: 'Name 1',
            description: 'lorem ipsum dolor sit',
            images: [
                { src: 'https://source.unsplash.com/user/erondu/640x640' },
            ],
        },
        {
            id: 2,
            name: 'Name 2',
            description: 'lorem ipsum dolor sit',
            images: [
                { src: 'https://source.unsplash.com/user/erondu/640x640' },
            ],
        },
        {
            id: 3,
            name: 'Name 3',
            description: 'lorem ipsum dolor sit',
            images: [
                { src: 'https://source.unsplash.com/user/erondu/640x640' },
            ],
        },
        {
            id: 4,
            name: 'Name 4',
            description: 'lorem ipsum dolor sit',
            images: [
                { src: 'https://source.unsplash.com/user/erondu/640x640' },
            ],
        },
        {
            id: 5,
            name: 'Name 5',
            description: 'lorem ipsum dolor sit',
            images: [
                { src: 'https://source.unsplash.com/user/erondu/640x640' },
            ],
        },
        {
            id: 6,
            name: 'Name 6',
            description: 'lorem ipsum dolor sit',
            images: [
                { src: 'https://source.unsplash.com/user/erondu/640x640' },
            ],
        },
    ];

    ngOnInit(): void {}
}
