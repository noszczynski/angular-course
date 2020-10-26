import { Component } from '@angular/core';
import { Playlist } from './interfaces';
import { clone } from './utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular-eduweb-app';
  themeColor = '#138496';
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
      color: this.themeColor,
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

  constructor() {
  }
}
