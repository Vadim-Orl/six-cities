import { TListReviews } from "../../types/comment";
import FormReview from "../form-review/form-review";

type TReviews = {
  listReviews: TListReviews,
}


export default function Reviews({listReviews}: TReviews): JSX.Element {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{listReviews.length}</span></h2>
      <ul className="reviews__list">
        {
          listReviews.map((el) => {
            return (
              <li className="reviews__item">
                <div className="reviews__user user">
                  <div className="reviews__avatar-wrapper user__avatar-wrapper">
                    <img className="reviews__avatar user__avatar" src={el.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
                  </div>
                  <span className="reviews__user-name">
                    {el.user.name}
                  </span>
                </div>
                <div className="reviews__info">
                  <div className="reviews__rating rating">
                    <div className="reviews__stars rating__stars">
                      <span style={{width: (el.rating*100)/5 + "%"}}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <p className="reviews__text">
                    {el.comment}
                  </p>
                  <time className="reviews__time" dateTime="2019-04-24">{new Date(el.date).toLocaleString() + ''}</time>
                </div>
              </li>
            )
          })
        }
        
      </ul>
      <FormReview />
    </section>
  )
}