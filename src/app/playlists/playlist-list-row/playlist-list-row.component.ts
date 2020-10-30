import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-playlist-list-row',
    template: `
        <div class="list__row">
            <span> {{ index + 1 }}. </span>
            <span
                class="list__item font-weight-bold"
                [ngStyle]="{ color: playlist.color }"
            >
                <button
                    class="list__item__button"
                    (click)="handleShowPlaylist(playlist.id)"
                >
                    {{ playlist.name }}
                </button>
            </span>
            <span class="list__item"> {{ playlist.tracks }} </span>
            <span class="list__item">
                <span [ngClass]="{ list__item__favourite: playlist.favourite }">
                    <input
                        type="checkbox"
                        id="favourite"
                        [(ngModel)]="playlist.favourite"
                    />
                    <label for="favourite"></label>
                </span>
            </span>
        </div>
    `,
    styles: [],
})
export class PlaylistListRowComponent implements OnInit {
    @Input() index: number;
    @Input() playlist: any;
    @Output() showPlaylist: EventEmitter<any> = new EventEmitter();

    handleShowPlaylist = (id: number) => this.showPlaylist.emit(id);

    constructor() {}

    ngOnInit(): void {}
}
