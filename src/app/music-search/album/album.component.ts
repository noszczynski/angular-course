import { Component, OnInit } from '@angular/core';
import { MusicSearchService } from '../music-search.service';
import { ActivatedRoute } from '@angular/router';

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
                    <div class="album__playlist__row">
                        <div
                            class="album__song__header"
                            *ngFor="let header of headers"
                        >
                            <h6 class="m-0 mb-1">{{ header }}</h6>
                        </div>
                    </div>
                    <div
                        class="album__playlist__row"
                        *ngFor="let track of tracks"
                    >
                        <div class="album__song__field">
                            {{ track.track_number }}
                        </div>
                        <div class="album__song__field">
                            {{ track.name }}
                        </div>
                        <!--                        <div class="album__song__field">-->
                        <!--                            {{ track.duration_ms }}-->
                        <!--                        </div>-->
                        <!--                        <div class="album__song__field">-->
                        <!--                            {{ track.href }}-->
                        <!--                        </div>-->
                        <div class="album__song__field">
                            {{ track.artists[0].name }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    styleUrls: ['./album.component.scss'],
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
    tracks: [];
    headers = ['#', 'Name', 'Artist'];

    getAlbum = async (id: string): Promise<void> => {
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
