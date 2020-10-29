import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { PlaylistsModule } from './playlists/playlists.module';
import { CardModule } from './card/card.module';
import { AuthService } from './auth.service';

@NgModule({
    declarations: [AppComponent, ButtonComponent, InputComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        FormsModule,
        CardModule,
        PlaylistsModule,
    ],
    providers: [AuthService],
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor(private auth: AuthService) {
        const token = auth.getToken();
    }
}
