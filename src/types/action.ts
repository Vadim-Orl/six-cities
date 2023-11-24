export enum ActionType {
  ChangeSities = 'map/changeSities',
  AddOfferSities = 'map/addOfferSities',
}

export type ChangeSitiesAction = {
  type: ActionType.ChangeSities;
  payload: string;
}

export type AddOfferSitiesAction = {
  type: ActionType.AddOfferSities
}

export type Actions = ChangeSitiesAction | AddOfferSitiesAction;
