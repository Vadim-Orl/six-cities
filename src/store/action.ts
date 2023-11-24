import { ActionType, ChangeSitiesAction, AddOfferSitiesAction } from "../types/action";

export const changeSities = (city: string): ChangeSitiesAction => ({
  type: ActionType.ChangeSities,
  payload: city,
})

export const addOfferSities = (): AddOfferSitiesAction => ({
  type: ActionType.AddOfferSities,
})