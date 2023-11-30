import { SortOption } from "../const";
import { ActionType, ChangeSitiesAction, AddOfferSitiesAction, ChangeSortTypeAction } from "../types/action";

export const changeSities = (city: string): ChangeSitiesAction => ({
  type: ActionType.ChangeSities,
  payload: city,
})

export const addOfferSities = (): AddOfferSitiesAction => ({
  type: ActionType.AddOfferSities,
})

export const changeSortType = (sorting: SortOption): ChangeSortTypeAction => ({
  type: ActionType.ChangeSortType,
  payload: sorting,
})