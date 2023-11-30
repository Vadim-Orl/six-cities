import { SortOption} from "../const"
import { Offers } from "./offer"

export type State = {
  city: string,
  offersCity: Offers,
  offersFilter: Offers,
  activeSorting: SortOption
}