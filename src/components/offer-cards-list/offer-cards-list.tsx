import PlaceCard from "../place-card/place-card";
import {Offer} from "../../types/offer"
import { State } from "../../types/state";
import { ConnectedProps, connect } from "react-redux";
import FormSort from "../form-sort/form-sort";

type TOfferCardsList = {
  offers: Offer[]
  handleCardHover: (id: string | null) => void
}

const mapStateToProps = ({city}: State) => ({
  city,
})

const connector = connect(mapStateToProps, null);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & TOfferCardsList;


function OfferCardsList(props: ConnectedComponentProps): JSX.Element {
  const {offers, handleCardHover, city} = props;
  console.log('111');

  function clickCard(evt: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
    evt.preventDefault()
    const {target} = evt;
    console.log(target);
    // const element = target.closest(".cities__place-card");
    // console.log(evt.currentTarget)
    // console.log("target " + evt.target)
    // if(element) console.log(element.id)
    // if (element) location.href = `/offer/${element.id}`;
  }

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in {city}</b>
      <FormSort/>
      <div className="cities__places-list places__list tabs__content" onClick={clickCard}>
        {offers.map((el) => (<PlaceCard cardItem = {el} handleCardHover={handleCardHover}/>))}
      </div>
    </section>
    
  )
}

export {OfferCardsList}
export default connector(OfferCardsList)
