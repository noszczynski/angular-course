import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-playlist-form-new',
  template: `
    <app-card [title]=" 'TyTuł' " [description]=" 'DesCripTIon' ">

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

    </app-card>
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
