import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackListComponent } from './track-list/track-list.component';
import { PlaylistSelectorComponent } from './playlist-selector.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [TrackListComponent, PlaylistSelectorComponent],
    imports: [CommonModule, FormsModule],
    exports: [TrackListComponent, PlaylistSelectorComponent],
})
export class MusicSharedModule {}
