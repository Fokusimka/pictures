import {makeAutoObservable} from 'mobx';

export interface photosArrayType {
  description: string;
  url: string;
  title: string;
  id: number;
  user: number;
}

export class PhotosStore {
  items: photosArrayType[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  updateItem(newItem: any) {
    this.items = [...this.items, newItem];
  }
}

export class CountColumnsStore {
  isDouble: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  updateCountColumns() {
    this.isDouble = !this.isDouble;
  }
}
