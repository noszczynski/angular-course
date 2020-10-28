import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Playlist} from '../../interfaces';

@Component({
  selector: 'app-playlist-detail',
  template: `
    <app-card *ngIf="active" [title]="active.name" [description]="active.description">
      <div class="form-group">
        <button (click)="handleSetEditedPlaylist(active.id)" class="btn btn-info float-right">
          Edit
        </button>
      </div>
    </app-card>
  `,
  styleUrls: ['./playlist-detail.component.scss']
})
export class PlaylistDetailComponent implements OnInit {

  @Input() active: Playlist | undefined;
  @Output() setEditedPlaylist: EventEmitter<any> = new EventEmitter();

  handleSetEditedPlaylist = (id: number) => this.setEditedPlaylist.emit(id);

  constructor() { }

  ngOnInit(): void {
  }

}
