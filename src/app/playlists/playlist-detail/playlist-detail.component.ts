import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Playlist} from '../../interfaces';

@Component({
  selector: 'app-playlist-detail',
  template: `
    <app-card [title]="playlist.name" [description]="playlist.description">
      <div class="form-group">
        <button (click)="handleSetEditedPlaylist(playlist.id)" class="btn btn-info float-right">
          Edit
        </button>
      </div>
    </app-card>
  `,
  styleUrls: ['./playlist-detail.component.scss']
})
export class PlaylistDetailComponent implements OnInit {

  @Input() playlist: Playlist;
  @Output() setEditedPlaylist: EventEmitter<any> = new EventEmitter();

  handleSetEditedPlaylist = (id: number) => this.setEditedPlaylist.emit(id);

  constructor() { }

  ngOnInit(): void {
  }

}
