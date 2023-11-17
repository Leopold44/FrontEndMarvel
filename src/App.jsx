import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./assets/components/Header";
import Home from "./assets/pages/Home";
import Character from "./assets/pages/Character";
import Comics from "./assets/pages/Comics";
import Favoris from "./assets/pages/Favoris";
import Authentication from "./assets/pages/Authentication";
import { useState } from "react";
import Cookies from "js-cookie";

function App() {
  const [visibleAuthentication, setVisibleAuthentication] = useState(null);
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [characters, setCharacters] = useState(
    (Cookies.get("characters") && Cookies.get("characters").split(",")) || []
  );
  const [comics, setComics] = useState(
    (Cookies.get("comics") && Cookies.get("comics").split(",")) || []
  );
  return (
    <Router>
      <div className="app">
        <Header
          token={token}
          setToken={setToken}
          setVisibleAuthentication={setVisibleAuthentication}
          setCharacters={setCharacters}
          setComics={setComics}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                token={token}
                setVisibleAuthentication={setVisibleAuthentication}
                characters={characters}
                setCharacters={setCharacters}
              />
            }
          ></Route>
          <Route
            path="/Character/:id"
            element={
              <Character
                token={token}
                setVisibleAuthentication={setVisibleAuthentication}
                comics={comics}
                setComics={setComics}
              />
            }
          ></Route>
          <Route
            path="/comics"
            element={
              <Comics
                token={token}
                setVisibleAuthentication={setVisibleAuthentication}
                comics={comics}
                setComics={setComics}
              />
            }
          ></Route>
          <Route
            path="/favorite"
            element={
              <Favoris
                token={token}
                setVisibleAuthentication={setVisibleAuthentication}
                characters={characters}
                setCharacters={setCharacters}
                comics={comics}
                setComics={setComics}
              />
            }
          ></Route>
        </Routes>
        {visibleAuthentication && (
          <Authentication
            setVisibleAuthentication={setVisibleAuthentication}
            visibleAuthentication={visibleAuthentication}
            setToken={setToken}
            setCharacters={setCharacters}
            setComics={setComics}
          />
        )}
      </div>
    </Router>
  );
}

export default App;
