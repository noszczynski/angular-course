import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-card',
    styleUrls: ['./card.component.scss'],
    template: `
        <div class="card">
            <img class="card__image" *ngIf="image" [src]="image" alt="thumb" />
            <app-card-content
                [title]="title"
                [description]="description"
            ></app-card-content>
            <div class="card__body card__content">
                <ng-content></ng-content>
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None,
})
export class CardComponent implements OnInit {
    @Input() title?: string;
    @Input() description?: string;
    @Input() image?: string;

    constructor() {}

    ngOnInit(): void {}
}
