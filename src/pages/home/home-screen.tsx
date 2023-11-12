import {useState} from "react"

import {Offer} from "../../types/offer"
import OfferCardsList from "../../components/offer-cards/offer-cards";

type HomeScreenProps = {
  offers: Offer[];
}



export default function HomeScreen({offers} : HomeScreenProps): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState<string| null>(null);

  // function handleCardHover(id? :string|null): void {
  //   // evt.preventDefault();
  //   // const {currentTarget} = evt;
  //   // const element = evt.currentTarget.closest("place-card");
  //   // console.log(evt.currentTarget)
  //   setSelectedPoint(id);
  // }

  
  function handleCardHover(id :string|null): void {
    setSelectedPoint(id);
  }

  return (
    
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a href="/" className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a href="/" className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a href="/" className="header__nav-link">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

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
