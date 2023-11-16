import "./App.css";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Character from "./components/Character";
import Comics from "./components/Comics";
import Favoris from "./components/Favoris";
import Authentication from "./components/Authentication";
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
          <Route path="/Character/:id" element={<Character />}></Route>
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
