import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MusicSearchComponent } from './music-search.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumCardComponent } from './album-card/album-card.component';
import { CardModule } from '../card/card.module';
import { MusicSearchService } from './music-search.service';
import { routerModule } from './music-search.routing';
import { AlbumComponent } from './album/album.component';

@NgModule({
    declarations: [
        MusicSearchComponent,
        AlbumListComponent,
        AlbumCardComponent,
        AlbumComponent,
    ],
    imports: [CommonModule, CardModule, FormsModule, routerModule],
    exports: [AlbumListComponent, MusicSearchComponent],
    providers: [MusicSearchService],
})
export class MusicSearchModule {}
