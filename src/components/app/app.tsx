import MainScreen from "../../pages/home/home-screen";
import {BrowserRouter, Routes , Route, Navigate} from "react-router-dom";
import FavoritesScreen from "../../pages/favorites/favorites";
import LoginScreen from "../../pages/login/login-scxreen";
import OfferScreen from "../../pages/offers/offer";
import NotFoundPageScreen from "../../pages/error/errorNotFound";
import OfferNotLoggedScreen from "../../pages/offers/offer-not-logged";
import PlaceCard from "../place-card/place-card";
import {Offers} from "../../types/offer"
import { PrivateRoute } from "../private-route/private-route";
import {AppRoute} from "../../const";

type AppScreenProps = {
  offers: Offers
};

const hasAccess = true;
function App({offers}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainScreen
          offers = {offers}
        />} />
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute>
            <FavoritesScreen  offers = {offers} />
          </PrivateRoute>
        }></Route>
        <Route path={AppRoute.Login} element={<LoginScreen/>} />
        <Route path={AppRoute.Offer} element={hasAccess? <OfferScreen offers = {offers} /> : <OfferNotLoggedScreen />} />
        <Route path={AppRoute.NotFoundPage} element ={<NotFoundPageScreen/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
