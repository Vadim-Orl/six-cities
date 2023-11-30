import { Offers } from "../../types/offer"

type TFavoritesLocations = {
  filterOffers?: Offers[]
}

export default function FavoritesLocations({filterOffers} : TFavoritesLocations) : JSX.Element {

  return (<>
    {filterOffers?.map((cityArr) => {
      return <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="/">
              <span>{cityArr[0].city.name}</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          {cityArr.map((city) => {
            return (
              <article className="favorites__card place-card" key={city.id} id={city.id}>
                <div className="favorites__image-wrapper place-card__image-wrapper">
                  <a href="/">
                    <img className="place-card__image" src={city.previewImage} width="150" height="110" alt="Place" />
                  </a>
                </div>
                <div className="favorites__card-info place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">&euro;{city.price}</b>
                      <span className="place-card__price-text">&#47;&nbsp;night</span>
                    </div>
                    <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                      <svg className="place-card__bookmark-icon" width="18" height="19">
                        <use xlinkHref="#icon-bookmark"></use>
                      </svg>
                      <span className="visually-hidden">In bookmarks</span>
                    </button>
                  </div>
                  <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                      <span style={{width: (city.rating*100)/5 + "%"}}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <a href="/">{city.title}</a>
                  </h2>
                  <p className="place-card__type">{city.type}</p>
                </div>
              </article>
            )
          })}
        </div>
      </li>
      
    })}
  </>
    
  )
}