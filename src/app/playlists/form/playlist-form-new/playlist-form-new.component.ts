import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-playlist-form-new',
  template: `
    <div class="card">
      <div class="card-body">
        <h4>New playlist</h4>
        <p class="m-0">Create new playlist</p>
      </div>

      <div class="card-body">
        <div class="form-group">
          <label for="create_name">Name:</label>
          <input
            type="text"
            class="form-control"
            id="create_name"
            [(ngModel)]="edited.name"
          />
        </div>
        <div class="form-group">
          <button
            class="btn btn-info text-white float-right"
            (click)="handleAddNewPlaylist()"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class PlaylistFormNewComponent implements OnInit {

  @Input() edited: any;
  @Output() addNewPlaylist: EventEmitter<any> = new EventEmitter();

  handleAddNewPlaylist = () => {
    this.addNewPlaylist.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
