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

    constructor(private playlistService: PlaylistsService) {}

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

    savePlaylist = async () => {
        const item = await clone(this.edited);
        const result = await this.playlistService.savePlaylist(item);

        if (result) {
            this.selectedPlaylist = null;
            this.setInitialEdit();
        }
    };

    showPlaylist = (id: number): void => {
        const obj = this.playlistService.getPlaylist(id);

        if (obj && obj.id !== undefined && obj.id !== null) {
            this.setInitialEdit();
            this.selectedPlaylist = id;
            this.activePlaylist = clone(obj);
        }
    };

    setEditedPlaylist = (id: number): void => {
        const obj = this.playlistService.getPlaylist(id);

        if (obj) {
            this.edited = clone(obj);
        }
    };

    addNewPlaylist = (): void => {
        const obj = clone(this.edited);

        if (obj && !obj.name) {
            return;
        }

        this.playlistService.createPlaylist(obj);
        this.setInitialEdit();
    };

    removePlaylist = (id: number): void => {
        this.playlistService.removePlaylist(id);
    };

    closeEdit = () => {
        this.setInitialEdit();
        this.selectedPlaylist = null;
    };

    ngOnInit(): void {
        this.playlists = this.playlistService.getPlaylists();

        this.playlistService.playlistsUpdated.subscribe((playlists) => {
            this.playlists = playlists;
        });
    }
}
