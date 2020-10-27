import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card">
      <app-card-content [title]="title" [description]="description"></app-card-content>
      <ng-content></ng-content>
    </div>
  `,
  styles: [
  ]
})
export class CardComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;

  constructor() { }

  ngOnInit(): void {
  }

}
