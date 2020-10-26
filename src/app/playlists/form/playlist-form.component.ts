import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-playlist-form',
  templateUrl: './playlist-form.component.html',
  styleUrls: ['./playlist-form.component.scss'],
})

export class PlaylistFormComponent implements OnInit {
  @Input() selectedPlaylist: any;
  @Input() edited: any;
  @Input() themeColor: string;
  @Output() addNewPlaylist: EventEmitter<any> = new EventEmitter();
  @Output() savePlaylist: EventEmitter<any> = new EventEmitter();
  @Output() closeEdit: EventEmitter<any> = new EventEmitter();

  handleAddNewPlaylist = () => this.addNewPlaylist.emit();
  handleSavePlaylist = () => this.savePlaylist.emit();
  handleCloseEdit = () => this.closeEdit.emit();

  getButtonColors = () => ({
    backgroundColor: this.themeColor,
    borderColor: this.themeColor
  })

  constructor() { }

  ngOnInit(): void {

  }

}
