import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-album-card',
    template: `
        <app-card
            [title]="album.name"
            [description]="description"
            [image]="image.url"
            [hyperLink]="albumLink"
        ></app-card>
    `,
    styleUrls: ['./album-card.component.scss'],
})
export class AlbumCardComponent implements OnInit {
    constructor() {}

    @Input('album')
    set setAlbum(album) {
        this.album = album;
        this.image = album.images[0];
        this.albumLink = `music/album/${album.id}`;

        const [artist] = album.artists;
        this.description = artist.name;
    }

    album;
    image;
    description;
    albumLink;

    ngOnInit(): void {}
}
