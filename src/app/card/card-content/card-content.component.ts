import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-content',
  template: `
    <div *ngIf="title || description" class="card-body">
      <h4 *ngIf="title"> {{ title }} </h4>
      <p *ngIf="description" class="m-0"> {{ description }} </p>
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
