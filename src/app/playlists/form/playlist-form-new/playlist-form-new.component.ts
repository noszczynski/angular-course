import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-playlist-form-new',
    template: `
        <app-card
            [title]="'New Playlist'"
            [description]="'create new playlist by title'"
        >
            <div class="card__body">
                <div>
                    <label for="create_name">Name:</label>
                    <input
                        type="text"
                        id="create_name"
                        [(ngModel)]="edited.name"
                    />
                </div>
                <div>
                    <button (click)="handleAddNewPlaylist()">Create</button>
                </div>
            </div>
        </app-card>
    `,
    styles: [],
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
