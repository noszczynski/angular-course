import { Component, Input, OnInit } from '@angular/core';
import { Playlist } from '../interfaces';
import { clone } from '../utils';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})

export class PlaylistsComponent implements OnInit {
  @Input() themeColor: string;

  title = 'playlists';
  selectedPlaylist = null;

  editedInitial: Playlist = {
    name: null,
    tracks: 0,
    color: this.themeColor,
    favourite: false
  };

  edited: Playlist = clone(this.editedInitial);

  playlists: Playlist[] = [
    {
      id: 1,
      name: 'The best of Adam',
      tracks: 23,
      color: '#c62347',
      favourite: true,
    },
    {
      id: 2,
      name: 'Summer 2020 Hits',
      tracks: 15,
      color: '#ddc216',
      favourite: true
    },
  ];

  savePlaylist = () => {
    const item = clone(this.edited);
    const arr = clone(this.playlists);

    if (item) {
      const { id } = item;
      const index = arr.findIndex(playlist => playlist.id === id);

      console.log(index);
      arr[index] = Object.assign({}, item);

      this.playlists = clone(arr);
    }
  }

  setEditedPlaylist = (id: number): void => {
    const arr = clone(this.playlists);
    const obj = arr.find(item => item.id === id);

    this.selectedPlaylist = obj.id;
    this.edited = {...obj};
  }

  addNewPlaylist = (): void => {
    const obj = Object.assign({}, this.edited);
    const arr = clone(this.playlists);
    const id = Number(arr[arr.length - 1].id) + 1;

    arr.push({
      ...obj,
      id
    });


    this.edited = clone(this.editedInitial);
    this.playlists = arr;
  }

  closeEdit = () => {
    this.edited = clone(this.editedInitial);
    this.selectedPlaylist = null;
  }

  getButtonColors = () => ({
    backgroundColor: this.themeColor,
    borderColor: this.themeColor
  })

  constructor() { }

  ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
}
