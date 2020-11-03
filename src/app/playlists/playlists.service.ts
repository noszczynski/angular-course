import { EventEmitter, Inject, Injectable, Optional } from '@angular/core';
import { ID, Playlist, Track } from '../interfaces';
import { clone } from '../utils';
import playlistsStorage from '../services/playlistsStorage';

@Injectable({
    providedIn: 'root',
})
export class PlaylistsService {
    constructor(@Optional() @Inject('playlists') playlists) {
        const items = playlistsStorage.getAll() || [];

        this.setPlaylists(items);
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
        const id = arr.length > 0 ? Number(arr[arr.length - 1].id) + 1 : 1;

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

        playlistsStorage.set(arr);
        this.setPlaylists(arr);
    };

    addTrackToPlaylist = (track: Track, playlistId: ID): void => {
        const arr = clone(this.playlists);
        const obj = clone(track);
        const playlist = arr.find((item) => item.id === playlistId);

        console.log(playlistId);
        console.log(arr);

        if (playlist) {
            const { tracks } = playlist;
            tracks.push(obj);
        }

        console.log('New track in this Playlist:');
        console.log(playlist);

        this.savePlaylist(playlist);
    };

    removeTrackFromPlaylist = (trackId: string, playlistId: number): void => {
        const arr = clone(this.playlists);
        const playlist = arr.find((item) => item.id === playlistId);
        const trackIndex = playlist.findIndex((item) => item.id === trackId);

        console.log('remove', playlist, trackIndex);
    };

    getPlaylists = (): Playlist[] => {
        return this.playlists;
    };
}
