import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-card',
    template: `
        <div class="card">
            <img *ngIf="image" [src]="image" alt="thumb" />
            <app-card-content
                [title]="title"
                [description]="description"
            ></app-card-content>
            <div class="card__body">
                <ng-content></ng-content>
            </div>
        </div>
    `,
    styles: [],
})
export class CardComponent implements OnInit {
    @Input() title?: string;
    @Input() description?: string;
    @Input() image?: string;

    constructor() {}

    ngOnInit(): void {}
}
