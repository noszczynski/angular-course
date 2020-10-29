import { Component, OnInit } from '@angular/core';
import { MusicSearchService } from '../music-search.service';

@Component({
    selector: 'app-album-list',
    template: `
        <div class="p-3">
            <h2 class="text-white">Albums</h2>
        </div>
        <div class="d-flex p-3">
            <input type="text" [(ngModel)]="searchTerm" />
            <button (click)="onSearch()">Search</button>
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
            this.albums = await this.musicSearch.getAlbums();
        })();
    }
}
