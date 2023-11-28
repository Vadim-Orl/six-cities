
import { Dispatch } from "redux";
import { addOfferSities, changeSities } from "../../store/action";
import { Actions } from "../../types/action";
import { State } from "../../types/state"
import { ConnectedProps, connect } from "react-redux";
import { CitysNames } from "../../const";

const mapStateToProps = ({city}: State) => ({
  city,
})

const mapDispatchToProps = (dispatch: Dispatch<Actions>) =>({
  onUserClick(evt: { target: any; }) {
    dispatch(changeSities(evt.target.innerText));
    dispatch(addOfferSities())
  },
})

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;


function Tabs(props :ConnectedComponentProps): JSX.Element {
  const {city, onUserClick} = props;

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list" onClick={onUserClick}>
          {Object.values(CitysNames).map((cityDb : string, index: number): JSX.Element => {
            return (
              <li id = {'city'+index} className="locations__item">
                <a href="#" className={`locations__item-link tabs__item ${(cityDb === city)?'tabs__item--active':''}`}>
                  <span>{cityDb}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}

export {Tabs};
export default connector(Tabs)