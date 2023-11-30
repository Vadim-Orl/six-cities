import { Dispatch} from "redux";
import { ConnectedProps, connect } from "react-redux";
import { State } from "../../types/state";
import { SortOption } from "../../const";
import { Actions } from "../../types/action";
import { useState } from "react";
import { changeSortType } from "../../store/action";



const mapStateToProps = ({activeSorting}: State) => ({
  activeSorting,
})

const mapDispatchToProps = (dispatch: Dispatch<Actions>) =>({
  onUserClick(evt: { target: any; }) {
    dispatch(changeSortType(evt.target.innerText))
  },
})

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;



function FormSort(props: PropsFromRedux): JSX.Element {
  const {activeSorting, onUserClick} = props;

  const [opened, setOpened] = useState<boolean>(false);

  function optionsToggle(): void {
    setOpened(!opened)
  }
  

  return (
    <form className="places__sorting" action="#" method="get" onClick={optionsToggle}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {activeSorting}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${opened ? 'places__options--opened' : ''}`}>
        {Object.values(SortOption).map((item) => (
          <li
            key={item}
            className={`places__option ${activeSorting === item ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={onUserClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </form>
  )
}


export {FormSort};
export default connector(FormSort)

