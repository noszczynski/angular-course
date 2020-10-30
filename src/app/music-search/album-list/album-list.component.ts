import { Component, OnInit } from '@angular/core';
import { MusicSearchService } from '../music-search.service';

@Component({
    selector: 'app-album-list',
    template: `
        <div class="albums">
            <h1 class="albums__title">Albums</h1>
            <div class="albums__searchbar">
                <input
                    class="input input--dark"
                    type="text"
                    placeholder="Search sth"
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
        this.musicSearch.albumsUpdated.subscribe((albums) => {
            this.albums = albums;
        });
    }
}
