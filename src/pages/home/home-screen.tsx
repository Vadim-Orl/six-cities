import { connect, ConnectedProps, ConnectProps } from "react-redux/es/exports";
import { Dispatch, MouseEventHandler } from "react";
import {useState} from "react"
import {Offer} from "../../types/offer"
import OfferCardsList from "../../components/offer-cards/offer-cards";
import Header from "../../components/header/header";
import Map from "../../components/map/map";
import { State } from "../../types/state";
import { Actions } from "../../types/action";
import { addOfferSities, changeSities } from "../../store/action";
import { CitysNames } from "../../const";

type HomeScreenProps = {
  offers: Offer[];
}

const mapStateToProps = ({city, offersFilter}: State) => ({
  city,
  offersFilter,
})

const mapDispatchToProps = (dispatch: Dispatch<Actions>) =>({
  onUserClick(evt: { target: any; }) {
    dispatch(changeSities(evt.target.innerText));
    dispatch(addOfferSities())
  },
  
  // onUserClick(value: string) {
  //   dispatch(changeSities(value));
  // }
})

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & HomeScreenProps;



function HomeScreen(props : ConnectedComponentProps): JSX.Element {
  const {offers, offersFilter, onUserClick, city} = props;
  
  const [selectedPoint, setSelectedPoint] = useState<string| null>(null);

  function handleCardHover(id :string|null): void {
    setSelectedPoint(id);
  }

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden" >Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list" onClick={onUserClick}>
              {Object.values(CitysNames).map((cityDb : string, index: number): JSX.Element => {
                return (
                  <li id = {'city'+index} className="locations__item">
                    <a href="#" className={`locations__item-link tabs__item ${(cityDb === city)?'tabs__item--active':''}`}>
                      <span>{cityDb}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </section>
        </div>
        <div className="cities" >
          <div className="cities__places-container container">
            <OfferCardsList offers = {offersFilter} handleCardHover = {handleCardHover}/>
            <div className="cities__right-section">
              <Map cityMap={offers[0].city} offers={offersFilter} selectedPoint={selectedPoint} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export {HomeScreen};
export default connector(HomeScreen)