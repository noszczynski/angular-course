import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistsComponent } from './playlists.component';
import { PlaylistListComponent } from './playlist-list/playlist-list.component';
import { PlaylistFormComponent } from './form/playlist-form.component';
import { PlaylistFormNewComponent } from './form/playlist-form-new/playlist-form-new.component';
import { PlaylistListRowComponent } from './playlist-list-row/playlist-list-row.component';
import { PlaylistDetailComponent } from './playlist-detail/playlist-detail.component';
import { FormsModule } from '@angular/forms';
import { CardModule } from '../card/card.module';

@NgModule({
  declarations: [
    PlaylistsComponent,
    PlaylistFormComponent,
    PlaylistFormNewComponent,
    PlaylistListComponent,
    PlaylistListRowComponent,
    PlaylistDetailComponent,
  ],
  exports: [
    PlaylistsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CardModule
  ]
})

export class PlaylistsModule { }
