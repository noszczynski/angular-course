import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { PlaylistsComponent } from './playlists/playlists.component';
import { PlaylistListComponent } from './playlists/playlist-list/playlist-list.component';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { PlaylistFormComponent } from './playlists/form/playlist-form.component';
import { PlaylistFormNewComponent } from './playlists/form/playlist-form-new/playlist-form-new.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistsComponent,
    PlaylistListComponent,
    PlaylistFormComponent,
    ButtonComponent,
    InputComponent,
    PlaylistFormNewComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
