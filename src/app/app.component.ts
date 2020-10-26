import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-eduweb-app';

  playlist = {
    name: 'The best of Adam',
    tracks: 23,
    color: '#138496',
    favourite: true
  };

  handleChange = (e, type) => {
    if (e && e.target) {
      const {value, checked} = e.target;

      this.playlist[type] = type !== 'favourite' ? value : checked;
    }
  }

  handleSavePlaylist = (e) => {
    console.log(e);
  }

  constructor() {
  }
}
