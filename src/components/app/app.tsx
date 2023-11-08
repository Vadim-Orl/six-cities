import MainScreen from "../../pages/main/main-screen";

type AppScreenProps = {
  countPlaceCard: number
};

function App({countPlaceCard}: AppScreenProps): JSX.Element {
    return (
        <MainScreen
            countPlaceCard = {countPlaceCard}
        />
    );
}

export default App;
