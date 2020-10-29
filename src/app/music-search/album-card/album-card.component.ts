import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-album-card',
    template: `
        <app-card
            [title]="album.name"
            [description]="album.description"
            [image]="image.src"
        ></app-card>
    `,
    styleUrls: ['./album-card.component.scss'],
})
export class AlbumCardComponent implements OnInit {
    constructor() {}

    @Input('album')
    private set setAlbum(album): void {
        this.album = album;
        this.image = album.images[0];
    }

    album;
    image;

    ngOnInit(): void {}
}
