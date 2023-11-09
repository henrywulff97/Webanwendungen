import { createStore } from '@ngneat/elf';
import { persistState, localStorageStrategy } from '@ngneat/elf-persist-state';
import {Observable, Subscription} from 'rxjs';
import {
  addEntities,
  updateEntities,
  withEntities,
  deleteEntities,
  selectAllEntities,
} from "@ngneat/elf-entities";
import { v4 as uuidv4 } from 'uuid';


export interface IAlbum {
  id: string; // Stelle sicher, dass jede Entität eine ID hat
  albumName: string;
  artist: string;
  version: string;
  releaseDate: string;
  recordLabel: string;
}

const albumsStore = createStore(
  { name: 'albums' },
  withEntities<IAlbum>()
);

// Aktiviere Persistenz
persistState(albumsStore, {
  key: 'albums',
  storage: localStorageStrategy
});

// Füge ein neues Album hinzu
export function addAlbum(album: Omit<IAlbum, 'id'>) {
  const newAlbum = {
    id: uuidv4(), // Generiere eine eindeutige ID für das neue Album
    ...album
  };

  albumsStore.update(addEntities(newAlbum));
}

// Entferne ein Album anhand seiner ID
export function removeAlbum(albumId: string) {
  albumsStore.update(deleteEntities(albumId));
}

// Aktualisiere ein Album
export function updateAlbum(albumId: string, album: Partial<IAlbum>) {
  albumsStore.update(updateEntities(albumId, album));
}

// Wähle alle Alben aus dem Store
export const albums$: Observable<IAlbum[]> = albumsStore.pipe(selectAllEntities());

// Funktion, um das Observable zu abonnieren
export function subscribeToAlbums(subscriber: (albums: IAlbum[]) => void): Subscription {
  return albums$.subscribe(subscriber);
}
