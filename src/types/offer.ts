import { Comment } from "./comment"

export type Location = {
  latitude: number,
  longitude: number,
  zoom: number
}

export type City = {
  name: string,
      location: Location
}

export type Host = {
    id: number;
    name: string;
    isPro: boolean;
    avatarUrl: string;
  };

export type Offer = {
    previewImage: string,
    images: string[],
    title: string,
    rating: number,
    type: string,
    bedrooms: number,
    maxAdults: number,
    price: number,
    goods: string[],
    isPremium: boolean,
    isFavorite: boolean,
    host: Host,
    description: string,
    id: string,
    city: City,
    location: Location,
    // comments: Comment[]
};


export type Offers = Offer[];