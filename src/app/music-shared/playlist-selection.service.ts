import { EventEmitter, Injectable } from '@angular/core';
import { ID, Track } from '../interfaces';
import { PlaylistsService } from '../playlists/playlists.service';

@Injectable({
    providedIn: 'root',
})
export class PlaylistSelectionService {
    constructor(private playlistService: PlaylistsService) {
        const [item] = this.playlistService.getPlaylists();

        if (item) {
            this.selectedPlaylistId = item.id;
        }
    }

    selectedUpdated: EventEmitter<any> = new EventEmitter();

    selectedPlaylistId;

    setSelectedPlaylist = (id: ID) => {
        this.selectedPlaylistId = id;
        this.selectedUpdated.emit(id);
    };

    addTrackToPlaylist = (track: Track): void => {
        this.playlistService.addTrackToPlaylist(track, this.selectedPlaylistId);
    };
}
