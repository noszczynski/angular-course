interface ID {
  id?: number;
}

interface Playlist extends ID {
  name: string | null;
  description?: string | null | undefined;
  tracks: number;
  color: string;
  favourite: boolean;
}

export {
  Playlist
};
