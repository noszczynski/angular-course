interface ID {
  id?: number;
}

interface Playlist extends ID {
  name: string | null;
  tracks: number;
  color: string;
  favourite: boolean;
}

export {
  Playlist
};
