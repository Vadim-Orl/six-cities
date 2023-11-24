import PlaceCard from "../../components/place-card/place-card";
import {Offer} from "../../types/offer"
import { TouchEvent } from 'react'

type TOfferCardsList = {
  offers: Offer[]
  handleCardHover: (id: string | null) => void
}




export default function OfferCardsList({offers, handleCardHover}: TOfferCardsList): JSX.Element {

  function clickCard(evt: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
    evt.preventDefault()
    // const {target} = evt as Element;
    // const element = target.closest(".cities__place-card");
    // console.log(evt.currentTarget)
    // console.log("target " + evt.target)
    // if(element) console.log(element.id)
    // if (element) location.href = `/offer/${element.id}`;
  }

  return (
   
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in Amsterdam</b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex={0}>
                  Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className="places__options places__options--custom places__options--opened">
          <li className="places__option places__option--active" tabIndex={0}>Popular</li>
          <li className="places__option" tabIndex={1}>Price: low to high</li>
          <li className="places__option" tabIndex={2}>Price: high to low</li>
          <li className="places__option" tabIndex={3}>Top rated first</li>
        </ul>
      </form>
      <div className="cities__places-list places__list tabs__content" onClick={clickCard}>
        {offers.map((el) => (<PlaceCard cardItem = {el} handleCardHover={handleCardHover}/>))}
      </div>
    </section>
    
  )
}
