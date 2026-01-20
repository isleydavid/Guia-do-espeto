
export interface Restaurant {
  id: string;
  name: string;
  neighborhood: string;
  rating: number;
  imageUrl: string;
}

export enum AppState {
  LOADING = 'loading',
  HOME = 'home'
}
