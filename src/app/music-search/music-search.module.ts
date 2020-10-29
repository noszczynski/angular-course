import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicSearchComponent } from './music-search.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumCardComponent } from './album-card/album-card.component';
import { CardModule } from '../card/card.module';
import { MusicSearchService } from './music-search.service';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        MusicSearchComponent,
        AlbumListComponent,
        AlbumCardComponent,
    ],
    imports: [CommonModule, CardModule, FormsModule],
    exports: [AlbumListComponent, MusicSearchComponent],
    providers: [MusicSearchService],
})
export class MusicSearchModule {}
