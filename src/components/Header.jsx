import { Link } from "react-router-dom";
import logo from "/logoHeader.png";

const Header = () => {
  return (
    <header>
      <div>
        <Link to="/">
          <img src={logo} alt="logoMarvel" />
        </Link>

        <div>
          <Link to="/" className="button">
            Personnages
          </Link>
          <Link to="/comics" className="button">
            Comics
          </Link>
          <Link to="/favorite" className="button">
            Favoris
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
