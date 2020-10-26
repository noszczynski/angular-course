import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular-eduweb-app';
  themeColor = '#138496';
  selectedPlaylist = null;

  playlist = {
    id: 1,
    name: 'The best of Adam',
    tracks: 23,
    color: this.themeColor,
    favourite: true
  };

  handleSavePlaylist = e => {
    console.log('Saved!');
  }

  setSelectedItem = id => {
    this.selectedPlaylist = id;
  }

  getButtonColors = () => ({
    backgroundColor: this.themeColor,
    borderColor: this.themeColor
  })

  constructor() {
  }
}
