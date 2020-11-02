import { EventEmitter, Inject, Injectable, Optional } from '@angular/core';
import { Playlist } from '../interfaces';
import { clone } from '../utils';
import playlistsStorage from '../services/playlistsStorage';

@Injectable({
    providedIn: 'root',
})
export class PlaylistsService {
    constructor(@Optional() @Inject('playlists') playlists) {
        this.playlists = playlistsStorage.getAll() || [];
    }

    playlistsUpdated: EventEmitter<any> = new EventEmitter();

    playlists: Playlist[] = [];

    getPlaylist = (id: number): Playlist | undefined => {
        return (
            this.playlists.find((playlist) => playlist.id === id) || undefined
        );
    };

    setPlaylists = (playlists) => {
        playlistsStorage.set(playlists);
        this.playlistsUpdated.emit(playlists);
        this.playlists = playlists;
    };

    savePlaylist = (item: Playlist): boolean => {
        if (item) {
            const { id } = item;
            const arr = clone(this.playlists);
            const index = arr.findIndex((playlist) => playlist.id === id);

            if (index !== -1) {
                arr[index] = clone(item);
                this.setPlaylists(clone(arr));

                return true;
            }
        }

        return false;
    };

    createPlaylist = (playlist: Playlist): void => {
        const arr = clone(this.playlists);
        const id = Number(arr[arr.length - 1].id) + 1;

        arr.push({
            ...playlist,
            id,
        });

        playlistsStorage.set(arr);
        this.setPlaylists(arr);
    };

    removePlaylist = (id: number): void => {
        const arr = clone(this.playlists);
        const index = arr.findIndex((item) => item.id === id);

        arr.splice(index, 1);

        console.log(index);
        console.log(arr);

        playlistsStorage.set(arr);
        this.setPlaylists(arr);
    };

    getPlaylists = (): Playlist[] => {
        return this.playlists;
    };
}
