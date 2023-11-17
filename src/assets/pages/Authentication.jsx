import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Authentication = ({
  setVisibleAuthentication,
  visibleAuthentication,
  setToken,
  setCharacters,
  setComics,
}) => {
  const [user, setUser] = useState();
  const [error, setError] = useState();
  const sendData = async (event) => {
    event.preventDefault();
    try {
      if (visibleAuthentication === "signUp") {
        const response = await axios.post("http://localhost:3000/signup", user);
        Cookies.set("token", `${response.data.token}`);
        Cookies.set("characters", ``);
        Cookies.set("comics", ``);
        setToken(response.data.token);
      } else {
        const response = await axios.post("http://localhost:3000/signin", user);
        Cookies.set("token", `${response.data.token}`);
        Cookies.set("characters", `${response.data.characters}`);
        Cookies.set("comics", `${response.data.comics}`);
        setToken(response.data.token);
        setCharacters(response.data.characters);
        setComics(response.data.comics);
        console.log(response);
      }
      setVisibleAuthentication(null);
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <div className="background">
      <form
        className="sign"
        onSubmit={(event) => {
          sendData(event);
        }}
      >
        <h1>
          {visibleAuthentication === "signUp" ? "Inscription" : "Connexion"}
        </h1>
        {error && <p>{error}</p>}
        <div>
          <label htmlFor="email">Votre adresse email :</label>
          <input
            id="email"
            type="email"
            onChange={(event) => {
              setUser((user) => ({ ...user, email: event.target.value }));
            }}
          />
        </div>
        <div>
          <label htmlFor="password">Votre mot de passe :</label>
          <input
            id="password"
            type="password"
            onChange={(event) => {
              setUser((user) => ({ ...user, password: event.target.value }));
            }}
          />
        </div>
        <button type="submit">
          {visibleAuthentication === "signUp" ? "S'inscrire" : "Se connecter"}
        </button>
        <FontAwesomeIcon
          icon={faXmark}
          className="xmark"
          onClick={() => {
            setVisibleAuthentication(null);
          }}
        />
      </form>
    </div>
  );
};
export default Authentication;
