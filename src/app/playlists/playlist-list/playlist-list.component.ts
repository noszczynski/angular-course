import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Playlist} from '../../interfaces';

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.scss']
})
export class PlaylistListComponent implements OnInit {
  @Input() themeColor: any;
  @Input() playlists: Playlist[];
  @Output() setEditedPlaylist: EventEmitter<any> = new EventEmitter();

  handleSetEditedPlaylist = (id: number): void => {
    this.setEditedPlaylist.emit(id);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
