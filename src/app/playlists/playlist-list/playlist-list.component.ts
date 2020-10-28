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
  @Output() showPlaylist: EventEmitter<any> = new EventEmitter();

  handleShowPlaylist = (id: number): void => {
    this.showPlaylist.emit(id);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
