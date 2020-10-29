import { Component, Input, OnInit } from '@angular/core';
import { Playlist } from '../interfaces';
import { clone } from '../utils';
import { PlaylistsService } from './playlists.service';

@Component({
    selector: 'app-playlists',
    templateUrl: './playlists.component.html',
    styleUrls: ['./playlists.component.scss'],
})
export class PlaylistsComponent implements OnInit {
    @Input() themeColor: string;

    constructor(private playlistService: PlaylistsService) {
        this.playlists = this.playlistService.getPlaylists();
    }

    title = 'playlists';
    selectedPlaylist = null;
    activePlaylist: Playlist = undefined;
    playlists: Playlist[] = [];

    editedInitial: Playlist = {
        name: null,
        description: null,
        tracks: 0,
        color: '#000000',
        favourite: false,
    };

    edited: Playlist = clone(this.editedInitial);

    setInitialEdit = () => {
        this.edited = clone(this.editedInitial);
    };

    savePlaylist = () => {
        const item = clone(this.edited);
        const arr = clone(this.playlists);

        if (item) {
            const { id } = item;
            const index = arr.findIndex((playlist) => playlist.id === id);

            if (index !== -1) {
                arr[index] = clone(item);
                this.playlists = clone(arr);
                this.selectedPlaylist = null;
                this.setInitialEdit();
            }
        }
    };

    getActivePlaylist = (id: number): Playlist => {
        return (
            this.playlists.find((playlist) => playlist.id === id) || undefined
        );
    };

    showPlaylist = (id: number): void => {
        const arr = clone(this.playlists);
        const obj = arr.find((item) => item.id === id);

        if (obj && obj.id !== undefined && obj.id !== null) {
            this.setInitialEdit();
            this.selectedPlaylist = id;
            this.activePlaylist = this.getActivePlaylist(id);
        }
    };

    setEditedPlaylist = (id: number): void => {
        const arr = clone(this.playlists);
        const obj = arr.find((item) => item.id === id);

        if (obj) {
            this.edited = { ...obj };
        }
    };

    addNewPlaylist = (): void => {
        const obj = clone(this.edited);

        if (obj && !obj.name) {
            return;
        }

        const arr = clone(this.playlists);
        const id = Number(arr[arr.length - 1].id) + 1;

        arr.push({
            ...obj,
            id,
        });

        this.setInitialEdit();
        this.playlists = arr;
    };

    closeEdit = () => {
        this.setInitialEdit();
        this.selectedPlaylist = null;
    };

    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
}
