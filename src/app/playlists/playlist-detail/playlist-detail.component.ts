import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Playlist } from '../../interfaces';

@Component({
    selector: 'app-playlist-detail',
    template: `
        <app-card
            *ngIf="activePlaylist"
            [title]="activePlaylist.name"
            [description]="activePlaylist.description"
        >
            <div>
                <button
                    (click)="handleSetEditedPlaylist(activePlaylist.id)"
                    class="btn btn--dark"
                >
                    Edit
                </button>
                &nbsp;
                <button
                    (click)="handleRemovePlaylist(activePlaylist.id)"
                    class="btn btn--dark"
                >
                    Remove
                </button>
            </div>
        </app-card>
    `,
    styleUrls: ['./playlist-detail.component.scss'],
})
export class PlaylistDetailComponent implements OnInit {
    @Input() activePlaylist: Playlist | undefined;
    @Output() setEditedPlaylist: EventEmitter<any> = new EventEmitter();
    @Output() removePlaylist: EventEmitter<any> = new EventEmitter();

    handleSetEditedPlaylist = (id: number) => this.setEditedPlaylist.emit(id);
    handleRemovePlaylist = (id: number) => this.removePlaylist.emit(id);

    constructor() {}

    ngOnInit(): void {}
}
