import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-eduweb-app';

  person = {
    name: 'Testowy',
    birthdate: 1997,
    company: {
      name: 'Eduweb'
    }
  };

  get getAge(): number {
    const currentYear: string = moment().format('Y');
    return Number(currentYear) - this.person.birthdate;
  }
}
