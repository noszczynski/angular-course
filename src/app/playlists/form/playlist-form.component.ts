import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Playlist} from '../../interfaces';

@Component({
  selector: 'app-playlist-form',
  templateUrl: './playlist-form.component.html',
  styleUrls: ['./playlist-form.component.scss'],
})

export class PlaylistFormComponent implements OnInit {

  constructor() { }
  @Input() selectedPlaylist: any;
  @Input() edited: any;
  @Input() themeColor: string;
  @Input() playlists: Playlist[];
  @Output() setEditedPlaylist: EventEmitter<any> = new EventEmitter();
  @Output() addNewPlaylist: EventEmitter<any> = new EventEmitter();
  @Output() savePlaylist: EventEmitter<any> = new EventEmitter();
  @Output() closeEdit: EventEmitter<any> = new EventEmitter();

  active;

  handleSetEditedPlaylist = (id: number) => this.setEditedPlaylist.emit(id);
  handleAddNewPlaylist = () => this.addNewPlaylist.emit();
  handleSavePlaylist = () => this.savePlaylist.emit();
  handleCloseEdit = () => this.closeEdit.emit();

  getButtonColors = () => ({
    backgroundColor: this.themeColor,
    borderColor: this.themeColor
  })

  ngOnInit(): void {
    this.active = this.playlists.find(playlist => playlist.id === this.selectedPlaylist);
  }

}
