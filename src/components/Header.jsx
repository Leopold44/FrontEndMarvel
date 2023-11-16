import { Link } from "react-router-dom";
import logo from "/logoHeader.png";
import Cookies from "js-cookie";

const Header = ({
  token,
  setToken,
  setVisibleAuthentication,
  setCharacters,
  setComics,
}) => {
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
          {!token && (
            <button
              onClick={() => {
                setVisibleAuthentication("signUp");
              }}
            >
              S'inscrire
            </button>
          )}
          {!token && (
            <button
              onClick={() => {
                setVisibleAuthentication("signIn");
              }}
            >
              Se connecter
            </button>
          )}
          {token && (
            <button
              onClick={() => {
                Cookies.remove("token");
                Cookies.remove("characters");
                Cookies.remove("comics");
                setToken(null);
                setCharacters([]);
                setComics([]);
              }}
            >
              Se déconnecter
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
