import {createContext, useContext} from 'react';
import {CountColumnsStore, PhotosStore} from './photosStore';

export class RootStore {
  photos: PhotosStore;
  isDouble: CountColumnsStore;
  constructor() {
    this.photos = new PhotosStore();
    this.isDouble = new CountColumnsStore();
  }
}

export const rootStore = new RootStore();
export const StoreContext = createContext(rootStore);
export const StoreProvider = StoreContext.Provider;
export const useStore = () => useContext(StoreContext);
