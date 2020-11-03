import { Component, OnInit } from '@angular/core';
import { PlaylistSelectionService } from './playlist-selection.service';
import { PlaylistsService } from '../playlists/playlists.service';
import { ID } from '../interfaces';

@Component({
    selector: 'app-playlist-selector',
    template: `
        <div class="selector">
            <div class="selector__head">
                <h4 class="selector__head__header">Choose playlist</h4>
            </div>
            <div class="selector__body">
                <label class="selector__label" for="select">Playlist:</label>
                <select
                    #select
                    class="input input--dark input--select"
                    [ngModel]="selectedId"
                    (ngModelChange)="setSelectedId($event)"
                >
                    <option
                        *ngFor="let playlist of playlists"
                        [value]="playlist.id"
                        class="option"
                    >
                        {{ playlist.name }}
                        &nbsp;
                        {{ playlist.tracks.length }}
                    </option>
                </select>
            </div>
        </div>
    `,
    styleUrls: ['playlist-selector.component.scss'],
})
export class PlaylistSelectorComponent implements OnInit {
    constructor(
        private selectionService: PlaylistSelectionService,
        private playlistsService: PlaylistsService,
    ) {
        const items = this.playlistsService.getPlaylists();
        this.playlists = items;

        if (!this.selectedId) {
            const [playlist] = items;

            if (playlist) {
                this.selectedId = playlist.id;
            }
        }
    }

    selectedId;
    playlists = [];

    setSelectedId = (id: ID) => {
        this.selectionService.setSelectedPlaylist(id);
    };

    ngOnInit(): void {
        this.selectionService.selectedUpdated.subscribe((id) => {
            console.log(id);
            this.selectedId = id;
        });

        this.playlistsService.playlistsUpdated.subscribe((playlists) => {
            console.log(playlists);
            this.playlists = playlists;
        });
    }
}
