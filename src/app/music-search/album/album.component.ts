import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MusicSearchService } from '../music-search.service';
import { ActivatedRoute } from '@angular/router';
import { ID, Track } from '../../interfaces';

@Component({
    selector: 'app-album',
    template: `
        <div class="album" *ngIf="album">
            <div class="album__card">
                <app-album-card [album]="album"></app-album-card>
            </div>
            <div class="album__playlist">
                <h2 class="album__playlist__header">Tracks</h2>
                <div class="album__playlist__wrapper" *ngIf="tracks">
                    <div class="album__sample">
                        <audio
                            [src]="selectedTrackUrl"
                            controls
                            autoplay
                        ></audio>
                    </div>
                    <app-playlist-selector></app-playlist-selector>
                    <app-track-list
                        [list]="tracks"
                        [headers]="headers"
                    ></app-track-list>
                </div>
            </div>
        </div>
    `,
    styleUrls: ['./album.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class AlbumComponent implements OnInit {
    constructor(
        private musicService: MusicSearchService,
        private activatedRoute: ActivatedRoute,
    ) {
        this.id = activatedRoute.snapshot.params.id;
    }

    album = null;
    id;
    tracks: Track[];
    selectedTrackUrl;
    headers = ['#', 'Name', 'Artist', ''];

    getAlbum = async (id: ID): Promise<void> => {
        return await this.musicService.getAlbum(id);
    };

    ngOnInit(): void {
        (async () => {
            const result: any = await this.getAlbum(this.id);

            if (result) {
                this.album = result;
                this.tracks = result.tracks.items;
            }
        })();
    }
}
