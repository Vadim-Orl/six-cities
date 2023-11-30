import { SortOption } from "../const";
import { Offers } from "../types/offer";

export default function sortByOption (offers: Offers, activeSortType: SortOption): Offers {
  console.log(activeSortType)
  
  switch (activeSortType) {
  case SortOption.Popular:
    return offers.slice();
  case SortOption.LowToHigh:
    return offers.slice().sort((offerA, offerB) => offerA.price - offerB.price);
  case SortOption.HighToLow:
    return offers.slice().sort((offerA, offerB) => offerB.price - offerA.price);
  case SortOption.TopRated:
    return offers.slice().sort((offerA, offerB) => offerB.rating - offerA.rating);
  default:
    throw new Error(`Unknown activeSortType: ${activeSortType}`);
  }
}
