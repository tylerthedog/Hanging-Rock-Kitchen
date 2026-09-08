export type PageId = 'welcome' | 'menu' | 'reviews' | 'contact';
export type TabId = 'home';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'pizzas' | 'starters' | 'sides' | 'drinks' | 'desserts';
  isVegetarian?: boolean;
  isSpicy?: boolean;
  isPopular?: boolean;
}

export interface MusicEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  artist?: string;
  genre?: string;
  image?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
}
