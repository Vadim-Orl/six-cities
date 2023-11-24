import { Offers , Offer, City} from "../../types/offer";
import FavoritesLocations from "../../components/favorites-locations/favorites-locations";
import Header from "../../components/header/header";

type TFavoritesProps = {
  offers: Offers;
}

type TFavoritesFilter = {
  [key : string] : Offers
}

const favoritesFilter = ( offers : Offers) => {
  const favoritesOffers = offers.filter((el)=> el.isFavorite)
  favoritesOffers.sort((a,b) => {
    const nameA = a.city.name.toUpperCase();
    const nameB = b.city.name.toUpperCase(); 
    if (nameA < nameB) return -1;
    if (nameA > nameB)  return 1;
    return 0;
  })

  const tmp =  Object.values(favoritesOffers.reduce(
    (acc : TFavoritesFilter, person:Offer) => {
      const name = person.city.name;
      acc[name] ??= [];
      acc[name].push({ ...person });
      return acc ;
    },
    [] as unknown as TFavoritesFilter,
  ));

  return tmp;
}

export default function FavoritesScreen({offers} : TFavoritesProps): JSX.Element {

  const filterOffers = favoritesFilter(offers);
  console.log(filterOffers)

  // console.log(new Map(filterOffers as typeof))
  return (
    <div className="page">
      <Header />
     
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          
          <section className="favorites">
            
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <FavoritesLocations filterOffers = {filterOffers}/>
            </ul>
          </section>
           
          
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}
