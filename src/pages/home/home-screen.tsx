import { connect, ConnectedProps} from "react-redux/es/exports";
import {useState} from "react"
import {Offer} from "../../types/offer"
import OfferCardsList from "../../components/offer-cards-list/offer-cards-list";
import Header from "../../components/header/header";
import Map from "../../components/map/map";
import { State } from "../../types/state";
import Tabs from "../../components/tabs/tabs";
import { CityLocation } from "../../const";
import sortByOption from "../../utils/utils";

type HomeScreenProps = {
  offers: Offer[];
}

const mapStateToProps = ({city, offersCity, activeSorting}: State) => ({
  city,
  offersCity,
  activeSorting,
})

const connector = connect(mapStateToProps, null);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & HomeScreenProps;



function HomeScreen(props : ConnectedComponentProps): JSX.Element {
  const { offersCity, city, activeSorting} = props;
  const [selectedPoint, setSelectedPoint] = useState<string| null>(null);

  function handleCardHover(id :string|null): void {
    setSelectedPoint(id);
  }

  const activeCity = CityLocation.find((cityName) => cityName.name === city);

  if (activeCity === undefined) {
    return <p>Map not found</p>;
  }

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden" >Cities</h1>
        <Tabs/>
        <div className="cities" >
          <div className="cities__places-container container">
            <OfferCardsList offers = {sortByOption(offersCity, activeSorting)} handleCardHover = {handleCardHover}/>
            <div className="cities__right-section">
              <Map cityMap={activeCity} offers={offersCity} selectedPoint={selectedPoint} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export {HomeScreen};
export default connector(HomeScreen)