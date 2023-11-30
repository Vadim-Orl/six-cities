import { useParams, Navigate } from "react-router-dom";
import { Offer, Offers } from "../../types/offer";
import Header from "../../components/header/header";
import { AppRoute } from "../../const";
import Reviews from "../../components/reviews/reviews";
import { commentsMocks } from "../../mocks/comments";
import Map from "../../components/map/map";
import { OffersNearMocks } from "../../mocks/offersNear";
import NearOffers from "../../components/near-offers/near-offers";

type TOfferPageProps = {
  offers: Offer[],
  offersNear?: Offers,
}

export default function OfferScreen({offers, offersNear = OffersNearMocks}: TOfferPageProps): JSX.Element {
  const { id } = useParams();
  const offerItem = offers.find((el)=> Number(id) === Number(el.id));
  if (!offerItem) return <Navigate to={AppRoute.Login}/>

  const {host} = offerItem;

  return (
    <div className="page">
      <h1>{id}</h1>
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offerItem.images.map((img) => {
                return <div key={img} className="property__image-wrapper ww">
                  <img className="property__image" src={img} alt="Photo studio" />
                </div>
              })}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div className="property__mark">
                {offerItem.isPremium && (
                  <div className='offer__mark'>
                    <span>Premium</span>
                  </div>
                )}
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offerItem.title}
                </h1>
                <button className={`place-card__bookmark-button
                            ${offerItem.isFavorite ? "place-card__bookmark-button--active" : ""}
                             button`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: (offerItem.rating*100)/5 + "%"}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offerItem.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offerItem.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offerItem.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offerItem.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offerItem.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {offerItem.goods.map((feature) => (
                    <li className="property__inside-item">
                      {feature}
                    </li>
                  ))}

                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  <span className="property__user-status">
                    {host.isPro && "Pro"}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offerItem.description}
                  </p>
                </div>
              </div>
              <Reviews listReviews = {commentsMocks}/>
            </div>
          </div>
          <section className="property__map map">
            <Map cityMap={offerItem.city} offers={offers}/>
          </section>
        </section>
        <div className="container">
          <NearOffers offers={offersNear} />
        </div>
      </main>
    </div>
  )
}
