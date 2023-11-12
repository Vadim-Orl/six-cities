import {useState} from "react"

import {Offer} from "../../types/offer"
import OfferCardsList from "../../components/offer-cards/offer-cards";
import Header from "../../components/header/header";

type HomeScreenProps = {
  offers: Offer[];
}



export default function HomeScreen({offers} : HomeScreenProps): JSX.Element {
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
            <ul className="locations__list tabs__list">
              <li id="1" className="locations__item" >
                <a href="/"  className="locations__item-link tabs__item">
                  <span>Paris</span>
                </a>
              </li>
              <li id="2" className="locations__item">
                <a href="/" className="locations__item-link tabs__item">
                  <span>Cologne</span>
                </a>
              </li>
              <li id="3" className="locations__item">
                <a href="/" className="locations__item-link tabs__item">
                  <span>Brussels</span>
                </a>
              </li>
              <li id= "4" className="locations__item">
                <a href="/" className="locations__item-link tabs__item tabs__item--active">
                  <span>Amsterdam</span>
                </a>
              </li>
              <li id= "5" className="locations__item">
                <a href="/" className="locations__item-link tabs__item">
                  <span>Hamburg</span>
                </a>
              </li>
              <li id= "6" className="locations__item">
                <a href="/" className="locations__item-link tabs__item">
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities" >
          <OfferCardsList offers = {offers} handleCardHover = {handleCardHover}/>
        </div>
      </main>
    </div>
  );
}
