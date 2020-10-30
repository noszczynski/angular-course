import { Component, OnInit } from '@angular/core';
import { MusicSearchService } from '../music-search.service';

@Component({
    selector: 'app-album-list',
    template: `
        <div class="flex-column p-2">
            <h1>Albums</h1>
            <div class="grid__columns--2 mw-50">
                <input
                    class="input input--dark"
                    type="text"
                    [(ngModel)]="searchTerm"
                />
                <button class="btn btn--light" (click)="onSearch()">
                    Search
                </button>
            </div>
        </div>
        <div class="cards">
            <app-album-card
                *ngFor="let album of albums"
                [album]="album"
            ></app-album-card>
        </div>
    `,
    styleUrls: ['./album-list.component.scss'],
})
export class AlbumListComponent implements OnInit {
    constructor(private musicSearch: MusicSearchService) {}

    albums = [];
    searchTerm = '';

    onSearch = async () => {
        this.albums = await this.musicSearch.setSearchTerm(this.searchTerm);
    };

    ngOnInit(): void {
        (async () => {
            this.albums = await this.musicSearch.setSearchTerm('harry potter');
        })();
    }
}
