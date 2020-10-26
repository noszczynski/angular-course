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

  edited: Playlist = {...this.editedInitial};

  playlists: Playlist[] = [
    {
      id: 1,
      name: 'The best of Adam',
      tracks: 23,
      color: this.themeColor,
      favourite: true
    },
  ];

  handleSavePlaylist = (e: MouseEvent) => {
    console.log('Saved!');
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


    this.edited = {...this.editedInitial};
    this.playlists = arr;
  }

  getButtonColors = () => ({
    backgroundColor: this.themeColor,
    borderColor: this.themeColor
  })

  constructor() {
  }
}
