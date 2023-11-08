import MainScreen from "../../pages/main/main-screen";
import {BrowserRouter, Routes , Route, Navigate} from "react-router-dom";
import FavoritesScreen from "../../pages/favorites/favorites";
import LoginScreen from "../../pages/login/login-scxreen";
import PropertyScreen from "../../pages/property/property";
import Error404Screen from "../../pages/error404/error";
import PropertyNotLoggedScreen from "../../pages/property/property-not-logged";
import PlaceCard from "../place-card/place-card";

type AppScreenProps = {
  countPlaceCard: number
};
const hasAccess = true;
function App({countPlaceCard}: AppScreenProps): JSX.Element {
    return (
        <BrowserRouter>
         <Routes>
            <Route path="/" element={<MainScreen countPlaceCard = {countPlaceCard}/>} />
            <Route path="/favorites" element={hasAccess?(<FavoritesScreen/>):(<Navigate to="/login" replace />)}></Route>
            <Route path="/login" element={<LoginScreen/>} />
            <Route path="/property/:id?" element={hasAccess? <PropertyScreen/> : <PropertyNotLoggedScreen />} />
            <Route path="*" element ={<Error404Screen/>} />
        </Routes>
        </BrowserRouter>
    );
}

export default App;
