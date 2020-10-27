import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-content',
  template: `
    <div class="card-body">
      <h4> {{ title }} </h4>
      <p class="m-0"> {{ description }} </p>
      <ng-content></ng-content>
    </div>
  `,
  styles: [
  ]
})

export class CardContentComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;

  constructor() { }

  ngOnInit(): void {
  }

}
