import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardContentComponent } from './card-content/card-content.component';
import { CardComponent } from './card.component';

@NgModule({
  declarations: [
    CardContentComponent,
    CardComponent,
  ],
  exports: [
    CardComponent
  ],
  imports: [
    CommonModule
  ]
})

// @ts-ignore
export class CardModule { }
