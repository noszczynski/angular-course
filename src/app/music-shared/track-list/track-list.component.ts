import { Component, Input, OnInit } from '@angular/core';
import { ID, Track } from '../../interfaces';
import { PlaylistSelectionService } from '../playlist-selection.service';

@Component({
    selector: 'app-track-list',
    template: `
        <div *ngIf="list && list.length > 0">
            <div class="album__playlist__row" *ngIf="headers">
                <div class="album__song__header" *ngFor="let header of headers">
                    <h6 class="m-0 mb-1">{{ header }}</h6>
                </div>
            </div>
            <div class="album__playlist__row" *ngFor="let track of list">
                <div class="album__song__field">
                    {{ track.track_number }}
                </div>
                <div class="album__song__field">
                    <button (click)="selectTrack(track.id)" class="ta-left">
                        {{ track.name }}
                    </button>
                </div>
                <div class="album__song__field">
                    {{ track.artists[0].name }}
                </div>
                <div class="album__song__field">
                    <button class="m-0 px-0" (click)="addToPlaylist(track)">
                        <span class="weight-700">+</span>
                    </button>
                </div>
            </div>
        </div>
        <div *ngIf="list && list.length === 0" class="mt-1">
            You don't have any tracks in this playlist. Add some on 'Search
            music' page
        </div>
    `,
    styleUrls: ['./track-list.component.scss'],
})
export class TrackListComponent implements OnInit {
    constructor(private playlistSelectionService: PlaylistSelectionService) {}

    @Input() list: Track[];
    @Input() headers: string[];

    selectedId;

    selectTrack = (id: ID): void => {
        this.playlistSelectionService.setSelectedPlaylist(id);
    };

    addToPlaylist = (track: Track): void => {
        this.playlistSelectionService.addTrackToPlaylist(track);
    };

    ngOnInit(): void {
        this.playlistSelectionService.selectedUpdated.subscribe((id) => {
            this.selectedId = id;
        });
    }
}
