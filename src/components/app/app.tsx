import MainScreen from "../../pages/main/main-screen";
import {BrowserRouter, Routes , Route} from "react-router-dom";
import FavoritesScreen from "../../pages/favorites/favorites";
import LoginScreen from "../../pages/login/login-scxreen";
import PropertyScreen from "../../pages/property/property";
import Error404Screen from "../../pages/error404/error";

type AppScreenProps = {
  countPlaceCard: number
};

function App({countPlaceCard}: AppScreenProps): JSX.Element {
    return (
        <BrowserRouter>
         <Routes>
            <Route path="/" element={<MainScreen countPlaceCard = {countPlaceCard}/>} />
        </Routes>
        <Routes>
            <Route path="/favorites" element={<FavoritesScreen/>} />
        </Routes>
        <Routes>
            <Route path="/login" element={<LoginScreen/>} />
        </Routes>
        <Routes>
            <Route path="/property" element={<PropertyScreen/>} />
        </Routes>
        <Routes>
            <Route path="*" element={<Error404Screen/>} />
        </Routes>
        </BrowserRouter>
    );
}

export default App;
