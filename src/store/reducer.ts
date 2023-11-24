import { CitysNames } from "../const"
import { offersMocks } from "../mocks/offers"
import { ActionType, Actions } from "../types/action";
import { Offers } from "../types/offer"
import { State } from "../types/state";

const newOfferListCities = (city: string): Offers =>{
  return offersMocks.filter((offer => offer.city.name.toUpperCase() == city.toUpperCase()));
}

const initialState = {
  city: CitysNames.Amsterdam,
  offersFilter: newOfferListCities(CitysNames.Amsterdam),
}

const reducer = (state: State = initialState, action: Actions): State =>{
  switch (action.type) {
  case ActionType.ChangeSities:
    return {...state, city: action.payload};
  case ActionType.AddOfferSities:
    return {...state, offersFilter: newOfferListCities(state.city)}
  default:
    return state;
  }
}

export {reducer}