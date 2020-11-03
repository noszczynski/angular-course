import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-card',
    styleUrls: ['./card.component.scss'],
    template: `
        <div class="card pb-1">
            <img class="card__image" *ngIf="image" [src]="image" alt="thumb" />
            <div class="flex__column__between">
                <a [href]="hyperLink" *ngIf="hyperLink; else elseBlock">
                    <app-card-content
                        [title]="title"
                        [description]="description"
                    ></app-card-content>
                </a>
                <ng-template #elseBlock>
                    <app-card-content
                        [title]="title"
                        [description]="description"
                    ></app-card-content>
                </ng-template>
                <div class="card__body card__content">
                    <ng-content></ng-content>
                </div>
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None,
})
export class CardComponent implements OnInit {
    @Input() title?: string;
    @Input() description?: string;
    @Input() image?: string;
    @Input() hyperLink?: string;

    ngOnInit(): void {}
}
