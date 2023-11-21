import { Link } from "react-router-dom";
import logo from "/logoHeader.png";
import Cookies from "js-cookie";
import { useContext } from "react";
import { AppContext } from "../../Context";

const Header = () => {
  const {
    token,
    setToken,
    setCharacters,
    setComics,
    setVisibleAuthentication,
  } = useContext(AppContext);
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
