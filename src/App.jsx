import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./assets/components/Header";
import Home from "./assets/pages/Home";
import Character from "./assets/pages/Character";
import Comics from "./assets/pages/Comics";
import Favoris from "./assets/pages/Favoris";
import Authentication from "./assets/pages/Authentication";
import { AppContext } from "./Context";
import Cookies from "js-cookie";
import { useState } from "react";

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
    <AppContext.Provider
      value={{
        visibleAuthentication,
        setVisibleAuthentication,
        token,
        setToken,
        characters,
        setCharacters,
        comics,
        setComics,
      }}
    >
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Character/:id" element={<Character />}></Route>
            <Route path="/comics" element={<Comics />}></Route>
            <Route path="/favorite" element={<Favoris />}></Route>
          </Routes>
          {visibleAuthentication && <Authentication />}
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
