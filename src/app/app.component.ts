import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-eduweb-app';

  themeColor = '#138496';

  playlist = {
    name: 'The best of Adam',
    tracks: 23,
    color: this.themeColor,
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

  getButtonColors = () => ({
    backgroundColor: this.themeColor,
    borderColor: this.themeColor
  })

  constructor() {
  }
}
