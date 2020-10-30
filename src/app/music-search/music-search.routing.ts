import { RouterModule, Routes } from '@angular/router';
import { MusicSearchComponent } from './music-search.component';
import { AlbumComponent } from './album/album.component';

const routesConfig: Routes = [
    { path: 'music', component: MusicSearchComponent },
    { path: 'music/album/:id', component: AlbumComponent },
];

export const routerModule = RouterModule.forChild(routesConfig);
