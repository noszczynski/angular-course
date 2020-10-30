import { RouterModule, Routes } from '@angular/router';
import { PlaylistsComponent } from './playlists.component';

const routesConfig: Routes = [
    { path: 'playlists', component: PlaylistsComponent },
];

export const routerModule = RouterModule.forChild(routesConfig);
