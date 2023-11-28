import { CitysNames, SortOption} from "../const"
import { offersMocks } from "../mocks/offers"
import { ActionType, Actions } from "../types/action";
import { Offers } from "../types/offer"
import { State } from "../types/state";

const newOfferListCities = (city: string): Offers =>{
  return offersMocks.filter((offer => offer.city.name.toUpperCase() == city.toUpperCase()));
}

const SortOffers = (offers: Offers) => {
  return offers;
}

const initialState = {
  city: CitysNames.Paris,
  offersCity: newOfferListCities(CitysNames.Paris),
  offersFilter: [],
  activeSorting: SortOption.Popular,
}

const reducer = (state: State = initialState, action: Actions): State =>{
  switch (action.type) {
  case ActionType.ChangeSities:
    return {...state, city: action.payload};
  case ActionType.AddOfferSities:
    return {...state, offersCity: newOfferListCities(state.city)};
  case ActionType.ChangeSortType:
    return {...state, activeSorting: action.payload};
  default:
    return state;
  }
}

export {reducer}