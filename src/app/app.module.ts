import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PlaylistsModule } from './playlists/playlists.module';
import { CardModule } from './card/card.module';
import { AuthService } from './auth.service';
import { MusicSearchModule } from './music-search/music-search.module';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistsComponent } from './playlists/playlists.component';
import { MusicSearchComponent } from './music-search/music-search.component';

const routesConfig: Routes = [
    { path: '', redirectTo: 'music', pathMatch: 'full' },
    { path: 'playlists', component: PlaylistsComponent },
    { path: 'music', component: MusicSearchComponent },
    { path: '**', redirectTo: 'music', pathMatch: 'full' },
];

const routerModule = RouterModule.forRoot(routesConfig, {
    enableTracing: true,
    useHash: true,
});

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
