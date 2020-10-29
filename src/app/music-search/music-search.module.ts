import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicSearchComponent } from './music-search.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumCardComponent } from './album-card/album-card.component';
import { CardModule } from '../card/card.module';

@NgModule({
    declarations: [
        MusicSearchComponent,
        AlbumListComponent,
        AlbumCardComponent,
    ],
    imports: [CommonModule, CardModule],
    exports: [AlbumListComponent, MusicSearchComponent],
})
export class MusicSearchModule {}
