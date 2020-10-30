import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaylistsModule } from './playlists/playlists.module';
import { CardModule } from './card/card.module';
import { AuthService } from './auth.service';
import { MusicSearchModule } from './music-search/music-search.module';
import { routerModule } from './app.routing';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        CardModule,
        PlaylistsModule,
        MusicSearchModule,
        routerModule,
    ],
    providers: [AuthService],
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor(private auth: AuthService) {
        const token = auth.getToken();
    }
}
