import { Link} from 'react-router-dom';
import { AppRoute } from '../../const';


export default function HeaderLogin() : JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.Main} className="header__logo-link">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}