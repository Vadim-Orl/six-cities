import { Offers } from "../../types/offer"
import PlaceCard from "../place-card/place-card"

type TNearOffers = {
  offers?: Offers
}


export default function NearOffers({offers}: TNearOffers) : JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offers?.map((el) => {
          return <PlaceCard cardItem = {el}/>
        })}
      </div>
    </section>
  )
}