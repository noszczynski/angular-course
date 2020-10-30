import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-playlist-form-new',
    template: `
        <app-card
            [title]="'New Playlist'"
            [description]="'create new playlist by title'"
        >
            <div class="card__body mt-2 p-0">
                <div class="flex__column">
                    <label for="create_name">Name:</label>
                    <input
                        type="text"
                        id="create_name"
                        class="input input--dark"
                        [(ngModel)]="edited.name"
                    />
                </div>
                <div>
                    <button
                        (click)="handleAddNewPlaylist()"
                        class="btn btn--dark"
                    >
                        Create
                    </button>
                </div>
            </div>
        </app-card>
    `,
    styleUrls: ['./playlist-form-new.component.scss'],
})
export class PlaylistFormNewComponent implements OnInit {
    @Input() edited: any;
    @Output() addNewPlaylist: EventEmitter<any> = new EventEmitter();

    handleAddNewPlaylist = () => {
        this.addNewPlaylist.emit();
    };

    constructor() {}

    ngOnInit(): void {}
}
