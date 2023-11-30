import { SortOption } from "../const";

export enum ActionType {
  ChangeSities = 'nav/changeSities',
  AddOfferSities = 'nav/addOfferSities',
  ChangeSortType = 'offersCity/changeTypeSort'
}

export type ChangeSitiesAction = {
  type: ActionType.ChangeSities;
  payload: string;
}

export type AddOfferSitiesAction = {
  type: ActionType.AddOfferSities;
}

export type ChangeSortTypeAction = {
  type: ActionType.ChangeSortType;
  payload: SortOption;
 }

export type Actions = ChangeSitiesAction | AddOfferSitiesAction | ChangeSortTypeAction;
