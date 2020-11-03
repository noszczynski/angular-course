import { Component, Input, OnInit } from '@angular/core';
import { ID, Track } from '../../interfaces';
import { PlaylistSelectionService } from '../playlist-selection.service';

@Component({
    selector: 'app-track-list',
    template: `
        <div class="album__playlist__row" *ngFor="let track of list">
            <div class="album__song__field">
                {{ track.track_number }}
            </div>
            <div class="album__song__field">
                <button (click)="selectTrack(track.id)">
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
    `,
    styleUrls: ['./track-list.component.scss'],
})
export class TrackListComponent implements OnInit {
    constructor(private playlistSelectionService: PlaylistSelectionService) {}

    @Input() list: Track[];

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
