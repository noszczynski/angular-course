import { Injectable } from '@angular/core';
import { Playlist } from '../interfaces';

@Injectable({
    providedIn: 'root',
})
export class PlaylistsService {
    playlists: Playlist[] = [
        {
            id: 1,
            name: 'The best of Adam',
            description: 'lorem ipsum dolor sit amet',
            tracks: 23,
            color: '#c62347',
            favourite: true,
        },
        {
            id: 2,
            name: 'Summer 2020 Hits',
            description: 'lorem ipsum dolor sit amet',
            tracks: 15,
            color: '#ddc216',
            favourite: true,
        },
    ];

    getPlaylists = (): Playlist[] => {
        return this.playlists;
    };

    constructor() {}
}
