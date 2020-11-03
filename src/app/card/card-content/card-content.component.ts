import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-card-content',
    template: `
        <div *ngIf="title || description" class="card__body">
            <h5 *ngIf="title" class="card__title mt-1 mb-0">{{ title }}</h5>
            <p *ngIf="description" class="card__description mt-1 mb-0">
                {{ description }}
            </p>
            <ng-content></ng-content>
        </div>
    `,
    styles: [],
})
export class CardContentComponent implements OnInit {
    @Input() title?: string;
    @Input() description?: string;

    constructor() {}

    ngOnInit(): void {}
}
