import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Playlist} from '../../interfaces';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() themeColor: any;
  @Input() playlists: Playlist[];
  @Output() setEditedPlaylist: EventEmitter<any> = new EventEmitter();

  handleSetEditedPlaylist = (id) => this.setEditedPlaylist.emit(id);

  constructor() { }

  ngOnInit(): void {
  }

}
