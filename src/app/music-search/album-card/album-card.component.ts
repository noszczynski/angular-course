import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-album-card',
    template: `
        <app-card
            [title]="album.name"
            [description]="description"
            [image]="image.url"
        >
            <a class="link link--dark" routerLink="album/{{ albumId }}">link</a>
        </app-card>
    `,
    styleUrls: ['./album-card.component.scss'],
})
export class AlbumCardComponent implements OnInit {
    constructor() {}

    @Input('album')
    set setAlbum(album) {
        this.album = album;
        this.image = album.images[0];
        this.albumId = album.id;

        const [artist] = album.artists;
        this.description = artist.name;
    }

    album;
    image;
    description;
    albumId;

    ngOnInit(): void {}
}
