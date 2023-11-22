import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./assets/components/Header";
import Home from "./assets/pages/Home";
import Character from "./assets/pages/Character";
import Comics from "./assets/pages/Comics";
import Favoris from "./assets/pages/Favoris";
import Authentication from "./assets/pages/Authentication";
import AppContextProvider, { AppContext } from "./Context";

function App() {
  return (
    <AppContextProvider>
      <AppContext.Consumer>
        {(context) => (
          <Router>
            <div className="app">
              <Header />
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/Character/:id" element={<Character />}></Route>
                <Route path="/comics" element={<Comics />}></Route>
                <Route path="/favorite" element={<Favoris />}></Route>
              </Routes>
              {context.visibleAuthentication && <Authentication />}
            </div>
          </Router>
        )}
      </AppContext.Consumer>
    </AppContextProvider>
  );
}

export default App;
