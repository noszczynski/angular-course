interface ID {
    id?: number;
}

interface Track {
    track_number: number;
    name: string;
    artists: Array<any>;
    preview_url: string;
}

interface Playlist extends ID {
    name: string | null;
    description?: string | null | undefined;
    tracks: Track[];
    color: string;
    favourite: boolean;
}

export { Playlist, Track };
