import { Injectable } from '@angular/core';
import tokenStorage from './services/tokenStorage';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor() {}

    authorize = () => {
        tokenStorage.clear();

        const id = '8ce869f67e7241b9a6f4e981f6c56793';
        const host = 'http://localhost:4200/';
        const scopes = 'user-read-private user-read-email';

        const replaceUrl = `
          https://accounts.spotify.com/authorize?client_id=${id}&response_type=token&redirect_uri=${host}&scope=${scopes}
        `;

        window.location.replace(replaceUrl);
    };

    getToken = () => {
        const storageToken = tokenStorage.get();
        const regex = /#access_token=(.*?)&/;
        const match = window.location.hash.match(regex);

        if (!storageToken) {
            const urlToken = match && match[1];

            if (urlToken) {
                tokenStorage.set(urlToken);
                return urlToken;
            } else {
                return this.authorize();
            }
        } else {
            return storageToken;
        }
    };
}
